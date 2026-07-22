class Campaign:

    def __init__(self,name):
        self.name=name
        self.contacts=[]

    def add(self,contact):
        self.contacts.append(contact)

    def count(self):
        return len(self.contacts)
