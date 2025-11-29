let quizData = []; //Stores question,option and answer set for each subect.
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

    quizData = [
        {
            question: "Which of the following words is a noun?",
            option: {
              A:"run",
              B:"happy",
              C:"book",
              D:"quickly"
            },
            correctAnswer: "C"
        },

        {
            question:"Choose the correct past tense of the verb 'go'",
            option: {
              A:"goed",
              B: "gone",
              C: "went",
              D: "going"
            },
            correctAnswer: "C"
        },

        {
            question: "Which word is the antonym (opposite) of 'happy'?",
            option: {
              A: "joyful",
              B: "sad",
              C: "glad",
              D: "lucky"
            },
            correctAnswer: "B"
        },

        {
            question: "Identify the adjective in this sentence: 'The tall girl won the race.'",
            option: {
              A: "girl",
              B: "won",
              C: "race",
              D: "tall"
            },
            correctAnswer: "D"
        },

        

        {
            question: "Which word is a synonym (similar meaning) for 'big'?",
            option: {
              A: "small",
              B: "large",
              C: "tiny",
              D:  "soft"
            },
            correctAnswer: "B"
        },

        {
            question: "What is the correct plural form of 'child'?",
            option: {
              A: "childs",
              B: "childes",
              C: "children",
              D:  "child"
            },
            correctAnswer: "C"
        },

        {
            question: "Choose the correct preposition to complete the sentence: 'The cat is hiding ___ the table.'",
            option: {
              A: "on",
              B: "at",
              C: "under",
              D:  "with"
            },
            correctAnswer: "C"
        },

        {
            question: "Which punctuation mark should be used at the end of this sentence: 'What is your name'",
            option: {
              A: ".(period)",
              B: ",(comma)",
              C:"? (question mark)",
              D:  "! (exclamation mark)",
            },
            correctAnswer: "C"
        },

        {
            question: "Choose the correct word to complete the sentence: '___ are my best friends.'",
            option: {
              A: "They",
              B: "Them",
              C:"Their",
              D: "Him",
            },
            correctAnswer: "A"
        },
        
        {
            question: "Which sentence has the correct subject-verb agreement?",
            option: {
              A: "The dogs barks loudly.",
              B: "The dog barks loudly.",
              C: "The dog bark loudly.",
              D:  "The dogs barked loudly."
            },
            correctAnswer: "B"
        }
    ]
}   
else if ( localStorage.subjects == "Basic Science")
{
    document.getElementById("subject").innerHTML = "Basic Science";

    quizData = [
        {
            question:"What part of a plant absorbs water and nutrients from the soil?",
            option: {
              A:"Leaf",
              B:"Stem",
              C:"Flower",
              D: "Root"
            },
            correctAnswer: "D"
        },

        {
            question: "Which planet is known as the 'Red Planet'?",
            option: {
              A: "Earth",
              B: "Mars",
              C:"Jupiter",
              D: "Venus" 
            },
            correctAnswer:"B"
        },

        {
            question: "What is the chemical symbol for water?",
            option: {
              A: "O2",
              B: "H2O",
              C:"CO2",
              D: "NaCl" 
            },
            correctAnswer:"B"
        },

        {
            question: "What force pulls objects toward the center of the Earth?",
            option: {
              A:"Magnetism",
              B:"Friction",
              C:"Gravity",
              D: "Tension"
            },
            correctAnswer: "C"
        },

        {
            question: "How many legs does a spider have?",
            option: {
              A:"6",
              B:"8",
              C:"10",
              D:"4"  
            },
            correctAnswer:"B"
        },

        {
            question: "What is the largest organ in the human body?",
            option: {
              A:"Heart",
              B:"Liver",
              C:"Skin",
              D:"Brain" 
            },
            correctAnswer: "C"
        },

        {
            question: "What gas do plants release during photosynthesis?",
            option: {
              A:"Nitrogen",
              B:"Oxygen",
              C:"Carbon Dioxide",
              D: "Hydrogen"
            },
            correctAnswer:"B"
        },

        {
            question: "What state of matter is steam?",
            option: {
              A:"Solid",
              B:"Liquid",
              C:"Gas",
              D:"Plasma"  
            },
            correctAnswer:"C"
        },

        {
            question: "What is the center of our Solar System?",
            option: {
              A: "The Moon",
              B:"The Sun",
              C:"Mars",
              D:"A Comet"
            },
            correctAnswer:"B"
        },

        {
            question: "What type of animal is a frog?",
            option: {
              A:"Mammal",
              B:"Reptile",
              C:"Amphibian",
              D: "Fish"
            },
            correctAnswer:"C"
        }
    ]
}
else 
{
    quizData = [
        {
            question:"What is 12 + 8?",
            option: {
              A: "18",
              B: "19",
              C: "20",
              D: "21" 
            },
            correctAnswer:"C"
        },

        {
            question:"What is 25 - 9?",
            option: {
              A:"14",
              B:"15",
              C:"16",
              D:"17"
            },
            correctAnswer: "C"
        },

        {
            question:"What is 7 x 6?",
            option: {
              A:"40",
              B:"42",
              C:"48",
              D:"56" 
            },
            correctAnswer:"B"
        },

        {
            question:"What is 36 / 4?",
            option: {
              A:"8",
              B:"9",
              C:"10",
              D:"12" 
            },
            correctAnswer:"B"
        },

        {
            question:"How many sides does a triangle have?",
            option: {
              A:"2",
              B:"3",
              C:"4",
              D: "5" 
            },
            correctAnswer:"B"
        },

        {
            question:"How many sides does a square have?",
            option: {
              A:"3",
              B:"4",
              C:"5",
              D:"6"
            },
            correctAnswer:"B"
        },

        {
            question:"Which of these numbers is an even number?",
            option: {
              A:"7",
              B:"9",
              C:"11",
              D: "12" 
            },
            correctAnswer:"D"
        },

        {
            question:"How many minutes are in one hour?",
            option: {
              A:"30",
              B:"60",
              C:"90",
              D:"100"
            },
            correctAnswer:"B"
        },

        {
            question:"What is 1/2 (one-half) of 20?",
            option: {
              A:"5",
              B:"10",
              C:"15",
              D:"20"
            },
            correctAnswer:"B"
        },
        
        {
            question:"If x + 5 = 10, what is x?",
            option: {
              A:"3",
              B: "4",
              C:"5",
              D:"15" 
            },
            correctAnswer:"C"
        }
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
    mainQuestion.innerHTML = quizData[index].question;
    optionA.innerHTML = "<h3>"+ quizData[index].option.A +"</h3>";
    optionB.innerHTML = "<h3>"+ quizData[index].option.B +"</h3>";
    optionC.innerHTML = "<h3>"+ quizData[index].option.C +"</h3>";
    optionD.innerHTML = "<h3>"+ quizData[index].option.D +"</h3>";

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

    for (let answer in quizData)
    {
        let qNum = Number(answer) + 1;
        if(quizData[answer].correctAnswer === optionChoices[answer])
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


