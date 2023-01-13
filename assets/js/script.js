var section = document.querySelector("section");
var h1El = document.querySelector("h1");
var pEl = document.querySelector("p");
var startButtonEL = document.querySelector("#start-button");
var timerEL = document.querySelector("#countdown");
var viewHighscoreEl = document.querySelector("#highscores");
var questionIndex = 0;
var wrong = false;
highscores = [];
var timeLeft = 60;

// the button clicked in question 1 is wrong
function btnClickWrongQ1(btn) {
    var btnClick = btn.addEventListener("click", function() {
        btnClick = true;
        if (btnClick && questionIndex === 0) {
            questionIndex++;
            wrongAnswer();
            wrong = true;
            makeQuestion2();
        }
    });
}

// the button clicked in quetion 1 is correct
function btnClickCorrectQ1(btn) {
    var btnClick = btn.addEventListener("click", function() {
        btnClick = true;
        if (btnClick && questionIndex === 0) {
            questionIndex++;
            correctAnswer();
            makeQuestion2();
        }
    });
}

// the button clicked in question 2 is wrong
function btnClickWrongQ2(btn) {
    var btnClick = btn.addEventListener("click", function() {
        btnClick = true;
        if (btnClick && questionIndex === 1) {
            questionIndex++;
            wrongAnswer();
            wrong = true;
            makeQuestion3();
        }
    });
}

// the button clicked in question 2 is correct
function btnClickCorrectQ2(btn) {
    var btnClick = btn.addEventListener("click", function() {
        btnClick = true;
        if (btnClick && questionIndex === 1) {
            questionIndex++;
            correctAnswer();
            makeQuestion3();
        }
    });
}

// the button clicked in question 3 is wrong
function btnClickWrongQ3(btn) {
    var btnClick = btn.addEventListener("click", function() {
        btnClick = true;
        if (btnClick && questionIndex === 2) {
            questionIndex++;
            wrongAnswer();
            wrong = true;
            makeInputForm();
        }
    });
}

// the button clicked in question 3 is correct
function btnClickCorrectQ3(btn) {
    var btnClick = btn.addEventListener("click", function() {
        btnClick = true;
        if (btnClick && questionIndex === 2) {
            questionIndex += 2;
            correctAnswer();
            makeInputForm();
        }
    });
}

// changes the elements on the page and creates question 1
function makeQuestion1() {
    h1El.textContent = "What is NOT a common datatype in javascript";
    pEl.remove();
    startButtonEL.remove();
    var btn1 = document.createElement("button");
    var btn2 = document.createElement("button");
    var btn3 = document.createElement("button");
    var btn4 = document.createElement("button");
    section.setAttribute("class", "question1");
    btn1.setAttribute("id", "btn1");
    btn2.setAttribute("id", "btn2");
    btn3.setAttribute("id", "btn3");
    btn4.setAttribute("id", "btn4");
    btn1.textContent = "A) strings";
    btn2.textContent = "B) boolean";
    btn3.textContent = "C) alert";
    btn4.textContent = "D) number";
    section.appendChild(btn1);
    section.appendChild(btn2);
    section.appendChild(btn3);
    section.appendChild(btn4);
    question1Answer();
}

function makeQuestion2() {
    section.setAttribute("class", "question2");
    h1El.textContent = "The condition in a if statement is enclosed in what?";
    btn1.textContent = "A) {}";
    btn2.textContent = "B) []";
    btn3.textContent = "C) ||";
    btn4.textContent = "D) ()";
    question2Answer();
}

function makeQuestion3() {
    section.setAttribute("class", "question3");
    h1El.textContent = "Arrays can be used to store what of the following?";
    btn1.textContent = "A) strings";
    btn2.textContent = "B) numbers";
    btn3.textContent = "C) boolean";
    btn4.textContent = "D) all of the above";
    question3Answer();
}

// makes form to ask user for Initials
function makeInputForm() {
    h1El.textContent = "All done";
    btn1.remove();
    btn2.remove();
    btn3.remove();
    btn4.remove();
    var p = document.createElement("p");
    var form = document.createElement("form");
    var btn = document.createElement("button");
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    p.textContent = "Enter Initials: ";
    btn.textContent = "Submit";
    section.appendChild(p);
    section.appendChild(form);
    section.appendChild(btn);
    form.appendChild(input);
    getInput();
}

