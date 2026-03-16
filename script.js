let botaoplay = document.getElementById('botaoplay')
let textoplay = document.getElementById('textoplay')
let jogo = document.getElementById('jogo')

let primeira = document.getElementById('primeira')
let segunda = document.getElementById('segunda')
let terceira = document.getElementById('terceira')
let quarta = document.getElementById('quarta')
let quinta = document.getElementById('quinta')
let sexta = document.getElementById('sexta')
let setima = document.getElementById('setima')
let oitava = document.getElementById('oitava')
let nona = document.getElementById('nona')
let decima = document.getElementById('decima')
let decima_primeira = document.getElementById('decima_primeira')
let decima_segunda = document.getElementById('decima_segunda')
let decima_terceira = document.getElementById('decima_terceira')
let decima_quarta = document.getElementById('decima_quarta')
let decima_quinta = document.getElementById('decima_quinta')
let decima_sexta = document.getElementById('decima_sexta')

let elementos = [
  primeira,
  segunda,
  terceira,
  quarta,
  quinta,
  sexta,
  setima,
  oitava,
  nona,
  decima,
  decima_primeira,
  decima_segunda,
  decima_terceira,
  decima_quarta,
  decima_quinta,
  decima_sexta
]

const imagem1 = 'url(imagens/primeira.jpg)'
const imagem2 = 'url(imagens/segunda.jpg)'
const imagem3 = 'url(imagens/terceira.jpg)'
const imagem4 = 'url(imagens/quarta.jpg)'
const imagem5 = 'url(imagens/quinta.jpg)'
const imagem6 = 'url(imagens/sexta.jpg)'
const imagem7 = 'url(imagens/setima.jpg)'
const imagem8 = 'url(imagens/oitava.jpg)'
const imagens = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7, imagem8]

let verificacao = []


function random(array = [], imagens = []) {
  let salvar = []  
  for (let i = 0 ; i < 2 ; i++) {
    for (imgs of imagens) {
      let indice = Math.floor(Math.random()*array.length)
      array[indice].style.backgroundImage = imgs
      array[indice].style.backgroundBlendMode = 'color'
      array[indice].style.backgroundColor = 'black'
      salvar.push(array[indice])
      array.splice(indice, 1)
    }
  }
  return salvar
}

function escolher(carta) {
  if (carta.style.backgroundColor == 'black') {
    if (verificacao.length < 2) {
      carta.style.backgroundColor = 'transparent' 
      verificacao.push(carta)
      if (verificacao.length == 2) {
        if (verificacao[0].style.backgroundImage == verificacao[1].style.backgroundImage) {
          alert("Você encontrou pares!")
          verificacao == []
        } else {
          alert("Não são pares!")
          verificacao[0].style.backgroundColor = 'black' 
          verificacao[1].style.backgroundColor = 'black'
        }
      }
    } else {
      alert('a')
    }
  } else {
    alert("Essa carta já foi descoberta!")
  }
  if (verificacao.length == 2) {
    verificacao.length = 0
  }
}

function play() { 
  botaoplay.style.display = 'none'
  jogo.style.display = 'flex'
  cartas = random(elementos, imagens)

}