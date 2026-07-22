import json
import datetime


class AuditLogger:

    def __init__(self,path):
        self.path=path

    def record(self,event):

        item={
            "time":str(datetime.datetime.now()),
            "event":event
        }

        with open(self.path,"a") as f:
            f.write(
                json.dumps(item)+"\n"
            )
