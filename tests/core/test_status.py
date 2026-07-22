from src.core.status import status

result=status()

assert result["state"]=="operational"

print("Core status test passed")
