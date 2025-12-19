document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize Scroll Animations
    AOS.init({
        once: true, // Animation happens only once
        offset: 100, // Offset (in px) from the original trigger point
        duration: 800, // Duration of animation
    });

    // 2. Initialize Typed.js (Typewriter effect)
    new Typed('#typed-text', {
        strings: ['QA Lead.', 'Payment Specialist.', 'Python Automator.'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        backDelay: 2000
    });

    // 3. Initialize Particles.js (Background effect)
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 50, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#ffffff" },
            "opacity": { "value": 0.2, "random": true },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.1, "width": 1 },
            "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" } },
            "modes": { "repulse": { "distance": 100, "duration": 0.4 } }
        },
        "retina_detect": true
    });

    // 4. Dark/Light Mode Toggle Logic
    const toggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    toggleButton.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-bs-theme', newTheme);
        
        // Toggle Icon
        if (newTheme === 'light') {
            themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
            // Adjust body background for light mode manually if needed
            document.body.style.backgroundColor = '#f8f9fa';
            document.body.style.color = '#212529';
        } else {
            themeIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
            document.body.style.backgroundColor = '#0f172a';
            document.body.style.color = '#e2e8f0';
        }
    });
});
