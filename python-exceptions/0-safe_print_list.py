#!/usr/bin/python3
def safe_print_list(my_list=[], x=0):
    elements_printed = 0

    try:
        iterator = iter(my_list)  # Intenta crear un iterador desde la lista
        for _ in range(x):
            item = next(iterator)  # Intenta obtener el siguiente elemento
            print(item, end='')
            elements_printed += 1
    except StopIteration:
        pass  # Manejamos la excepción StopIteration si la lista se agota

    print()  # Agregamos una nueva línea al final
    return elements_printed
