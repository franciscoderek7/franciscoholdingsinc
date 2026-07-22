class Onboarding:

    def __init__(self,customer):
        self.customer=customer
        self.steps=[
            "Agreement",
            "Payment",
            "Information Collection",
            "Production",
            "Delivery"
        ]

    def checklist(self):
        return self.steps
