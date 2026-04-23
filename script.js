// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Typing effect for hero subtitle
const subtitle = document.querySelector('.hero-subtitle');
const texts = [
    'Executive ICT (Acting)',
    'SAP Business One Specialist',
    'IT Infrastructure Leader',
    'Cloud & Digital Transformation Advocate'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        subtitle.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        subtitle.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeWriter, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeWriter, 500);
    } else {
        setTimeout(typeWriter, isDeleting ? 50 : 100);
    }
}

setTimeout(typeWriter, 1000);

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-category, .project-card, .stat-card, .timeline-item, .learning-card, .achievement-card').forEach(el => {
    observer.observe(el);
});

// Counter animation
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            animateCounter(entry.target);
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(counter => {
    counterObserver.observe(counter);
});

// Expandable sections in About
document.querySelectorAll('.expand-header').forEach(header => {
    header.addEventListener('click', () => {
        const card = header.parentElement;
        card.classList.toggle('active');
    });
});

// Expandable responsibilities in Experience
document.querySelectorAll('.expand-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const container = btn.parentElement;
        container.classList.toggle('active');
    });
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    updateThemeIcon();
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const theme = body.classList.contains('dark-mode') ? 'dark-mode' : '';
    localStorage.setItem('theme', theme);
    updateThemeIcon();
});

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Project modal
const projectData = {
    1: {
        title: 'SAP B1 System Adoption Initiative',
        problem: 'Low user adoption rates (45%) and frequent data entry errors were causing operational inefficiencies and data integrity issues across departments.',
        solution: 'Implemented comprehensive training program, created user guides, and established a support system with regular follow-ups.',
        tools: ['SAP Business One', 'Training Materials', 'Documentation', 'User Support System'],
        role: 'Led the initiative as primary SAP support specialist, conducted training sessions, and provided ongoing user support.',
        results: [
            'Increased user adoption from 45% to 85% within 6 months',
            'Reduced data entry errors by 60%',
            'Improved user satisfaction scores from 3.2 to 4.5 out of 5',
            'Decreased support tickets related to basic operations by 40%'
        ],
        image: 'fas fa-users-cog'
    },
    2: {
        title: 'IT Helpdesk Optimization',
        problem: 'Average ticket resolution time was 48 hours, causing productivity losses and user frustration. No standardized processes or knowledge base existed.',
        solution: 'Implemented ticketing system improvements, created comprehensive knowledge base, and established SLA-based prioritization.',
        tools: ['Ticketing System', 'Knowledge Base', 'Process Documentation', 'SLA Framework'],
        role: 'Analyzed existing processes, designed optimization strategy, and implemented new workflows.',
        results: [
            'Reduced average resolution time from 48 to 34 hours (30% improvement)',
            'Created knowledge base with 150+ articles',
            'Achieved 92% first-contact resolution rate',
            'Improved user satisfaction by 35%'
        ],
        image: 'fas fa-headset'
    },
    3: {
        title: 'Enterprise Security Infrastructure',
        problem: 'Inadequate network security with no centralized firewall management, exposing the organization to potential threats.',
        solution: 'Deployed Fortinet and Sophos firewall solutions with comprehensive security policies, VPN access, and monitoring systems.',
        tools: ['Fortinet FortiGate', 'Sophos XG Firewall', 'VPN', 'Security Monitoring Tools'],
        role: 'Designed security architecture, configured firewalls, and established security policies.',
        results: [
            'Zero security breaches since implementation',
            'Blocked 10,000+ malicious connection attempts monthly',
            'Established secure remote access for 50+ users',
            'Achieved 99.9% firewall uptime'
        ],
        image: 'fas fa-shield-alt'
    },
    4: {
        title: 'ERP Data Validation & Reporting',
        problem: 'Inventory data accuracy was only 70%, leading to stock discrepancies, ordering errors, and financial reporting issues.',
        solution: 'Implemented data validation rules, automated reporting, and regular reconciliation processes using SQL and Crystal Reports.',
        tools: ['SQL Server', 'Crystal Reports', 'SAP Query Manager', 'Data Validation Scripts'],
        role: 'Developed validation queries, created automated reports, and trained users on data entry best practices.',
        results: [
            'Improved data accuracy from 70% to 85%',
            'Reduced stock discrepancies by 55%',
            'Automated 15 critical reports saving 20 hours/week',
            'Decreased financial reporting errors by 40%'
        ],
        image: 'fas fa-chart-line'
    },
    5: {
        title: 'CCTV & Access Control System',
        problem: 'Limited facility monitoring with blind spots and no integrated access control, creating security vulnerabilities.',
        solution: 'Deployed comprehensive CCTV system with 30+ cameras and integrated access control system covering all entry points.',
        tools: ['IP Cameras', 'NVR Systems', 'Access Control Hardware', 'Monitoring Software'],
        role: 'Planned camera placement, installed equipment, configured systems, and trained security personnel.',
        results: [
            'Achieved 100% facility coverage with no blind spots',
            'Integrated access control for 15 entry points',
            'Reduced security incidents by 70%',
            '30-day video retention with 4K quality'
        ],
        image: 'fas fa-video'
    },
    6: {
        title: 'IP Telephony Deployment',
        problem: 'Outdated analog phone system with poor call quality, no mobility features, and high maintenance costs.',
        solution: 'Migrated to VoIP system with IP phones, unified communications, and mobile integration.',
        tools: ['VoIP System', 'IP Phones', 'Network QoS', 'Unified Communications Platform'],
        role: 'Designed VoIP architecture, configured network QoS, deployed IP phones, and managed migration.',
        results: [
            'Deployed 80+ IP phones across facilities',
            'Reduced telephony costs by 45%',
            'Enabled mobile integration for 30+ users',
            'Improved call quality with 99.5% uptime'
        ],
        image: 'fas fa-phone-volume'
    }
};

