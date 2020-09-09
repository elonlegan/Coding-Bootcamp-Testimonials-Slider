const textContainer = document.getElementsByClassName("text-container");
const image = document.getElementsByClassName("image");

function changeSlide() {
  textContainer[0].classList.toggle("none");
  textContainer[1].classList.toggle("none");
  image[0].classList.toggle("none");
  image[1].classList.toggle("none");
}
