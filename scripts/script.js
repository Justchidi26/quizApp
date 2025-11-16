let questions;
let answersA;
let answersB;
let answersC;
let answersD;
let optionChoices = [];
let correctAnswers;
let totalScore = 0;
let totalUnanswered = 0;
let time = 600; // 10 minutes
const indexStartingPoint = 3;

// Subject choices
if ( localStorage.subjects == "English")
{
    document.getElementById("subject").innerHTML = "English Studies";
    questions = [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam officia iste vel, nemo recusandae ab quia quisconsequuntur animi corrupti exercitationem quod veniam inlaboriosam sunt praesentium at molestiae mollitia vero ipsa? Vel soluta aspernatur repellendus saepe officia libero. Natu eaque dicta deserunt aperiam molestiae adipisci consecteturipsum. Illum ducimus ipsa officia accusantium! Vitae, cumquecorporis. At enim consequatur odit.",
        "ft ydydyt dytdzuf ukuyg ug8yufudyt  yigigiyf ugiugi gigyt giukiug78tgiyjgfuy  uygugugu  uygugugiugig yguigiu ugu",
        "okpomi  ggyufu  fytyftyf7y ytf7iyfiufy i uyfuyf7 yuf uyguyuguhg ufuyf uy y uyguygugug uguy uygu ugu guygug uguyh",
        "Jhg uytvyc gf gftgcytchc  utfufyuguuiyg yfuyfuyf uyfug uff uyfiuyguguygyuu uguygyugyuggyugyg uy yu gygyugyuuy g ",
        "jhjhvvg vuuttuvu uvyuuggvu yuyuuuyv f yffytfyt ytfyf ytfytfyfyy fytdesdrtdd dtrdudyudytd rts  dyrtd uydtrtdytdyt",
        "ft ydydyt dytdzuf ukuyg ug8yufudyt  yigigiyf ugiugi gigyt giukiug78tgiyjgfuy  uygugugu  uygugugiugig yguigiu ugu",
        "okpomi  ggyufu  fytyftyf7y ytf7iyfiufy i uyfuyf7 yuf uyguyuguhg ufuyf uy y uyguygugug uguy uygu ugu guygug uguyh",
        "Jhg uytvyc gf gftgcytchc  utfufyuguuiyg yfuyfuyf uyfug uff uyfiuyguguygyuu uguygyugyuggyugyg uy yu gygyugyuuy g ",
        "jhjhvvg vuuttuvu uvyuuggvu yuyuuuyv f yffytfyt ytfyf ytfytfyfyy fytdesdrtdd dtrdudyudytd rts  dyrtd uydtrtdytdyt",
        "ft ydydyt dytdzuf ukuyg ug8yufudyt  yigigiyf ugiugi gigyt giukiug78tgiyjgfuy  uygugugu  uygugugiugig yguigiu ugu"
    ]

    answersA = [
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus, commodi? Eaque tempore atque ea odit!",
        "4783686934",
        "dSTYAGG78",
        "usdggfigs",
        "wveyvytarv",
        "2656345",
        "4783686934",
        "dSTYAGG78",
        "usdggfigs",
        "wveyvytarv"
    ]

    answersB = [
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus, commodi? Eaque tempore atque ea odit!",
        "riisoiwr",
        "Fiusdfiuf",
        "5894859",
        "46567345763",
        "87efeuio",
        "riisoiwr",
        "Fiusdfiuf",
        "5894859",
        "46567345763"
    ]

    answersC= [
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus, commodi? Eaque tempore atque ea odit!",
        "fhiausdi",
        "3736264",
        "4364644",
        "fhsjgt67e",
        "dgiuai",
        "fhiausdi",
        "3736264",
        "4364644",
        "fhsjgt67e"
    ]

    answersD = [
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus, commodi? Eaque tempore atque ea odit!",
        "EWUY78363",
        "8385824",
        "1E3W1333",
        "34443DZZ",
        "2366BBVB",
        "EWUY78363",
        "8385824",
        "1E3W1333",
        "34443DZZ"
    ]

    correctAnswers = [
        "A",
        "B",
        "C",
        "D",
        "A",
        "B",
        "C",
        "D",
        "A",
        "B"
    ]
}   
else if ( localStorage.subjects == "Basic Science")
{
    document.getElementById("subject").innerHTML = "Basic Science";
    questions = [
    "Lorem scientist scienscular or sit amet consectetur adipisicing elit.Quisquam officia iste vel, nemo recusandae ab quia quisconsequuntur animi corrupti exercitationem quod veniam inlaboriosam sunt praesentium at molestiae mollitia vero ipsa? Vel soluta aspernatur repellendus saepe officia libero. Natu eaque dicta deserunt aperiam molestiae adipisci consecteturipsum. Illum ducimus ipsa officia accusantium! Vitae, cumquecorporis. At enim consequatur odit.",
    "ft ydydyt dytdzuf ukuyg ug8yufudyt  yigigiyf ugiugi gigyt giukiug78tgiyjgfuy  uygugugu  uygugugiugig yguigiu ugu",
    "okpomi  ggyufu  fytyftyf7y ytf7iyfiufy i uyfuyf7 yuf uyguyuguhg ufuyf uy y uyguygugug uguy uygu ugu guygug uguyh",
    "Jhg uytvyc gf gftgcytchc  utfufyuguuiyg yfuyfuyf uyfug uff uyfiuyguguygyuu uguygyugyuggyugyg uy yu gygyugyuuy g ",
    "jhjhvvg vuuttuvu uvyuuggvu yuyuuuyv f yffytfyt ytfyf ytfytfyfyy fytdesdrtdd dtrdudyudytd rts  dyrtd uydtrtdytdyt",
    "ft ydydyt dytdzuf ukuyg ug8yufudyt  yigigiyf ugiugi gigyt giukiug78tgiyjgfuy  uygugugu  uygugugiugig yguigiu ugu",
    "okpomi  ggyufu  fytyftyf7y ytf7iyfiufy i uyfuyf7 yuf uyguyuguhg ufuyf uy y uyguygugug uguy uygu ugu guygug uguyh",
    "Jhg uytvyc gf gftgcytchc  utfufyuguuiyg yfuyfuyf uyfug uff uyfiuyguguygyuu uguygyugyuggyugyg uy yu gygyugyuuy g ",
    "jhjhvvg vuuttuvu uvyuuggvu yuyuuuyv f yffytfyt ytfyf ytfytfyfyy fytdesdrtdd dtrdudyudytd rts  dyrtd uydtrtdytdyt",
    "ft ydydyt einstein issac zuf ukuyg ug8yufudyt  yigigiyf ugiugi gigyt giukiug78tgiyjgfuy  uygugugu  uygugugiugig yguigiu ugu"
    ]

    answersA = [
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus, commodi? Eaque tempore atque ea odit!",
        "4783686934",
        "dSTYAGG78",
        "usdggfigs",
        "wveyvytarv",
        "2656345",
        "4783686934",
        "dSTYAGG78",
        "usdggfigs",
        "wveyvytarv"
    ]

    answersB = [
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus, commodi? Eaque tempore atque ea odit!",
        "riisoiwr",
        "Fiusdfiuf",
        "5894859",
        "46567345763",
        "87efeuio",
        "riisoiwr",
        "Fiusdfiuf",
        "5894859",
        "46567345763"
    ]

    answersC= [
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus, commodi? Eaque tempore atque ea odit!",
        "fhiausdi",
        "3736264",
        "4364644",
        "fhsjgt67e",
        "dgiuai",
        "fhiausdi",
        "3736264",
        "4364644",
        "fhsjgt67e"
    ]

    answersD = [
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus, commodi? Eaque tempore atque ea odit!",
        "EWUY78363",
        "8385824",
        "1E3W1333",
        "34443DZZ",
        "2366BBVB",
        "EWUY78363",
        "8385824",
        "1E3W1333",
        "34443DZZ"
    ]

    correctAnswers = [
        "A",
        "B",
        "C",
        "D",
        "A",
        "B",
        "C",
        "D",
        "A",
        "B"
    ]
}
else 
{
    questions = [
    "Lorem ipsum dolor sit mathematics mathsis adipisicing elit.Quisquam officia iste vel, nemo recusandae ab quia quisconsequuntur animi corrupti exercitationem quod veniam inlaboriosam sunt praesentium at molestiae mollitia vero ipsa? Vel soluta aspernatur repellendus saepe officia libero. Natu eaque dicta deserunt aperiam molestiae adipisci consecteturipsum. Illum ducimus ipsa officia accusantium! Vitae, cumquecorporis. At enim consequatur odit.",
    "ft ydydyt dytdzuf ukuyg ug8yufudyt  yigigiyf ugiugi gigyt giukiug78tgiyjgfuy  uygugugu  uygugugiugig yguigiu ugu",
    "okpomi  ggyufu  fytyftyf7y ytf7iyfiufy i uyfuyf7 yuf uyguyuguhg ufuyf uy y uyguygugug uguy uygu ugu guygug uguyh",
    "Jhg uytvyc gf gftgcytchc  utfufyuguuiyg yfuyfuyf uyfug uff uyfiuyguguygyuu uguygyugyuggyugyg uy yu gygyugyuuy g ",
    "jhjhvvg vuuttuvu uvyuuggvu yuyuuuyv f yffytfyt ytfyf ytfytfyfyy fytdesdrtdd dtrdudyudytd rts  dyrtd uydtrtdytdyt",
    "ft ydydyt dytdzuf ukuyg ug8yufudyt  yigigiyf ugiugi gigyt giukiug78tgiyjgfuy  uygugugu  uygugugiugig yguigiu ugu",
    "okpomi  ggyufu  fytyftyf7y ytf7iyfiufy i uyfuyf7 yuf uyguyuguhg ufuyf uy y uyguygugug uguy uygu ugu guygug uguyh",
    "Jhg uytvyc gf gftgcytchc  utfufyuguuiyg yfuyfuyf uyfug uff uyfiuyguguygyuu uguygyugyuggyugyg uy yu gygyugyuuy g ",
    "jhjhvvg vuuttuvu uvyuuggvu yuyuuuyv f yffytfyt ytfyf ytfytfyfyy fytdesdrtdd dtrdudyudytd rts  dyrtd uydtrtdytdyt",
    "ft ydydyt dytdzuf ugraphical  functional yufudyt  yigigiyf ugiugi gigyt giukiug78tgiyjgfuy  uygugugu  uygugugiugig yguigiu ugu"
    ]

    answersA = [
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus, commodi? Eaque tempore atque ea odit!",
        "4783686934",
        "dSTYAGG78",
        "usdggfigs",
        "wveyvytarv",
        "2656345",
        "4783686934",
        "dSTYAGG78",
        "usdggfigs",
        "wveyvytarv"
    ]

    answersB = [
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus, commodi? Eaque tempore atque ea odit!",
        "riisoiwr",
        "Fiusdfiuf",
        "5894859",
        "46567345763",
        "87efeuio",
        "riisoiwr",
        "Fiusdfiuf",
        "5894859",
        "46567345763"
    ]

    answersC= [
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus, commodi? Eaque tempore atque ea odit!",
        "fhiausdi",
        "3736264",
        "4364644",
        "fhsjgt67e",
        "dgiuai",
        "fhiausdi",
        "3736264",
        "4364644",
        "fhsjgt67e"
    ]

    answersD = [
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Necessitatibus, commodi? Eaque tempore atque ea odit!",
        "EWUY78363",
        "8385824",
        "1E3W1333",
        "34443DZZ",
        "2366BBVB",
        "EWUY78363",
        "8385824",
        "1E3W1333",
        "34443DZZ"
    ]


    correctAnswers = [
        "A",
        "B",
        "C",
        "D",
        "A",
        "B",
        "C",
        "D",
        "A",
        "B"
    ]
}

