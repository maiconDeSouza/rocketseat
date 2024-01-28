# Classe Base Livro
class Livro:
    def __init__(self, titulo, autor, isbn):
        self.titulo = titulo
        self.autor = autor
        self.isbn = isbn
        self.disponivel = True

    def emprestar(self):
        if self.disponivel:
            self.disponivel = False
            return True
        return False

    def devolver(self):
        self.disponivel = True

    def __str__(self):
        return f"{self.titulo} por {self.autor} (ISBN: {self.isbn})"

# Classes Derivadas de Livro
class LivroFiccao(Livro):
    def __init__(self, titulo, autor, isbn, genero):
        super().__init__(titulo, autor, isbn)
        self.genero = genero

    def infoDetalhada(self):
        return f"Ficção - {self.genero} - {str(self)}"

class LivroAcademico(Livro):
    def __init__(self, titulo, autor, isbn, area):
        super().__init__(titulo, autor, isbn)
        self.area = area

    def infoDetalhada(self):
        return f"Acadêmico - {self.area} - {str(self)}"

# Classe Usuário
class Usuario:
    def __init__(self, nome, id_usuario):
        self.nome = nome
        self.id_usuario = id_usuario
        self.livros_emprestados = []

    def emprestarLivro(self, livro):
        if livro.emprestar():
            self.livros_emprestados.append(livro)
            return True
        return False

    def devolverLivro(self, livro):
        if livro in self.livros_emprestados:
            livro.devolver()
            self.livros_emprestados.remove(livro)

    def __str__(self):
        return f"Usuário: {self.nome}, ID: {self.id_usuario}, Livros Emprestados: {[livro.titulo for livro in self.livros_emprestados]}"

# Classe Biblioteca
class Biblioteca:
    def __init__(self):
        self.livros = []
        self.usuarios = []

    def adicionarLivro(self, livro):
        self.livros.append(livro)

    def registrarUsuario(self, usuario):
        self.usuarios.append(usuario)

    def mostrarLivros(self):
        for livro in self.livros:
            print(livro)

# Testando o Sistema
biblioteca = Biblioteca()

# Adicionando livros
livro1 = LivroFiccao("O Hobbit", "J.R.R. Tolkien", "123456", "Fantasia")
livro2 = LivroAcademico("Introdução à Programação com Python", "Nilo Ney", "789101", "Computação")
biblioteca.adicionarLivro(livro1)
biblioteca.adicionarLivro(livro2)

# Registrando usuário
usuario1 = Usuario("Alice", 1)
biblioteca.registrarUsuario(usuario1)

# Emprestando e devolvendo livros
usuario1.emprestarLivro(livro1)
print(usuario1)
usuario1.devolverLivro(livro1)
print(usuario1)

# Mostrando informações detalhadas dos livros
print(livro1.infoDetalhada())
print(livro2.infoDetalhada())

# Mostrando livros na biblioteca
biblioteca.mostrarLivros()
