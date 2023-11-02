#!/usr/bin/python3
def square_matrix_simple(matrix=[]):
    def square(x):
        return x ** 2 if isinstance(x, int) else x

    result_matrix = list(map(lambda row: list(map(square, row)), matrix))
    return result_matrix
