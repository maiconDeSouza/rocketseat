# POO

# class exemplo
class Pessoa:
    def __init__(self, name: str, age: int) -> None:
        self.name = name
        self.age = age
    
    def saudacao(self) -> str:
        return f'Olá eu sou o {self.name} e tenho {self.age} anos!'

# Objetos
pessoa_1 = Pessoa('Dante', 3)

print(pessoa_1)
print(pessoa_1.saudacao())

pessoa_2 = Pessoa(age=14, name="Dona Maia")
print(pessoa_2.saudacao())
