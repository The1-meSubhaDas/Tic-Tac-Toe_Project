console.log("Welcome to The 1.inc");
let music= new Audio('music.mp3');
let audioTurn= new Audio('ting.mp3');
let audioGameOver= new Audio('gameover.mp3');
let turn ="X";
let gameOver = false;


// Function to Change The Turn
const ChangeTurn = ()=>{
    return turn === "X"?"0": "X"
}


// Function to Check For a Win
const checkWin = ()=>{
    let text = document.getElementsByClassName('text');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135]
    ]

    wins.forEach(e => {
        if((text[e[0]].innerText === text[e[1]].innerText) && (text[e[1]].innerText === text[e[2]].innerText) && (text[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = text[e[0]].innerText + " Won This Match"
            gameOver = true;
            document.querySelector('.imgContainer').getElementsByTagName('img')[0].style.width = '170px';
            document.querySelector('.line').style.transform = `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector('.line').style.width = "22vw";
            audioGameOver.play();
            
        }
    })
}



// Game Logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(Element=>{
    let text = Element.querySelector('.text');
    Element.addEventListener('click', (e)=>{
        if(text.innerText === ''){
            text.innerText = turn;
           turn = ChangeTurn();
            audioTurn.play();
            checkWin();
            if(!gameOver){
                document.getElementsByClassName('info')[0].innerText = "Turn For " + turn ;
            }
        }
    })
})


// Add OnClick Listner To Reset Button
reset.addEventListener('click',()=>{
    let texts = document.querySelectorAll('.text');
    Array.from(texts).forEach(element =>{
        element.innerText = "";
    })
    turn = "X";
    gameOver = false;
    document.getElementsByClassName('info')[0].innerText = "Turn For " + turn ;
    document.querySelector('.imgContainer').getElementsByTagName('img')[0].style.width = '0px'
    document.querySelector('.line').style.width = "0vw";
    
})
