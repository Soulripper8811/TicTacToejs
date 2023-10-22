let boxes=document.querySelectorAll(".box");

let winningCheckCombination=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function checkWinner(){
    winningCheckCombination.forEach(function(combination){
        let check=combination.every(idx=>boxes[idx].innerHTML.trim()==currentPlayer)
        if(check){
            alert(currentPlayer+" has won");
        }
    })

}
boxes=Array.from(boxes);
let currentPlayer="X";
boxes.forEach(function(boxe){
    boxe.addEventListener("click",function(){
        if(boxe.innerText.trim()!=""){
            return;
        }
        boxe.innerHTML=currentPlayer;
        checkWinner();
        currentPlayer=currentPlayer=="X"?"O":"X";
    
    })
})
