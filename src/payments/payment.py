class Payment:

    def __init__(self,customer,amount,method):
        self.customer=customer
        self.amount=amount
        self.method=method
        self.status="pending"

    def confirm(self):
        self.status="paid"

    def data(self):
        return {
            "customer":self.customer,
            "amount":self.amount,
            "method":self.method,
            "status":self.status
        }
