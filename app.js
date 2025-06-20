let userscore=0;
let computerscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score-value");
const computerscorepara=document.querySelector("#Computer-score-value");
const generateCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIDX=Math.floor(Math.random()*3);
    return options[randomIDX];
};
const drawgame=()=>{
   
    msg.innerText="Game was Draw.play again.";
    msg.style.backgroundColor="blue";
};
const showWinner=(userWin,userChoice,compChoice)=>
{
    if(userWin)
    {    userscore++;
        
        userscorepara.innerText=userscore;
       
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";

    }
    else{
        computerscore++;
       computerscorepara.innerText=computerscore;
        console.log("You Lose");
        msg.innerText=`You lost.  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const playgame = (userChoice) => {
    console.log("user choice =", userChoice);

    const compChoice = generateCompChoice();
    console.log("computer choice =", compChoice);

    if (userChoice === compChoice) {
        drawgame();
    } else {
        let userWin = true;

        if (userChoice === "rock" ) 
        {
            userWin=compChoice=="paper"? false:true;
            }
            else if(userChoice=="paper")
            {
               userWin= compChoice==="scissors"?false:true;
            }
            else{
                userWin=compChoice==="rock"? false:true;            }
         showWinner(userWin,userChoice,compChoice);
            
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); // assuming each button has id like "rock", "paper", "scissors"
        console.log("User choice:", userChoice);

        playgame(userChoice);
    });
});