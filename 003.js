var uname = ['Zebra', 'Tiger', 'Lion', 'Bird', 'Cat', 'Dog'];
var user = Number(prompt ("Enter your username?"));
var stack = uname.indexOf(user);
var result = (stack == -1) ? alert(" ACCESS DENIED " + user) : alert(  "Welcome " + user);
console.log(uname.indexOf(user));
