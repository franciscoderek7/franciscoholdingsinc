from src.crm.models.contact import Contact
from src.crm.services.scoring import lead_score

c=Contact(
"Demo",
"demo@test.com",
"Company"
)

assert lead_score(c)==50

print("CRM test passed")
