class ExecutiveCore:

    def __init__(self,name):
        self.name=name

    def status(self):
        return {
            "system":self.name,
            "mode":"coordination"
        }