/*Variables (Question Number buttons, Space for Question, Space for Options, Option Buttons,
                space for Question number,  Space for Question number over total questions, Navigation buttons, space for timer)*/
let qOne = document.getElementsByClassName("option-number")[indexStartingPoint + 1];
let qTwo = document.getElementsByClassName("option-number")[indexStartingPoint + 2];
let qThree = document.getElementsByClassName("option-number")[indexStartingPoint + 3];
let qFour = document.getElementsByClassName("option-number")[indexStartingPoint + 4];
let qFive = document.getElementsByClassName("option-number")[indexStartingPoint + 5];
let qSix = document.getElementsByClassName("option-number")[indexStartingPoint + 6]
let qSeven = document.getElementsByClassName("option-number")[indexStartingPoint + 7];
let qEight = document.getElementsByClassName("option-number")[indexStartingPoint + 8];
let qNine = document.getElementsByClassName("option-number")[indexStartingPoint + 9];
let qTen = document.getElementsByClassName("option-number")[indexStartingPoint + 10];

let mainQuestion = document.getElementById("main-question");

let optionA = document.getElementsByClassName("option-text")[0];
let optionB = document.getElementsByClassName("option-text")[1];
let optionC = document.getElementsByClassName("option-text")[2];
let optionD = document.getElementsByClassName("option-text")[3];

