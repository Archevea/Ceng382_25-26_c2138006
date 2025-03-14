// Function that stops the background and show ups the form
document.addEventListener("DOMContentLoaded", function () {
    let video = document.getElementById("backgroundVideo");
    let button = document.getElementById("toggleButton");

    button.addEventListener("click", function () {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});

// I took some help from ChatGpt in here. This function hides the register form when the user press 'H' from keyboard 
// https://chatgpt.com/c/67c82b11-0b5c-8004-94b1-55d63a62259d
document.addEventListener("keydown", function(event) {
    if (event.key === "h" || event.key === "H") {
        let container = document.getElementById("registerContainer");
        container.style.display = (container.style.display === "none") ? "block" : "none";
    }
});

// I took some help from ChatGpt in here. This function hides the register form when the user clicks the css art which is located at middle of the website
document.getElementById("toggleButton").addEventListener("click", function() {
    let container = document.getElementById("registerContainer");
    container.style.display = (container.style.display === "none") ? "block" : "none";
});

// I took some help from ChatGpt in here. This function updates the clock
function updateClock() {
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    document.getElementById("clock").textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

let users = [];
document.getElementById("loginBtn").addEventListener("click", function() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    users.push({ username, password });
    console.log(users);
});