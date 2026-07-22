class Pipeline:

    def __init__(self):
        self.contacts=[]

    def add(self,contact):
        self.contacts.append(contact)

    def list(self):
        return [
            c.data()
            for c in self.contacts
        ]
