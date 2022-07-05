const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
let blocP1 = document.getElementById('p1-signs')
let blocP2 = document.getElementById('p2-signs')
let result = document.getElementById('result')
const min = 0
const max = 5
let signs = ['rock', 'paper', 'scissors','rock','paper','scissors']

let p1 = ""
let p2 =  ""

const play = () => {
const random = Math.floor(Math.random() * max) + min
p2 =  signs[random]
    console.log('play',p1,p2)
if (p1  === p2) {
    result.innerHTML = `<p>DRAW</p>`
}else if (p1 === 'rock' && p2 === 'scissors') {
    // blocP1.innerHTML = `<img src="img/rock p1.png" alt="">`
    // blocP2.innerHTML = `<img src="img/scissors p2.png" alt="">`
    result.innerHTML = `<p>YOU WIN !!</p>`
}else if (p1 === 'scissors' && p2 === 'paper') {
    result.innerHTML = `<p>YOU WIN !!</p>`
}else if (p1 === 'paper' && p2 === 'rock') {
    result.innerHTML = `<p>YOU WIN !!</p>`
}
else{
    result.innerHTML = `<p>YOU LOST !</p>`
}
const theSigns2 = () => {
    if (p2 === 'rock') {
        blocP2.innerHTML = `<img src="img/rock-p2.png" alt="">`
    }if (p2 === 'paper') {
        blocP2.innerHTML = `<img src="img/paper-p2.png" alt="">`
    }if (p2 === 'scissors') {
        blocP2.innerHTML = `<img src="img/scissors-p2.png" alt="">`
    }
}

setTimeout(70000)


theSigns2()

}


const theSigns = () => {
    
    if (p1 === 'rock') {
    blocP1.innerHTML = `<img src="img/rock-p1.png" alt="">`
    }else if (p1 === 'paper') {
    blocP1.innerHTML = `<img src="img/paper-p1.png" alt="">`
    }else if (p1 === 'scissors') {
        blocP1.innerHTML = `<img src="img/scissors-p1.png" alt="">`
    }
   
}

function rockResult(){
    // result.innerHTML = ``
    p1 = 'rock';
    play();
    theSigns();
}
function paperResult(){
    // result.innerHTML = ``
    p1 = 'paper';
    play();
    theSigns();

}
function scissorsResult(){
    // result.innerHTML = ``
    p1 = 'scissors';
    play();
    theSigns();

}

rock.addEventListener('click', rockResult)
paper.addEventListener('click', paperResult)
scissors.addEventListener('click', scissorsResult)

result.classList.add('pre-animation');
result.innerHTML = innerHTMLString +'ravi';
setTimeout(function(){
    result.classList.remove('pre-animation')
},100)