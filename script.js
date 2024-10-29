// document.addEventListener("DOMContentLoaded", () => {
//     gsap.from(".nav-link", {
//         opacity: 0,            // Start with no opacity
//         y: -20,                // Start slightly above its normal position
//         duration: 1,           // Set the duration of each animation
//         stagger: 0.2,          // Delay between each nav-link animation
//         ease: "power2.out",    // Easing function for smooth animation
//     });
// });

// document.addEventListener("DOMContentLoaded", () => {
//     // Create a timeline instance
//     const tl = gsap.timeline({
//         defaults: {
//             duration: 1.5,
//             ease: "back.out(1.7)"
//         }
//     });

//     // Animate the left "Quote Section" with slide, scale, and rotate effect
//     tl.from(".fade-in:nth-child(1)", {
//         x: -200,
//         opacity: 0,
//         scale: 0.9,
//         rotate: -5,
//     })

//     // Animate the right "Welcome" section with a similar effect, delayed
//     .from(".fade-in:nth-child(2)", {
//         x: 200,
//         opacity: 0,
//         scale: 0.9,
//         rotate: 5,
//     }, "-=1.0") // Overlap start by 1 second for smoother sequence

//     // Add button hover effects
//     const buttons = document.querySelectorAll('.hover-bounce');
//     buttons.forEach(button => {
//         button.addEventListener('mouseenter', () => {
//             gsap.to(button, {
//                 scale: 1.15,
//                 duration: 0.3,
//                 ease: "elastic.out(1, 0.3)"
//             });
//         });
//         button.addEventListener('mouseleave', () => {
//             gsap.to(button, {
//                 scale: 1,
//                 duration: 0.3,
//                 ease: "power2.out"
//             });
//         });
//     });
// });

// gsap.registerPlugin(ScrollTrigger);

// // Navbar animation
// gsap.from(".navbar", {
//     opacity: 0,
//     y: -20,
//     duration: 1,
//     ease: "power2.out",
// });

//     // team member animation
// gsap.from(".team-member", {
//     opacity: 0,        // Start with zero opacity
//     x: 100,            // Start 100 pixels to the right
//     duration: 1,       // Animation duration
//     stagger: 0.2,      // Stagger the animations
//     scrollTrigger: {
//         trigger: ".team-member", // Trigger animation when team members enter the viewport
//         start: "top 80%",        // Adjust this to control when the animation starts
//         toggleActions: "play none none none", // Control the play state of the animation
//     },
// });



// // Project card animation
// gsap.from(".project-card", {
//     opacity: 0,
//     scale: 0.9,
//     duration: 0.1,
    
//     scrollTrigger: {
//         trigger: ".project-card",
//         start: "top 80%",
        
//     },
// });

// // Header animation
// gsap.from("h2, h3", {
//     opacity: 0,
//     y: -30,
//     duration: 0.5,
//     stagger:0.4,
//     scrollTrigger: {
//         trigger: "h2, h3",
//         start: "top 80%",
//         toggleActions: "play none none none",
//     },
// });




 