// grabs the initials from the form and stores it and the time to local storage
function getInput() {
    var input = document.querySelector("input");
    var btn = document.querySelector("button");

    btn.addEventListener("click", function() {
        var initialsVal = input.value;

        if (initialsVal.length > 3 || initialsVal.length <= 1) {
            alert("Initials must be two letters");
            return;
        }

        var highscore = {
            initials: initialsVal,
            score: timeLeft,
        };
        highscores.push(highscore);
        localStorage.setItem("highscores", JSON.stringify(highscores));
        location.href = "highscores.html";
    });
}

// checks what the users answer was for question 1
function question1Answer() {
    var questionOptionA = document.querySelector("#btn1");
    var questionOptionB = document.querySelector("#btn2");
    var questionOptionC = document.querySelector("#btn3");
    var questionOptionD = document.querySelector("#btn4");
    
    btnClickWrongQ1(questionOptionA);
    
    btnClickWrongQ1(questionOptionB);

    btnClickCorrectQ1(questionOptionC);

    btnClickWrongQ1(questionOptionD);
}

// checks what the users answer was for question 2
function question2Answer() {
    var questionOptionA = document.querySelector("#btn1");
    var questionOptionB = document.querySelector("#btn2");
    var questionOptionC = document.querySelector("#btn3");
    var questionOptionD = document.querySelector("#btn4");
   
    btnClickWrongQ2(questionOptionA);

    btnClickWrongQ2(questionOptionB);

    btnClickWrongQ2(questionOptionC);

    btnClickCorrectQ2(questionOptionD);
}

// checks what the users answer was for question 3
function question3Answer() {
    var questionOptionA = document.querySelector("#btn1");
    var questionOptionB = document.querySelector("#btn2");
    var questionOptionC = document.querySelector("#btn3");
    var questionOptionD = document.querySelector("#btn4");
    
    btnClickWrongQ3(questionOptionA);

    btnClickWrongQ3(questionOptionB);

    btnClickWrongQ3(questionOptionC);

    btnClickCorrectQ3(questionOptionD);
}

// displays correct on screen
function correctAnswer() {
    var p = document.createElement("p");
    p.textContent = "Correct!";
    section.appendChild(p);
    setTimeout(function() {
        p.remove();
    }, 1000);
}

// displays wrong on screen
function wrongAnswer() {
    var p = document.createElement("p");
    p.textContent = "Wrong!";
    section.appendChild(p);
    setTimeout(function() {
        p.remove();
    }, 1000);
}

function countdown() {
    

    var timeInterval = setInterval(function() {
        timerEL.textContent = "Time: " + timeLeft;
        timeLeft--;

        if (timeLeft <= 0) {
            clearInterval(timeInterval);
        }
        if (wrong && questionIndex === 1) {
            wrong = false;
            timeLeft -= 10;
        }
        if (wrong && questionIndex === 2) {
            wrong = false;
            timeLeft -= 10;
        }
        if (wrong && questionIndex === 3) {
            wrong = false;
            timeLeft -= 10;
            questionIndex++;
        }
        if (questionIndex === 4) {
            clearInterval(timeInterval);
        }

        
    }, 1000);
}

// sends user to html page of the first javascript question
startButtonEL.addEventListener("click", function() {
    var timeInterval = setInterval(function() {
        

        if (timeLeft <= 0) {
            clearInterval(timeInterval);
        }
        if (wrong && questionIndex === 1) {
            wrong = false;
            timeLeft -= 10;
        }
        if (wrong && questionIndex === 2) {
            wrong = false;
            timeLeft -= 10;
        }
        if (wrong && questionIndex === 3) {
            wrong = false;
            timeLeft -= 10;
            questionIndex++;
        }
        if (questionIndex === 4) {
            clearInterval(timeInterval);
        }

        timeLeft--;
        timerEL.textContent = "Time: " + timeLeft;
        
    }, 1000);
    makeQuestion1();
});

// switches location to highscores when clicked
viewHighscoreEl.addEventListener("click", function() {
    location.href = "highscores.html";
});
