// --- THEME TOGGLE LOGIC FOR LANDING PAGE ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Get the checkbox input and the body element
    const themeToggle = document.getElementById('checkbox');
    const body = document.body;

    // This check is important to ensure the script doesn't break on pages without the toggle
    if (themeToggle) {
        // 2. This function applies the theme based on the checkbox state
        function applyTheme() {
            if (themeToggle.checked) {
                body.classList.add('dark-mode');
            } else {
                body.classList.remove('dark-mode');
            }
        }

        // 3. On initial load, check the user's OS preference
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

        // Set the initial state of the toggle to match the OS preference
        // We also check if the body ALREADY has the dark-mode class from our HTML default
        themeToggle.checked = body.classList.contains('dark-mode') || prefersDarkScheme.matches;
        
        // Apply the initial theme just in case the class wasn't on the body tag
        applyTheme();

        // 4. Add a change event listener to the checkbox
        themeToggle.addEventListener('change', applyTheme);
    }
});
