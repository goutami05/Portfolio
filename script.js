// Select all sections
const sections = document.querySelectorAll(".page");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const boxes = entry.target.querySelectorAll(
            ".box2, .box5, .icon3,#right4 > .icon4"
        );

        if (entry.isIntersecting) {
            boxes.forEach((box, index) => {
                setTimeout(() => {
                    box.classList.add("show");
                }, index * 200);
            });
        } else {
            // Reset on scroll out
            boxes.forEach(box => box.classList.remove("show"));
        }
    });
}, { threshold: 0.3 });
sections.forEach(section => observer.observe(section));
