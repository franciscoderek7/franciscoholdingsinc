import json
import os

FILE="data/revenue/revenue.json"

def load():
    if os.path.exists(FILE):
        with open(FILE) as f:
            return json.load(f)
    return []

def add_sale(company,amount):
    data=load()
    data.append({
        "company":company,
        "amount":amount
    })
    with open(FILE,"w") as f:
        json.dump(data,f,indent=2)

def total():
    return sum(
        x["amount"]
        for x in load()
    )

if __name__=="__main__":
    print("Revenue:",
          total())
