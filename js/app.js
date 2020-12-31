const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0

let currentTime = 60
function randomSquare(){
    square.forEach(className =>{
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random()*9)]
    randomPosition.classList.add('mole')

    //assign the id of the randomPosition to hitPosition for us to use later
    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mousedown',()=>{
        if(id.id === hitPosition){
            result =result+1
            score.textContent = result
            console.log(hitPosition)
        }
    })
})

function moveMole(){
    let timerId = null
    timerId= setInterval(randomSquare, 800)
}
moveMole()

function countDown(){
    currentTime--
    timeLeft.innerHTML=currentTime

    if(currentTime === 0){
        clearInterval(timerId)
        score.textContent=`TIME'S UP!! Your final score is  ${result}`
        timeLeft.textContent=`TIME'S UP!! Your final score is  ${result}`
        result.toString
        score.style.color ='hotpink'
    }
}

timerId = setInterval(countDown,1000)