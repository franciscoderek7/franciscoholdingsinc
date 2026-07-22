from src.omniguard.services.permissions import Permissions

p=Permissions()

p.add(
"PrimeDox",
"workflow"
)

assert p.check(
"PrimeDox",
"workflow"
)

print("OmniGuard permissions test passed")
