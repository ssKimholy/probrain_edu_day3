const favoriteText_1 = document.getElementById("favoriteTitle_1");
const favoriteText_2 = document.getElementById("favoriteTitle_2");
const favoriteText_3 = document.getElementById("favoriteTitle_3");
const favoriteContainer = document.getElementById("favoriteContainer");
const musicContainer = document.getElementById("music");
const mbtiContainer = document.getElementById("mbtiContainer");


function onClickFavor_1() {
    turnOnElement(favoriteText_1, favoriteContainer);
    turnOffElement(favoriteText_2, musicContainer);
    turnOffElement(favoriteText_3, mbtiContainer);
}

function onClickFavor_2() {
    turnOnElement(favoriteText_2, musicContainer);
    turnOffElement(favoriteText_1, favoriteContainer);
    turnOffElement(favoriteText_3, mbtiContainer);
}

function onClickFavor_3() {
    turnOnElement(favoriteText_3, mbtiContainer);
    turnOffElement(favoriteText_1, favoriteContainer);
    turnOffElement(favoriteText_2, musicContainer);
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

function onHoverFavor(event) {
    event.target.style.color = "#FF4646";
}

function onLeaveFavor(event) {
    event.target.style.color = "#FAA8A8";
}


favoriteText_1.addEventListener("click", onClickFavor_1);
favoriteText_2.addEventListener("click", onClickFavor_2);
favoriteText_3.addEventListener("click", onClickFavor_3);
favoriteText_1.addEventListener("mouseover", onHoverFavor);
favoriteText_2.addEventListener("mouseover", onHoverFavor);
favoriteText_3.addEventListener("mouseover", onHoverFavor);
favoriteText_1.addEventListener("mouseleave", onLeaveFavor);
favoriteText_2.addEventListener("mouseleave", onLeaveFavor);
favoriteText_3.addEventListener("mouseleave", onLeaveFavor);