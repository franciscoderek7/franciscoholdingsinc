import json
import os

def save_report(report,path):

    os.makedirs(
        os.path.dirname(path),
        exist_ok=True
    )

    with open(path,"w") as file:
        json.dump(
            report,
            file,
            indent=2
        )
