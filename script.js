// Default Data Structure for Properties
const defaultProperties = [
    {
        id: 1,
        title: "Villa Esmeralda",
        location: "Zona 14, Guatemala",
        price: "Q. 12,500,000",
        status: "nueva", 
        images: ["assets/prop_3_1777755625671.png", "assets/prop_1_extra1_1777756548971.png", "assets/prop_1_extra2_1777756561921.png"],
        beds: 4,
        baths: 5,
        area: "850 m²",
        description: "Una obra maestra de la arquitectura moderna rodeada de bosque. Esta villa ofrece una privacidad inigualable con acabados de la más alta calidad, ventanales de piso a techo y un diseño minimalista que respeta su entorno natural."
    },
    {
        id: 2,
        title: "Penthouse Skyline",
        location: "Zona 15, Vista Hermosa",
        price: "Q. 8,200,000",
        status: "oferta",
        images: ["assets/prop_2_1777755612269.png", "assets/prop_1_extra1_1777756548971.png"],
        beds: 3,
        baths: 3.5,
        area: "420 m²",
        description: "Experimente el pináculo de la vida urbana en este espectacular penthouse. Con vistas panorámicas ininterrumpidas de la ciudad, amplias terrazas, domótica integrada y amenidades de clase mundial."
    },
    {
        id: 3,
        title: "Residencia Las Palmas",
        location: "Carretera a El Salvador, Km 16.5",
        price: "Q. 5,800,000",
        status: "vendida",
        images: ["assets/prop_1_1777755595870.png", "assets/prop_1_extra2_1777756561921.png"],
        beds: 4,
        baths: 4,
        area: "600 m²",
        description: "Un oasis tropical dentro de un condominio exclusivo. Interiores lujosos que fluyen hacia espectaculares jardines diseñados. Cuenta con piscina privada, casa club y seguridad de máxima tecnología."
    },
    {
        id: 4,
        title: "Casa Colonial Moderna",
        location: "Antigua Guatemala",
        price: "Q. 15,000,000",
        status: "disponible",
        images: ["assets/guatemala_hero2_1777756534757.png", "assets/prop_3_1777755625671.png"],
        beds: 5,
        baths: 6,
        area: "1200 m²",
        description: "La perfecta fusión entre la herencia colonial de La Antigua y el lujo contemporáneo. Patios centrales con fuentes, muros de piedra original y comodidades modernas de ultra lujo."
    }
];

// Load properties from localStorage or use defaults
let properties = [];
const storedProperties = localStorage.getItem('inmoexpress_properties');
if (storedProperties) {
    properties = JSON.parse(storedProperties);
} else {
    properties = defaultProperties;
    localStorage.setItem('inmoexpress_properties', JSON.stringify(properties));
}

// Elements
const track = document.getElementById('properties-track');
const modalOverlay = document.getElementById('property-modal');
const modalBody = document.getElementById('modal-body');

// Force Scroll to Top
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    // Hide preloader
    setTimeout(() => {
        document.getElementById('preloader').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('preloader').style.display = 'none';
        }, 800);
    }, 1500);

    renderProperties();
    setupScrollAnimations();
    setupNavbar();
    setupCarouselDrag();
    setupChatbot();
    setupTabs();
});


