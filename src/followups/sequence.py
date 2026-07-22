class FollowUpSequence:

    def __init__(self,name):
        self.name=name
        self.steps=[]

    def add_step(self,message):
        self.steps.append(message)

    def count(self):
        return len(self.steps)
