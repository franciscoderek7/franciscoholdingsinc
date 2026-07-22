class SystemState:

    def __init__(self):
        self.state={}


    def update(self,key,value):

        self.state[key]=value


    def get(self,key):

        return self.state.get(key)


    def report(self):

        return self.state
