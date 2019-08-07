
var inpNum1 = prompt("please enter 1st number");
var inpNum2 = prompt("please enter 2nd number");
var inpNum3 = prompt("please enter 3rd number");
var inpNum4 = prompt("please enter 4th number");

var ans = (Number(inpNum1) + Number(inpNum2) + Number(inpNum3) + Number(inpNum4)) / 4;
 
alert("the average of your numbers is  : " + (ans));
document.getElementById("output").innerHTML =("The average of the four numbers you entered is: " + ans);