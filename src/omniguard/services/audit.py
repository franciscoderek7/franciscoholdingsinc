import json
import os

class AuditLog:

    def __init__(self,path="logs/security/audit.json"):
        self.path=path
        os.makedirs(
            os.path.dirname(path),
            exist_ok=True
        )

    def write(self,event):

        with open(self.path,"a") as file:
            file.write(
                json.dumps(event)+"\n"
            )
