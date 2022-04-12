# article

Definição e uso
A <article>tag especifica conteúdo independente e autocontido.

Um artigo deve fazer sentido por si só e deve ser possível distribuí-lo independentemente do resto do site.

Fontes potenciais para o <article>elemento:

Postagem no fórum
Postagem do blog
Notícia
Nota: O <article>elemento não é renderizado como algo especial em um navegador. No entanto, você pode usar CSS para estilizar o <article> elemento (veja o exemplo abaixo).

~~~ html
    <main>
        <h1>Receitas</h2>
        <p>Essa é uma página de receitas.</p>

        <article>
            <h2>Receita 1</h2>
            <p>Essa é a receita 1</p>
        </article>

        <article>
            <h2>Receita 2</h2>
            <p>Essa é a receita 2</p>
        </article>
    </main>
~~~