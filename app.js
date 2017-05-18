const die = document.querySelector('#die')
const roll = document.querySelector('#roll')
const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')
let rollNum =null
let isPlayer1Turn = true
die.addEventListener('click', function(){
die.setAttribute('src', 'img/Dodecahedron3.gif')
rollNum = Math.floor(Math.random()*10)+1
roll.textContent = '7'
console.log(rollNum);
const tile = document.querySelector(`#tile${rollNum}`)
const titlePosition = tile.getBoundingClientRect()

setTimeout(function(){
  roll.textContent = rollNum
let currentPlayer = player1
if(currentPlayer){


}




  player1.style.top = titlePosition.top + 'px'
  player1.style.left = titlePosition.left + 'px'
  isPlayer1Turn = !isPlayer1Turn
},1000)

})
