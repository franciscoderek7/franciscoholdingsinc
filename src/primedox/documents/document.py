class Document:

    def __init__(self,title,owner,category):
        self.title=title
        self.owner=owner
        self.category=category
        self.status="draft"

    def approve(self):
        self.status="approved"

    def data(self):
        return {
            "title":self.title,
            "owner":self.owner,
            "category":self.category,
            "status":self.status
        }
