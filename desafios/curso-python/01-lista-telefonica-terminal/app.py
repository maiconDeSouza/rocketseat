import  my_schedule
exit = False
contact_list = []
while not exit:
    print("\nDigite a opção desejada da sua agenda no terminal")
    print("1. Cadastre um novo contato:")
    print("2. Visualizar todos os contatos:")
    print("3. Editar contatos:")
    print("4. Favoritar e desfavoritar um contato:")
    print("5. Listar favoritos")
    print("6. Apagar contato")
    print("0. Sair da agenda")

    action = input()

    if action == "1":
        new_contact = my_schedule.new_contact()
        my_schedule.register(contact_list, new_contact)
        print("Salvo com sucesso")
    elif action == "2":
        my_schedule.view_all_contacts(contact_list)
    elif action == "3":
       try:
            my_schedule.view_all_contacts(contact_list)
            print("Digite o indice no contato que vc gostaria de atualizar")
            index = int(input())
            if not isinstance(index, int) or index < 0 or index > len(contact_list) :
                print("Por favor digite apenas números ou indice valido")
                continue
            my_schedule.update_contact(contact_list, index)
       except Exception as error:
           print("Deu ruim", error)
           continue
    elif action == "4":
        try:
            my_schedule.view_all_contacts(contact_list)
            print("Digite o indice que você gostaria de mudar o status do favorito")
            index = int(input())
            if not isinstance(index, int) or index < 0 or index > len(contact_list) :
                print("Por favor digite apenas números ou indice valido")
                continue
            my_schedule.update_favorite(contact_list, index)
        except Exception as error:
            print("Deu ruim", error)
            continue
    elif action == "5":
        my_schedule.list_favorite(contact_list)
    elif action == "6":
        try:
            my_schedule.view_all_contacts(contact_list)
            print("Digite o indice que você gostaria de excluir")
            index = int(input())
            if not isinstance(index, int) or index < 0 or index > len(contact_list) :
                print("Por favor digite apenas números ou indice valido")
                continue
            my_schedule.delete_contact(contact_list, index)
        except Exception as error:
            print("Deu ruim", error)
            continue
    elif action == "0":
        print("bye")
        exit = True
        


