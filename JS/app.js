// Initialise Animate On Scroll library
AOS.init();

// Get the current year for the Footer
const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

// To close the Hamburger Menu when clicking outside of the Dropdown Navbar
document.addEventListener("click", (e) => {
  const hamburger = document.querySelector(".navbar-collapse");
  if (!e.target.classList.contains("top")) {
    hamburger.classList.remove("show");
  }
});

// Statistics Counters
const observer = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      const counters = document.querySelectorAll(".counter");
      const speed = 400;
      counters.forEach((counter) => {
        const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          const count = +counter.innerText;
          const inc = target / speed;
          if (count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 1);
          } else {
            count.innerText = target;
          }
        };
        updateCount();
      });
    }
  },
  { threshold: [0.8] }
);
observer.observe(document.querySelector(".counters"));

// Fade in Services Cards
let services = document.querySelectorAll("#services .card");
console.log(services);

function fadeInService() {
  services.forEach((service) => {
    service.classList.toggle("fade-in");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    fadeInService();
  }, 1000);
});
