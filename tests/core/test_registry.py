from src.core.registry import Registry

r=Registry()

r.register("PrimeDox","online")

assert r.get("PrimeDox")=="online"

print("Registry test passed")
