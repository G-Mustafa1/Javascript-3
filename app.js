var age = "I am 16 year old";

alert(age);

var visit = localStorage.getItem("visit") || 0;
visit++;
localStorage.setItem("visit",visit);
alert("You have visited this site " + visit + " times");
document.write(` <h2>You have visited this site <b>${visit}</b>  times.</h2>`);

var birth = "My birth year is 2007.";
var birth1 = "Data type of my ddcleard variable number.";
var birth2 = "Ghulam Mustafa ordere 5 T-shirt(s) on XYZ Clothing store"

alert(birth);
document.write(`<h2> ${birth} <h2> ${birth1} <br><br>`)
document.write(`${birth2}`)



