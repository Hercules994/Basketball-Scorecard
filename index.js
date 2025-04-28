let homeCount = 0;
let guestCount = 0;
let score = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");


function homesingle() {
    homeCount += 1
    score.textContent = homeCount
}

function homedouble() {
    homeCount += 2
    score.textContent = homeCount
}

function hometriple() {
    homeCount += 3
    score.textContent = homeCount

}

function guestsingle() {
    guestCount += 1
    guestScore.textContent = guestCount
}

function guestdouble() {
    guestCount += 2
    guestScore.textContent = guestCount
}

function guesttriple() {
    guestCount += 3
    guestScore.textContent = guestCount

}


function reset() {
    guestCount = 0
    homeCount = 0
    guestScore.textContent = guestCount 
    score.textContent = homeCount

}