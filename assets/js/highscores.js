var highscoreEl = document.querySelector("#stored-highscores");
var clearHighscoresEl = document.querySelector("#clear");
var goBackEl = document.querySelector("#go-back");

function displayHighscores() {
    var storedHighscores = JSON.parse(localStorage.getItem("highscores"));
    for (var i = 0; i < storedHighscores.length; i++) {
        var p = document.createElement("p");
        p.style.width = "100px";
        p.textContent = storedHighscores[i].initials + ": " + storedHighscores[i].score;
        highscoreEl.append(p);
    }
}

displayHighscores();

goBackEl.addEventListener("click", function() {
    location.href = "index.html";
});