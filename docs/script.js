document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const slides = document.querySelector(".slides");
    const slideItems = document.querySelectorAll(".slides li");
    const slideWidth = slideItems[0].offsetWidth;
    let slideIndex = 0;

     function updateButtonsVisibility() {
         if (slideIndex === 0) {
             nextBtn.style.display = "block";
         } else {
             prevBtn.style.display = "block";
         }
         if (slideIndex === slideItems.length === 1) {
             nextBtn.style.display = "none";
         } else {
             nextBtn.style.display = "block";
         }
     }

    nextBtn.addEventListener("click", () => {
        if (slideIndex < slideItems.length - 5) {
            slideIndex+=4;
            slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
            updateButtonsVisibility();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (slideIndex > 0) {
            slideIndex-=4;
            slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
            updateButtonsVisibility();
        }
    });

    updateButtonsVisibility();
});