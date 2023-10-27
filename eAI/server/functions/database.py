import json
import random


class Data:
    def __init__(self,  filename):
        self.filename = filename
    
    def get_recent_messages(self):
        instructions = {
            "role": "assistant", 
            "content": "You are my helpful assistant and friend. Your ultimate goal is to make me happy all the time. Your name is Naomi, and you help me in my day-to-day activities. The user's name is Einstein, and he is currently learning to be the best software engineer. Keep your answers under 20 words.",
        }

        # Initialize messages
        messages = [instructions]

        # Add a random element
        x = random.uniform(0, 1)
        if x < 0.5:
            instructions["content"] += " Your response will include some dry humor."
        else:
            instructions["content"] += " Your response will include a challenging question."
        
        # Get the last 5 messages
        try:
            with open(self.file_name) as file:
                data = json.load(file)
                messages.extend(data[-5:])
        except Exception as e:
            print(e)
        
        return messages
