// Ensure proper management of local storage
document.addEventListener("DOMContentLoaded", function (){
    if (localStorage.name) // If there's a previous value of name 
        document.getElementById("name").value = localStorage.name; // Puts in the text box that name stored
    localStorage.clear() // Cleans local storage for fresh quiz
});

document.addEventListener("submit", function (e){
    e.preventDefault(); // Stops the normal function of submit which is to add to the webpage name
    const formData = new FormData(document.getElementById("quizSettings")); // Gets all the form data and stores 
    const subjectName = formData.get("subjects"); // picks only the subject value to store
    const userName = formData.get("name"); // picks only the name value to store

    // Saves the subject and name to local storage
    localStorage.setItem("subjects", subjectName); 
    localStorage.setItem("name", userName);

    window.location.href= "quizSpace.html"; // Then moves to the main quiz page 
});

