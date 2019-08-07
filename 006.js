var x = Number(prompt("please enter the number"));
function multiples(x){
  if (x % 2 || 0 && x % 5 == 0) 
  {
    return true;
  } 
  else {
    return false;
  }
}
  
(x % 2 == 0 || x % 5 == 0)? alert("you win "): alert("your loose!");
  console.log(x);

  