var highscoreEl = document.querySelector("#stored-highscores");
var clearHighscoresEl = document.querySelector("#clear");
var goBackEl = document.querySelector("#go-back");
var highscores = [];

// displays the highscores the page
function displayHighscores() {
    for (var i = 0; i < highscores.length; i++) {
        var p = document.createElement("p");
        p.style.width = "500px";
        p.style.backgroundColor = "#f5b642";
        p.textContent = i + 1 + ". " + highscores[i].initials + ": " + highscores[i].score;
        highscoreEl.append(p);
    }
}

function init() {
    var storedHighscores = JSON.parse(localStorage.getItem("highscores"));

    if (storedHighscores !== null) {
        highscores = storedHighscores;
    }

    displayHighscores();
}

init();

// when you click go back it goes to index.html
goBackEl.addEventListener("click", function() {
    location.href = "index.html";
});

// when you click clear highscores it clears highscores
clearHighscoresEl.addEventListener("click", function() {
    highscoreEl.innerHTML = "";
    localStorage.clear("highscores");
});