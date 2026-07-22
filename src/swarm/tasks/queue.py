class TaskQueue:

    def __init__(self):
        self.tasks=[]

    def add(self,task,agent):
        self.tasks.append({
            "task":task,
            "agent":agent,
            "status":"queued"
        })

    def process(self):
        for task in self.tasks:
            task["status"]="assigned"

        return self.tasks