let optionAButton = document.getElementsByClassName("option-box")[0];
let optionBButton = document.getElementsByClassName("option-box")[1];
let optionCButton = document.getElementsByClassName("option-box")[2];
let optionDButton = document.getElementsByClassName("option-box")[3];

let questionNum = document.getElementById("questionNum");

let questionOutOfNum = document.getElementById("questionOutOfNum");

let previousButton = document.getElementById("previous");
let nextButton = document.getElementById("next");

let timer = document.getElementById("timer")

// Function that puts the right question, options and previous option choice for each number
function change(questionNumber){
    let index = questionNumber - 1
    mainQuestion.innerHTML = questions[index];
    optionA.innerHTML = "<h3>"+ answersA[index] +"</h3>";
    optionB.innerHTML = "<h3>"+ answersB[index] +"</h3>";
    optionC.innerHTML = "<h3>"+ answersC[index] +"</h3>";
    optionD.innerHTML = "<h3>"+ answersD[index] +"</h3>";

    questionNum.innerHTML = "Question " +  questionNumber;
    questionOutOfNum.innerHTML = "Question " + questionNumber + "/10"

    if(optionChoices[index] === "A")
    {
        optionAButton.classList.add("selected");
        optionBButton.classList.remove("selected");
        optionCButton.classList.remove("selected");
        optionDButton.classList.remove("selected");
    }
    else if(optionChoices[index] === "B")
    {
        optionBButton.classList.add("selected");
        optionAButton.classList.remove("selected");
        optionCButton.classList.remove("selected");
        optionDButton.classList.remove("selected");
    }
    else if(optionChoices[index] === "C")
    {
        optionCButton.classList.add("selected");
        optionBButton.classList.remove("selected");
        optionAButton.classList.remove("selected");
        optionDButton.classList.remove("selected");
    }
    else if(optionChoices[index] === "D")
    {
        optionDButton.classList.add("selected");
        optionBButton.classList.remove("selected");
        optionCButton.classList.remove("selected");
        optionAButton.classList.remove("selected");
    }
    else 
    {
        optionAButton.classList.remove("selected");
        optionBButton.classList.remove("selected");
        optionCButton.classList.remove("selected");
        optionDButton.classList.remove("selected");
    }
}

