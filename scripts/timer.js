let timer = document.getElementById("timer"); // Space for the timer in quizSpace.html

let time = 300; // 5 minutes

// Timer function
function countdown () {
    const minutes = Math.floor(time/60); // Stores minutes value
    const seconds = time % 60; // Stores the seconds value

    if (seconds < 10) // For styling purposes it ensures the single digits have a 0
        timer.innerHTML = minutes + ":0" + seconds;
    else 
        timer.innerHTML = minutes + ":" + seconds;

    time --; // Reduces the time 

    if (time < 120){ // Makes the time turn red at 2 minutes
        timer.style.color = "red";
    }

    if (time < 0){ // Tells the timer to stop counting at 0 and move to the summary page
        clearInterval(intervalId);

        document.getElementById("question-nav-button").click();
    }
}

// Actual timer 
const intervalId = setInterval(countdown, 1000); // Every 1 second the function above repeats
// 1000 milliseconds = 1 second.