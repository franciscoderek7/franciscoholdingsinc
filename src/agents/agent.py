import datetime

class Agent:

    def __init__(self,name,role,company):
        self.name=name
        self.role=role
        self.company=company
        self.status="registered"
        self.created=str(datetime.datetime.now())

    def activate(self):
        self.status="active"

    def info(self):
        return {
            "name":self.name,
            "role":self.role,
            "company":self.company,
            "status":self.status,
            "created":self.created
        }
