class Prospect:

    def __init__(self,company,industry,website=""):
        self.company=company
        self.industry=industry
        self.website=website
        self.status="new"

    def qualify(self):
        self.status="qualified"

    def data(self):
        return {
            "company":self.company,
            "industry":self.industry,
            "website":self.website,
            "status":self.status
        }
