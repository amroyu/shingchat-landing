document.addEventListener('DOMContentLoaded', () => {
    const chatToggle = document.getElementById('chatToggle');
    const chatWindow = document.getElementById('chatWindow');
    const closeChat = document.getElementById('closeChat');

    // Chat widget functionality
    chatToggle.addEventListener('click', () => {
        chatWindow.classList.toggle('active');
        chatToggle.style.transform = 'scale(0.95)';
        setTimeout(() => chatToggle.style.transform = '', 200);
    });

    closeChat.addEventListener('click', () => {
        chatWindow.classList.remove('active');
    });

    // Close chat window when clicking outside
    document.addEventListener('click', (e) => {
        if (!chatWindow.contains(e.target) && e.target !== chatToggle) {
            chatWindow.classList.remove('active');
        }
    });

    // Parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const background = document.querySelector('.hero-background');
        background.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
});
