let gameseq =[];
let userseq = [];
let btn = document.querySelectorAll("button");


let btns = ["red","blue","yellow","green"];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener("keypress",function(event){


    if(started == false){
        console.log("game started");
        started = true;
        levelup();
}
});
function gameflash(btn){
    btn.classList.add('gameflash');
    setTimeout(function(){
        btn.classList.remove('gameflash');
    },250);
}
function userflash(btn){
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash');
    },250);}

function levelup (){
    userseq = [];
    level ++;
    h2.innerText=`level${level}`;
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    gameflash(randbtn);
    console.log(gameseq);

}
function  checkAns(idx){
    if(userseq[idx] === gameseq[idx]){
        if (userseq.length == gameseq.length){
    setTimeout(levelup,1000);
        }
    }
        else{
            h2.innerHTML = `GAME-OVER! your score was : ${level}<br>PLZ TRY AGAIN <br> plz press any key to restart`,1000;
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "white";
            },150);
            reset ();

        }
    }
   
    

function btnPress(){
    let btn = this;
    userflash(btn);
    
    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);


}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;  
        
}
