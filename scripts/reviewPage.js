if (localStorage.length < 5)
{
    alert("Unauthorised access detected. Redirecting to start....");
    window.location.href = "index.html";
}

let quizData = []; //Stores question,option set for each subect.
let optionChoices = []; // stores user's answers


if ( localStorage.subjects == "English")
{
    quizData = [ // An array of objects that have the properties : question, option, correctAnswer for each question number 
        {
            question: "Which of the following words is a noun?",
            option: {
              A:"run",
              B:"happy",
              C:"book",
              D:"quickly"
            }
        },

        {
            question:"Choose the correct past tense of the verb 'go'",
            option: {
              A:"goed",
              B: "gone",
              C: "went",
              D: "going"
            }
        },

        {
            question: "Which word is the antonym (opposite) of 'happy'?",
            option: {
              A: "joyful",
              B: "sad",
              C: "glad",
              D: "lucky"
            }
        },

        {
            question: "Identify the adjective in this sentence: 'The tall girl won the race.'",
            option: {
              A: "girl",
              B: "won",
              C: "race",
              D: "tall"
            }
        },

        

        {
            question: "Which word is a synonym (similar meaning) for 'big'?",
            option: {
              A: "small",
              B: "large",
              C: "tiny",
              D:  "soft"
            }
        },

        {
            question: "What is the correct plural form of 'child'?",
            option: {
              A: "childs",
              B: "childes",
              C: "children",
              D:  "child"
            }
        },

        {
            question: "Choose the correct preposition to complete the sentence: 'The cat is hiding ___ the table.'",
            option: {
              A: "on",
              B: "at",
              C: "under",
              D:  "with"
            }
        },

        {
            question: "Which punctuation mark should be used at the end of this sentence: 'What is your name'",
            option: {
              A: ".(period)",
              B: ",(comma)",
              C:"? (question mark)",
              D:  "! (exclamation mark)",
            }
        },

        {
            question: "Choose the correct word to complete the sentence: '___ are my best friends.'",
            option: {
              A: "They",
              B: "Them",
              C:"Their",
              D: "Him",
            }
        },
        
        {
            question: "Which sentence has the correct subject-verb agreement?",
            option: {
              A: "The dogs barks loudly.",
              B: "The dog barks loudly.",
              C: "The dog bark loudly.",
              D:  "The dogs barked loudly."
            }
        }
    ]
}   
else if ( localStorage.subjects == "Basic Science")
{
    quizData = [ // An array of objects that have the properties : question, option, correctAnswer for each question number
        {
            question:"What part of a plant absorbs water and nutrients from the soil?",
            option: {
              A:"Leaf",
              B:"Stem",
              C:"Flower",
              D: "Root"
            }
        },

        {
            question: "Which planet is known as the 'Red Planet'?",
            option: {
              A: "Earth",
              B: "Mars",
              C:"Jupiter",
              D: "Venus" 
            } 
        },

        {
            question: "What is the chemical symbol for water?",
            option: {
              A: "O2",
              B: "H2O",
              C:"CO2",
              D: "NaCl" 
            }
        },

        {
            question: "What force pulls objects toward the center of the Earth?",
            option: {
              A:"Magnetism",
              B:"Friction",
              C:"Gravity",
              D: "Tension"
            }
        },

        {
            question: "How many legs does a spider have?",
            option: {
              A:"6",
              B:"8",
              C:"10",
              D:"4"  
            }
        },

        {
            question: "What is the largest organ in the human body?",
            option: {
              A:"Heart",
              B:"Liver",
              C:"Skin",
              D:"Brain" 
            }
        },

        {
            question: "What gas do plants release during photosynthesis?",
            option: {
              A:"Nitrogen",
              B:"Oxygen",
              C:"Carbon Dioxide",
              D: "Hydrogen"
            }
        },

        {
            question: "What state of matter is steam?",
            option: {
              A:"Solid",
              B:"Liquid",
              C:"Gas",
              D:"Plasma"  
            }
        },

        {
            question: "What is the center of our Solar System?",
            option: {
              A: "The Moon",
              B:"The Sun",
              C:"Mars",
              D:"A Comet"
            }
        },

        {
            question: "What type of animal is a frog?",
            option: {
              A:"Mammal",
              B:"Reptile",
              C:"Amphibian",
              D: "Fish"
            }
        }
    ]
}
else
{
    quizData = [ // An array of objects that have the properties : question, option, correctAnswer for each question number
        {
            question:"What is 12 + 8?",
            option: {
              A: "18",
              B: "19",
              C: "20",
              D: "21" 
            }
        },

        {
            question:"What is 25 - 9?",
            option: {
              A:"14",
              B:"15",
              C:"16",
              D:"17"
            }
        },

        {
            question:"What is 7 x 6?",
            option: {
              A:"40",
              B:"42",
              C:"48",
              D:"56" 
            }
        },

        {
            question:"What is 36 / 4?",
            option: {
              A:"8",
              B:"9",
              C:"10",
              D:"12" 
            }
        },

        {
            question:"How many sides does a triangle have?",
            option: {
              A:"2",
              B:"3",
              C:"4",
              D: "5" 
            }
        },

        {
            question:"How many sides does a square have?",
            option: {
              A:"3",
              B:"4",
              C:"5",
              D:"6"
            }
        },

        {
            question:"Which of these numbers is an even number?",
            option: {
              A:"7",
              B:"9",
              C:"11",
              D: "12" 
            }
        },

        {
            question:"How many minutes are in one hour?",
            option: {
              A:"30",
              B:"60",
              C:"90",
              D:"100"
            }
        },

        {
            question:"What is 1/2 (one-half) of 20?",
            option: {
              A:"5",
              B:"10",
              C:"15",
              D:"20"
            }
        },
        
        {
            question:"If x + 5 = 10, what is x?",
            option: {
              A:"3",
              B: "4",
              C:"5",
              D:"15" 
            }
        }
    ]
}

// Function that puts the correct info per box in summary page 
for(let index in quizData)
{
    document.getElementsByClassName("main-question")[index].innerHTML = quizData[index].question;
}