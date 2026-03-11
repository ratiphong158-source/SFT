// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation and submission handling
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const isValid = checkFormValidity(); // Replace this with your actual validation logic
    if (isValid) {
        // Submit form via fetch or XMLHttpRequest
        console.log('Form submitted successfully!');
    } else {
        console.error('Form validation failed.');
    }
});

function checkFormValidity() {
    // Implement your form validation logic here
    return true; // return false if validation fails
}

// Active link highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.href.includes(current)) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for animations on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate'); // Add your animation class
        } else {
            entry.target.classList.remove('animate');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
});
