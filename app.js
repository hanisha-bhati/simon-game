let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelup();
    }
});

function gameflash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },250);
}

function userflash(btn){
   btn.classList.add("userflash");
   setTimeout(function(){
    btn.classList.remove("userflash");
   },250);
}



function levelup(){
    userSeq=[];
    level++;
    h3.innerText=`level ${level}`;

    let randIdx=Math.floor(Math.random()*3)+1;
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randBtn);
    
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        let highscore=0;
        if(level>highscore){
       highscore=level;
     }
        h3.innerHTML=`Game Over! your score was <b>${level}</b> <br>  High Score : ${highscore} <br>Press any Key to restart.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
             document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
}

function btnPress(){
    let btn=this;
    userflash(btn);

  let  userColor=btn.getAttribute("id");
   userSeq.push(userColor);
  
   checkAns(userSeq.length-1);
}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

