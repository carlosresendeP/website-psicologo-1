// ScrollReveal Animations
function initScrollReveal() {
    // Check if ScrollReveal is loaded
    if (typeof ScrollReveal === 'undefined') {
        console.warn('ScrollReveal not loaded');
        return;
    }

    const sr = ScrollReveal({
        distance: '50px',
        duration: 1000,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: false,
        viewFactor: 0.1
    });

    // Hero Section Animations
    sr.reveal('.hero-title', {
        delay: 200,
        origin: 'top'
    });

    sr.reveal('.hero-description', {
        delay: 400,
        origin: 'top'
    });

    sr.reveal('.hero-buttons', {
        delay: 600,
        origin: 'bottom'
    });

    sr.reveal('.hero-image', {
        delay: 300,
        origin: 'right',
        distance: '100px'
    });

    // About Section Animations
    sr.reveal('.about-section .section-title', {
        delay: 100
    });

    sr.reveal('.about-section .section-subtitle', {
        delay: 200
    });

    sr.reveal('.about-section img', {
        delay: 300,
        origin: 'left'
    });

    sr.reveal('.about-content', {
        delay: 400,
        origin: 'right'
    });

    // Services Section Animations
    sr.reveal('.services-section .section-title', {
        delay: 100
    });

    sr.reveal('.services-section .section-subtitle', {
        delay: 200
    });

    sr.reveal('.service-card', {
        delay: 200,
        interval: 200,
        origin: 'bottom'
    });

    // Testimonials Section Animations
    sr.reveal('.testimonials-section .section-title', {
        delay: 100
    });

    sr.reveal('.testimonials-section .section-subtitle', {
        delay: 200
    });

    sr.reveal('.testimonial-card', {
        delay: 200,
        interval: 200,
        origin: 'bottom'
    });

    // Contact Section Animations
    sr.reveal('.contact-section .section-title', {
        delay: 100
    });

    sr.reveal('.contact-section .section-subtitle', {
        delay: 200
    });

    sr.reveal('.contact-info', {
        delay: 300,
        origin: 'left'
    });

    sr.reveal('.contact-form', {
        delay: 400,
        origin: 'right'
    });

    // Footer Animation
    sr.reveal('.footer', {
        delay: 100,
        origin: 'bottom'
    });
}
