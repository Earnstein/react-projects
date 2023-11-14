import os
import openai
from decouple import config
from .database import Model

current_directory = os.getcwd()
openai.organization = config("OPENAI_ORG_ID")
openai.api_key = config("OPENAI_KEY")
database = Model(f"{current_directory}/data.json")

class AudioConverter:
    def __init__(self, filename):
        """
        Initialize the AudioConverter with the audio file's filename.
        Args:
            filename (str): The path to the audio file to be transcribed.
        """
        self.filename = filename

    def convert_audio_to_text(self):
        """
        Convert the audio file to text using the OpenAI API.
        Returns:
            str: Transcribed text from the audio.
        """
        try:
            transcript = openai.Audio.transcribe("whisper-1", self.filename)
            response_text = transcript["text"]
            return response_text
        except openai.error.OpenAIError as e:
            print(f"An error occurred: {e}")
            return None


# Open AI - CHATGPT
# Todo - to pass  the text obtained from whisper-1 into the gpt3
# GETTING CHATGPT TO AUTO COMPLETE CHAT


class Chats:

    def __init__(self, whisper_text):

        # Initialise gpt with the user text gotten from the audio file.

        self.text = whisper_text
    
    def get_chat_response(self):

        # extract all messages from the database
        all_messages = database.get_recent_message()

        user_message = {"role": "user", "content": self.text}

        # Add the user message into the data.json file.

        all_messages.append(user_message)

        # helper print statement
        # print(1)
        # print(all_messages)
        # print(type(all_messages))

        
        
        try:
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=all_messages
            )
            # chat gpt response from the object sent back

            chat_gpt_text = response["choices"][0]["message"]["content"]
            return chat_gpt_text
        except Exception as e:
            print(f"An error occured in chatgpt class: {e}")
            return
        



