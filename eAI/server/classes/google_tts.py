from google.oauth2 import service_account
from google.cloud import texttospeech
client_file = "eAI_speech_key.json"
credentials = service_account.Credentials.from_service_account_file(client_file)
client = texttospeech.TextToSpeechClient(credentials=credentials)

class TTS:
    def __init__(self, text):
        self.text = text
    
    def convert_text_to_speech(self):

        # select the google voice model 
        voice = texttospeech.VoiceSelectionParams(
            language_code="en-US",
            name="en-US-Wavenet-G",
        )
        
        # configure the voice models
        audio_config = texttospeech.AudioConfig(
        audio_encoding=texttospeech.AudioEncoding.MP3,
        sample_rate_hertz=44100,
        volume_gain_db=1.0,
        pitch=0.00,
        speaking_rate=1.00,
        )   

        # pass in input text to model
        input = {"text": self.text}
        response = client.synthesize_speech(input=input, voice=voice, audio_config=audio_config)

        return response.audio_content
        # save the audio file 
        # with open("output.mp3", "wb") as out_file:
        #     out_file.write(response.audio_content)
