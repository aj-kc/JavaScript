let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards =[firstCard, secondCard]
let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true

let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

 

function startGame(){
    renderGame()
}


function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 11) + 1
    if (randomNumber === 1){
        return 11
    }
    else {
        return randomNumber
    }
}

function  renderGame(){
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++)
        {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum    
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

function newCard(){
    console.log("Drawing a new card from the deck!")

    let card = getRandomCard()
    
    sum += card
    cards.push(card)

    renderGame()
}