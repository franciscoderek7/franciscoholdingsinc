class KnowledgeBase:

    def __init__(self):
        self.records=[]

    def add(self,record):
        self.records.append(record)

    def search(self,category):

        return [
            r
            for r in self.records
            if r.category==category
        ]
