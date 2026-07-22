class Opportunity:

    def __init__(self,company,problem,solution,value):
        self.company=company
        self.problem=problem
        self.solution=solution
        self.value=value
        self.score=0

    def calculate_score(self):
        self.score=min(
            100,
            int(self.value/100)
        )
        return self.score

    def data(self):
        return {
            "company":self.company,
            "problem":self.problem,
            "solution":self.solution,
            "value":self.value,
            "score":self.score
        }
