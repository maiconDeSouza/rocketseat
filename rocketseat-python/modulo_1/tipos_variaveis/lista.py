# declaração
minha_lista = [1, 2, 3, 4, 5, "rocketseat", True, False]
print("Minha lista é ->", minha_lista)

print("Item separado ->", minha_lista[0])
print("Minha Lista Fatiada ->", minha_lista[2:6])
print("Minha Lista Fatiada começando do início ->", minha_lista[:6])
print("Minha Lista Fatiada iniciando até o final ->", minha_lista[4:])

# Métodos de List

#append()
minha_lista.append(23)
print("minha lista após o append() ->", minha_lista)

#index()
index = minha_lista.index("rocketseat")
print("indice de 'rocketseat' é ->", index)
# index2 = minha_lista.index(92)
# print("indice de '92' é ->", index2)

#insert()
minha_lista.insert(5, "Sujeito Programador")
print("minha_lista após .insert(5, 'Sujeito Programador' ->", minha_lista)

#pop()
elemento_removido1 = minha_lista.pop()
elemento_removido2 = minha_lista.pop(1)
print("Primeiro item removido ->", elemento_removido1)
print("Segundo item removido ->", elemento_removido2)
print("Lista final ->", minha_lista)

#remove()
minha_lista.remove("Sujeito Programador")
# minha_lista.remove(10)
print("Lista final ->", minha_lista)


#teste
my_list = [1, 2, 3]
my_list2 = my_list
my_list2[2] = 23
print("my_list ->", my_list)
print("my_list2 ->", my_list2)

#sort
lista_desorganizada = [23, 17, 14, 1, 2, 0, 10]
lista_desorganizada2 = ["rocketseat", "jbl", "tupi", "a"]
lista_desorganizada.sort()
lista_desorganizada2.sort()
print("Lista lista_desorganizada após o sort ->", lista_desorganizada)
print("Lista lista_desorganizada2s após o sort ->", lista_desorganizada2)
