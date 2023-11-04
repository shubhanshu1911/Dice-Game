// generating random number 1 
var randomNumber1 = (Math.random() * 6) + 1;
randomNumber1 = Math.floor(randomNumber1);

// linking the random number with a image
var diceImage1Source = "images/" + "dice" + randomNumber1 + ".png"; // images/dice1.png - images/dice6.png
document.querySelectorAll("img")[0].setAttribute("src", diceImage1Source);

// generating random number 1 
var randomNumber2 = Math.random();
randomNumber2 = (randomNumber2 * 6) + 1
randomNumber2 = Math.floor(randomNumber2);

// linking the random number with a image
var diceImage2Source = "images/dice" + randomNumber2 + ".png"; // images/dice1.png - images/dice6.png
document.querySelectorAll("img")[1].setAttribute("src", diceImage2Source);

// Changing H1 according to random number 
if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw";
}
else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}

