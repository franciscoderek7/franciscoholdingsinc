class Lead:

    def __init__(self,company,source):
        self.company=company
        self.source=source
        self.stage="new"

    def advance(self,stage):
        self.stage=stage

    def data(self):
        return {
            "company":self.company,
            "source":self.source,
            "stage":self.stage
        }
