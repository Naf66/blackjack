let player ={
    Name : "Nafe",
    chip: 150,
    hello: function(){
        
    }
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")
let messageEl = document.getElementById("message-el")



let playerEl=document.getElementById("player-el")
playerEl.textContent= player.Name + ": $" + player.chip

function genarateRandom() {
    let randomNumber = Math.random() * 13
    randomNumber = Math.floor(randomNumber) + 1
    if (randomNumber == 11 || randomNumber == 12 || randomNumber == 13) {
        randomNumber = 10
    }
    if (randomNumber == 1) {
        randomNumber = 11
    }
    return randomNumber
}
function startGame() {
    isAlive = true
    let firstCard = genarateRandom()
    let secondCard = genarateRandom()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame();
}

function renderGame() {
    let res = "Cards :"
    for (let i = 0; i < cards.length; i++) {
        res += " " + cards[i]
    }
    cardsEl.textContent = res
    sumEl.textContent = "Sum : " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }


    messageEl.textContent = message
}
function newCard() {
    if(isAlive===true && hasBlackJack===false){

        let newcard = genarateRandom()
        sum += newcard
        cards.push(newcard)
        renderGame()
    }
}


console.log(message)
