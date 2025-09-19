// Fade-in animation when scrolling
const sections = document.querySelectorAll("section");

const options = {
  threshold: 0.3
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

// Animate skill bars when section is visible
const skillsSection = document.querySelector("#skills");
const skillBars = document.querySelectorAll(".skill-level");

const skillObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skillBars.forEach(bar => {
        bar.style.width = bar.style.width; // trigger CSS width
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

skillObserver.observe(skillsSection);
