from src.primedox.models.memory import MemoryRecord

m=MemoryRecord(
"system",
"test"
)

assert m.data()["content"]=="test"

print("Memory test passed")
