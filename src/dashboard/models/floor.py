class Floor:

    def __init__(self,number,name):
        self.number=number
        self.name=name

    def data(self):
        return {
            "floor":self.number,
            "name":self.name
        }
