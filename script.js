document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".nav-link", {
        opacity: 0,            // Start with no opacity
        y: -20,                // Start slightly above its normal position
        duration: 1,           // Set the duration of each animation
        stagger: 0.2,          // Delay between each nav-link animation
        ease: "power2.out",    // Easing function for smooth animation
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Create a timeline instance
    const tl = gsap.timeline({
        defaults: {
            duration: 1.5,
            ease: "back.out(1.7)"
        }
    });

    // Animate the left "Quote Section" with slide, scale, and rotate effect
    tl.from(".fade-in:nth-child(1)", {
        x: -200,
        opacity: 0,
        scale: 0.9,
        rotate: -5,
    })

    // Animate the right "Welcome" section with a similar effect, delayed
    .from(".fade-in:nth-child(2)", {
        x: 200,
        opacity: 0,
        scale: 0.9,
        rotate: 5,
    }, "-=1.0") // Overlap start by 1 second for smoother sequence

    // Add button hover effects
    const buttons = document.querySelectorAll('.hover-bounce');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.15,
                duration: 0.3,
                ease: "elastic.out(1, 0.3)"
            });
        });
        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
});