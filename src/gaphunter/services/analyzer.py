def analyze(profile):

    findings=[]

    if not profile.website:
        findings.append(
            "Website improvement opportunity"
        )

    findings.append(
        "Automation opportunity review"
    )

    findings.append(
        "Customer experience review"
    )

    return findings
