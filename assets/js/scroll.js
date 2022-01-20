const scrollA = document.querySelector('[data-anima="scroll"]');

document.addEventListener('scroll', function(e) {
  if (window.scrollY > 664) {
    scrollA.classList.add("show-button");
  } else {
    scrollA.classList.remove("show-button");
  }
});
