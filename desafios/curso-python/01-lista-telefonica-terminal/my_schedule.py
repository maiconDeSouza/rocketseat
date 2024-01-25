def new_contact():
    contact = {}
    concluded = False
    while not concluded:
        print("Digite o nome do seu novo contato! *campo obrigatório")
        name = input()
        if len(name) <= 3:
            print("O nome deve ter mais de 3 caracteres")
            continue
        
        print("Digite o e-mail! *campo opcional")
        email = input()

        print("Digite o telefone! *campo obrigatório")
        phone = input()
        if len(phone) < 7:
            print("O telefone deve ter mais de 6 caracteres")
            continue

        print("Quer salvar este contato como favorito? sim / não")
        favorite = input()
        if favorite != "sim" or favorite != "não":
            print("responda apenas com 'sim' ou 'não")
        
        favorite_bollean = True if favorite == "sim" else False

        contact.update(name = name, email = email, phone = phone, favorite = favorite_bollean)
        concluded = True
    return contact

def register(contact_list: list, new_contact: dict):
    contact_list.append(new_contact)


def view_all_contacts(contact_list: list):
    print("\n Lista de Contatos")
    for index, contact in enumerate(contact_list):
        print(f"{index} -> nome: {contact["name"]}, telefone: {contact["phone"]}, email: {contact["email"]}, favorito: {contact["favorite"]}")


def update_contact(contact_list: list, index: int):
    print("Digite o novo nome e pressione Enter, ou pressione Enter diretamente para manter o nome atual.")
    name = input()
    if name != "":
        contact_list[index]["name"] = name

    print("Digite o novo email e pressione Enter, ou pressione Enter diretamente para manter o email atual.")
    email = input()
    if email != "":
        contact_list[index]["email"] = email

    print("Digite o novo telefone e pressione Enter, ou pressione Enter diretamente para manter o telefone atual.")
    phone = input()
    if phone != "":
        contact_list[index]["phone"] = phone
    
    print("contato atualizado com sucesso!")


def update_favorite(contact_list: list, index: int):
    contact_list[index]["favorite"] = not contact_list[index]["favorite"]
    print("Contato atualizado")

def list_favorite(contact_list: list):
    print("\nLista de favoritos")
    for contact in contact_list:
        if contact["favorite"]:
            print(f"nome: {contact["name"]}, telefone: {contact["phone"]}, email: {contact["email"]}, favorito: {contact["favorite"]}")

def delete_contact(contact_list: list, index: int):
    remove_contact = contact_list[index]
    contact_list.remove(remove_contact)
    