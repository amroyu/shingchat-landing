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
    const closeChat = document.getElementById('closeChat');

    if (chatToggle && chatWindow && closeChat) {
        chatToggle.addEventListener('click', () => {
            chatWindow.classList.toggle('active');
        });

        closeChat.addEventListener('click', () => {
            chatWindow.classList.remove('active');
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!chatWindow.contains(e.target) && e.target !== chatToggle) {
                chatWindow.classList.remove('active');
            }
        });

        chatWindow.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // Start chat button functionality
    const startChatBtn = document.querySelector('.start-chat-btn');
    if (startChatBtn) {
        startChatBtn.addEventListener('click', () => {
            // Add your chat start logic here
            console.log('Starting chat...');
        });
    }

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
