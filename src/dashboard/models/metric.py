class Metric:

    def __init__(self,name,value):
        self.name=name
        self.value=value

    def data(self):
        return {
            "metric":self.name,
            "value":self.value
        }
