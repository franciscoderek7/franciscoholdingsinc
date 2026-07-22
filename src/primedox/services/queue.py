class WorkflowQueue:

    def __init__(self):
        self.tasks=[]

    def add(self,task):
        self.tasks.append(task)

    def next(self):
        if self.tasks:
            return self.tasks[0]

        return None
