// script.js

// Function to perform search and update results on the page
async function performSearch() {
  const query = document.getElementById('search-input').value;
  if (query.trim() === '') return;

  try {
    const response = await fetch(`http://localhost:5000/api/search?query=${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const results = await response.json();

    const resultsContainer = document.querySelector('.results-container');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
      resultsContainer.innerHTML = '<p>No results found.</p>';
    } else {
      results.forEach(item => {
        const div = document.createElement('div');
        div.className = 'result-item';
        div.innerHTML = `
          <h3 class="result-title">${item.title}</h3>
          <p class="result-description">${item.description}</p>
        `;
        resultsContainer.appendChild(div);
      });
    }
  } catch (error) {
    console.error('Error fetching search results:', error);
    alert('Failed to fetch search results. Please try again later.');
  }
}

// Particle configuration object for tsParticles
const particlesConfig = {
  fpsLimit: 120,
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 900,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "char", // Using emoji character
      character: {
        value: ["🔍"], // Search emoji
        font: "Verdana",
        style: "",
        weight: "bold",
      },
    },
    opacity: {
      value: 1,
      random: false,
    },
    size: {
      value: 10,
      random: {
        enable: true,
        minimumValue: 6,
      },
    },
    links: {
      enable: true,
      distance: 150,
      color: "#ADD8E6", // Light blue link lines
      opacity: 0.8,
      width: 1.5,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
  },
  retina_detect: true,
  background: {
    color: "#000000",
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
};

// Load the particle animation on the #tsparticles div
tsParticles.load("tsparticles", particlesConfig);
