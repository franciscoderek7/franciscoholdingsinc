import os


def check():

    return {

        "files":
        sum(
        len(files)
        for _,_,files in os.walk(".")
        ),

        "status":
        "healthy"

    }


if __name__=="__main__":

    print(check())
