// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//  NFT

let i = 0

const carros = ['../images/carros/celta.jpeg', '../images/carros/celta-10.jpeg', '../images/carros/fox-frente.jpeg',
'../images/carros/siena.jpeg', '../images/carros/onix.jpeg', '../images/carros/gol.jpeg']

const labels = ['CELTA', 'CELTA 1.0L LT', 'FOX ROCK IN RIO', 'SIENA EL 1.0 FLEX', 'ONIX 1.4MT LT', 'GOL TL MB S']

const sd = document.querySelector('#seta-direita')
const se = document.querySelector('#seta-esquerda')
const img = document.querySelector('#carimg')
const text = document.querySelector('#nome-do-carro')
const imi = document.querySelector('#inner-modal-image')
const imt = document.querySelector('#inner-modal-text')

sd.addEventListener('click', (event) => {
  event.preventDefault()

  if(i==5)  i = 0
  else  i++

  makeChanges(i)
})

se.addEventListener('click', (event) => {
  event.preventDefault()

  if(i==0)  i = 5
  else  i--

  makeChanges(i)
})

function makeChanges(i){
  img.setAttribute('src', carros[i])
  img.setAttribute('alt', labels[i])
  text.innerText = labels[i]
  imi.setAttribute('src', carros[i])
  imi.setAttribute('alt', labels[i])
  imt.innerText = labels[i]
}