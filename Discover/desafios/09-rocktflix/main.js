import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'

const buttonPlay = document.querySelector('button')
const capaFilme = document.querySelector('.capa-filme')
const textoFilme = document.querySelector('.texto-filme')




buttonPlay.addEventListener('click', e =>{
  e.preventDefault()
  // main()
  getMovie()
})


async function getMovie(){
  const numero = Math.floor(Math.random() * (1000 - 1 + 1)) + 1
  const db = await fetch(`${BASE_URL}/${numero}?api_key=${API_KEY}&${language}`)
  const status = await db.status
  
  const dbJson = await db.json()
  

  const img = await `${IMG_URL}${dbJson.poster_path}`
  const text = await dbJson.overview

  await createHTML(img, text, status)
}

function createHTML(img, text, status){
  if(status === 404){return vaEstudar()}
  if(!capaFilme.querySelector('img') && !textoFilme.querySelector('p')){
    const tagImg = document.createElement('img')
    const tagP = document.createElement('p')

    tagImg.setAttribute('src', img)
    tagP.innerText = text

    capaFilme.appendChild(tagImg)
    textoFilme.appendChild(tagP)
  } else{
    const tagImg = capaFilme.querySelector('img')
    const tagP = textoFilme.querySelector('p')
    
    tagImg.setAttribute('src', img)
    tagP.innerText = text

  }

  function vaEstudar(){
    console.log('Vamos estudar')
    const img = './assets/codar.jpg'
    const text = 'Hoje sem Filmes, vamos codar!!!'
    if(!capaFilme.querySelector('img') && !textoFilme.querySelector('p')){
      const tagImg = document.createElement('img')
      const tagP = document.createElement('p')
  
      tagImg.setAttribute('src', img)
      tagP.innerText = text
  
      capaFilme.appendChild(tagImg)
      textoFilme.appendChild(tagP)
    } else{
      const tagImg = capaFilme.querySelector('img')
      const tagP = textoFilme.querySelector('p')
  
      tagImg.setAttribute('src', img)
      tagP.innerText = text
  
    }
  }


  
  

  
  

  
  
}

// async function main(){
//   const numero = Math.floor(Math.random() * (1000 - 1 + 1)) + 1
//   const db = await fetch(`${BASE_URL}/${numero}?api_key=${API_KEY}&${language}`)
//   const dbJson = await db.json()
  
//   console.log(numero)
//   const img = document.querySelector('.capa-filme  img')
//   const p = document.querySelector('.texto-filme p')
//   let capaImg;
//   let textoP;
 
//   if(!img){
//     capaImg = document.createElement('img')
//   }
//   if(!p){
//     textoP = document.createElement('p')
//   }

  

//     if(img){
//       capaImg.removeAttribute('src')
//     }
//     if(p){
//       textoP.innerText = ''
//     }
 
//     console.log(dbJson.poster_path)
//     capaImg.setAttribute('src', `${IMG_URL}${dbJson.poster_path}`)
//     capaFilme.appendChild(capaImg)
  
    
  
//     textoP.innerText = `${dbJson.overview}`
//     textoFilme.appendChild(textoP)
  
  
  
  

  
  
  
  
  
//   console.log('fim')

//   // document.querySelector('body').innerHTML = `<img src="${IMG_URL}/${dbJson.poster_path}" alt="">`
// }


