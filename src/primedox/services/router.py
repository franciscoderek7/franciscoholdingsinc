class TaskRouter:

    def __init__(self):
        self.routes={}

    def register(self,department,agent):
        self.routes[department]=agent

    def route(self,department):
        return self.routes.get(
            department,
            "unassigned"
        )
