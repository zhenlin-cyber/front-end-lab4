// ===================================
// LAB 4: DARK MODE 
// ===================================

// INSTRUCTIONS:
// 1. Select the necessary DOM elements
// 2. Add an event listener to the toggle button
// 3. Implement the toggleDarkMode function
// 4. Update the icon when switching modes
// 5. BONUS: Save the preference to localStorage

// ===================================
// STEP 1: Select DOM Elements
// ===================================
// Select the theme toggle button (id: 'themeToggle')
const themeToggleBtn = document.getElementById('themeToggle');

// Select the theme icon element (id: 'themeIcon')
const themeIcon = document.getElementById('themeIcon');

// Get the <body> element
const body = document.body;


// ===================================
// STEP 2: Add Event Listener
// ===================================
// Add a 'click' event listener to the toggle button
// The event listener should call the toggleDarkMode function
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleDarkMode);
}


// ===================================
// STEP 3: Toggle Dark Mode Function
// ===================================
function toggleDarkMode() {
    // TODO 1: Toggle the 'dark-mode' class on the body element
    // Your code here:
    const isDark = body.classList.toggle('dark-mode');

    // Update the icon based on the current mode
    updateIcon(isDark);

    // Save the current mode to localStorage (optional)
    try {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (e) {
        // ignore storage errors (e.g., private browsing)
    }

}


// ===================================
// STEP 4: Update Icon Function
// ===================================
function updateIcon(isDarkMode) {
    // TODO: Change the icon based on the mode
    // If dark mode: show sun icon ☀️
    // If light mode: show moon icon 🌙
    // Your code here:
    if (!themeIcon) return;
    themeIcon.textContent = isDarkMode ? '☀️' : '🌙';
}


// ===================================
// Optional: Load Saved Preference
// ===================================
// This function runs when the page loads
// It checks if there's a saved preference in localStorage
function loadSavedTheme() {
    // TODO (OPTIONAL): 
    // 1. Get the saved theme from localStorage
    // 2. If it exists and is 'dark', add the dark-mode class to body
    // 3. Update the icon accordingly
    // Your code here:
    try {
        const saved = localStorage.getItem('theme');
        if (saved === 'dark') {
            body.classList.add('dark-mode');
            updateIcon(true);
        } else {
            updateIcon(false);
        }
    } catch (e) {
        updateIcon(body.classList.contains('dark-mode'));
    }
}

// Call the function when the page loads (uncomment when you implement it)
loadSavedTheme();


// ===================================
// HELPFUL REMINDERS:
// ===================================
// DOM Selection:
//   - document.getElementById('id')
//   - document.querySelector('#id')
//   - document.body

// Class Manipulation:
//   - element.classList.add('class-name')
//   - element.classList.remove('class-name')
//   - element.classList.toggle('class-name')
//   - element.classList.contains('class-name')

// Event Listeners:
//   - element.addEventListener('event', function)
//   - Common events: 'click', 'mouseover', 'keydown'

// Changing Content:
//   - element.textContent = 'new text'
//   - element.innerHTML = '<span>html</span>'

// localStorage (BONUS):
//   - localStorage.setItem('key', 'value')
//   - localStorage.getItem('key')
//   - localStorage.removeItem('key')
// ===================================