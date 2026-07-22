from src.agents.agent import Agent
from src.agents.registry import AgentRegistry

a=Agent(
"PrimeDox-Core",
"AI Orchestrator",
"Francisco Holdings Inc."
)

r=AgentRegistry()

r.register(a)

assert r.get("PrimeDox-Core")

print("Agent registry test passed")
