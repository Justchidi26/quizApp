
// Gets information about subject, stores in local storage for use in other files and moves to the next webpage.
document.addEventListener("submit", function (e){
    e.preventDefault();
    const formData = new FormData(document.getElementById("quizSettings"));
    const subjectName = formData.get("subjects");
    
    localStorage.setItem("subjects", subjectName);

    window.location.href= "quizSpace.html";
});

