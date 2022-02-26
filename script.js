const imageElements = document.querySelectorAll("img");
const contentElements = document.querySelectorAll(".content");

let activeImage = 0;

const removeActive = () => {
    imageElements[activeImage].classList.remove("active");
    contentElements[activeImage].classList.remove("active");
}

const addActive = () => {
    imageElements[activeImage].classList.add("active");
    contentElements[activeImage].classList.add("active");
}

const nextSlide = () => {
    removeActive();
    if (activeImage == imageElements.length - 1) {
        activeImage = 0;
    } else {
        activeImage++;
    }
    addActive();
}

const prevSlide = () => {
    removeActive();
    if (activeImage == 0) {
        activeImage = imageElements.length - 1;
    } else {
        activeImage--;
    }
    addActive();
}