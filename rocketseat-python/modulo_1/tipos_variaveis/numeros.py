# Interios
numero_inteiro = 3 

# Real com ponto flutuante
numero_real = 3.14

print(f"Tipo da variável: {numero_inteiro} é do tipo {type(numero_inteiro)}")
print(f"Tipo da variável: {numero_real} é do tipo {type(numero_real)}")

n1 = 23
n2 = 11

# soma
soma = n1 + n2
print(f"A soma de {n1} + {n2} é igual {soma}")

# subtração
subtracao = n1 - n2
print(f"A subtração de {n1} - {n2} é igual {subtracao}")

# multiplicação
multiplicacao = n1 * n2
print(f"A multiplicação de {n1} x {n2} é igual {multiplicacao}")

# divisão
divisao = n1 / n2
print(f"A divisão de {n1} / {n2} é igual {divisao} e é do tipo {type(divisao)}")
print(f"com dupla barra gera um divisão inteira // {n1 // n2}")

# conversão
print(f"convertendo com int(int(n1 / n2)) {int(n1 / n2)}")
print(f"convertendo o valor soma que é um inteiro para ponto flutuante usando float() {float(soma)}")

# modulo

modulo = n1 % n2
print(f"O modulo de {n1} % {n2} é igual {modulo}")


