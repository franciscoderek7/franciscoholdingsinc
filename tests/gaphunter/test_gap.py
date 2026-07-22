from src.gaphunter.models.company import CompanyProfile
from src.gaphunter.services.analyzer import analyze

company=CompanyProfile(
"Example Company",
"Construction",
"https://example.com"
)

results=analyze(company)

assert len(results)>0

print("Gap Hunter test passed")
