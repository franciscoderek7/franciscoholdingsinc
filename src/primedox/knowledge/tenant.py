class TenantKnowledge:

    def __init__(self,tenant):
        self.tenant=tenant
        self.records=[]

    def add(self,item):
        self.records.append(item)

    def list(self):
        return {
            "tenant":self.tenant,
            "records":self.records
        }
