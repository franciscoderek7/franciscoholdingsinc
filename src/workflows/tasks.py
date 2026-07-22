class TaskManager:

    def __init__(self):
        self.tasks=[]

    def add(self,title):
        self.tasks.append({
            "title":title,
            "status":"open"
        })

    def complete(self,index):
        self.tasks[index]["status"]="complete"

    def list(self):
        return self.tasks
