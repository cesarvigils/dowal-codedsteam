// 13, 14, 15
function showSlide(slideId) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  const selectedSlide = document.getElementById(slideId);
  if (selectedSlide) {
    selectedSlide.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide('map');
});

let myButton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
