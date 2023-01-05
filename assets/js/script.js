var section = document.querySelector("section");
var startButtonEL = document.querySelector("#start-button");
var timerEL = document.querySelector("#countdown");
var question1OptionA = document.querySelector("#question1").querySelector("#btn1");
var question1OptionB = document.querySelector("#question1").querySelector("#btn2");
var question1OptionC = document.querySelector("#question1").querySelector("#btn3");
var question1OptionD = document.querySelector("#question1").querySelector("#btn4");

var question2OptionA = document.querySelector("#question2").querySelector("#btn1");
var question2OptionB = document.querySelector("#question2").querySelector("#btn2");
var question2OptionC = document.querySelector("#question2").querySelector("#btn3");
var question2OptionD = document.querySelector("#question2").querySelector("#btn4");

var question3OptionA = document.querySelector("#question3").querySelector("#btn1");
var question3OptionB = document.querySelector("#question3").querySelector("#btn2");
var question3OptionC = document.querySelector("#question3").querySelector("#btn3");
var question3OptionD = document.querySelector("#question3").querySelector("#btn4");

// checks what the users answer was for question 1
function question1() {
    question1OptionA.addEventListener("click", function() {
        wrongAnswer();
        return false;
    });
    question1OptionB.addEventListener("click", function() {
        wrongAnswer();
        return false;
    });
    question1OptionC.addEventListener("click", function() {
        correctAnswer();
        return true;
    });
    question1OptionD.addEventListener("click", function() {
        wrongAnswer();
        return false;
    });
}

// checks what the users answer was for question 2
function question2() {
    question2OptionA.addEventListener("click", function() {
        wrongAnswer();
        return false;
    });
    question2OptionB.addEventListener("click", function() {
        wrongAnswer();
        return false;
    });
    question2OptionC.addEventListener("click", function() {
        wrongAnswer();
        return false;
    });
    question2OptionD.addEventListener("click", function() {
        correctAnswer();
        return true;
    });
}

// checks what the users answer was for question 3
function question3() {
    question3OptionA.addEventListener("click", function() {
        wrongAnswer();
        return false;
    });
    question3OptionB.addEventListener("click", function() {
        wrongAnswer();
        return false;
    });
    question3OptionC.addEventListener("click", function() {
        wrongAnswer();
        return false;
    });
    question3OptionD.addEventListener("click", function() {
        correctAnswer();
        return true;
    });
}

// displays correct on screen
function correctAnswer() {
    var p = document.createElement("p");
    p.textContent = "Correct!";
    section.appendChild(p);
    setTimeout(function() {
        p.remove();
    }, 1000);
    return;
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


// sends user to html page of the first javascript question
startButtonEL.addEventListener("click", function() {
    window.location.href = "question1.html";
});