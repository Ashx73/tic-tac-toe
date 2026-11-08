/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let currentPlayer = 'X'
let gameOver = false

/*------------------------ Cached Element References ------------------------*/
const msgEl = document.querySelector('#message')
const sqr0El = document.getElementById('0')
const sqr1El = document.getElementById('1')
const sqr2El = document.getElementById('2')
const sqr3El = document.getElementById('3')
const sqr4El = document.getElementById('4')
const sqr5El = document.getElementById('5')
const sqr6El = document.getElementById('6')
const sqr7El = document.getElementById('7')
const sqr8El = document.getElementById('8')

/*-------------------------------- Functions --------------------------------*/


function SwitchPlayer () { 
    
}


/*----------------------------- Event Listeners -----------------------------*/

sqr0El.addEventListener('click', () => {
    if (sqr0El.textContent !== '' || gameOver === true ) {
        return
    }
    sqr0El.textContent = currentPlayer
    if (currentPlayer === 'X') { 
        currentPlayer = 'O'
    } else {
        currentPlayer = 'X'
    }  
    msgEl.textContent = `it's ${currentPlayer} turn`
})
sqr1El.addEventListener('click', () => {
        if (sqr1El.textContent !== '' || gameOver === true ) {
        return
    }
    sqr1El.textContent = currentPlayer
    if (currentPlayer === 'X') { 
        currentPlayer = 'O'
    } else {
        currentPlayer = 'X'
    }  
    msgEl.textContent = `it's ${currentPlayer} turn`
})
sqr2El.addEventListener('click', () => {
        if (sqr2El.textContent !== '' || gameOver === true ) {
        return
    }
    sqr2El.textContent = currentPlayer
    if (currentPlayer === 'X') { 
        currentPlayer = 'O'
    } else {
        currentPlayer = 'X'
    }  
    msgEl.textContent = `it's ${currentPlayer} turn`
})
sqr3El.addEventListener('click', () => {
        if (sqr3El.textContent !== '' || gameOver === true ) {
        return
    }
    sqr3El.textContent = currentPlayer
    if (currentPlayer === 'X') { 
        currentPlayer = 'O'
    } else {
        currentPlayer = 'X'
    }  
    msgEl.textContent = `it's ${currentPlayer} turn`
})
sqr4El.addEventListener('click', () => {
        if (sqr4El.textContent !== '' || gameOver === true ) {
        return
    }
    sqr4El.textContent = currentPlayer
    if (currentPlayer === 'X') { 
        currentPlayer = 'O'
    } else {
        currentPlayer = 'X'
    }  
    msgEl.textContent = `it's ${currentPlayer} turn`
})
sqr5El.addEventListener('click', () => {
        if (sqr5El.textContent !== '' || gameOver === true ) {
        return
    }
    sqr5El.textContent = currentPlayer
    if (currentPlayer === 'X') { 
        currentPlayer = 'O'
    } else {
        currentPlayer = 'X'
    }  
    msgEl.textContent = `it's ${currentPlayer} turn`
})
sqr6El.addEventListener('click', () => {
        if (sqr6El.textContent !== '' || gameOver === true ) {
        return
    }
    sqr6El.textContent = currentPlayer
    if (currentPlayer === 'X') { 
        currentPlayer = 'O'
    } else {
        currentPlayer = 'X'
    }  
    msgEl.textContent = `it's ${currentPlayer} turn`
})
sqr7El.addEventListener('click', () => {
        if (sqr7El.textContent !== '' || gameOver === true ) {
        return
    }
    sqr7El.textContent = currentPlayer
    if (currentPlayer === 'X') { 
        currentPlayer = 'O'
    } else {
        currentPlayer = 'X'
    }  
    msgEl.textContent = `it's ${currentPlayer} turn`
})
sqr8El.addEventListener('click', () => {
        if (sqr8El.textContent !== '' || gameOver === true ) {
        return
    }sqr8El.textContent = currentPlayer
    if (currentPlayer === 'X') { 
        currentPlayer = 'O'
    } else {
        currentPlayer = 'X'
    }  
    msgEl.textContent = `it's ${currentPlayer} turn`
})