// Loads the first question
document.addEventListener("DOMContentLoaded", function(){
    change(1);   
}
);

// Timer function
function countdown () {
    const minutes = Math.floor(time/60);
    const seconds = time % 60;
    if (seconds < 10)
        timer.innerHTML = minutes + ":0" + seconds;
    else 
        timer.innerHTML = minutes + ":" + seconds;
    time --;

    if (time < 120) {
        timer.style.color = "red";
    }

    if (time < 0){
        clearInterval(intervalId);

        for (let answer in correctAnswers)
        {
            if(correctAnswers[answer] === optionChoices[answer])
                totalScore ++;
            else if (optionChoices[answer] === undefined)
                totalUnanswered ++;
        }

        localStorage.setItem("unanswered", totalUnanswered); 
        localStorage.setItem("score", totalScore); 

        window.location.href= "summary.html";
    }
}

const intervalId = setInterval(countdown, 1000); // Every 1 second

// Allows movement by clicking numbers
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

// Movement by Previous and Next
previousButton.addEventListener("click", function(){
    function previousQuestion(questionButton, number)
    {
        if (questionButton.classList.contains("current"))
        {
            change(number-1);
            questionButton.classList.remove("current");
            document.getElementsByClassName("option-number")[(indexStartingPoint + number) - 1].classList.add("current");
        }
    }
    
    previousQuestion(qTwo, 2);
    previousQuestion(qThree, 3);
    previousQuestion(qFour, 4);
    previousQuestion(qFive, 5);
    previousQuestion(qSix, 6);
    previousQuestion(qSeven, 7);
    previousQuestion(qEight, 8);
    previousQuestion(qNine, 9);
    previousQuestion(qTen, 10);
})

