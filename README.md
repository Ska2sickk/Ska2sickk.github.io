# Ska2sickk.github.io
<!DOCTYPE html>

<html lang="en">

<style>

body {

background-color:grey;

}

<style>

{

text-align: center;

}

text-align: center;

}

</style>

<body text="white"></body>

<title id="tit">BMIcalc</title>

</head>

<body>

<div class="calculator-container">

<h1>Calculatrice BMI</h1>

<p>Hauteur en mètres:</p>

<input class="height-input-field" type="text">

<p>poids en kilograms:</p>

<input class="weight-input-field" type="text">

<p>

<button id="calcButton" class="glow-on-hover"> Calcule</button>

</div>

<h3 class="result"></h3>

<p class="result-statement"></p>

<img src= "https://th.bing.com/th/id/OIP.CX4WOUXJZ0iCvG2PCT6ELgHaEK?w=326&h=183&c=7&r=0&o=5&pid=1.7">

<script>

var heightInput = document.querySelector(".height-input-field");

var weightInput = document.querySelector(".weight-input-field");

var calculateButton = document.querySelector(".calculate");

var result = document.querySelector(".result");

var statement = document.querySelector(".result-statement");

var BMI, height, weight;

calcButton.addEventListener("click", ()=>{

height2 = heightInput.value;

weight = weightInput.value;

BMI = weight/(height2**2);

result.innerText = Math.round(BMI);

if(BMI < 18.5){

statement.innerText = "Ton BMI est sous la moyenne";

}else if((BMI > 18.5) && (BMI <= 24.9)){

statement.innerText = "Ton BMI est à la moyenne";

}else if((BMI >= 25) && (BMI <= 29.9 )){

statement.innerText = "Ton BMI est au dessus de la moyenne";

}else{

statement.innerText = "Ton BMI se trouve beaucoup au dessus de la moyenne";

}

})
