# 🧠 Quiz App

A simple and interactive *Quiz Application* built with *HTML, CSS, and JavaScript*.  
Users can answer multiple-choice questions, and their *score is displayed after submission*.  
This project helps beginners practice *DOM manipulation, event handling, and basic logic* in JavaScript.

---

## 📋 Features

- Multiple-choice questions displayed one at a time  
- Score shown at the end of the quiz  
- Option to restart the quiz  
- Responsive and user-friendly interface

---

## 🛠️ Technologies Used

- *HTML5* – for structure  
- *CSS3* – for styling and layout  
- *JavaScript* – for functionality and interactivity  

---

## 🎯 Learning Objectives

This project was created to:

- Understand how to *manipulate the DOM* dynamically using JavaScript  
- Handle *user input* and *button click events*  
- Store and update quiz state (current question, score, etc.)  
- Display results conditionally based on user interaction  
- Practice building a simple *responsive web app*

---

## 🚀 How to Run the Project

1. *Clone or download* this repository:
   bash
   git clone https://github.com/yourusername/quiz-app.git
`

2. Open the project folder:

   bash
   cd quiz-app
   

3. Open the index.html file in your *web browser* (just double-click it).

That’s it! 🎉 The quiz will start from the home screen.

---

## 🧩 Project Structure


quiz-app/
│
├── index.html        # Main HTML structure
├── selection.html        # Selection HTML structure
├── summary.html        # Summary HTML structure
├── quizspace.html        # Quizspace HTML structure
├── style.css         # App styling
├── land.css         # Landing page styling
└── script.js         # Quiz functionality
└── quizsettings.js         # Quiz functionality
└── summaryscript.js         # To handle summary functionality




---

## 💡 How It Works

1. Click the *Start Quiz* button to begin.
2. Each question appears with *four options*.
3. Select your answer and move to the next question.
4. After the final question, your *score* will be displayed.
5. Click *Restart* to take the quiz again.

---

## 📱 Responsive Design

The layout automatically adjusts to different screen sizes.
You can easily play the quiz on *mobile, tablet, or desktop*.

---

## 🧠 Example Questions

javascript
const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks Text Mark Language",
      "None of the above"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS"
  }
];