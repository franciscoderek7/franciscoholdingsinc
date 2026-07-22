class AgentStatus:

    def __init__(self):
        self.agents={}

    def register(self,name):
        self.agents[name]="offline"

    def update(self,name,status):
        self.agents[name]=status

    def report(self):
        return self.agents
