class Workflow:

    def __init__(self,name):
        self.name=name
        self.steps=[]

    def add(self,step):
        self.steps.append(step)

    def summary(self):
        return {
            "workflow":self.name,
            "steps":self.steps
        }
