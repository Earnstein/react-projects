import os
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from decouple  import config
from classes.openai_requests import AudioConverter, Chats
from classes.database import Model
from classes.google_tts import TTS


app = FastAPI()

# CORS SETUP

origins = [
    "http://localhost:5173",
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Routes

@app.get("/")
async def home():
    return{"message": "homepage"}


@app.post("/api/v1/post-audio")
async def get_audio(file: UploadFile=File(...)):
    # Initialise database
    database = Model("data.json")

    # Getting audio file from frontend
    with open(file.filename, "wb") as buffer:
        buffer.write(file.file.read())
    
    audio_file = open(file.filename, "rb")
    
    whisper = AudioConverter(audio_file)
    audio_input = whisper.convert_audio_to_text()

    if not audio_input:
        return HTTPException(status_code=400, detail="failed to get audio input")


    chatgpt = Chats(audio_input)

    chat_response_text = chatgpt.get_chat_response()

    # save whisper text and chatgpt response to database
    database.save_msg_to_database(audio_input, chat_response_text)

    # Output google tts
    jazzy = TTS(chat_response_text)
    audio_output = jazzy.convert_text_to_speech()
    if not audio_output:
        return HTTPException(status_code=400, detail="failed to get google tts response")
    
    # yield audio response

    def iterfile():
        yield audio_output
    
    return StreamingResponse(iterfile(), media_type="application/octet-stream")
    


@app.get("/api/v1/reset-audio")
def reset():
    database = Model("data.json")
    database.reset_messages()
    return {"message": "audio has been reset"}
