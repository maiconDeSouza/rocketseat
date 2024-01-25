finish = False

while not finish:
    try:
        print("digite nota 1 de 0 à 10")
        nota_1 = int(input())
        if not isinstance(nota_1, int) or nota_1 < 0 or nota_1 > 10:
            print("Algo de errado não está certo. Digite apenas números de 0 à 10")
            continue

        print("digite nota 2 de 0 à 10")
        nota_2 = int(input())
        if not isinstance(nota_2, int) or nota_2 < 0 or nota_2 > 10:
            print("Algo de errado não está certo. Digite apenas números de 0 à 10")
            continue

        media = (nota_1 + nota_2) / 2
        print("A media do aluno é de", media)
        finish = True
    except Exception as error:
        print(f"Deu ruim", error)