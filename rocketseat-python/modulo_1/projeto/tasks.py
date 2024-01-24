tasks = []
tasks_completed = []

print("Menu de Gerenciador de tarefas:")
print("1. Adicionar Tarefas")
print("2. Ver Tarefas")
print("3. Atualizar Tarefas")
print("4. Completar Tarefas")
print("5. Deletar tarefas")
print("6. Sair")

action = int(input())

while action != 6:
    if action == 1:
        new_task = input("Digite a nova task")
        tasks.append(new_task)
    elif action == 2:
        for indice, task in enumerate(tasks):
            print(f"{indice} -> {task}")
    elif action == 3:
        for indice, task in enumerate(tasks):
            print(f"{indice} -> {task}")
        up_task_indice = int(input("Digite a Task que gostaria de atualizar"))
        text = input("Digite a atualização")
        tasks[up_task_indice] = text
