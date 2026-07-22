class EventBus:

    def __init__(self):
        self.events=[]


    def emit(self,name,data):

        self.events.append({
            "event":name,
            "data":data
        })


    def history(self):

        return self.events


if __name__=="__main__":

    bus=EventBus()

    bus.emit(
        "system.started",
        {
            "status":"online"
        }
    )

    print(bus.history())
