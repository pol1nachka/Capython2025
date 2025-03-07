document.addEventListener("DOMContentLoaded", () => {
    // Fade-in effect on page load
    document.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => {
            document.querySelectorAll(".hidden").forEach((el) => {
                el.classList.add("visible");
            });
        }, 100); // Delay of 100ms
    });
   
 
 
    // Scroll animation
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );
 
 
    document.querySelectorAll(".hidden").forEach((el) => {
        observer.observe(el);
    });
 });
 