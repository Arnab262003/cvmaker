// --- THEME TOGGLE LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('checkbox');
    const body = document.body;

    if (themeToggle) {
        function applyTheme() {
            body.classList.toggle('dark-mode', themeToggle.checked);
        }

        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        themeToggle.checked = body.classList.contains('dark-mode') || prefersDarkScheme.matches;
        applyTheme();
        themeToggle.addEventListener('change', applyTheme);
    }

    // --- CORRECTED TAB SWITCHING LOGIC ---
    const tabLinks = document.querySelectorAll('.tab-link');
    const formContents = document.querySelectorAll('.form-content');

    tabLinks.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target);

            // Remove 'active' from all tabs and content first
            tabLinks.forEach(t => t.classList.remove('active'));
            formContents.forEach(c => c.classList.remove('active'));

            // Then, add 'active' to the clicked tab and its target content
            tab.classList.add('active');
            target.classList.add('active');
        });
    });

    // --- PASSWORD VISIBILITY TOGGLE LOGIC ---
    const passwordToggles = document.querySelectorAll('.password-toggle');
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const targetInput = document.getElementById(toggle.dataset.target);
            if (targetInput.type === 'password') {
                targetInput.type = 'text';
                toggle.classList.remove('fa-eye');
                toggle.classList.add('fa-eye-slash');
            } else {
                targetInput.type = 'password';
                toggle.classList.remove('fa-eye-slash');
                toggle.classList.add('fa-eye');
            }
        });
    });

    // --- FORM SUBMISSION (No changes, validation handled by HTML 'required') ---
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            // This event only fires if the form is valid
            console.log('Form submitted successfully');
        });
    });
});

