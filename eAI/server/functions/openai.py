from decouple import config
import openai
import os
from .database import get_recent_messages

# Set OpenAI API key and organization ID
openai.api_key = config("OPENAI_KEY")
openai.organization = config("OPENAI_ORG_ID")

# Get the current working directory
directory_path = os.getcwd()

def convert_audio_to_text(audio_file: str):
    audio_content = open(f"{directory_path}/{audio_file}", "rb")
    try:
        # Transcribe the audio file
        transcript = openai.Audio.transcribe("whisper-1", audio_content)

        #helper print constant

        print("in openai.py file")
        print(f"{transcript['text']}")
        return transcript["text"]
    except Exception as e:
        print(e)
        return

def get_chat_response(whisper_audio_to_text_msg):
    messages = get_recent_messages(f"{directory_path}/data.json")
    user_message = {
            "role": "user", 
            "content": whisper_audio_to_text_msg
        }
    messages.append(user_message)
    print(messages)

    try:
        # Get a chatbot response using OpenAI GPT-3.5 Turbo
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=messages
        )
        message_text = response["choices"][0]["message"]["content"]
        return message_text
    except Exception as e:
        print(e)
        return