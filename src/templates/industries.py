INDUSTRIES={

"construction":[
"quotes",
"projects",
"safety",
"documents"
],

"automotive":[
"sales",
"inventory",
"customer_followup"
],

"real_estate":[
"listings",
"market_research",
"client_support"
],

"healthcare":[
"administration",
"scheduling",
"knowledge"
],

"legal_education":[
"research",
"documents",
"education"
]

}


def get(industry):
    return INDUSTRIES.get(
        industry,
        []
    )
