from typing import Any


def meu_decorador(func):
    def wrapper():
        print('Antes da função ser chamada')
        func()
        print('Depois da minha função sser chamada')
    return wrapper

@meu_decorador
def minha_funcao():
    print('Minha função foi chamada -><-')

minha_funcao()

print('\n @Class\n')
class MeuDecoradorDeClasse:
    def __init__(self, func) -> None:
        self.func = func

    def __call__(self) -> Any:
        print('Antes da função')
        self.func()
        print('Depois da função')

@MeuDecoradorDeClasse
def segunda_funcao():
    print('Segunda função foi chamada -><-')

segunda_funcao()