document.querySelectorAll('.btn-view-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const card = e.target.closest('.project-card');
        const projectId = card.getAttribute('data-project');
        openProjectModal(projectId);
    });
});

function openProjectModal(projectId) {
    const project = projectData[projectId];
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <div class="modal-icon">
                <i class="${project.image}"></i>
            </div>
            <h2>${project.title}</h2>
        </div>
        
        <div class="modal-section">
            <h3><i class="fas fa-exclamation-circle"></i> Problem Statement</h3>
            <p>${project.problem}</p>
        </div>
        
        <div class="modal-section">
            <h3><i class="fas fa-lightbulb"></i> Solution Approach</h3>
            <p>${project.solution}</p>
        </div>
        
        <div class="modal-section">
            <h3><i class="fas fa-tools"></i> Tools & Technologies</h3>
            <div class="modal-tags">
                ${project.tools.map(tool => `<span><i class="fas fa-check"></i> ${tool}</span>`).join('')}
            </div>
        </div>
        
        <div class="modal-section">
            <h3><i class="fas fa-user-tie"></i> My Role & Contribution</h3>
            <p>${project.role}</p>
        </div>
        
        <div class="modal-section">
            <h3><i class="fas fa-chart-bar"></i> Measurable Results</h3>
            <ul class="modal-results">
                ${project.results.map(result => `<li><i class="fas fa-check-circle"></i> ${result}</li>`).join('')}
            </ul>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

document.querySelector('.modal-close').addEventListener('click', () => {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

document.getElementById('projectModal').addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') {
        e.target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Form submission with real-time email
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        const btn = e.target.querySelector('.btn-submit');
        const originalHTML = btn.innerHTML;
        
        // Check if using Formspree
        if (contactForm.action.includes('formspree.io')) {
            // Let Formspree handle it naturally
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            btn.disabled = true;
            // Form will submit naturally to Formspree
            return;
        }
        
        // Fallback: prevent default and show message
        e.preventDefault();
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.disabled = false;
                e.target.reset();
                alert('Thank you for your message! I will get back to you soon.');
            }, 2000);
        }, 1500);
    });
}

// Download CV buttons - now using real file links
// No special handling needed - links work directly

// Scroll indicator
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    });
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    });
}

// Floating icons animation
const floatingIcons = document.querySelectorAll('.floating-icons i');
floatingIcons.forEach((icon, index) => {
    icon.style.animationDelay = `${index * 0.5}s`;
});
