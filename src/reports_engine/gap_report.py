import datetime

class GapReport:

    def __init__(self,company):
        self.company=company
        self.created=str(datetime.datetime.now())
        self.sections=[]

    def add_section(self,title,content):
        self.sections.append({
            "title":title,
            "content":content
        })

    def export(self):
        return {
            "company":self.company,
            "created":self.created,
            "sections":self.sections
        }
