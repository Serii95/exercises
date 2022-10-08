const navbarDropdownButton = document.querySelector("#navbar-dropdown-button");
const navDropdown = document.querySelector("#nav-small-screen-dropdown");
const slideshowElements = document.querySelectorAll(".slideshow-element");
let slideIndex = 0;

navbarDropdownButton.addEventListener("click", () => {
    navDropdown.classList.toggle("show");
});

changeSlide();

function changeSlide(){
    slideshowElements[slideIndex].classList.toggle("hide");
    slideIndex >= slideshowElements.length-1 ? slideIndex = 0 : slideIndex++;
    slideshowElements[slideIndex].classList.toggle("hide");
    setTimeout(changeSlide, 5000);
}