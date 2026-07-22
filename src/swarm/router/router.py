class WorkflowRouter:

    def route(self,category):

        routes={

        "research":"GapHunter",
        "documents":"PrimeDox",
        "security":"OmniGuard",
        "marketing":"ContentAgent",
        "sales":"SalesAgent"

        }

        return routes.get(
            category,
            "PrimeDox"
        )
