running = True
tasks_list = []

def create_task(task: str):
    new_task = {
        "task": task,
        "done": False,
    }
    return new_task

def add_task(list_app: list, task: str):
    new_task = create_task(task)
    list_app.append(new_task)

def view_tasks(list_app: list):
    print("\nLista de tarefas!")
    for index, task in enumerate(list_app):
        status = "✓" if task["done"] else ""
        print(f"{index} -> {task["task"]} [{status}]")

def update_name_task(list_app: list, index: int, new_name: str):
    if index >= 0 and index < len(list_app):
        list_app[index]["task"] = new_name
        print("Atualizado com sucesso!")
    else:
        print("Tarefa inexistente, favor conferir novamente!")

def completed_task(list_app: list, index: int):
    list_app[index]["done"] = True



while running:
    print("\nMenu do gerenciador de tarefas")
    print("1. Adicionar nova tarefa")
    print("2. Ver tarefas")
    print("3. Atualizar tarefa")
    print("4. Completar tarefa")
    print("5. Deletar tarefa")
    print("6. Sair")

    action = input("Digite a opção desejada? ")

    if action == "1":
        task = input("Digite uma nova Task: ")
        add_task(tasks_list, task)
        print("Tarefa adicionada con sucesso!")
    elif action == "2":
        view_tasks(tasks_list)
    elif action == "3":
        view_tasks(tasks_list)
        print("Digite o indice da task que deseja alterar")
        index = int(input())
        print("Digite o novo nome da task")
        new_name_task = input()
        update_name_task(tasks_list, index, new_name_task)
    elif action == "4":
        print("\nLista de tarefas!")
        view_tasks(tasks_list)
        print("Digite o indice da tarefa concluida")
        index = int(input())
        completed_task(tasks_list, index)
        print("Tarefa Atualizada")
    elif action == "5":
        for task in tasks_list:
            if task["done"]:
                tasks_list.remove(task)
        print("Todas concluidas foram retiradas")
    elif action == "6":
        running = False
        print("Bye")
    else:
        print("\nInforme uma opção de 1 a 6")
    
