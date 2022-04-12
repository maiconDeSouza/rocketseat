Nessa aula vamos ver sobre o box-sizing que é o responsável pelo calculo do tamanho total da caixa (box).

Podemos usar a ferramenta de desenvolvedor do próprio navegador para visualizar as especificações dos elementos da página

![img](https://xesque.rocketseat.dev/forum/1630331307131-image.png)

💻 Exemplo:
HTML:

<div>
	CSS é incrível!
</div>
CSS:

div {
   width: 100px; 
   height: 100px;
   border: 1px solid red;
   margin: 10%;
}
Esse é o resultado obtido ao usar o código acima:
![img](https://xesque.rocketseat.dev/forum/1630331327738-image.png)

Quando o padding é adicionado (padding: 0 20px;) faz com que aumente a largura da caixa, deixando de respeitar os 100px de largura:
![img](https://xesque.rocketseat.dev/forum/1630331344721-image.png)

E é por isso que é tão importante conhecer a propriedade do box-sizing.

Por padrão o navegador vai calcular o tamanho da caixa pelo content-box e vai somar com os outros boxes, no exemplo acima no lugar de 100px a caixa vai ficar com uma largura de 140px. Para que isso não aconteça, é possível mudar qual vai ser a referência para o calculo do tamanho da caixa adicionando a propriedade box-sizing: border-box;.

Dessa forma o elemento vai ficar com a largura (width) determinado, que no caso do exemplo citado é de 100px.

![img](https://xesque.rocketseat.dev/forum/1630331360926-image.png)

Normalmente usa-se o código abaixo como forma de "resetar" o box-sizing que vem por padrão nos navegadores.

* {
   box-sizing: border-box;
}
O seletor * seleciona todos os elementos da página.