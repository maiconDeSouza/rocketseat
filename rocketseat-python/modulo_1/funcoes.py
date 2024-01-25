def saudacao(nome: str):
    print(f"Olá {nome}!")


saudacao("Dona Maia")
saudacao("Dante")

def square(number: int):
    result = f"\n{number} ao quadrado é: {number ** 2}"
    return result

result_calc = square(75)
print(result_calc)

print(square(25))