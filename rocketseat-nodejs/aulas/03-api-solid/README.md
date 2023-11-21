# App 

## Gympass style app.

- ### RFs (Requisitos funcionais)

	- [ ] Deve ser possível se cadastrar;

	- [ ] Deve ser possível de autenticar;

	- [ ] Deve ser possível obter o perfil de um usuário logado;

	- [ ] Deve ser possível obter o número de check-ins realizados pelo usário logado;
	
	- [ ] Deve ser possível o usuário obter seu histórico de check-ins;
	
	- [ ] Deve ser possível o usuário buscar academias próximas;
	
	- [ ] Deve ser possível o usuário procurar academias pelo nome;
	
	- [ ] Deve ser possível o usuário realizar um check-in em uma academia;
	
	- [ ] Deve ser possível validar o check-in de um usuário;
	
	- [ ] Deve ser possível cadastrar uma academia.

  

- ### RNs (Regras de negócios)

	- [ ] O usuário não deve poder se cadastrar com e-mail e CPF Duplicados;
	
	- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
	
	- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
	
	- [ ] O check-in só pode ser validado até 20 minutos após criado;
	
	- [ ] O check-in só pode ser validado por administadores;
	
	- [ ] A academia só pode ser cadastrada por administradores.

  

- ### RNFs (Requisitos não-funcionais)

	- [ ] A senha do usuário precisa estar criptografada;
	
	- [ ] Os dados da aplicação precisam está percistidos em um banco PostgreSQL;
	
	- [ ] Todas Listas de dados precisam está paginadas com 20 itens por página;
	
	- [ ] O usuário deve ser identificado por um JWT (JSON Web Token).