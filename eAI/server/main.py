from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from decouple  import config
from classes.openai_requests import AudioConverter, Chats
from classes.database import Model


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
    print(chat_response_text)

# @app.post("/post-audio/")
# def post_audio(file: UploadFile = File(...)):
#     return{"message": "post endpoint"}