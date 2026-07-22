class FloorRegistry:

    def __init__(self):
        self.floors=[]

    def add_floor(
        self,
        number,
        name,
        purpose
    ):

        self.floors.append({
            "floor":number,
            "name":name,
            "purpose":purpose
        })

    def list(self):
        return self.floors
