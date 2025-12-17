// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Slider functionality for menu items (only active on desktop)
const pizzaContainer = document.querySelector('.menu-items');
const pizzas = document.querySelectorAll('.menu-item');
let pizzaIndex = 0;

function updatePizzaSlider() {
    if (window.innerWidth > 1200) {
        const pizzaWidth = pizzas[0].offsetWidth + 130;
        pizzaContainer.style.transform = `translateX(-${pizzaIndex * pizzaWidth}px)`;
    } else {
        pizzaContainer.style.transform = 'none';
        pizzaIndex = 0;
    }
}

const pizzaNextBtn = document.getElementById('pizzaNext');
const pizzaPrevBtn = document.getElementById('pizzaPrev');

if (pizzaNextBtn && pizzaPrevBtn) {
    pizzaNextBtn.addEventListener('click', () => {
        if (window.innerWidth > 1200) {
            const totalPizzas = pizzas.length;
            const visiblePizzas = 3;
            if (pizzaIndex < totalPizzas - visiblePizzas) {
                pizzaIndex++;
                updatePizzaSlider();
            }
        }
    });

    pizzaPrevBtn.addEventListener('click', () => {
        if (window.innerWidth > 1200) {
            if (pizzaIndex > 0) {
                pizzaIndex--;
                updatePizzaSlider();
            }
        }
    });
}

// Slider functionality for testimonials (only active on desktop)
const container = document.querySelector('.testimonials');
const cards = document.querySelectorAll('.testimonial-card');
let currentIndex = 0;

function updateTestimonialSlider() {
    if (window.innerWidth > 1200) {
        const cardWidth = cards[0].offsetWidth + 10;
        container.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    } else {
        container.style.transform = 'none';
        currentIndex = 0;
    }
}

const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
        if (window.innerWidth > 1200) {
            const totalCards = cards.length;
            const visibleCards = 4;
            if (currentIndex < totalCards - visibleCards) {
                currentIndex++;
                updateTestimonialSlider();
            }
        }
    });

    prevBtn.addEventListener('click', () => {
        if (window.innerWidth > 1200) {
            if (currentIndex > 0) {
                currentIndex--;
                updateTestimonialSlider();
            }
        }
    });
}

// Reset sliders on window resize
window.addEventListener('resize', () => {
    updatePizzaSlider();
    updateTestimonialSlider();
    
    // Close mobile menu if window is resized to desktop
    if (window.innerWidth > 1200 && hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

