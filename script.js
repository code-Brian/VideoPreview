console.log("page loaded...");
document.getElementById("myVideo").muted = true;
let x = document.getElementById("myVideo");

function playVideo() {
    console.log("mouse over video...");
    x.play();
}

function pauseVideo() {
    console.log("mouse left video...");
    x.pause();
}

function logStatus(element) {
    if (element.textContent == "Login") {
        element.textContent = "Logout";
    } else if (element.textContent == "Logout") {
        element.textContent = "Login";
    }
}

function subStatus(element) {
    if (element.textContent == "Subscribe") {
        element.textContent = "Unsubscribe";
    } else if (element.textContent == "Unsubscribe") {
        element.textContent = "Subscribe";
    }
}

function hoverVidPreview(element) {
    element.classList.add("video-small-hover");
}