INDUSTRY_TEMPLATES={

"construction":[
"estimates",
"project_tracking",
"customer_updates"
],

"automotive":[
"sales_support",
"inventory",
"service_followup"
],

"real_estate":[
"lead_management",
"market_analysis",
"client_support"
],

"professional_services":[
"research",
"documents",
"automation"
]

}


def template_for(industry):

    return INDUSTRY_TEMPLATES.get(
        industry,
        []
    )
