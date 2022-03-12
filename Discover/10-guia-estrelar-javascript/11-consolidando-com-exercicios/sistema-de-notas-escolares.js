/* ### Transforma notas escolares

    crie um algoritmo que transforme as notas do sistema numérico para o sistema de notas em caracteres tipo A B C

    * de 90 para cima - A
    * entre 80 - 89 - B
    * entre 70 - 79 - C
    * entre 60 - 69 - D
    * menor que 60 - F
*/

function conversorDeNota(nota){
    if(nota < 60){ return console.log(`F`)}
    if(nota < 70){ return console.log(`D`)}
    if(nota < 80){ return console.log(`C`)}
    if(nota < 90){ return console.log(`B`)}
    if(nota < 100){ return console.log(`A`)}
}

conversorDeNota(59)
conversorDeNota(60)

conversorDeNota(93)
conversorDeNota(89)

conversorDeNota(70)
conversorDeNota(80)

