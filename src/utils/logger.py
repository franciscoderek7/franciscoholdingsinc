import datetime
import os

def write_log(message, filename="logs/health/system.log"):
    os.makedirs(os.path.dirname(filename), exist_ok=True)
    with open(filename,"a") as f:
        f.write(str(datetime.datetime.now())+" | "+message+"\n")
