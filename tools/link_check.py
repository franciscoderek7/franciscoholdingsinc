import os
import re

broken=[]

for root,dirs,files in os.walk("."):
    for file in files:
        if file.endswith((".html",".js",".css")):
            path=os.path.join(root,file)

            try:
                data=open(
                    path,
                    errors="ignore"
                ).read()

                links=re.findall(
                    r'href=["\']([^"\']+)',
                    data
                )

                for link in links:
                    if link.startswith("#"):
                        continue

            except:
                pass

print("Link scan complete")
