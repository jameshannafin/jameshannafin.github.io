var slideIndex = 1;
var slides = document.getElementsByClassName("slide"); // Declare slides outside the function
show_slide(slideIndex);

function slide_change(n) {
    show_slide(slideIndex += n);
}

function slide_current(n) {
    show_slide(slideIndex = n);
}

function show_slide(n) {
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 };
    if (n < 1) { slideIndex = slides.length };
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

console.log("slideIndex:", slideIndex);

// Check if slides[slideIndex - 1] exists
if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].style.display = "block";
} else {
    console.error("Slide element not found.");
}
