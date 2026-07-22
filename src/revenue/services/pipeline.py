class SalesPipeline:

    def __init__(self):
        self.leads=[]

    def add(self,lead):
        self.leads.append(lead)

    def count(self):
        return len(self.leads)

    def list(self):
        return [
            l.data()
            for l in self.leads
        ]
