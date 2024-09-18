const Roll = document.getElementById("roll");
const Rollx2 = document.getElementById("2xroll");
const Rollx3 = document.getElementById("3xroll");
const Label1 = document.getElementById("label1");
const Label2 = document.getElementById("label2");
const Label3 = document.getElementById("label3");
const min = 1;
const max = 100;
let randomNum1;
let randomNum2;
let randomNum3;

Roll.onclick = function(){
  randomNum1 = Math.floor(Math.random() * max) + min;
  Label1.textContent = randomNum1;
  Label2.textContent = "-";
  Label3.textContent = "-";
}
Rollx2.onclick = function(){
  randomNum1 = Math.floor(Math.random() * max) + min;
  randomNum2 = Math.floor(Math.random() * max) + min;
  Label1.textContent = randomNum1;
  Label2.textContent = randomNum2;
  Label3.textContent = "-";
}
Rollx3.onclick = function(){
  randomNum1 = Math.floor(Math.random() * max) + min;
  randomNum2 = Math.floor(Math.random() * max) + min;
  randomNum3 = Math.floor(Math.random() * max) + min;
  Label1.textContent = randomNum1;
  Label2.textContent = randomNum2;
  Label3.textContent = randomNum3;
}