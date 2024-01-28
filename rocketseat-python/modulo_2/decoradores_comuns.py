# @classmethod
# @staticmethod

class MinhaClasse:
    valor = 10

    def __init__(self, nome) -> None:
        self.nome = nome  #Atributo da instacia

    def metodo_instancia(self):
        return f'Método de instância chamado -> retorno {self.nome}'
    
    @classmethod
    def metodo_classe(cls):
        return f'Método de classe chamado -> retorno {cls.valor}'
    
    @staticmethod
    def metodo_static_double(value: int):
        return f'O resultado é: {2 * value}'
    
obj = MinhaClasse('jbl')
print(obj.metodo_instancia())
print(MinhaClasse.metodo_classe()) 
print(MinhaClasse.metodo_static_double(25))

class Carro:
    def __init__(self, marca, modelo, ano) -> None:
        self.marca = marca
        self.modelo = modelo
        self.ano = ano
    
    def __str__(self) -> str:
        return f'Marca: {self.marca} - Modelo: {self.modelo} - Ano: {self.ano}'
    
    @classmethod
    def criar_carro(cls, config_json):
        marca, modelo, ano = config_json.split(',')
        return cls(marca, modelo, int(ano))
    

config_json_1 = 'chevrolet,celta,2002'
config_json_2 = 'ferrai,f-220,2018'
celta = Carro.criar_carro(config_json=config_json_1)
ferrari = Carro.criar_carro(config_json_2)
print(celta)
print(ferrari)


class MCN:
    @staticmethod
    def soma(a, b):
        return a + b
    
    @staticmethod
    def PI():
        return 3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034
    
print(MCN.soma(23, 25))
print(MCN.PI() * 5)

