let timer = document.getElementById("timer"); // Space for the timer in quizSpace.html

let time; // Saves time

 if(localStorage.time)
        time = localStorage.time; //updates time with a saved time if available
else
        time = 300; // 5 minutes

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

        // Submission
        document.getElementById("question-nav-button").click(); 
        document.getElementById("confirm-submit").click();
    }
}

// Actual timer 
const intervalId = setInterval(countdown, 1000); // Every 1 second the function above repeats
// 1000 milliseconds = 1 second

function debounce (func, delay){ // Debounce function  takes the function an the time you desire 
    let timerID; // stores the timer 

    return function(...args){
        if (timerID) {
            clearTimeout(timerID); // Clears the timer if any activity is done 
        }
        
        timerID = setTimeout(() => { // Starts the timer 
        func.apply(this, args);}, delay); // Executes the entered function at the entered time if no action is done that stops the timer 
    }
}

const moveToNext = debounce((e) => { // Calls the debounce function
            nextButton.click(); // The function to be done is moving to next
        }, 2500); // 2.5 seconds

optionButtons.forEach((button) => {
    button.addEventListener("click", function(){
        moveToNext(); // Executes the debouncer for next when an option has been selected.
    }) 
})
