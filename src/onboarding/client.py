class Client:

    def __init__(self,name,service):
        self.name=name
        self.service=service
        self.status="new"

    def activate(self):
        self.status="active"
