import datetime


class SwarmMonitor:

    def event(self,message):

        return {
            "time":str(datetime.datetime.now()),
            "event":message
        }
