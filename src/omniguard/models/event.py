import datetime

class SecurityEvent:

    def __init__(self,event_type,source,message):
        self.event_type=event_type
        self.source=source
        self.message=message
        self.time=str(datetime.datetime.now())

    def data(self):
        return {
            "type":self.event_type,
            "source":self.source,
            "message":self.message,
            "time":self.time
        }
