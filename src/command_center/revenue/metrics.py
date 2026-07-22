class RevenueMetrics:

    def __init__(self):
        self.values=[]

    def record(self,value):
        self.values.append(value)

    def total(self):
        return sum(self.values)
