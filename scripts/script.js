let questions; // Stores questions
let answersA; // All answers in option A
let answersB; // All answers in option B
let answersC; // All answers in option C
let answersD; // All answers in option D
let optionChoices = []; // stores user's answers
let correctAnswers; // Stores correct answers for marking
let totalScore = 0; 
let totalUnanswered = 0; //stores number of unattempted questions
let time = 600; // 10 minutes
const indexStartingPoint = 3; 

// Subject choices thast influence the variables 
if ( localStorage.subjects == "English")
{
    document.getElementById("subject").innerHTML = "English Studies";
    questions = [
        "Which of the following words is a noun?",
        "Choose the correct past tense of the verb 'go'",
        "Which word is the antonym (opposite) of 'happy'?",
        "Identify the adjective in this sentence: 'The tall girl won the race.'",
        "Which word is a synonym (similar meaning) for 'big'?",
        "What is the correct plural form of 'child'?",
        "Choose the correct preposition to complete the sentence: 'The cat is hiding ___ the table.'",
        "Which punctuation mark should be used at the end of this sentence: 'What is your name'",
        "Choose the correct word to complete the sentence: '___ are my best friends.'",
        "Which sentence has the correct subject-verb agreement?"
    ]

    answersA = [
        "run",
        "goed",
        "joyful",
        "girl",
        "small",
        "childs",
        "on",
        ".(period)",
        "They",
        "The dogs barks loudly."
    ]

    answersB = [
        "happy",
        "gone",
        "sad",
        "won",
        "large",
        "childes",
        "at",
        ",(comma)",
        "Them",
        "The dog barks loudly."
    ]

    answersC= [
        "book",
        "went",
        "glad",
        "race",
        "tiny",
        "children",
        "under",
        "? (question mark)",
        "Their",
        "The dog bark loudly."
    ]

    answersD = [
        "quickly",
        "going",
        "lucky",
        "tall",
        "soft",
        "child",
        "with",
        "! (exclamation mark)",
        "Him",
        "The dogs barked loudly."
    ]

    correctAnswers = [
        "C",
        "C",
        "B",
        "D",
        "B",
        "C",
        "C",
        "C",
        "A",
        "B"
    ]
}   
else if ( localStorage.subjects == "Basic Science")
{
    document.getElementById("subject").innerHTML = "Basic Science";

    questions = [
        "What part of a plant absorbs water and nutrients from the soil?",
        "Which planet is known as the 'Red Planet'?",
        "What is the chemical symbol for water?",
        "What force pulls objects toward the center of the Earth?",
        "How many legs does a spider have?",
        "What is the largest organ in the human body?",
        "What gas do plants release during photosynthesis?",
        "What state of matter is steam?",
        "What is the center of our Solar System?",
        "What type of animal is a frog?"
    ]

    answersA = [
        "Leaf",
        "Earth",
        "O2",
        "Magnetism",
        "6",
        "Heart",
        "Nitrogen",
        "Solid",
        "The Moon",
        "Mammal"
    ]

    answersB = [
        "Stem",
        "Mars",
        "H2O",
        "Friction",
        "8",
        "Liver",
        "Oxygen",
        "Liquid",
        "The Sun",
        "Reptile"
    ]

    answersC= [
        "Flower",
        "Jupiter",
        "CO2",
        "Gravity",
        "10",
        "Skin",
        "Carbon Dioxide",
        "Gas",
        "Mars",
        "Amphibian"
    ]

    answersD = [
        "Root",
        "Venus",
        "NaCl",
        "Tension",
        "4",
        "Brain",
        "Hydrogen",
        "Plasma",
        "A Comet",
        "Fish"
    ]

    correctAnswers = [
        "D",
        "B",
        "B",
        "C",
        "B",
        "C",
        "B",
        "C",
        "B",
        "C"
    ]
}
else 
{
    questions = [
        "What is 12 + 8?",
        "What is 25 - 9?",
        "What is 7 x 6?",
        "What is 36 / 4?",
        "How many sides does a triangle have?",
        "How many sides does a square have?",
        "Which of these numbers is an even number?",
        "How many minutes are in one hour?",
        "What is 1/2 (one-half) of 20?",
        "If x + 5 = 10, what is x?"
    ]

    answersA = [
        "18",
        "14",
        "40",
        "8",
        "2",
        "3",
        "7",
        "30",
        "5",
        "3"
    ]

    answersB = [
        "19",
        "15",
        "42",
        "9",
        "3",
        "4",
        "9",
        "60",
        "10",
        "4"
    ]

    answersC= [
        "20",
        "16",
        "48",
        "10",
        "4",
        "5",
        "11",
        "90",
        "15",
        "5"
    ]

    answersD = [
        "21",
        "17",
        "56",
        "12",
        "5",
        "6",
        "12",
        "100",
        "20",
        "15"
    ]


    correctAnswers = [
        "C",
        "C",
        "B",
        "B",
        "B",
        "B",
        "D",
        "B",
        "B",
        "C"    
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

        let actualCorrect = [];
        let actualUnanswered = [];

        for (let answer in correctAnswers)
        {
            let qNum = Number(answer) + 1;
            if(correctAnswers[answer] === optionChoices[answer])
            {
                actualCorrect[totalScore] = qNum;
                totalScore ++;
                
            }
            else if (optionChoices[answer] === undefined)
            {
                actualUnanswered[totalUnanswered] = qNum;
                totalUnanswered ++;
            }
        }

        localStorage.setItem("actualCorrect", String(actualCorrect));
        localStorage.setItem("actualUnanswered", String(actualUnanswered));
        localStorage.setItem("unanswered", totalUnanswered); 
        localStorage.setItem("score", totalScore); 

        window.location.href= "summary.html";
    }
}

// Actual timer 
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
// Also saves list of correctly answered questions and unattempted questions.
document.getElementById("question-nav-button").addEventListener("click", function ()
{
    let actualCorrect = [];
    let actualUnanswered = [];

    for (let answer in correctAnswers)
    {
        let qNum = Number(answer) + 1;
        if(correctAnswers[answer] === optionChoices[answer])
        {
            actualCorrect[totalScore] = qNum;
            totalScore ++;
            
        }
        else if (optionChoices[answer] === undefined)
        {
            actualUnanswered[totalUnanswered] = qNum;
            totalUnanswered ++;
        }
    }

    localStorage.setItem("actualCorrect", String(actualCorrect));
    localStorage.setItem("actualUnanswered", String(actualUnanswered));
    localStorage.setItem("unanswered", totalUnanswered); 
    localStorage.setItem("score", totalScore); 

    window.location.href= "summary.html";
})


