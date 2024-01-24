import random
contador = 0

while contador <= 10:
    print("contador:", contador)
    contador += 1

is_valid = True

while is_valid:
    value = random.randint(1, 23000)
    if value == 23:
        is_valid = False
        print("Game Over")
    else:
        print("Tentativa com número ->", value)