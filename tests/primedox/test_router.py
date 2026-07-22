from src.primedox.services.router import TaskRouter

r=TaskRouter()

r.register(
"research",
"GapHunter"
)

assert r.route("research")=="GapHunter"

print("PrimeDox routing test passed")
