class Workspace:

    def __init__(self,company):
        self.company=company
        self.data_space=[]

    def add(self,item):
        self.data_space.append(item)

    def count(self):
        return len(self.data_space)
