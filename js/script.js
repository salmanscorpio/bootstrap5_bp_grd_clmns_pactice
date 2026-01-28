/* --- Equal-width Columns Scroll Animation --- */
document.addEventListener("DOMContentLoaded", function() {
  const boxes = document.querySelectorAll(".animate-box");

  /* Intersection Observer setup */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        /* Add 'show' class to trigger fade-in */
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  boxes.forEach(box => observer.observe(box));
});

/* --- End of Equal-width Columns Scroll Animation --- */


