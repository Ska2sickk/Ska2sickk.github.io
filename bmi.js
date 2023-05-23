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