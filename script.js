
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white', 'shadow');
        } else {
            navbar.classList.remove('bg-white', 'shadow');
        }
    });

    // Portfolio grid
    const portfolioItems = [
        { image: 'https://via.placeholder.com/400x300', title: 'Digital Illustration', category: 'Illustration' },
        { image: 'https://via.placeholder.com/400x300', title: 'UI Design', category: 'UI/UX' },
        { image: 'https://via.placeholder.com/400x300', title: 'Motion Graphics', category: 'Animation' },
        { image: 'https://via.placeholder.com/400x300', title: 'Brand Identity', category: 'Branding' },
        { image: 'https://via.placeholder.com/400x300', title: 'Character Design', category: 'Illustration' },
        { image: 'https://via.placeholder.com/400x300', title: 'App Interface', category: 'UI/UX' }
    ];

    const portfolioGrid = document.getElementById('portfolio-grid');
    portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'col-md-4 col-sm-6 mb-4';
        portfolioItem.innerHTML = `
            <div class="portfolio-item">
                <img src="${item.image}" alt="${item.title}" class="img-fluid">
                <div class="portfolio-overlay">
                    <h3>${item.title}</h3>
                    <p>${item.category}</p>
                </div>
            </div>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animation
    gsap.from('.hero h1, .hero h2, .hero p, .hero .btn', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
    });

    // About section animation
    gsap.from('#about img', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%'
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('#about .col-md-6:last-child', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%'
        },
        opacity: 0,
        x: 50,
        duration: 1,
        ease: 'power3.out'
    });

    // Portfolio items animation
    gsap.from('.portfolio-item', {
        scrollTrigger: {
            trigger: '#portfolio',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out'
    });

    // Services animation
    gsap.from('#services .card', {
        scrollTrigger: {
            trigger: '#services',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out'
    });

    // Testimonials animation
    gsap.from('#testimonials .card', {
        scrollTrigger: {
            trigger: '#testimonials',
            start: 'top 80%'
        },
        opacity: 0,
        x: -50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out'
    });

    // Contact form animation
    gsap.from('#contact form, #contact .col-md-6:last-child', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out'
    });

    // Skill bars animation
    gsap.from('.skill-bar', {
        scrollTrigger: {
            trigger: '.skill-bar',
            start: 'top 80%'
        },
        width: 0,
        duration: 1.5,
        ease: 'power3.out',
        stagger: 0.2
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For this example, we'll just log it to the console
        console.log('Form submitted:', {
            name: contactForm.name.value,
            email: contactForm.email.value,
            message: contactForm.message.value
        });
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });

    // Cursor follower
    const cursor = document.createElement('div');
    cursor.className = 'cursor-follower';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', e => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1
        });
    });

    // Hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .portfolio-item');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursor, {
                scale: 1.5,
                opacity: 0.7,
                duration: 0.3
            });
        });
        el.addEventListener('mouseleave', () => {
            gsap.to(cursor, {
                scale: 1,
                opacity: 1,
                duration: 0.3
            });
        });
    });
});

