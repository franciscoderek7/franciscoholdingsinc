class BrandProfile:

    def __init__(
        self,
        company,
        logo,
        tone
    ):
        self.company=company
        self.logo=logo
        self.tone=tone

    def profile(self):

        return {
            "company":self.company,
            "logo":self.logo,
            "tone":self.tone
        }
