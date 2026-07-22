import datetime

class Task:

    def __init__(self,title,department,priority="normal"):
        self.title=title
        self.department=department
        self.priority=priority
        self.status="pending"
        self.created=str(datetime.datetime.now())

    def complete(self):
        self.status="complete"

    def data(self):
        return {
            "title":self.title,
            "department":self.department,
            "priority":self.priority,
            "status":self.status
        }
