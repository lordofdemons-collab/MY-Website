document.addEventListener("DOMContentLoaded", () => {
  // Quick check that the script is loaded:
  // console.log("fade-in observer ready");

  const faders = document.querySelectorAll(".fade-in");

  if (!("IntersectionObserver" in window)) {
    // Fallback for very old browsers: show everything
    faders.forEach(el => el.classList.add("show"));
    return;
  }

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // animate once
    });
  }, {
    threshold: 0.2,
    rootMargin: "0px 0px -60px 0px"
  });

  faders.forEach(el => appearOnScroll.observe(el));
});
