# Mini Blog GitHub Challenge

Bem-vindo ao meu projeto do desafio da Rocketseat para a trilha de ReactJS do Ignite. Neste desafio, desenvolvi uma aplicação de blog pessoal usando a API do GitHub para buscar issues de um repositório e exibi-las como posts. A aplicação inclui funcionalidades como listar o perfil do usuário, filtrar issues e exibir um post completo.

Ao abordar este desafio, optei por não me concentrar na replicação integral do layout, priorizando, em vez disso, o desenvolvimento ágil das minhas habilidades em ReactJS. Essa decisão foi motivada pela busca por uma aprendizagem eficiente e rápida, com o objetivo final de aplicar essas habilidades em projetos futuros.

Apesar da escolha de não reproduzir 100% do layout proposto, estou satisfeito com os resultados alcançados. Acredito que a abordagem adotada permitiu um progresso significativo no aprimoramento das minhas competências em ReactJS. Este projeto serviu como uma valiosa oportunidade para explorar conceitos fundamentais e aplicá-los de maneira prática, contribuindo para minha jornada de crescimento como desenvolvedor.

Essa abordagem estratégica, focada na eficácia e na aplicação prática, reflete meu compromisso em adquirir habilidades de forma ágil e aplicável. Estou confiante de que as lições aprendidas aqui serão fundamentais para meus futuros projetos e desafios no campo do desenvolvimento web.



## Funcionalidades

- Listagem do perfil com imagem, número de seguidores, nome e outras informações disponíveis pela API do GitHub.
- Listar e filtrar todas as issues do repositório com um pequeno resumo do conteúdo dela.
- Criar uma página para exibir um post (issue) completo.

## Layout da Aplicação

O layout da aplicação foi desenvolvido no Figma e pode ser acessado [aqui](https://www.figma.com/community/file/1138814951106121051). Certifique-se de criar uma conta no Figma para acessar o layout.

## Tecnologias Utilizadas

- React com Vite e TypeScript
- Axios para requisições HTTP
- React Hook Form para formulários
- React Router DOM para roteamento
- React Markdown para renderização de Markdown

## Desenvolvimento do Projeto

Para desenvolver este projeto, utilizei as principais ferramentas do primeiro módulo do Ignite, incluindo React com Vite e TypeScript, Axios, React Hook Form, entre outras bibliotecas. Também fiz preparativos, como a criação de um repositório público no GitHub para as issues que representam os posts do blog.

**Versão Mobile:** Além do que foi pedido no desafio, criei uma versão mobile para praticar e melhorar minhas habilidades de desenvolvimento responsivo.

## APIs do GitHub Utilizadas

- [GitHub Users API](https://docs.github.com/pt/rest/users/users#get-a-user): Para buscar os dados do meu usuário do GitHub.
- [GitHub Search API](https://docs.github.com/pt/rest/search): Para filtrar issues do repositório e fazer buscas.
- [GitHub Issues API](https://docs.github.com/pt/rest/issues/issues#get-an-issue): Para exibir o post completo.

Lembre-se que a API do GitHub possui um limite de requisições por minuto, por isso, é importante configurar uma chave privada para aumentar o limite.

## Como Rodar o Projeto

1. Clone este repositório.
2. Instale as dependências usando `npm install`.
3. Execute o projeto com `npm run dev`.
4. Acesse a aplicação em [http://localhost:5173/](http://localhost:5173/).

## Contribuições

Sinta-se à vontade para abrir issues ou pull requests se encontrar algum problema ou tiver sugestões para melhorias. 
---

**Desenvolvido por Maicon Souza**
