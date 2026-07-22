class Project:

    def __init__(self,client,service):
        self.client=client
        self.service=service
        self.status="pending"

    def start(self):
        self.status="active"

    def complete(self):
        self.status="complete"
