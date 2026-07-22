class GapReport:

    def __init__(self,company):
        self.company=company
        self.sections=[]

    def add_section(self,title,data):
        self.sections.append({
            "title":title,
            "data":data
        })

    def output(self):
        return {
            "company":self.company,
            "sections":self.sections
        }
