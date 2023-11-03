import json 
import random

def get_recent_messages(file_name):
        instructions = {
            "role": "assistant", 
            "content": "You are my helpful assistant and friend. Your ultimate goal is to make me happy all the time.\
                        Your name is Naomi, and you help me in my day-to-day activities. \
                        The user's name is Einstein, and he is currently learning to be the best software engineer. \
                        Keep your answers under 20 words.",
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
            with open(file_name) as file:
                data = json.load(file)
                messages.extend(data[-5:])
        except Exception as e:
            print(e)
        
        return messages
    

def save_msg_to_database(req_msg:str, res_msg:str):
    file_name = "data.json"
    prev_messages = get_recent_messages(file_name)[1:]
    user_message = {"role": "user", "content": req_msg}
    assistance_message = {"role": "assistant", "content": res_msg}
    prev_messages.append(user_message)
    prev_messages.append(assistance_message)
    with open(file_name, "w") as file:
        json.dump(prev_messages, file, indent=4)

def reset_messages():
    file_name = "data.json"
    with open(file_name, "w") as file:
        file.write("")