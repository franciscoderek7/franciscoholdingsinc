class AIClone:

    def __init__(self,name,industry,owner):
        self.name=name
        self.industry=industry
        self.owner=owner
        self.features=[]
        self.status="created"

    def add_feature(self,feature):
        self.features.append(feature)

    def activate(self):
        self.status="active"

    def data(self):
        return {
            "name":self.name,
            "industry":self.industry,
            "owner":self.owner,
            "features":self.features,
            "status":self.status
        }
