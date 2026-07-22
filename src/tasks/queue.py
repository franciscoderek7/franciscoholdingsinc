class TaskQueue:

    def __init__(self):
        self.tasks=[]

    def add(self,task):
        self.tasks.append(task)

    def pending(self):
        return [
            t.title
            for t in self.tasks
            if t.status=="pending"
        ]
