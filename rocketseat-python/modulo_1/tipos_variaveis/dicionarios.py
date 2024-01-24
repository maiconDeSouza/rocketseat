# criando um dicionário
pessoa = {
    "nome": "Maicon",
    "idade": 36,
    "cidade": "São Paulo"
}

print("meu dicionário de pessoas ->", pessoa)

print("Valor da chave 'nome'", pessoa["nome"])

pessoa["sobrenome"] = "Souza"

print("meu dicionário de pessoas atualizado ->", pessoa)

del pessoa["cidade"]

print("meu dicionário de pessoas atualizado sem cidade ->", pessoa)

# keys()
chaves = pessoa.keys()

print(chaves)

lista_de_chaves = list(chaves)

print(lista_de_chaves)

# values()
valor = pessoa.values()
print(valor)

lista_de_valor = list(valor)
print(lista_de_valor)

# items()
itens = pessoa.items()
print(itens)

lista_de_itens = list(itens)
print(lista_de_itens)
