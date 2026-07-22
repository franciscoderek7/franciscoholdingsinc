class CompanyRegistry:

    def __init__(self):
        self.companies=[]

    def register(
        self,
        name,
        domain
    ):

        self.companies.append({
            "name":name,
            "domain":domain
        })

    def list(self):
        return self.companies
