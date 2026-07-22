class AgentMonitor:

    def __init__(self):
        self.agents={}

    def register(self,name):
        self.agents[name]="offline"

    def heartbeat(self,name):
        self.agents[name]="online"

    def status(self):
        return self.agents
