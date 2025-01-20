// script.js
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");
  
    menuIcon.addEventListener("click", () => {
      menu.classList.toggle("active");
      menuIcon.querySelectorAll('.bar').forEach((bar, index) => {
        bar.classList.toggle(`bar-${index + 1}`);
      });
    });
  });



    document.addEventListener("DOMContentLoaded", () => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show"); // Add 'show' class to fade in
                        observer.unobserve(entry.target); // Stop observing once visible
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the element is visible
        );

        // Select elements to animate
        const fadeElements = document.querySelectorAll(".fade-in");

        // Observe each element
        fadeElements.forEach(element => {
            observer.observe(element);
        });
    });




    document.addEventListener("DOMContentLoaded", () => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show"); // Add 'show' class to trigger animation
                        observer.unobserve(entry.target); // Stop observing once animation is triggered
                    }
                });
            },
            { threshold: 0.2 } // Trigger when 20% of the element is visible
        );

        // Select elements to animate
        const animatedElements = document.querySelectorAll(".slide-in-left, .slide-in-right");

        // Attach observer to each element
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    });



