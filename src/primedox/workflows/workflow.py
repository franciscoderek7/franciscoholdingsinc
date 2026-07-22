class Workflow:

    def __init__(self,name):
        self.name=name
        self.steps=[]

    def add_step(self,step):
        self.steps.append(step)

    def run(self):
        return {
            "workflow":self.name,
            "steps":self.steps,
            "status":"ready"
        }
