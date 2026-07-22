class Company:

    def __init__(self,name,division):
        self.name=name
        self.division=division

    def data(self):
        return {
            "name":self.name,
            "division":self.division
        }
