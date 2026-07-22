def score_gap(problem_size,
              customer_need,
              implementation_cost):

    return (
        problem_size +
        customer_need -
        implementation_cost
    )
