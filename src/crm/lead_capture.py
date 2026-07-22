import json

FILE="data/leads/leads.json"

def add(name,email,company):
    try:
        with open(FILE) as f:
            leads=json.load(f)
    except:
        leads=[]

    leads.append({
        "name":name,
        "email":email,
        "company":company
    })

    with open(FILE,"w") as f:
        json.dump(leads,f,indent=2)

print("Lead system ready")
