# herança
print('Exemplo de herança')
class Animal:
    def __init__(self, name) -> None:
         self.name = name
    def walk(self):
         print(f'O animal {self.name} andou')
         return
    def to_emit_sound(self):
         pass
    
class Dog(Animal):
     def to_emit_sound(self):
         return 'Au Au Au'
     
class Cat(Animal):
    def to_emit_sound(self):
        return 'Miau'
         
    

dog = Dog(name="Dante")
cat = Cat(name="Mioto")

animals = [dog, cat]

for animal in animals:
     print(f'{animal.name} faz {animal.to_emit_sound()}')

# encapusulamento 
print('\nExemplo de encapsulamento:')
class ContaBancaria:
     def __init__(self, saldo) -> None:
          self.__saldo: float = saldo # Atributo privado
    
     def depositar(self, valor: float):
          if valor > 0:
            self.__saldo += valor

     def sacar(self, valor: float):
         if valor > 0 and valor <=self.__saldo:
             self.__saldo -= valor
         else:
             print('Não foi possivel realizar o saque')
     def saldo(self):
         print(f'Seu saldo é de {self.__saldo}')


dante = ContaBancaria(saldo=2599)

dante.depositar(250)
dante.sacar(1000.23)
dante.saldo()


# Abstração
print('\nExemplo de abstração:')
from abc import ABC, abstractclassmethod

class Veiculo(ABC):
    @abstractclassmethod
    def ligar(self):
        pass

    @abstractclassmethod
    def desligar(self):
        pass

class Carro(Veiculo):
    def __init__(self) -> None:
        pass
    def ligar(self) -> str:
        return 'Carro Ligado com a chave'
    def desligar(self) -> str:
        return 'Carro desligado com a chave'
    
carro_amarelo = Carro()

print(carro_amarelo.ligar())
print(carro_amarelo.desligar())
