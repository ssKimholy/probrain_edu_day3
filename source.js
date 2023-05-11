const fvSection = document.getElementById("favoriteSection");
const musicSection = document.getElementById("musicSection");
const mbtiSection = document.getElementById("mbtiSection");
const favoriteContainer = document.getElementById("favoriteContainer");
const musicContainer = document.getElementById("musicContainer");
const mbtiContainer = document.getElementById("mbtiContainer");


function onClickSection_1() {
    turnOnElement(fvSection, favoriteContainer);
    turnOffElement(musicSection, musicContainer);
    turnOffElement(mbtiSection, mbtiContainer);
}

function onClickSection_2() {
    turnOnElement(musicSection, musicContainer);
    turnOffElement(fvSection, favoriteContainer);
    turnOffElement(mbtiSection, mbtiContainer);
}

function onClickSection_3() {
    turnOnElement(mbtiSection, mbtiContainer);
    turnOffElement(fvSection, favoriteContainer);
    turnOffElement(musicSection, musicContainer);
}

function turnOnElement(text, view) {
    text.style.backgroundColor = "#f238a2";
    text.style.color = "#FF4646";
    view.style.display = "block";
}

function turnOffElement(text, dis_view) {
    text.style.backgroundColor = "white";
    text.style.color = "#FAA8A8";
    dis_view.style.display = "none";
}

function onHoverSection(event) {
    event.target.style.color = "#FF4646";
}

function onLeaveSection(event) {
    event.target.style.color = "#FAA8A8";
}

fvSection.addEventListener("click", onClickSection_1);
musicSection.addEventListener("click", onClickSection_2);
mbtiSection.addEventListener("click", onClickSection_3);
fvSection.addEventListener("mouseover", onHoverSection);
musicSection.addEventListener("mouseover", onHoverSection);
mbtiSection.addEventListener("mouseover", onHoverSection);
fvSection.addEventListener("mouseleave", onLeaveSection);
musicSection.addEventListener("mouseleave", onLeaveSection);
mbtiSection.addEventListener("mouseleave", onLeaveSection);
