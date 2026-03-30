let firstCard = 20
let secondCard = 11
let hasBlackJack = false
let isAlive = true
let message = ""
let sum = firstCard + secondCard
let messageEl = document.getElementById("message-el")
console.log(messageEl)

function  startGame(){
    console.log(sum)

    if (sum < 21){
   message = "Do you want to draw a new card?" 
    }

    else if(sum === 21){
        message = "You have won!"
        hasBlackJack = true
    }

    else{
        message = "You have gone Bust!"
        }

    messageEl.textContent = message
}