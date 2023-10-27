from decouple import config
import openai
import os
from .database import Data

dir = os.getcwd()

openai.api_key = config("OPENAI_KEY")
openai.organization = config("OPENAI_ORG_ID")

directory_path = os.getcwd()

class AudioConverter:
    def __init__(self, audio_file) -> None:
        self.audio_file = audio_file
    
    def convert_audio_to_text(self):
        audio_content = open(f"{directory_path}/{self.audio_file}", "rb")
        try:
            transcript = openai.Audio.transcribe("whisper-1", audio_content)
            message_text = transcript["text"]
            return message_text
        except Exception as e:
            print(e)
            return
    
    def get_chat_response(self):
        whisper_msg = self.convert_audio_to_text()
        msg_data = Data("data.json")
        messages = msg_data.get_recent_messages()
        user_message = {
            "role": "user", 
            "content": whisper_msg
        }
        messages.append(user_message)
        print(messages)

        try:
            response =  openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=messages
            )
            print(response)
            message_text = response["choices"][0]["messages"]["content"]
            return message_text
        except Exception as e:
            print(e)
            return