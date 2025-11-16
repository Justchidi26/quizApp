let totalCorrect = localStorage.getItem("score");
let unattempted = localStorage.getItem("unanswered");
let points = 1;

document.getElementById("attempted").innerHTML = 10 - unattempted;
document.getElementById("unanswered").innerHTML = unattempted;
document.getElementById("correct").innerHTML = totalCorrect;
document.getElementById("wrong").innerHTML = 10 - unattempted - totalCorrect;
document.getElementById("points").innerHTML = points;
document.getElementById("total").innerHTML = points * totalCorrect;

localStorage.clear;
