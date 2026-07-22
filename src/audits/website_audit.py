class WebsiteAudit:

    def __init__(self,company,url):
        self.company=company
        self.url=url
        self.findings=[]

    def add_finding(self,item):
        self.findings.append(item)

    def result(self):
        return {
            "company":self.company,
            "website":self.url,
            "findings":self.findings,
            "recommendations":len(self.findings)
        }
