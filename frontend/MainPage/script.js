// tsParticles setup
tsParticles.load("tsparticles", {
  particles: {
    number: { value: 40, density: { enable: true, value_area: 1000 } },
    color: { value: "#FFD93D" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    move: {
      enable: true,
      speed: 1,
      random: true,
      outModes: { default: "out" }
    },
    links: {
      enable: true,
      distance: 120,
      color: "#888",
      opacity: 0.4,
      width: 0.8
    }
  },
  interactivity: {
    events: {
      onHover: { enable: false, mode: "repulse" },
      onClick: { enable: false, mode: "push" }
    }
  },
  detectRetina: true
});

// GSAP animations
gsap.from(".logo", { duration: 1, y: -20, opacity: 0, ease: "back" });
gsap.from(".nav-links li", { duration: 1, x: 30, opacity: 0, stagger: 0.2 });
gsap.from(".post-box", { duration: 1, y: 30, opacity: 0, delay: 0.5 });
gsap.from(".post", { duration: 1, y: 40, opacity: 0, stagger: 0.2, delay: 0.6 });
gsap.from(".right-panel", { duration: 1.2, x: 50, opacity: 0, delay: 0.7 });

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('https://webdiary-backend-8.onrender.com/api/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // If using JWT:
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      credentials: 'include' // Needed if using cookies/sessions
    });

    const data = await response.json();

    if (response.ok) {
      // ✅ Display user data on page
      document.getElementById('username').textContent = data.fullName || data.username;
      document.getElementById('email').textContent = data.email;
      // You can display other things like posts, profile image, etc.
    } else {
      alert(data.message || 'Failed to fetch user info.');
      window.location.href = '/login.html'; // Redirect if not authenticated
    }
  } catch (error) {
    console.error('Error fetching user info:', error);
    alert('Something went wrong.');
  }
});


// Hamburger toggle
document.getElementById('hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('show');
});
