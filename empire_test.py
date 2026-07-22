from src.services.company_service import create_company
from src.gaphunter.analyzer import analyze_company
from src.services.agent_service import register_agent
from src.health.check import system_check

company=create_company(
    "Example Business",
    "Construction",
    "https://example.com"
)

print(analyze_company(company))

agent=register_agent(
    "Research Agent",
    "Market Analysis"
)

print(agent.info())

print(system_check())
