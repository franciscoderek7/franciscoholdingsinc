class KnowledgeVault:

    def __init__(self):
        self.entries=[]

    def store(self,entry):
        self.entries.append(entry)

    def search(self,keyword):

        return [
            x for x in self.entries
            if keyword.lower() in x.lower()
        ]
