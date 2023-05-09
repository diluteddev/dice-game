function shuffle(){
    // location.reload();
    // left Dice
    var leftDice=Math.floor(Math.random()*6)+1;
    // E:\Dice-project\dice\inverted-dice-1.png
    // ./dice/inverted-dice-6.png
    var leftDiceSource="./dice/inverted-dice-"+leftDice+".png";
    console.log(leftDiceSource);
    document.getElementById("leftDice").setAttribute("src",leftDiceSource);
   
    // right dice
    var rightDice=Math.floor(Math.random()*6)+1;
    var rightDiceSource="./dice/inverted-dice-"+rightDice+".png";
    document.querySelectorAll("img")[1].setAttribute("src",rightDiceSource);

    if(leftDice>rightDice){
        document.querySelector("h1").innerHTML="player 1 Won 🚩";
        
    }
    else if(leftDice<rightDice){
        document.querySelector("h1").innerHTML="player 2 Won 🚩";
        
    }
    else{
        document.querySelector("h1").innerHTML="Drow!";
    }

}