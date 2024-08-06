let boxes = document.querySelectorAll(".box");
let button2 = document.querySelector(".btn2");
let button1 = document.querySelector(".btn1");
let heading1 = document.querySelector(".heading1");
let winnerContainer = document.querySelector(".win");
winnerContainer.classList.add("hide");


// console.log(heading1);
let turnO = true;
let count = 0;

let winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,5,6]
];
const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const resetGame = () => {
    turnO =true;
    enableBoxes();
    count = 0;
    winnerContainer.classList.add("hide")
}
const newGame = () => {
    turnO =true;
    winnerContainer.classList.add("hide")
    enableBoxes();
    count = 0;
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box has been clicked")
        if (turnO) {
            box.innerText = "O";
            box.style.color = "#2A9D8F";
            turnO = false;
        }
        else {
            box.innerText = "X";
            box.style.color = "#2F2963";
            turnO = true;
        }
        box.disabled = true;
        chkWinner();
    count++
    let isWinner = chkWinner();
    
    if (count===9 && !isWinner){
        drawMessage();
        disableBoxes();
    }
    });
});
const winnerMessage = (winner) =>{
    heading1.innerText = `Congratulations winner is ${winner}`;
    winnerContainer.classList.remove("hide");
    disableBoxes();
} 
const drawMessage = (winner) =>{
    heading1.innerText = "The match has been Drawn";
    // heading1.innerText = "میچ ڈرا ہو گیا ہے";
    winnerContainer.classList.remove("hide");
    disableBoxes();
} 
const chkWinner = () =>{
     for(pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner", pos1Val);
                winnerMessage(pos1Val);
            }
        }
        // if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        //     if(count==9 && pos1Val != pos2Val && pos2Val != pos3Val){
        //     drawMessage();
        //     }
        // }
    }    
}

    button2.addEventListener("click" , resetGame);
    button1.addEventListener("click" , newGame);