tsParticles.load("tsparticles", {
    fpsLimit: 120,
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
  
  tsParticles.load("tsparticles", particlesConfig);
// Add Journal Entry Logic
// Function to add a new journal entry
function addEntry() {
    const entryContent = document.querySelector('.journal-input').value;
    if (entryContent.trim() === "") return; // Don't add if the content is empty

    const entryDate = new Date().toLocaleDateString(); // Get current date
    const newEntry = document.createElement('div');
    newEntry.classList.add('journal-entry');
    
    // Set up the journal entry structure
    newEntry.innerHTML = `
        <div class="entry-header">
            <span class="entry-date">${entryDate}</span>
            <button class="delete-btn" onclick="deleteEntry(this)"><i class="fas fa-trash-alt"></i></button>
        </div>
        <p class="entry-content">${entryContent}</p>
        <button class="share-btn" onclick="sharePost(this)">Share as Post</button>
    `;

    // Append the new entry to the entries container
    document.getElementById('entries-container').appendChild(newEntry);

    // Clear the input field
    document.querySelector('.journal-input').value = "";
}

// Function to delete a journal entry
function deleteEntry(button) {
    const entry = button.closest('.journal-entry');
    entry.remove();
}

// Function to simulate sharing the journal entry as a post
function sharePost(button) {
    const entry = button.closest('.journal-entry');
    const entryContent = entry.querySelector('.entry-content').textContent;
    const entryDate = entry.querySelector('.entry-date').textContent;

    alert(`Sharing post...\n\nDate: ${entryDate}\nContent: ${entryContent}`);
}
