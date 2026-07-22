import json
import datetime


class Audit:

    def __init__(self,path):

        self.path=path


    def write(self,event,data):

        record={
            "time":str(datetime.datetime.now()),
            "event":event,
            "data":data
        }

        with open(self.path,"a") as f:
            f.write(
                json.dumps(record)+"\n"
            )
