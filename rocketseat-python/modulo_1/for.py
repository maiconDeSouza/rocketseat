lista = [1, 2, 3, 4, 5]

for el in lista:
    print(el)

pessoa = {
    "name": "Malboro",
    "idade": 75,
    "cidade": "Texa"
}

for chave, valor in pessoa.items():
    print(f"{chave}: {valor}")


for numero in range(11):
    if numero % 2 == 0:
        print(f"par -> {numero}")

lista_nomes = ["Maria", "Dante", "Maia", "Felipe", "Taluzinha"]
for indice in range(0, len(lista_nomes)):
    print(f"indice: {indice} -> elemento {lista_nomes[indice]}")

for indice, elemento in enumerate(lista_nomes):
    print(f"Enumerate -> indice: {indice} -> elemento {lista_nomes[indice]}")
