class Animal():
    def __init__(self, name:str, especie:str, som:str) -> None:
        self._name = name
        self._especie = especie
        self._som = som

    def emitir_som(self):
        return f'O animal da espécie {self._especie} com nome {self._name} faz {self._som}'
    
    def apresentacao(self):
        return f'O animal da espécie {self._especie} tem o nome {self._name}'

class Mamifero(Animal):
    def beber_leite(self):
        return f'O animal da espécie {self._especie} com nome {self._name} está bebendo leite'
    
class Voador(Animal):
    def voar(self):
        return f'O animal da espécie {self._especie} com nome {self._name} está voando'

class Cachorro(Mamifero):
    def __init__(self, name: str, som: str) -> None:
        especie = 'Cachorro'
        super().__init__(name, especie, som)

class Morcego(Mamifero, Voador):
    def __init__(self, name: str, som: str) -> None:
        especie = 'Morcego'
        Mamifero.__init__(self, name, especie, som)
        Voador.__init__(self, name, especie, som)

print(f'{5 * '-'}Dante{5 * '-'}')
dante = Cachorro(name='Dante', som='Au Au')
print(dante.apresentacao())
print(dante.emitir_som())
print(dante.beber_leite())

print(f'\n{5 * '-'}Batman{5 * '-'}')
batman = Morcego(name='Batman', som='Som ultrassônico')
print(batman.apresentacao())
print(batman.emitir_som())
print(batman.beber_leite())
print(batman.voar())
