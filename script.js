// Query Selectors/getElementsBy...

document.getElementById("myVideo").muted = true;
let mainVideo = document.getElementById("myVideo");
let logBtn = document.getElementById("l-btn");
let subBtn = document.getElementById("s-btn");
let upCom = document.querySelectorAll(".vid-s");

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

// lotta text :C
// console.log(upCom.length);
// for (let i=0; i<upCom.length; i++) {
//     console.log(upCom[i].innerHTML);
//     upCom[i].addEventListener("mouseover",function(e){
//         addHover(e);
//     });
// }

upCom.forEach((el) => el.addEventListener("mouseover", ()=> addHover(el)));

upCom.forEach((el) => el.addEventListener("mouseleave", ()=> removeHover(el)));


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

function addHover(el) {
    console.log("starting addHover()...")
    el.classList.add("video-small-hover");
}

function removeHover(el) {
    el.classList.remove("video-small-hover");
}