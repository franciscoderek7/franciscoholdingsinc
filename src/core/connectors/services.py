class ServiceConnector:


    def __init__(self,name):

        self.name=name
        self.status="offline"


    def connect(self):

        self.status="online"


    def info(self):

        return {
            "service":self.name,
            "status":self.status
        }
