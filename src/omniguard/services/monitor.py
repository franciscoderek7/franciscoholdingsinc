class Monitor:

    def __init__(self):
        self.agents={}

    def register(self,agent):
        self.agents[agent.name]=agent

    def status(self):
        return {
            name:data.status
            for name,data in self.agents.items()
        }
