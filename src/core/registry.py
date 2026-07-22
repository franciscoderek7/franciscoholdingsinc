class Registry:

    def __init__(self):
        self.items={}

    def register(self,name,value):
        self.items[name]=value

    def get(self,name):
        return self.items.get(name)

    def all(self):
        return self.items
