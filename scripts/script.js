let quizData = []; //Stores question,option and answer set for each subect.
let optionChoices = []; // stores user's answers
let totalCorrect = 0; // stores number of correctly answered questions
let totalUnanswered = 0; //stores number of unattempted questions
const option_numberStartingIndex = 3; // Magic number that represents the first four obects of the class "option_number"

// Subject choices that influence the question sets displayed.
if ( localStorage.subjects == "English")
{
    document.getElementById("subject").innerHTML = "English Studies"; // Changes the subect space to the chosen subect

    quizData = [ // An array of objects that have the properties : question, option, correctAnswer for each question number 
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
    document.getElementById("subject").innerHTML = "Basic Science"; // Changes the subect space to the chosen subect

    quizData = [ // An array of objects that have the properties : question, option, correctAnswer for each question number
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
    document.getElementById("subject").innerHTML = "Mathematics"; // Changes the subect space to the chosen subect

    quizData = [ // An array of objects that have the properties : question, option, correctAnswer for each question number
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
                
const questionButtons = [ // Array that stores the html location of each number button on the navigation bar.
    document.getElementsByClassName("option-number")[option_numberStartingIndex + 1], // Question 1 button
    document.getElementsByClassName("option-number")[option_numberStartingIndex + 2], // Question 2 button
    document.getElementsByClassName("option-number")[option_numberStartingIndex + 3], // Question 3 button
    document.getElementsByClassName("option-number")[option_numberStartingIndex + 4], // Question 4 button
    document.getElementsByClassName("option-number")[option_numberStartingIndex + 5], // Question 5 button
    document.getElementsByClassName("option-number")[option_numberStartingIndex + 6], // Question 6 button
    document.getElementsByClassName("option-number")[option_numberStartingIndex + 7], // Question 7 button
    document.getElementsByClassName("option-number")[option_numberStartingIndex + 8], // Question 8 button
    document.getElementsByClassName("option-number")[option_numberStartingIndex + 9], // Question 9 button
    document.getElementsByClassName("option-number")[option_numberStartingIndex + 10] // Question 10 button
];

                
const optionButtons = [ // Array that stores the html location of the option boxes
    document.getElementsByClassName("option-box")[0], // Option A box
    document.getElementsByClassName("option-box")[1], // Option B box
    document.getElementsByClassName("option-box")[2], // Option C box
    document.getElementsByClassName("option-box")[3]  // Option D box
];

const optionButtonsLetters = ["A", "B", "C", "D"]; //  The corresponding option box's value

let mainQuestion = document.getElementById("main-question"); // HTML location of the question's text box 

let optionABox = document.getElementsByClassName("option-text")[0]; // HTML location of the Option A's text box
let optionBBox = document.getElementsByClassName("option-text")[1]; // HTML location of the Option B's text box
let optionCBox = document.getElementsByClassName("option-text")[2]; // HTML location of the Option C's text box
let optionDBox = document.getElementsByClassName("option-text")[3]; // HTML location of the Option D's text box

let questionNum = document.getElementById("questionNum"); // HTML location of the question number indicator text box

let questionOutOfNum = document.getElementById("questionOutOfNum"); // HTML location of the question number / 10 text box

let previousButton = document.getElementById("previous"); // HTML location of the "Previous" navigation button
let nextButton = document.getElementById("next"); // HTML location of the "Next" navigation button

// Function that puts the right question, options and previous option choice for each number
function change(questionNumber){
    let index = questionNumber - 1 // Gets actual location in array

    mainQuestion.innerHTML = quizData[index].question; // Displays the correct question according to number in the question text box
    optionABox.innerHTML = "<h3>"+ quizData[index].option.A +"</h3>"; // Displays the correct option A according to number in the option A text box
    optionBBox.innerHTML = "<h3>"+ quizData[index].option.B +"</h3>"; // Displays the correct option B according to number in the option B text box
    optionCBox.innerHTML = "<h3>"+ quizData[index].option.C +"</h3>"; // Displays the correct option C according to number in the option C text box
    optionDBox.innerHTML = "<h3>"+ quizData[index].option.D +"</h3>";  // Displays the correct option D according to number in the option D text box
    
    // Displays the correct Question number in the question number text boxes
    questionNum.innerHTML = "Question " +  questionNumber;  
    questionOutOfNum.innerHTML = "Question " + questionNumber + "/10" 

    for (let i = 0; i < 4; i++) // Makes sure no option is highlighted by error
            optionButtons[i].classList.remove("selected");

    for(let optionIndex in optionButtons) // Loops through array of option boxes 
    {  
        if(optionChoices[index] === optionButtonsLetters[optionIndex]) // Checks to see if any option has been chosen for that number previously
        {
            optionButtons[optionIndex].classList.add("selected"); // Higlights the option found to be chosen before and breaks out of the loop
            break;
        }
    }

    if(questionButtons[0].classList.contains("current")) // Checks if it is on question 1
    {
        previousButton.style.display = "none"; // Removes the previous button on question 1
    }
    else
        previousButton.style.display = "block"; // Adds it back for the rest
   
}

// Loads the first question automatically at start 
document.addEventListener("DOMContentLoaded", function(){
    change(1);   
}
);


// Navigation by clicking question number buttons
questionButtons.forEach((button,index) => { // Adds the event listener of click for each button in the question Buttons array 
    button.addEventListener("click", function(){ // Listens for the click

    this.classList.add("current"); // Marks it as the current number in the navigation bar

    for (let button in questionButtons) // loops though the question number buttons 
    {
        if (this !== questionButtons[button])
            questionButtons[button].classList.remove("current"); // and makes sure every other question number is not highlighted as current.
    }

    change(index + 1); // Changes to that particular number's question set 
})
});

// Movement by Clicking "Previous" button
previousButton.addEventListener("click", function(){ // Waits for the click of the button
    function previousQuestion(questionButton, index) 
    {
        if (questionButton.classList.contains("current")) // if the question number entered in is the presently active question
        { 
            questionButton.classList.remove("current"); // Remove the highlight on it 
            document.getElementsByClassName("option-number")[option_numberStartingIndex + Number(index)].classList.add("current"); // put the highlight on the number before it 
            change(index); // Change to the question set before it 
        }
    }
    
    for(let button in questionButtons) // Loops through the question number buttons 
    {
        if (button != 0)
            previousQuestion(questionButtons[button], button); // Previous button function works as long as the current question isn't Question 1
    }
})

// Movement by Next
nextButton.addEventListener("click", function(){ // Waits for the click of the button
    function nextQuestion(questionButtonN, numberN)
    {
        if (questionButtonN.classList.contains("current")) // if the question number entered in is the presently active question
        {
            questionButtonN.classList.remove("current"); // Remove the highlight on it 
            document.getElementsByClassName("option-number")[option_numberStartingIndex + Number(numberN) + 2].classList.add("current");  // put the highlight on the number after it 
            change(numberN + 2); // Change to the question set after it 
        }
    }

    for(let button in questionButtons) // Loops through the question number buttons
    {
        end = questionButtons.length - (Number(button) + 1); // Makes sure it checks in reverse oder
        if(end != questionButtons.length) 
        {
            nextQuestion(questionButtons[end], end); // Previous button function works as long as the current question isn't Question 10
        }
    } 
})

// Storing user's choices
optionButtons.forEach((buttonOption,index) => { // Adds the event listener of click for each button in the option Buttons array
    buttonOption.addEventListener("click", function(){ // Listens for the click

        this.classList.toggle("selected") // Marks or unmarks it as the selected  option

        if(this.classList.contains("selected")) // If it's currently chosen
        {
            for (let button in optionButtons) // Loops through the option buttons
            {
                if (this !== optionButtons[button])
                    optionButtons[button].classList.remove("selected"); // and removes the higlight from every other unclicked option
            }

            for (let button in  questionButtons) // Loops through the question buttons
            {
                if (questionButtons[button].classList.contains("current")) { // Checks for the question number 
                    optionChoices[button] = optionButtonsLetters[index];  // then stores in the array for user's choices for the appropriate number
                    questionButtons[button].classList.add("answered"); // Finally marks the question as answered on the nav bar 
                }
            }
        }
        else // If it's unselected
        {
            for (let button in  questionButtons) // Loops through the question buttons
            {
                if (questionButtons[button].classList.contains("current")) { // Checks for the question number 
                    optionChoices[button] = undefined;  // Removes any previous choice from the array
                    questionButtons[button].classList.remove("answered"); // Finally unmarks the question as answered on the nav bar 
                }
            }
        }
    })
});

//Scoring and next page 
document.getElementById("question-nav-button").addEventListener("click", function () // Waits for submit button to be clicked 
{
    let actualCorrect = []; // Array to save the numbers of Questions answered correctly
    let actualUnanswered = []; // Array to save the numbers of Questions not answered at all

    for (let answer in quizData) // Goes through all the question sets in quizData array
    {
        let questionNumber = Number(answer) + 1; // Gets actual question number 

        if(quizData[answer].correctAnswer === optionChoices[answer]) // Gets the correct answer for the question and checks if it's the same as the option chosen by user 
        {
            actualCorrect[totalCorrect] = questionNumber; // If same store into a space in the array for correctly answerd question
            totalCorrect ++; // And increase the number of correctly answered questions by 1
            
        }
        else if (optionChoices[answer] === undefined) // If option choice for that number doesn't exist (undefined)
        {
            actualUnanswered[totalUnanswered] = questionNumber; // Stores option number in array for unanswered question 
            totalUnanswered ++; // And increase the number of unanswered questions by 1
        }
    }

    localStorage.setItem("actualCorrect", String(actualCorrect)); // Saves the array of questions correctly answered as a string "actualCorrect" in local storage
    localStorage.setItem("actualUnanswered", String(actualUnanswered)); // Saves the array of questions unanswered as a string "actualUnanswered" in local storage
    localStorage.setItem("unanswered", totalUnanswered); // Saves total number of unanswered questions as "unanswered" in local storage 
    localStorage.setItem("score", totalCorrect); // Saves total number of correctly answered question as "score" in local storage 

    window.location.href= "summary.html"; // Moves to summary page
})

/* 
    Arrays are saved in the local storage as strings because the local storage doesn't take arrays 
    So the array is converted to string and then converted back to an array when needed in the next page
*/