// Setup Mission/Vision Tabs
function setupTabs() {
    const tabs = document.querySelectorAll('.mv-tab');
    const contents = document.querySelectorAll('.mv-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });
}

// Render Properties
function renderProperties() {
    track.innerHTML = '';
    
    properties.forEach(prop => {
        const isSold = prop.status === 'vendida';
        const statusLabel = prop.status.charAt(0).toUpperCase() + prop.status.slice(1);
        const statusClass = `status-${prop.status}`;
        
        const card = document.createElement('div');
        card.className = `property-card ${isSold ? 'is-sold' : ''}`;
        card.dataset.id = prop.id;
        
        let statusHtml = '';
        if (prop.status !== 'disponible') {
            statusHtml = `<div class="property-status ${statusClass}">${statusLabel}</div>`;
        }
        
        card.innerHTML = `
            ${statusHtml}
            <div class="property-image">
                <img src="${prop.images[0]}" alt="${prop.title}">
            </div>
            <div class="property-overlay">
                <div class="property-location">${prop.location}</div>
                <h3 class="property-title">${prop.title}</h3>
                <div class="property-price">${prop.price}</div>
                <div class="property-features">
                    <div class="feature"><i class="fa-solid fa-bed"></i> ${prop.beds}</div>
                    <div class="feature"><i class="fa-solid fa-bath"></i> ${prop.baths}</div>
                    <div class="feature"><i class="fa-solid fa-ruler-combined"></i> ${prop.area}</div>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => {
            if (!isSold) {
                openModal(prop);
            }
        });
        
        track.appendChild(card);
    });

    // Add "Ver Más" card
    if (track) {
        const viewMoreCard = document.createElement('div');
        viewMoreCard.className = 'property-card view-more-card';
        viewMoreCard.innerHTML = `
            <div class="view-more-content">
                <i class="fa-solid fa-arrow-right-long"></i>
                Ver Catálogo Completo
            </div>
        `;
        viewMoreCard.addEventListener('click', () => {
            window.location.href = 'propiedades.html';
        });
        track.appendChild(viewMoreCard);
    }
}

// Modal Logic
function openModal(prop) {
    const isSold = prop.status === 'vendida';
    
    modalBody.innerHTML = `
        <div class="modal-image" style="position: relative;">
            <img id="modal-main-image" src="${prop.images[0]}" alt="${prop.title}">
            <div class="modal-gallery-controls" style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); display: flex; gap: 10px;">
                ${prop.images.map((img, idx) => `
                    <button onclick="document.getElementById('modal-main-image').src='${img}'" style="width: 60px; height: 60px; border: 2px solid white; border-radius: 4px; cursor: pointer; overflow: hidden; background: #000;">
                        <img src="${img}" style="width: 100%; height: 100%; object-fit: cover;">
                    </button>
                `).join('')}
            </div>
        </div>
        <div class="modal-details">
            <div class="modal-location"><i class="fa-solid fa-location-dot"></i> ${prop.location}</div>
            <h2 class="modal-title">${prop.title}</h2>
            <div class="modal-price">${prop.price}</div>
            
            <div class="modal-features-grid">
                ${prop.beds ? `
                <div class="modal-feature">
                    <i class="fa-solid fa-bed"></i>
                    <span>${prop.beds} Habitaciones</span>
                </div>` : ''}
                ${prop.baths ? `
                <div class="modal-feature">
                    <i class="fa-solid fa-bath"></i>
                    <span>${prop.baths} Baños</span>
                </div>` : ''}
                ${prop.area ? `
                <div class="modal-feature">
                    <i class="fa-solid fa-ruler-combined"></i>
                    <span>${prop.area}</span>
                </div>` : ''}
                ${(prop.beds || prop.baths || prop.area) ? '' : `
                <div class="modal-feature" style="grid-column: span 3; text-align: center;">
                    <span>Más detalles por consultar</span>
                </div>`}
            </div>
            
            <p class="modal-description">${prop.description ? prop.description : ''}</p>
            
            <div class="contact-form-container ${isSold ? 'disabled' : ''}">
                <p class="sold-message"><i class="fa-solid fa-ban"></i> Esta propiedad ya ha sido vendida.</p>
                <h3 class="form-title">Programe una Visita</h3>
                <p class="form-subtitle">Déjenos sus datos y con gusto nos comunicaremos a la brevedad.</p>
                
                <form id="interest-form" onsubmit="event.preventDefault(); alert('Formulario enviado con éxito. Un asesor se comunicará pronto.');">
                    <div class="form-group">
                        <input type="text" placeholder="Nombre Completo" required ${isSold ? 'disabled' : ''}>
                    </div>
                    <div class="form-group">
                        <input type="email" placeholder="Correo Electrónico" required ${isSold ? 'disabled' : ''}>
                    </div>
                    <div class="form-group">
                        <input type="tel" placeholder="Teléfono" required ${isSold ? 'disabled' : ''}>
                    </div>
                    <div class="form-btn">
                        <button type="submit" class="btn btn-primary" ${isSold ? 'disabled' : ''}>Solicitar Información</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

document.querySelector('.close-modal').addEventListener('click', () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Navbar Scroll Effect
function setupNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Fade in Animations on Scroll
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Carousel Drag Logic (Mouse Pad friendly)
function setupCarouselDrag() {
    const slider = document.querySelector('.carousel-container');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.style.cursor = 'grabbing';
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.style.cursor = 'grab';
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.style.cursor = 'grab';
    });
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });

    // Buttons
    document.querySelector('.next-btn').addEventListener('click', () => {
        slider.scrollBy({ left: 400, behavior: 'smooth' });
    });
    document.querySelector('.prev-btn').addEventListener('click', () => {
        slider.scrollBy({ left: -400, behavior: 'smooth' });
    });
}

// WhatsApp Chatbot Logic
function setupChatbot() {
    const waBtn = document.getElementById('wa-btn');
    const waWindow = document.getElementById('wa-chat-window');
    const waClose = document.getElementById('wa-close');
    const waStartBtn = document.getElementById('wa-start-chat');
    const waTyping = document.getElementById('wa-typing');
    const waBody = document.getElementById('wa-body');

    waBtn.addEventListener('click', () => {
        openChatbot();
    });

    function openChatbot() {
        if (waWindow.classList.contains('open')) return;
        waWindow.classList.add('open');
        
        // Simulate typing
        setTimeout(() => {
            waTyping.classList.add('active');
            waBody.scrollTop = waBody.scrollHeight;
            
            setTimeout(() => {
                waTyping.classList.remove('active');
                
                // Add new message (only if it's the first time)
                if (waBody.querySelectorAll('.wa-message').length <= 2) {
                    const msg = document.createElement('div');
                    msg.className = 'wa-message bot-message';
                    msg.innerHTML = `
                        <p>¿En qué tipo de propiedad está interesado hoy?</p>
                        <span class="wa-time">Ahora</span>
                    `;
                    waBody.insertBefore(msg, waTyping);
                    waBody.scrollTop = waBody.scrollHeight;
                }
            }, 1500);
        }, 1000);
    }

    // Auto open after 5 seconds
    setTimeout(() => {
        openChatbot();
    }, 5000);

    waClose.addEventListener('click', () => {
        waWindow.classList.remove('open');
    });

    waStartBtn.addEventListener('click', () => {
        // Here it would typically redirect to WhatsApp API
        window.open('https://wa.me/50222223333?text=Hola,%20estoy%20interesado%20en%20recibir%20información%20sobre%20propiedades.', '_blank');
    });
}
