class DeploymentPackage:

    def __init__(self,clone):
        self.clone=clone

    def build(self):

        return {
            "package":
            self.clone.export(),
            "deployment":
            "ready"
        }
