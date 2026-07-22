from .base import Agent


class AgentRegistry:

    def __init__(self):
        self.agents=[]

    def register(self,name,role):
        agent=Agent(name,role)
        self.agents.append(agent)
        return agent

    def list(self):
        return [
            x.data()
            for x in self.agents
        ]
