idade = 18
socio = False

if idade >= 18 and socio:
    print("Você pode entrar!")
else:
    print("Você não pode entrar!")

nota = 6

if nota > 7:
    print("Passou de Ano!")
elif nota > 5:
    print("Recuperação!")
else:
    print("reprovou")

habilitacao = "Pode tirar carteira de habilitação" if idade >= 18 else "Não pode tirar carteira de habilitação"
print(habilitacao)
