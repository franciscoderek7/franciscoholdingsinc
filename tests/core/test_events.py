from src.core.events import EventBus

e=EventBus()

e.publish("system_start")

assert len(e.history())==1

print("Event test passed")
