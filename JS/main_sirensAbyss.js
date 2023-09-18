

// This function displays the first image in the slideshow when the page loads
var slideIndex = 1;
show_slide(slideIndex);


function slide_change(n) {// This function changes the slide when the left or right arrows are clicked
    show_slide(slideIndex += n);
}

function slide_current(n) {// This function changes the slide when the dots are clicked
    show_slide(slideIndex = n);
}


//This function is used to display the slide indicaded by 'n'
function show_slide(n) {
    var slides = document.getElementsByClassName("slide"); //Declare a var named slides and make its value an array of elements with the 'slide' sclass
    var dots = document.getElementsByClassName("dot"); // This takes  elements with the  "dot" class and stores them in the variable array "dots"
    if (n > slides.length) {slideIndex = 1}; // If n (the number passed into the function) is greater than the length of the array "slides", the slideIndex is set to 1
    if (n < 1) {slideIndex = slides.length}; // If n (the number passed into the function) is less than 1, the slideIndex is set to the length of the array "slides"
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // This for loop takes each item in the array "slides" and sets the display to none
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // This for loop takes each item in the array "dots" and removes "active" which removes the active styling
    }
    slides[slideIndex - 1].style.display = "block"; // This displays the image in the slideshow
    dots[slideIndex - 1].className += " active"; // This adds the active styling to the dot associated with the image
}
