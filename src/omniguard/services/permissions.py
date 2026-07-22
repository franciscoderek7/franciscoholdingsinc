class Permissions:

    def __init__(self):
        self.rules={}

    def add(self,agent,permission):
        if agent not in self.rules:
            self.rules[agent]=[]

        self.rules[agent].append(permission)

    def check(self,agent,permission):
        return permission in self.rules.get(
            agent,
            []
        )
