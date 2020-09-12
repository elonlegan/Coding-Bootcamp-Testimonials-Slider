const textContainer = document.getElementsByClassName("text-container");
const image = document.getElementsByClassName("image");
const buttonPrev = document.querySelector("#button-left");
const buttonNext = document.querySelector("#button-right");

buttonPrev.addEventListener("click", changeSlide);
buttonNext.addEventListener("click", changeSlide);
document.addEventListener("keyup", keys);

function changeSlide() {
  textContainer[0].classList.toggle("none");
  textContainer[1].classList.toggle("none");
  image[0].classList.toggle("none");
  image[1].classList.toggle("none");
}

function keys(event) {
  if (event.keyCode === 37 || event.keyCode === 39 || event.keyCode === 65 || event.keyCode === 68){
    changeSlide();
  }
}