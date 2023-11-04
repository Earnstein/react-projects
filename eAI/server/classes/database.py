import json 


class Model:
    def __init__(self, filename) -> None:
        self.filename = filename
    
    def get_recent_message(self):        
        # Get the last 5 messages
        try:
            with open(self.filename) as file:
                data = json.load(file)
            return data
        except FileNotFoundError:
            return []
        except Exception as e:
            print(e)


    def save_msg_to_database(self, req_msg, res_msg):
        prev_messages = self.get_recent_message()[1:]
        user_message = {"role": "user", "content": req_msg}
        assistance_message = {"role": "assistant", "content": res_msg}

        # adding messages to databases

        prev_messages.append(user_message)
        prev_messages.append(assistance_message)

        # Saving the updated file
        with open(self.filename, "w") as file:
            json.dump(prev_messages, file, indent=4)


    def reset_messages(self):
        with open(self.filename, "w") as file:
            file.write("")