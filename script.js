document.addEventListener('DOMContentLoaded', () => {
    // Loading animation
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = `
        <svg width="50" height="50" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" fill="none" stroke="#FF6B35" stroke-width="5">
                <animate attributeName="stroke-dasharray" from="1,150" to="90,150" dur="1.5s" repeatCount="indefinite" />
                <animate attributeName="stroke-dashoffset" from="0" to="-35" dur="1.5s" repeatCount="indefinite" />
            </circle>
        </svg>
    `;
    document.body.appendChild(loading);

    // Hide loading screen after content loads
    window.addEventListener('load', () => {
        loading.classList.add('hidden');
        setTimeout(() => loading.remove(), 500);
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Chat widget functionality
    const chatToggle = document.getElementById('chatToggle');
    const chatWindow = document.getElementById('chatWindow');
    let isOpen = false;

    chatToggle.addEventListener('click', () => {
        isOpen = !isOpen;
        chatWindow.style.display = isOpen ? 'block' : 'none';
        
        if (isOpen) {
            chatWindow.style.animation = 'slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        }
    });

    // Close chat window when clicking outside
    document.addEventListener('click', (e) => {
        if (isOpen && !chatWindow.contains(e.target) && !chatToggle.contains(e.target)) {
            isOpen = false;
            chatWindow.style.display = 'none';
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effect to links
    const links = document.querySelectorAll('.link-group a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseout', () => {
            link.style.transform = 'translateY(0)';
        });
    });

    // Parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const background = document.querySelector('.hero-background');
        background.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
});
