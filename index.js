let secretNumber=Math.floor(Math.random()*20)+1;

score=20;
let scorevariable=document.querySelector(".score");
scorevariable.textContent=score;

document.querySelector(".check").addEventListener("click",function(){
   let guessNumber=parseInt( document.querySelector(".guess").value);

let high=document.querySelector(".highscore")

let message=document.querySelector(".message");

   if(secretNumber<guessNumber){
      message.textContent="Too High!";
      score--;
      scorevariable.textContent=score;
   }else if(secretNumber>guessNumber){
      message.textContent="Too Low!";
      score--;
      scorevariable.textContent=score;
   }else if(secretNumber===guessNumber){
      message.textContent="Correct Guess!";
      document.querySelector(".number").textContent=secretNumber;
      document.querySelector("body").style.backgroundColor="green";
      highscore=score;
      high.textContent=highscore;

   }
});

   document.querySelector(".again").addEventListener("click",function(){
   document.querySelector(".highscore").textContent="0";
   document.querySelector(".score").textContent="0";
   document.querySelector(".number").textContent="?";
   document.querySelector("body").style.backgroundColor="black";
   document.querySelector(".message").textContent="Start guessing....";
   document.querySelector(".guess").value=null;
 });
