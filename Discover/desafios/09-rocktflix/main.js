import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'

const buttonPlay = document.querySelector('button')
const capaFilme = document.querySelector('.capa-filme')
const textoFilme = document.querySelector('.texto-filme')
const img = document.querySelector('.capa-filme img')
const p = document.querySelector('.texto-filme p')



buttonPlay.addEventListener('click', e =>{
  e.preventDefault()
  main()
})



const numero = 2

async function main(){
  if(capaFilme.childNodes[0]){
    capaFilme.innerHTML =''
  }
  if(textoFilme.childNodes[0]){
    textoFilme.innerHTML =''
  }
 
  const capaImg = document.createElement('img')
  const textoP = document.createElement('p')
  const db = await fetch(`${BASE_URL}/${numero}?api_key=${API_KEY}&${language}`)
  const dbJson = await db.json()

  capaImg.setAttribute('src', `${IMG_URL}${dbJson.poster_path}`)
  textoP.innerText = `${dbJson.overview}`
  capaFilme.appendChild(capaImg)
  textoFilme.appendChild(textoP)
  
  

  // document.querySelector('body').innerHTML = `<img src="${IMG_URL}/${dbJson.poster_path}" alt="">`
}


