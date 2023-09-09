document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        // 1
        {
            name: 'fries',
            img: 'img/fries.png',
        },
        {
            name: 'cheeseburger',
            img: 'img/cheeseburger.png',
        },
        {
            name: 'hotdog',
            img: 'img/hotdog.png',
        },
        {
            name: 'ice-cream',
            img: 'img/ice-cream.png',
        },
        {
            name: 'milkshake',
            img: 'img/milkshake.png',
        },
        {
            name: 'pizza',
            img: 'img/pizza.png',
        },

        // 2
        {
            name: 'fries',
            img: 'img/fries.png',
        },
        {
            name: 'cheeseburger',
            img: 'img/cheeseburger.png',
        },
        {
            name: 'hotdog',
            img: 'img/hotdog.png',
        },
        {
            name: 'ice-cream',
            img: 'img/ice-cream.png',
        },
        {
            name: 'milkshake',
            img: 'img/milkshake.png',
        },
        {
            name: 'pizza',
            img: 'img/pizza.png',
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const gridDisplay = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenIds = []
    let cardsWon = []

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'img/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            gridDisplay.appendChild(card)
        }
    }

    //check for matches
    function checkMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenIds[0]
        const optionTwoId = cardsChosenIds[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'img/blank.png')
            cards[optionTwoId].setAttribute('src', 'img/blank.png')
            alert('Kerja yang Bener Dong!')
        }
        else if (cardsChosen[0] == cardsChosen[1]) {
            alert('Kerja Bagus!')
            cards[cardsChosenIds[0]].setAttribute('src', 'img/white.png')
            cards[cardsChosenIds[1]].setAttribute('src', 'img/white.png')
            cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
            cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'img/blank.png')
            cards[optionTwoId].setAttribute('src', 'img/blank.png')
            alert('Temukan Gambar yang Similar!')
        }
        cardsChosen = []
        cardsChosenIds = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length == cardArray.length / 2) {
            // resultDisplay.textContent = 'Gini Aja Lama Banget! Ayo Lebih Cepat Lagi!'
            alert('Gini Aja Lama Banget! Ayo Lebih Cepat Lagi!')
        }
    }

    //flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenIds.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkMatch, 500)
        }
    }

    createBoard()
})