class Template:

    def __init__(self,name,category):
        self.name=name
        self.category=category
        self.fields=[]

    def add_field(self,field):
        self.fields.append(field)

    def generate(self,data):

        return {
            "template":self.name,
            "category":self.category,
            "data":data
        }
