class PermissionManager:

    def __init__(self):
        self.roles={}

    def create_role(self,name,permissions):
        self.roles[name]=permissions

    def allowed(self,role,action):
        return action in self.roles.get(role,[])


if __name__=="__main__":

    p=PermissionManager()

    p.create_role(
        "admin",
        [
            "manage_agents",
            "view_reports"
        ]
    )

    assert p.allowed(
        "admin",
        "view_reports"
    )

    print("Permission system passed")
