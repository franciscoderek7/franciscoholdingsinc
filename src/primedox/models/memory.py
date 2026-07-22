class MemoryRecord:

    def __init__(self,category,content):
        self.category=category
        self.content=content

    def data(self):
        return {
            "category":self.category,
            "content":self.content
        }
