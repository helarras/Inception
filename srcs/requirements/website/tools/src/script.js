// Smooth scrolling for navigation links
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

// CTA Button Click Handler
const ctaButton = document.getElementById('cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Form Submission Handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = e.target[0].value;
        const email = e.target[1].value;
        const message = e.target[2].value;
        
        // Show success message
        alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email} soon.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.background = 'rgba(44, 62, 80, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#2c3e50';
    }
    
    lastScroll = currentScroll;
});

// Add animation to feature cards when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add a simple interactive element - change background color of clicked feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.background = this.style.background === 'rgb(102, 126, 234)' 
            ? 'white' 
            : '#667eea';
        this.style.color = this.style.color === 'white' ? '#333' : 'white';
    });
});

// Console welcome message
console.log('%c Welcome to My Website! ', 'background: #667eea; color: white; font-size: 20px; padding: 10px;');
console.log('Built with HTML, CSS, and JavaScript');