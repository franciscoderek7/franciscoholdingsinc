from src.dashboard.models.floor import Floor

floor=Floor(
1,
"Francisco Holdings HQ"
)

assert floor.data()["floor"]==1

print("Dashboard test passed")
