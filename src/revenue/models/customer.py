class Customer:

    def __init__(self,name,email=""):
        self.name=name
        self.email=email
        self.status="lead"

    def convert(self):
        self.status="customer"

    def data(self):
        return {
            "name":self.name,
            "email":self.email,
            "status":self.status
        }
