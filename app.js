/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/
let board = ['','','','','','','','','']
let turn = 'X'
let winner = false
let tie = false

/*------------------------ Cached Element References ------------------------*/
const sqrEl = document.querySelectorAll('.sqr')
const msgEl = document.querySelector('#message')
const resetBtnEl = document.querySelector('#reset')
// console.log(sqrEl,msgEl,resetBtnEl)


/*-------------------------------- Functions --------------------------------*/

const render= () => {
    board.forEach((value, index) => {
        sqrEl[index].textContent = value;
    });  
    if (winner) {
        msgEl.textContent = `Congrats, Player '${turn}' wins!`
    } else if (tie) {    
        msgEl.textContent = `It's a tie!`
    } else {
        msgEl.textContent = `it's ${turn}'s turn`
    }
} 

const handlePlay = (event) => {
    const sqrIndex = event.target.id;
    if (board[sqrIndex] !== '' || winner || tie){
        return;
    }
    board[sqrIndex] = turn;
    checkWinner()
    checkTie()
    if (winner === false && tie === false){
        if (turn === 'X'){
            turn = 'O'
        } else {
            turn = 'X'
        }
    }
    render()
}

const checkWinner = () => {
    if (board[0] !== '' && board[0] === board[1] && board[0] === board [2]) {winner = true}
    if (board[3] !== '' && board[3] === board[4] && board[3] === board [5]) {winner = true}
    if (board[6] !== '' && board[6] === board[7] && board[6] === board [8]) {winner = true}
    if (board[0] !== '' && board[0] === board[3] && board[0] === board [6]) {winner = true}
    if (board[1] !== '' && board[1] === board[4] && board[1] === board [7]) {winner = true}
    if (board[2] !== '' && board[2] === board[5] && board[2] === board [8]) {winner = true}
    if (board[0] !== '' && board[0] === board[4] && board[0] === board [8]) {winner = true}
    if (board[2] !== '' && board[2] === board[4] && board[2] === board [6]) {winner = true}
    
    
}

const checkTie = () => {
    if (winner) {
        return;
    }
    let emtySqrCount = 0
    board.forEach((sqr)=>{
            if (sqr === '') {
                emtySqrCount ++
            }
        })
    
    if (emtySqrCount === 0) {
        tie = true
    }
};

const resetGame = () => {
    board = ['','','','','','','','','']
    turn = 'X'
    winner = false
    tie = false
    render()
}
resetGame()
/*----------------------------- Event Listeners -----------------------------*/

sqrEl.forEach((sqr) => {
    sqr.addEventListener('click' , handlePlay)   
})

resetBtnEl.addEventListener('click', resetGame)
