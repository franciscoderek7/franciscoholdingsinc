class Metrics:

    def __init__(self):
        self.values={}

    def record(self,key,value):
        self.values[key]=value

    def get(self,key):
        return self.values.get(key)
