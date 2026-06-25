document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. Select Elements ---
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // --- 2. Mobile Menu Logic ---
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('active');
            menuBtn.classList.toggle('active', isOpen);
            menuBtn.setAttribute('aria-expanded', String(isOpen));
        });

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuBtn.classList.remove('active');
                menuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // --- 3. Theme Toggle ---
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark' && themeToggleBtn) {
            themeToggleBtn.innerHTML = '☀️';
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            if (body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme');
                themeToggleBtn.innerHTML = '🌙';
                localStorage.removeItem('theme');
            } else {
                body.setAttribute('data-theme', 'dark');
                themeToggleBtn.innerHTML = '☀️';
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // --- 4. Typed.js (Safe Mode) ---
    if (typeof Typed !== 'undefined' && document.querySelector("#element")) {
        var typed = new Typed("#element", {
            strings: ["Web Developer", "Programmer", "Freelancer"],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
            loopCount: Infinity,
        });
    }

    // --- 5. Skill Bar Animation (On Scroll) ---
    const skillSection = document.querySelector("#skill");
    const progressBars = document.querySelectorAll(".skill-fill");

    function showProgress() {
        progressBars.forEach(progressBar => {
            // Get the target width from the data-width attribute
            const value = progressBar.dataset.width;
            // Set the width to trigger the CSS transition
            progressBar.style.width = value;
            progressBar.style.opacity = 1;
        });
    }

    // Use Intersection Observer to detect when skills are visible
    if(skillSection){
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    showProgress();
                } else {
                    // Optional: hideProgress() if you want it to animate every time you scroll up/down
                }
            });
        }, { threshold: 0.2 }); // Trigger when 20% of section is visible

        observer.observe(skillSection);
    }

    // --- 6. Contact Form ---
    window.sendEmail = function sendEmail(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('em').value.trim();
        const subject = document.getElementById('su').value.trim() || 'Portfolio inquiry';
        const message = document.getElementById('msg').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in your name, email, and message before sending.');
            return;
        }

        const bodyLines = [
            `Name: ${name}`,
            `Email: ${email}`,
            '',
            message,
        ];
        const mailtoUrl = `mailto:jaymodi993@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

        window.location.href = mailtoUrl;
        event.target.reset();
    };

    // --- 7. AOS Animation ---
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }
});