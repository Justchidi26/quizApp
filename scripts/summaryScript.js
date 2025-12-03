if(localStorage.length < 5)
{
    alert("Unauthorised access detected. Redirecting to start....");
    window.location.href = "index.html";
}

localStorage.removeItem("userChoices");
localStorage.removeItem("submit");

// Retrieves values for number of correct answers and unattempted questions; and stores value for decided point per correct answer
let totalCorrect = localStorage.getItem("score");
let unattempted = localStorage.getItem("unanswered");
let points = 1;

// Fills the side table of the summary page
document.getElementById("attempted").innerHTML = 10 - unattempted;
document.getElementById("unanswered").innerHTML = unattempted;
document.getElementById("correct").innerHTML = totalCorrect;
document.getElementById("wrong").innerHTML = 10 - unattempted - totalCorrect;
document.getElementById("points").innerHTML = points;
document.getElementById("total").innerHTML = points * totalCorrect;

// Initialises the array for questions and their respective corrrect answers 
let correctAnswers;
let questions;

//Gives the above arrays values based on the subject 
if ( localStorage.subjects == "English")
{
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

    correctAnswers = [
        "C : book (A noun is a person, place, or thing.)",
        "C : went",
        "B : sad",
        "D : tall (An adjective describes a noun.)",
        "B : large",
        "C : children",
        "C : under",
        "C : ? (question mark) (It is a question.)",
        "A : They (The sentence needs a subject pronoun.)",
        "B : The dog barks loudly. (A singular subject 'dog' needs a singular verb 'barks'.)"
    ]
}   
else if ( localStorage.subjects == "Basic Science")
{
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

    correctAnswers = [
        "D : Root",
        "B : Mars",
        "B : H20",
        "C : Gravity",
        "B : 8",
        "C : Skin",
        "B : Oxygen",
        "C : Gas",
        "B : The Sun",
        "C : Amphibian"
    ]
}
else if (localStorage.subjects == "Maths")
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


    correctAnswers = [
        "C : 20",
        "C : 16",
        "B : 42",
        "B : 9",
        "B : 3",
        "B : 4",
        "D : 12",
        "B : 60",
        "B : 10",
        "C : 5" 
    ]
}

// Retrieves the array for correctly answred questions and unattempted questions from local storage
let actualCorrect = localStorage.getItem("actualCorrect").split(",");
let actualUnanswered = localStorage.getItem("actualUnanswered").split(",");

let j = 0;
let k = 0;

// Function that puts the correct info per box in summary page 
function corrections (questionNumber)
{
    let index = questionNumber-1;

    document.getElementsByClassName("question")[index].innerHTML = questions[index];
    document.getElementsByClassName("answer")[index].innerHTML = correctAnswers[index];
    document.getElementsByClassName("mark")[index].innerHTML = points;

    
    if (questionNumber == actualCorrect[j])
    {
        document.getElementsByClassName("question-summary-indicator")[index].innerHTML = "&check;";
        j++;
    }
    else if (questionNumber == actualUnanswered[k])
    {
        document.getElementsByClassName("question-summary-indicator")[index].innerHTML = "&propto;";
        k++;
    }
    else
    {
        document.getElementsByClassName("question-summary-indicator")[index].innerHTML = "&times;";
    }

}

// Using the function for all questions 
for (let i = 1; i <= 10; i++)
{
    corrections(i);
}

    
