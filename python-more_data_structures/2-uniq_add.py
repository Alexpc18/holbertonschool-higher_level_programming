#!/usr/bin/python3
def uniq_add(my_list=[]):
    unique_numbers = set()
    for item in my_list:
        if isinstance(item, int):
            unique_numbers.add(item)

    total = sum(unique_numbers)

    return total
