#!/usr/bin/python3

if __name__ == "__main__":
    from sys import argv

    argumentos = argv[1:]
    suma = sum(map(int, argumentos))
    print(suma)
