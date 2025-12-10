// Simple hero slide change (future साठी expand करू शकतोस)
const heroSlides = document.querySelectorAll(".hero-slide");
const heroLeft = document.querySelector(".hero-arrow-left");
const heroRight = document.querySelector(".hero-arrow-right");

let heroIndex = 0;

function showHeroSlide(index) {
  heroSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

if (heroLeft && heroRight) {
  heroLeft.addEventListener("click", () => {
    heroIndex = (heroIndex - 1 + heroSlides.length) % heroSlides.length;
    showHeroSlide(heroIndex);
  });

  heroRight.addEventListener("click", () => {
    heroIndex = (heroIndex + 1) % heroSlides.length;
    showHeroSlide(heroIndex);
  });
}

// Horizontal sliders (दोन्ही strips साठी same logic)
document.querySelectorAll(".horizontal-slider").forEach((slider) => {
  const leftBtn = slider.querySelector(".hs-left");
  const rightBtn = slider.querySelector(".hs-right");
  const itemsContainer = slider.querySelector(".hs-items");

  const scrollAmount = 300;

  leftBtn.addEventListener("click", () => {
    itemsContainer.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  });

  rightBtn.addEventListener("click", () => {
    itemsContainer.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });
});

console.log("Amazon home clone loaded");
