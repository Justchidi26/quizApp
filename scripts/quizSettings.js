// Ensure proper management of local storage
document.addEventListener("DOMContentLoaded", function (){
    if (localStorage.name)
        document.getElementById("name").value = localStorage.name;
    localStorage.clear()
});


// Gets information about subject, stores in local storage for use in other files and moves to the next webpage.
document.addEventListener("submit", function (e){
    e.preventDefault();
    const formData = new FormData(document.getElementById("quizSettings"));
    const subjectName = formData.get("subjects");
    const userName = formData.get("name");

    localStorage.setItem("subjects", subjectName);
    localStorage.setItem("name", userName);

    window.location.href= "quizSpace.html";
});

