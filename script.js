let boxes = document.querySelectorAll(".box");
let winner = document.querySelector(".winner");
let resetBtn = document.querySelector(".resetbtn")


let turn = true;

let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];



let disabledbox = ()=>{
    for(box of boxes){
        box.disabled=true;
    }
}


let resetgame = ()=>{
    enabledbox();
    turn= true;

}


let enabledbox = ()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
        winner.innerText=""
    }
}





boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        if(turn){
            box.innerText="O";
            turn=false;
        
        }else{
            box.innerText="X";
            turn = true;
        }
        box.disabled = true;
        checkwinner();
        
    })
})
let checkwinner = ()=>{
    for(let pattern of winningPattern ){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if (pos1=== pos2 && pos2===pos3) {
                winner.innerText=`WINNER IS : ${pos1}`
                disabledbox();
                
                
            }
         }
    }
     
}

resetBtn.addEventListener("click",resetgame );