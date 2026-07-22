class Contact:

    def __init__(self,name,email="",company=""):
        self.name=name
        self.email=email
        self.company=company
        self.stage="lead"

    def update_stage(self,stage):
        self.stage=stage

    def data(self):
        return {
            "name":self.name,
            "email":self.email,
            "company":self.company,
            "stage":self.stage
        }
