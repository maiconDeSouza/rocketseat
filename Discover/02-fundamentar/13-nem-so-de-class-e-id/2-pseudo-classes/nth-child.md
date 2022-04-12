# :nth-child()

É quando queremos selecionar o primeiro filho de um grupo de elementos.

HTML
~~~
<ul>
	<h3>Palavras bonitas</h3>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
</ul>
CSS

ul li:nth-child(2) {
  font-weight: bold;
}
~~~

# :nth-child(odd) e :nth-child(even)

even - números pares
odd - números ímpares
HTML
~~~
<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  <li>Liberdade</li>
</ul>
CSS

ul li:nth-child(odd) {
  color: gray;
}
~~~
