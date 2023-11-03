from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from functions.openai import convert_audio_to_text , get_chat_response
from functions.database import save_msg_to_database, reset_messages
from functions.text_to_speech import convert_text_to_speech
app = FastAPI()

# CORS - Origins

origins = [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:8080",
    "http://localhost:3000",
]

# CORS - Middlware



app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def home():
    return {"Hello": "Everyone", "World": "swagger"}

@app.get("/reset")
async def reset_conversation():
    reset_messages()
    return 

@app.post("/post-audio/")
async def getAudio(file: UploadFile = File(...)):

    ai_audio_response = convert_audio_to_text(file)
    if not ai_audio_response:
        return HTTPException(status_code=400, detail="failed to decode audio")
    
    #Gpt response
    chat_response = get_chat_response(ai_audio_response)

    if not chat_response:
        return HTTPException(status_code=400, detail="failed to get a response")
    
    save_msg_to_database(ai_audio_response, chat_response)

    audio_output = convert_text_to_speech(chat_response)
    if not audio_output:
        return HTTPException(status_code=400, detail="failed to generate code")
    
    def iterfile():
        yield audio_output

    return StreamingResponse(iterfile(), media_type="application/octet-stream")

