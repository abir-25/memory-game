document.addEventListener('DOMContentLoaded', () => {

    // Create Card
    const cardArray = [
        {
            name: 'Spider-Man',
            img: 'images/Spiderman.jpg'
        },
        {
            name: 'Spider-Man',
            img: 'images/Spiderman.jpg'
        },
        {
            name: 'Bat-Man',
            img: 'images/batman.jpg'
        },
        {
            name: 'Bat-Man',
            img: 'images/batman.jpg'
        },
        {
            name: 'Iron-Man',
            img: 'images/iron-man.jpg'
        },
        {
            name: 'Iron-Man',
            img: 'images/iron-man.jpg'
        },
        {
            name: 'Super-Man',
            img: 'images/superman.png'
        },
        {
            name: 'Super-Man',
            img: 'images/superman.png'
        },
        {
            name: 'Captain-America',
            img: 'images/captain-america.jpg'
        },
        {
            name: 'Captain-America',
            img: 'images/captain-america.jpg'
        },
        {
            name: 'Thor',
            img: 'images/thor.jpg'
        },
        {
            name: 'Thor',
            img: 'images/thor.jpg'
        },
        {
            name: 'Optimize-Prime',
            img: 'images/optimize-prime.jpg'
        },
        {
            name: 'Optimize-Prime',
            img: 'images/optimize-prime.jpg'
        },
        {
            name: 'BumpleBee',
            img: 'images/bumblebee.jpg'
        },
        {
            name: 'BumpleBee',
            img: 'images/bumblebee.jpg'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    // Create Board
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/img-' + i + '.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }

    }

    createBoard()

    // Check for Matches

    function CheckForMatch() {
        var cards = document.querySelectorAll('img')
        const OptionOneId = cardsChosenId[0]
        const OptionOTwoId = cardsChosenId[1]

        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You Found a Match')
            cards[OptionOneId].setAttribute('src', 'images/white.jpg')
            cards[OptionOTwoId].setAttribute('src', 'images/white.jpg')
            cardsWon.push(cardsChosen)
        }
        else {
            alert('Sorry Try Again')
            cards[OptionOneId].setAttribute('src', 'images/img-' + OptionOneId + '.jpg')
            cards[OptionOTwoId].setAttribute('src', 'images/img-' + OptionOTwoId + '.jpg')
             
        }
        cardsChosen = []
        cardsChosenId = []

        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You Found them all'
        }
    }

    //Flip Your Card

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(CheckForMatch, 500)
        }
    }
})