
if ( localStorage.subjects == "English")
{
    document.getElementById("subject").innerHTML = "English Studies";
}   
else if ( localStorage.subjects == "Basic Science")
{
    document.getElementById("subject").innerHTML = "Basic Science";
}

let qOne = document.getElementsByClassName("option-number")[4];
let qTwo = document.getElementsByClassName("option-number")[5];
let qThree = document.getElementsByClassName("option-number")[6];
let qFour = document.getElementsByClassName("option-number")[7];
let qFive = document.getElementsByClassName("option-number")[8];
let qSix = document.getElementsByClassName("option-number")[9]
let qSeven = document.getElementsByClassName("option-number")[10];
let qEight = document.getElementsByClassName("option-number")[11];
let qNine = document.getElementsByClassName("option-number")[12];
let qTen = document.getElementsByClassName("option-number")[13];

let mainQuestion = document.getElementById("main-question");

let optionA = document.getElementsByClassName("option-text")[0];
let optionB = document.getElementsByClassName("option-text")[1];
let optionC = document.getElementsByClassName("option-text")[2];
let optionD = document.getElementsByClassName("option-text")[3];

let questionNum = document.getElementById("questionNum");

function change(questionNumber){
    let index = questionNumber - 1
    mainQuestion.innerHTML = questions[index];
    optionA.innerHTML = "<h3>"+ answersA[index] +"</h3>";
    optionB.innerHTML = "<h3>"+ answersB[index] +"</h3>";
    optionC.innerHTML = "<h3>"+ answersC[index] +"</h3>";
    optionD.innerHTML = "<h3>"+ answersD[index] +"</h3>";

    questionNum.innerHTML = "Question " + questionNumber;
}




qOne.addEventListener("click", function(){
    this.classList.add("current");

    qThree.classList.remove("current");
    qFour.classList.remove("current");
    qFive.classList.remove("current");
    qSix.classList.remove("current");
    qSeven.classList.remove("current");
    qEight.classList.remove("current");
    qTwo.classList.remove("current");
    qNine.classList.remove("current");
    qTen.classList.remove("current");
    
    change(1);
});

qTwo.addEventListener("click", function(){
    this.classList.add("current");

    qThree.classList.remove("current");
    qFour.classList.remove("current");
    qFive.classList.remove("current");
    qSix.classList.remove("current");
    qSeven.classList.remove("current");
    qEight.classList.remove("current");
    qOne.classList.remove("current");
    qNine.classList.remove("current");
    qTen.classList.remove("current");
    
    change(2);
});

qThree.addEventListener("click", function(){
    this.classList.add("current");

    qOne.classList.remove("current");
    qFour.classList.remove("current");
    qFive.classList.remove("current");
    qSix.classList.remove("current");
    qSeven.classList.remove("current");
    qEight.classList.remove("current");
    qTwo.classList.remove("current");
    qNine.classList.remove("current");
    qTen.classList.remove("current");
    
    change(3)
});

qFour.addEventListener("click", function(){
    this.classList.add("current");

    qThree.classList.remove("current");
    qOne.classList.remove("current");
    qFive.classList.remove("current");
    qSix.classList.remove("current");
    qSeven.classList.remove("current");
    qEight.classList.remove("current");
    qTwo.classList.remove("current");
    qNine.classList.remove("current");
    qTen.classList.remove("current");
    
    change(4);
});

qFive.addEventListener("click", function(){
    this.classList.add("current");

    qThree.classList.remove("current");
    qFour.classList.remove("current");
    qOne.classList.remove("current");
    qSix.classList.remove("current");
    qSeven.classList.remove("current");
    qEight.classList.remove("current");
    qTwo.classList.remove("current");
    qNine.classList.remove("current");
    qTen.classList.remove("current");
    
    change(5);
});

qSix.addEventListener("click", function(){
    this.classList.add("current");

    qThree.classList.remove("current");
    qFour.classList.remove("current");
    qFive.classList.remove("current");
    qOne.classList.remove("current");
    qSeven.classList.remove("current");
    qEight.classList.remove("current");
    qTwo.classList.remove("current");
    qNine.classList.remove("current");
    qTen.classList.remove("current");
    
    change(6);
});

qSeven.addEventListener("click", function(){
    this.classList.add("current");

    qThree.classList.remove("current");
    qFour.classList.remove("current");
    qFive.classList.remove("current");
    qSix.classList.remove("current");
    qOne.classList.remove("current");
    qEight.classList.remove("current");
    qTwo.classList.remove("current");
    qNine.classList.remove("current");
    qTen.classList.remove("current");
    
    change(7);
});

qEight.addEventListener("click", function(){
    this.classList.add("current");

    qThree.classList.remove("current");
    qFour.classList.remove("current");
    qFive.classList.remove("current");
    qSix.classList.remove("current");
    qSeven.classList.remove("current");
    qOne.classList.remove("current");
    qTwo.classList.remove("current");
    qNine.classList.remove("current");
    qTen.classList.remove("current");
    
    change(8);
});
qNine.addEventListener("click", function(){
    this.classList.add("current");

    qThree.classList.remove("current");
    qFour.classList.remove("current");
    qFive.classList.remove("current");
    qSix.classList.remove("current");
    qSeven.classList.remove("current");
    qEight.classList.remove("current");
    qTwo.classList.remove("current");
    qOne.classList.remove("current");
    qTen.classList.remove("current");
    
    change(9);
});

qTen.addEventListener("click", function(){
    this.classList.add("current");

    qThree.classList.remove("current");
    qFour.classList.remove("current");
    qFive.classList.remove("current");
    qSix.classList.remove("current");
    qSeven.classList.remove("current");
    qEight.classList.remove("current");
    qTwo.classList.remove("current");
    qNine.classList.remove("current");
    qOne.classList.remove("current");
    
    change(10);
});