nextButton.addEventListener("click", function(){
    function nextQuestion(questionButtonN, numberN)
    {
        if (questionButtonN.classList.contains("current"))
        {
            change(numberN + 1);
            questionButtonN.classList.remove("current");
            document.getElementsByClassName("option-number")[indexStartingPoint + numberN + 1].classList.add("current");
        }
    }

    nextQuestion(qNine, 9);
    nextQuestion(qEight, 8);
    nextQuestion(qSeven, 7);
    nextQuestion(qSix, 6);
    nextQuestion(qFive, 5);
    nextQuestion(qFour, 4);
    nextQuestion(qThree, 3);
    nextQuestion(qTwo, 2);
    nextQuestion(qOne, 1);   
})

// Selection of Options 
optionAButton.addEventListener("click", function (){
    optionAButton.classList.add("selected");
    optionBButton.classList.remove("selected");
    optionCButton.classList.remove("selected");
    optionDButton.classList.remove("selected");

    function optionChosen(questionNum, number)
    {
        if (questionNum.classList.contains("current")) {
            optionChoices[number - 1] = "A"
            questionNum.classList.add("answered");
        }
        
    }

    optionChosen(qOne, 1);
    optionChosen(qTwo, 2);
    optionChosen(qThree, 3);
    optionChosen(qFour, 4);
    optionChosen(qFive, 5);
    optionChosen(qSix, 6);
    optionChosen(qSeven, 7);
    optionChosen(qEight, 8);
    optionChosen(qNine, 9);
    optionChosen(qTen, 10);
});

optionBButton.addEventListener("click", function (){
    optionBButton.classList.add("selected");
    optionAButton.classList.remove("selected");
    optionCButton.classList.remove("selected");
    optionDButton.classList.remove("selected");

    function optionChosen(questionNum, number)
    {
        if (questionNum.classList.contains("current")) {
            optionChoices[number - 1] = "B"
            questionNum.classList.add("answered");
        }
    }

    optionChosen(qOne, 1);
    optionChosen(qTwo, 2);
    optionChosen(qThree, 3);
    optionChosen(qFour, 4);
    optionChosen(qFive, 5);
    optionChosen(qSix, 6);
    optionChosen(qSeven, 7);
    optionChosen(qEight, 8);
    optionChosen(qNine, 9);
    optionChosen(qTen, 10);
});

optionCButton.addEventListener("click", function (){
    optionCButton.classList.add("selected");
    optionBButton.classList.remove("selected");
    optionAButton.classList.remove("selected");
    optionDButton.classList.remove("selected");

    function optionChosen(questionNum, number)
    {
        if (questionNum.classList.contains("current")) {
            optionChoices[number - 1] = "C";
            questionNum.classList.add("answered");
        }
    }

    optionChosen(qOne, 1);
    optionChosen(qTwo, 2);
    optionChosen(qThree, 3);
    optionChosen(qFour, 4);
    optionChosen(qFive, 5);
    optionChosen(qSix, 6);
    optionChosen(qSeven, 7);
    optionChosen(qEight, 8);
    optionChosen(qNine, 9);
    optionChosen(qTen, 10);
});

optionDButton.addEventListener("click", function (){
    optionDButton.classList.add("selected");
    optionBButton.classList.remove("selected");
    optionCButton.classList.remove("selected");
    optionAButton.classList.remove("selected");

    function optionChosen(questionNum, number)
    {
        if (questionNum.classList.contains("current")) {
            optionChoices[number - 1] = "D"
            questionNum.classList.add("answered");
        }
    }

    optionChosen(qOne, 1);
    optionChosen(qTwo, 2);
    optionChosen(qThree, 3);
    optionChosen(qFour, 4);
    optionChosen(qFive, 5);
    optionChosen(qSix, 6);
    optionChosen(qSeven, 7);
    optionChosen(qEight, 8);
    optionChosen(qNine, 9);
    optionChosen(qTen, 10);
});

//Scoring  (Saves total score as "score" in local storage and unanswered questions as "unanswered" for use in summary tab tab)
document.getElementById("question-nav-button").addEventListener("click", function ()
{
    for (let answer in correctAnswers)
    {
        if(correctAnswers[answer] === optionChoices[answer])
            totalScore ++;
        else if (optionChoices[answer] === undefined)
            totalUnanswered ++;
    }

    localStorage.setItem("unanswered", totalUnanswered); 
    localStorage.setItem("score", totalScore); 

    window.location.href= "summary.html";
})


