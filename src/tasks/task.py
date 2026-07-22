import datetime

class Task:

    def __init__(self,title,priority="normal"):
        self.title=title
        self.priority=priority
        self.status="pending"
        self.created=str(datetime.datetime.now())

    def complete(self):
        self.status="complete"
