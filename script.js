// Query Selectors/getElementsBy...

document.getElementById("myVideo").muted = true;
let mainVideo = document.getElementById("myVideo");
let logBtn = document.getElementById("l-btn");
let subBtn = document.getElementById("s-btn");
let upcomingVideo = document.querySelectorAll(".vid-s");

console.log(upcomingVideo.length);

// Event Listeners
mainVideo.addEventListener("mouseover", ()=> {
    playVideo();
});

mainVideo.addEventListener('mouseleave', ()=> {
    pauseVideo();
});

logBtn.addEventListener("click", ()=> {
    logStatus();
});

subBtn.addEventListener("click", ()=> {
    subStatus();
});

upcomingVideo.forEach(element => element.addEventListener("click", ()=> {
    addHover();
}));

// upcomingVideo.addEventListener("mouseleave", ()=> {
//     removeHover();
// });

// Functions
function playVideo() {
    console.log("mouse over video...");
    mainVideo.play();
}

function pauseVideo() {
    console.log("mouse left video...");
    mainVideo.pause();
}

function logStatus() {
    if (logBtn.textContent == "Login") {
        logBtn.textContent = "Logout";
    } else if (logBtn.textContent == "Logout") {
        logBtn.textContent = "Login";
    }
}

function subStatus() {
    if (subBtn.textContent == "Subscribe") {
        subBtn.textContent = "Unsubscribe";
    } else if (subBtn.textContent == "Unsubscribe") {
        subBtn.textContent = "Subscribe";
    }
}

function addHover() {
    console.log("starting addHover()...")
    upcomingVideo.classList.add("video-small-hover");
}

function removeHover() {
    // upcomingVideo.classList.remove("video-small-hover");
}