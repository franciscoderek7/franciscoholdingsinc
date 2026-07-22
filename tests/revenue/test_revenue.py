from src.revenue.models.product import Product
from src.revenue.services.catalog import ProductCatalog

catalog=ProductCatalog()

catalog.add(
Product(
"AI Website",
499,
"service"
)
)

assert len(catalog.list())==1

print("Revenue catalog test passed")
