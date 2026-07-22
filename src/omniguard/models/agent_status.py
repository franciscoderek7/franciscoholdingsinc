class AgentStatus:

    def __init__(self,name):
        self.name=name
        self.status="unknown"

    def update(self,status):
        self.status=status

    def info(self):
        return {
            "agent":self.name,
            "status":self.status
        }
