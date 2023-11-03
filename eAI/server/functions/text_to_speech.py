from google.oauth2 import service_account
from google.cloud import texttospeech

client_file = "eAI_speech_key.json"
credentials = service_account.Credentials.from_service_account_file(client_file)
client = texttospeech.TextToSpeechClient(credentials=credentials)

def convert_text_to_speech(text):
    try:
        voice = texttospeech.VoiceSelectionParams(
            language_code="en-US",
            name="en-US-Neural2-E",
        )

        audio_config = texttospeech.AudioConfig(
            audio_encoding=texttospeech.AudioEncoding.MP3,
            sample_rate_hertz=44100,
            volume_gain_db=1.0,
            pitch=0.00,
            speaking_rate=1.00,
        )

        input = {"text": text}
        response = client.synthesize_speech(input=input, voice=voice, audio_config=audio_config)
        return response.audio_content
    except Exception as e:
        print(e)