const carousel = document.getElementById("carousel"),
    arrowIcons = document.querySelectorAll("#left, #right"),
    images = carousel.querySelectorAll("img");

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = images[0].clientWidth + 14;
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(carousel, arrowIcons), 60);
    });
});

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = Math.max(0, prevScrollLeft - positionDiff);
    showHideIcons(carousel, arrowIcons);
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if (!isDragging) return;
    isDragging = false;
}

document.addEventListener("DOMContentLoaded", () => {
    // Auto-slide disabled for the first slider
});

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

const showHideIcons = (carousel, icons) => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    icons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    icons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}