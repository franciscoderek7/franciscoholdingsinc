class Deal:

    def __init__(self,contact,offer,value):
        self.contact=contact
        self.offer=offer
        self.value=value
        self.status="open"

    def close(self):
        self.status="won"

    def data(self):
        return {
            "contact":self.contact,
            "offer":self.offer,
            "value":self.value,
            "status":self.status
        }
