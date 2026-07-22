class CloneConfig:

    def __init__(
        self,
        name,
        company,
        industry
    ):
        self.name=name
        self.company=company
        self.industry=industry
        self.features=[]
        self.status="created"

    def add_feature(self,feature):
        self.features.append(feature)

    def activate(self):
        self.status="active"

    def export(self):

        return {
            "assistant_name":self.name,
            "company":self.company,
            "industry":self.industry,
            "features":self.features,
            "status":self.status
        }
