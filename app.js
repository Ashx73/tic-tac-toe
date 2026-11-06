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
} 

const handlePlay = (event) => {
    const sqrIndex = event.target.id;
    if (board[sqrIndex] !== '' || winner || tie){
        return;
    }
    board[sqrIndex] = turn;
    render()
}


/*----------------------------- Event Listeners -----------------------------*/

sqrEl.forEach((sqr) => {
    sqr.addEventListener('click' , handlePlay)   
})