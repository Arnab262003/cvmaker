// --- MAIN APPLICATION LOGIC ---
document.addEventListener('DOMContentLoaded', () => {

    // --- THEME TOGGLE LOGIC ---
    const themeToggle = document.getElementById('checkbox');
    const body = document.body;

    if (themeToggle) {
        function applyTheme() {
            if (themeToggle.checked) {
                body.classList.add('dark-mode');
            } else {
                body.classList.remove('dark-mode');
            }
        }

        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        themeToggle.checked = prefersDarkScheme.matches;
        applyTheme();
        themeToggle.addEventListener('change', applyTheme);
    }

    // --- LOGOUT LOGIC ---
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            // In a real app, you would clear user session here
            // For our prototype, we just redirect to the login page
            window.location.href = 'login.html'; 
        });
    }

    // --- DYNAMIC WORK EXPERIENCE LOGIC ---
    const experienceContainer = document.getElementById('work-experience-container');
    const addExperienceBtn = document.getElementById('add-experience-btn');

    if (experienceContainer && addExperienceBtn) {
        function createExperienceEntry() {
            const entryDiv = document.createElement('div');
            entryDiv.classList.add('experience-entry');
            entryDiv.innerHTML = `
                <div class="form-group">
                    <label>Job Title</label>
                    <input type="text" name="jobTitle" placeholder="e.g., Senior Developer">
                </div>
                <div class="form-group">
                    <label>Company</label>
                    <input type="text" name="company" placeholder="e.g., Google">
                </div>
                <div class="form-group-inline">
                    <div class="form-group">
                        <label>Start Date</label>
                        <input type="text" name="startDate" placeholder="e.g., Jan 2020">
                    </div>
                    <div class="form-group">
                        <label>End Date</label>
                        <input type="text" name="endDate" placeholder="e.g., Present">
                    </div>
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea name="jobDescription" rows="4" placeholder="Describe your key responsibilities and achievements..."></textarea>
                </div>
                <button type="button" class="remove-btn">
                    <i class="fas fa-trash-alt"></i> Remove
                </button>
            `;

            const removeBtn = entryDiv.querySelector('.remove-btn');
            removeBtn.addEventListener('click', () => {
                entryDiv.remove();
            });

            experienceContainer.appendChild(entryDiv);
        }

        addExperienceBtn.addEventListener('click', createExperienceEntry);
        
        // Create one initial entry when the page loads
        createExperienceEntry();
    }
});
