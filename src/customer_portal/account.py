class CustomerAccount:

    def __init__(self,name,email):
        self.name=name
        self.email=email
        self.status="lead"
        self.services=[]

    def activate(self):
        self.status="customer"

    def add_service(self,service):
        self.services.append(service)

    def data(self):
        return {
            "name":self.name,
            "email":self.email,
            "status":self.status,
            "services":self.services
        }
