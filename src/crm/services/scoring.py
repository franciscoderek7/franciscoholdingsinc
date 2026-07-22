def lead_score(contact):

    score=0

    if contact.company:
        score += 25

    if contact.email:
        score += 25

    if contact.stage=="interested":
        score += 50

    return score
