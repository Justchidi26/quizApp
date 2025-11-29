let quizData = []; //Stores question,option and answer set for each subect.
let optionChoices = []; // stores user's answers
let totalScore = 0; 
let totalUnanswered = 0; //stores number of unattempted questions
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

const questionButtons = [qOne,qTwo,qThree,qFour,qFive,qSix,qSeven,qEight,qNine,qTen];

// Navigation by clicking question buttons
questionButtons.forEach((button,index) => {
    button.addEventListener("click", function(){

    this.classList.add("current");

    for (let button in questionButtons)
    {
        if (this !== questionButtons[button])
            questionButtons[button].classList.remove("current");
    }

    change(index + 1);
})
});

// Movement by Previous
previousButton.addEventListener("click", function(){
    function previousQuestion(questionButton, index)
    {
        if (questionButton.classList.contains("current"))
        {
            change(index);
            questionButton.classList.remove("current");
            document.getElementsByClassName("option-number")[indexStartingPoint + Number(index)].classList.add("current");
        }
    }
    
    for(let button in questionButtons)
    {
        if (button != 0)
            previousQuestion(questionButtons[button], button);
    }
})

// Movement by Next
nextButton.addEventListener("click", function(){
    function nextQuestion(questionButtonN, numberN)
    {
        if (questionButtonN.classList.contains("current"))
        {
            change(numberN + 2);
            questionButtonN.classList.remove("current");
            document.getElementsByClassName("option-number")[indexStartingPoint + Number(numberN) + 2].classList.add("current");
        }
    }

    for(let button in questionButtons)
    {
        end = questionButtons.length - (Number(button) + 1);
        if(end != questionButtons.length)
        {
            nextQuestion(questionButtons[end], end);
        }
    } 
})

// Storing choices
const optionButtons = [optionAButton,optionBButton,optionCButton,optionDButton];
const optionButtonsLetters = ["A", "B", "C", "D"];

optionButtons.forEach((buttonOption,index) => {
    buttonOption.addEventListener("click", function(){

    this.classList.add("selected");

    for (let button in optionButtons)
    {
        if (this !== optionButtons[button])
            optionButtons[button].classList.remove("selected");
    }

    for (let button in  questionButtons)
    {
        if (questionButtons[button].classList.contains("current")) {
            optionChoices[button] = optionButtonsLetters[index];
            questionButtons[button].classList.add("answered");
        }
    }
})
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


