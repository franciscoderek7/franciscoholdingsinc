class EmpireError(Exception):
    pass

def safe_run(function):
    try:
        return function()
    except Exception as error:
        return {
            "error": str(error)
        }
