let boxes=document.querySelectorAll(".box");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let reset=document.querySelector("#reset");
let newGame=document.querySelector("#new-game");

let turn0=true;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const disableBoxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}

const enableBoxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
    })
}





const showWinner=(winner)=>{
msg.innertext="Congratulations,Winner is "+winner;
disableBoxes();
msgContainer.classList.remove("hide");
}



const resetGame=()=>{
    turn0=true;
    boxes.forEach((box)=>{
        box.innertext="";
        
    })
    enableBoxes();

}

boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
    if(turn0=true){
        box.innertext="0";
        turn0=false;
                }
    else{
        box.innertext="X";
        turn0=true
        }
        box.disabled=true;
    })})


for(let pattern of winPatterns){
    let pos1val=boxes[pattern[0]].innertext;
    let pos2val=boxes[pattern[0]].innertext;
    let pos3val=boxes[pattern[0]].innertext;

    if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val == pos2val && pos2val == pos3val){
            showWinner(pos1val);
        }
    }
}

reset.addEventListener("click",()=>{
    resetGame();
})
newGame.addEventListener("click",()=>{
    resetGame();
    msgContainer.classList.add("hide");
})
