// Initialize the carousel
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// Function to show the current slide and hide others
function updateSlide(index) {
  // Ensure index stays within bounds of the slides array
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  // Hide all slides and remove the active class
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
  });

  // Show the current slide
  slides[currentSlide].classList.add("active");
}

// Event listener for the previous button
prevBtn.addEventListener("click", () => {
  updateSlide(currentSlide - 1);
});

// Event listener for the next button
nextBtn.addEventListener("click", () => {
  updateSlide(currentSlide + 1);
});

// Initialize the first slide as active when the page loads
document.addEventListener("DOMContentLoaded", () => {
  updateSlide(currentSlide);
});
