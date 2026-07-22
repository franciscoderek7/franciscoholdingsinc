class Opportunity:

    def __init__(self,title,impact,effort):
        self.title=title
        self.impact=impact
        self.effort=effort

    def score(self):
        return self.impact - self.effort
