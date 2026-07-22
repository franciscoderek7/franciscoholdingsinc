class ResearchPipeline:

    def __init__(self):
        self.queue=[]

    def add_company(self,company):
        self.queue.append(company)

    def size(self):
        return len(self.queue)
