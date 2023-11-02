from google.oauth2 import service_account
from google.cloud import texttospeech

client_file = "eAI_speech_key.json"
credentials = service_account.Credentials.from_service_account_file(client_file)
client = texttospeech.TextToSpeechClient(credentials=credentials)

text = "hi, my name is einstein. How are you doing today? and how would i assist you?"

def convert_text_to_speech(text):
    voice = texttospeech.VoiceSelectionParams(
        language_code="en-US",
        name="en-US-Wavenet-G",
    )

    audio_config = texttospeech.AudioConfig(
        audio_encoding=texttospeech.AudioEncoding.MP3,
        sample_rate_hertz=44100,
        volume_gain_db=1.0,
        pitch=0.00,
        speaking_rate=1.00,
    )

    response = client.synthesize_speech(input={"text": text}, voice=voice, audio_config=audio_config)


    with open("output.mp3", "wb") as out_file:
        out_file.write(response.audio_content)