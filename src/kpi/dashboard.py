import json

def report():

    files=[
        "data/prospects/prospects.json",
        "data/opportunities/opportunities.json",
        "data/customers/customers.json"
    ]

    result={}

    for f in files:
        try:
            with open(f) as x:
                result[f]=len(json.load(x))
        except:
            result[f]=0

    return result


if __name__=="__main__":
    print(report())
