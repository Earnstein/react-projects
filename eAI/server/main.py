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


@app.get("/get-audio")
def get_audio():
    # Initialise database
    database = Model("data.json")

    # This would be dynamic soon as mp3 file would be coming from frontend
    whisper = AudioConverter("my-voice.mp3")
    audio_input = whisper.convert_audio_to_text()

    if not audio_input:
        return HTTPException(status_code=400, detail="failed to get audio input")

    chatgpt = Chats(audio_input)

    chat_response_text = chatgpt.get_chat_response()

    # save whisper text and chatgpt response to database
    database.save_msg_to_database(audio_input, chat_response_text)

    # Output google tts
    jazzy = TTS(chat_response_text)
    jazzy.convert_text_to_speech()


@app.get("/reset-audio")
def reset():
    database = Model("data.json")
    database.reset_messages()
    return {"message": "audio has been reset"}






# @app.post("/post-audio/")
# def post_audio(file: UploadFile = File(...)):
#     return{"message": "post endpoint"}