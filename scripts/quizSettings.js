

document.addEventListener("submit", function (e){
    e.preventDefault();
    const formData = new FormData(document.getElementById("quizSettings"));
    const subjectName = formData.get("subjects");
    localStorage.setItem("subjects", subjectName);
    window.location.href= "index.html";
});

