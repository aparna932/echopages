// 🌌 tsParticles Setup
tsParticles.load("tsparticles", {
    particles: {
      number: {
        value: 120,
        density: {
          enable: true,
          value_area: 1000
        }
      },
      shape: {
        type: "star",
      },
      size: {
        value: 4,
        random: true
      },
      move: {
        enable: true,
        speed: 4,
        direction: "none",
        random: true,
        outModes: {
          default: "out"
        }
      },
      links: {
        enable: true,
        distance: 170,
        color: "#d1ff33", // Corrected the color format
        width: 1
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: false,
          mode: "repulse"
        },
        onClick: {
          enable: false,
          mode: "push"
        }
      }
    }
  });
  
  // ⚡ GSAP Animations
  gsap.from(".logo", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "bounce"
  });
  
  gsap.from(".nav ul li", {
    duration: 1,
    x: -30,
    opacity: 0,
    stagger: 0.2,
    delay: 0.5
  });
  
  gsap.from(".hero h2", {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 1
  });
  
  gsap.from(".hero p", {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 1.2
  });
  
  gsap.from(".btn-primary", {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 1.4
  });
  // Toggle the navigation menu when the hamburger is clicked
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
