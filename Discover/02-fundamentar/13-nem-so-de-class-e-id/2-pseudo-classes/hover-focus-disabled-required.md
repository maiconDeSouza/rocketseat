# Ações do usuário

Algumas estilos só são aplicados quando o usuário faz alguma ação na página.

## :hover
~~~
a:hover {
  color: red;
}
~~~
Vai mudar a cor do link para vermelho quando o usuário passar o mouse sobre o link

## :focus 
é aplicado quando o elemento recebe o foco da ação do usuário que pode ser feita utilizando o teclado ou clicando no elemento com o mouse. É comumente usado em campos de input como uma forma de mostrar qual o input "ativo".

~~~
input:focus {
  border-color: red;
}
~~~

Também podemos usar atributos para selecionar elementos no CSS

Atributos

## :disabled

HTML
~~~
<input type="text" disabled>
CSS

input:disabled {
  background-color: green;
}
~~~

## :required

HTML
~~~
<input type="text" required>
CSS

input:required {
  background-color: red;
}
~~~

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes