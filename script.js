// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Interactive cursor effect
document.addEventListener('mousemove', (e) => {
    const cursor = document.createElement('div');
    cursor.style.position = 'fixed';
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.style.width = '2px';
    cursor.style.height = '2px';
    cursor.style.background = '#00ffff';
    cursor.style.borderRadius = '50%';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '9999';
    cursor.style.boxShadow = '0 0 10px #00ffff';
    document.body.appendChild(cursor);
    
    setTimeout(() => {
        cursor.remove();
    }, 1000);
});

// Dynamic glitch effect on hover
document.querySelectorAll('.glitch').forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.animation = 'none';
        setTimeout(() => {
            element.style.animation = '';
        }, 10);
    });
});

// Typing effect for terminal
const terminalElements = document.querySelectorAll('.typing');
terminalElements.forEach(element => {
    const text = element.textContent;
    element.textContent = '';
    let i = 0;
    
    const typeWriter = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Start typing effect when element comes into view
    const typeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(typeWriter, 500);
                typeObserver.unobserve(entry.target);
            }
        });
    });
    
    typeObserver.observe(element);
});

// Particle system for enhanced visual effects
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '1px';
    particle.style.height = '1px';
    particle.style.background = Math.random() > 0.5 ? '#00ffff' : '#ff0080';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = '-10px';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '1';
    particle.style.boxShadow = `0 0 6px ${particle.style.background}`;
    
    document.body.appendChild(particle);
    
    const animateParticle = () => {
        const currentTop = parseInt(particle.style.top);
        if (currentTop > window.innerHeight) {
            particle.remove();
            return;
        }
        particle.style.top = (currentTop + 2) + 'px';
        requestAnimationFrame(animateParticle);
    };
    
    requestAnimationFrame(animateParticle);
}

// Create particles periodically
setInterval(createParticle, 200);

// Neon glow effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    const gridBg = document.querySelector('.grid-bg');
    if (gridBg) {
        gridBg.style.transform = `translate3d(0, ${rate}px, 0)`;
    }
});