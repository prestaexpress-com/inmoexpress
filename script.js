// Default Data Structure for Properties
const defaultProperties = [
    {
        id: 1,
        title: "Villa Esmeralda",
        location: "Zona 14, Guatemala",
        price: "Q. 12,500,000",
        status: "nueva", 
        images: ["https://i.ibb.co/nq4KCY6j/prop-3-1777755625671.jpg", "https://i.ibb.co/HDyVg0Mv/prop-1-extra1-1777756548971.jpg", "https://i.ibb.co/ch2P2C1R/prop-1-extra2-1777756561921.jpg"],
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
        images: ["https://i.ibb.co/xt3NVXLy/premium-apartment.jpg", "https://i.ibb.co/HDyVg0Mv/prop-1-extra1-1777756548971.jpg"],
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
        images: ["https://i.ibb.co/LdFP51hn/prop-1-1777755595870.jpg", "https://i.ibb.co/ch2P2C1R/prop-1-extra2-1777756561921.jpg"],
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
        images: ["https://i.ibb.co/v4mw2pqY/guatemala-hero2-1777756534757.jpg", "https://i.ibb.co/nq4KCY6j/prop-3-1777755625671.jpg"],
        beds: 5,
        baths: 6,
        area: "1200 m²",
        description: "La perfecta fusión entre la herencia colonial de La Antigua y el lujo contemporáneo. Patios centrales con fuentes, muros de piedra original y comodidades modernas de ultra lujo."
    },
    {
        id: 5,
        title: "Apartamento Distrito 4",
        location: "Zona 4, Cuatro Grados Norte",
        price: "Q. 1,500,000",
        status: "disponible",
        images: ["https://i.ibb.co/xt3NVXLy/premium-apartment.jpg", "https://i.ibb.co/HDyVg0Mv/prop-1-extra1-1777756548971.jpg"],
        beds: 2,
        baths: 2,
        area: "85 m²",
        description: "Moderno apartamento tipo loft en el corazón del distrito cultural y tecnológico. Perfecto para jóvenes profesionales o parejas."
    },
    {
        id: 6,
        title: "Terreno Campestre",
        location: "Fraijanes, Guatemala",
        price: "Q. 850,000",
        status: "oferta",
        images: ["https://i.ibb.co/KpqBv9r8/premium-terrain.jpg"],
        beds: 0,
        baths: 0,
        area: "1500 v²",
        description: "Hermoso terreno rodeado de naturaleza con topografía plana, ideal para construir la casa de sus sueños lejos del ruido de la ciudad."
    },
    {
        id: 7,
        title: "Casa Familiar Condado",
        location: "Condado Naranjo, Mixco",
        price: "Q. 1,800,000",
        status: "disponible",
        images: ["https://i.ibb.co/LdFP51hn/prop-1-1777755595870.jpg", "https://i.ibb.co/ch2P2C1R/prop-1-extra2-1777756561921.jpg"],
        beds: 3,
        baths: 2.5,
        area: "180 m²",
        description: "Amplia casa en condominio seguro con amenidades como parques, canchas deportivas y salón social. Excelente opción para familias."
    },
    {
        id: 8,
        title: "Apartamento Oakland Park",
        location: "Zona 10, Guatemala",
        price: "Q. 2,900,000",
        status: "nueva",
        images: ["https://i.ibb.co/xt3NVXLy/premium-apartment.jpg", "https://i.ibb.co/CL7Jfhy/prop-2-1777755612269.jpg"],
        beds: 3,
        baths: 3,
        area: "150 m²",
        description: "Exclusivo apartamento a pasos de Oakland Mall. Edificio con piscina en terraza, gimnasio equipado y bussines center."
    },
    {
        id: 9,
        title: "Terreno Comercial",
        location: "Zona 9, Guatemala",
        price: "Q. 4,500,000",
        status: "disponible",
        images: ["https://i.ibb.co/KpqBv9r8/premium-terrain.jpg"],
        beds: 0,
        baths: 0,
        area: "800 v²",
        description: "Excelente ubicación para desarrollo comercial u oficinas. Sobre calle principal con alto tráfico vehicular y peatonal."
    },
    {
        id: 10,
        title: "Casa de Verano",
        location: "Puerto San José, Escuintla",
        price: "Q. 2,100,000",
        status: "disponible",
        images: ["https://i.ibb.co/jZ6XKyNP/mansion-4k-hero.jpg", "https://i.ibb.co/HDyVg0Mv/prop-1-extra1-1777756548971.jpg"],
        beds: 4,
        baths: 4,
        area: "400 m²",
        description: "Hermosa casa vacacional con piscina privada, rancho y acceso al mar. Ideal para disfrutar en familia los fines de semana en la costa."
    },
    {
        id: 11,
        title: "Apartamento Cayalá Living",
        location: "Zona 16, Ciudad Cayalá",
        price: "Q. 3,500,000",
        status: "nueva",
        images: ["https://i.ibb.co/xt3NVXLy/premium-apartment.jpg", "https://i.ibb.co/ch2P2C1R/prop-1-extra2-1777756561921.jpg"],
        beds: 2,
        baths: 2.5,
        area: "120 m²",
        description: "Vive la experiencia de Cayalá. Apartamento moderno con vistas a la reserva, acceso peatonal a restaurantes y comercios exclusivos."
    },
    {
        id: 12,
        title: "Finca Cafetalera",
        location: "Cobán, Alta Verapaz",
        price: "Q. 8,000,000",
        status: "disponible",
        images: ["https://i.ibb.co/KpqBv9r8/premium-terrain.jpg"],
        beds: 3,
        baths: 2,
        area: "15 Caballerías",
        description: "Finca productora de café en altura. Incluye casa patronal, nacimiento de agua, instalaciones de beneficio húmedo y bosque de reserva."
    },
    {
        id: 13,
        title: "Casa Muxbal",
        location: "Carretera a Muxbal",
        price: "Q. 6,200,000",
        status: "oferta",
        images: ["https://i.ibb.co/nq4KCY6j/prop-3-1777755625671.jpg", "https://i.ibb.co/HDyVg0Mv/prop-1-extra1-1777756548971.jpg"],
        beds: 4,
        baths: 5,
        area: "750 m²",
        description: "Residencia inmersa en el bosque con diseño ecológico. Cuenta con amplios jardines, ventanales de piso a techo y finos acabados en madera."
    },
    {
        id: 14,
        title: "Estudio Zona 1",
        location: "Centro Histórico, Zona 1",
        price: "Q. 750,000",
        status: "vendida",
        images: ["https://i.ibb.co/xt3NVXLy/premium-apartment.jpg"],
        beds: 1,
        baths: 1,
        area: "45 m²",
        description: "Acogedor estudio en edificio histórico restaurado. Perfecto como inversión para Airbnb o estudiantes. A poca distancia del Paseo La Sexta."
    },
    {
        id: 15,
        title: "Terreno Panorámico",
        location: "Santa Lucía Milpas Altas",
        price: "Q. 600,000",
        status: "disponible",
        images: ["https://i.ibb.co/KpqBv9r8/premium-terrain.jpg"],
        beds: 0,
        baths: 0,
        area: "1000 v²",
        description: "Lote con vistas impresionantes a los volcanes de Agua, Fuego y Acatenango. Dentro de urbanización con servicios subterráneos."
    },
    {
        id: 16,
        title: "Casa Majadas",
        location: "Zona 11, Guatemala",
        price: "Q. 2,500,000",
        status: "disponible",
        images: ["https://i.ibb.co/LdFP51hn/prop-1-1777755595870.jpg", "https://i.ibb.co/ch2P2C1R/prop-1-extra2-1777756561921.jpg"],
        beds: 3,
        baths: 3,
        area: "220 m²",
        description: "Casa de dos niveles en sector residencial cerrado cerca de centros comerciales. Amplia área social, cocina remodelada y parqueo para dos vehículos."
    },
    {
        id: 17,
        title: "Loft Industrial",
        location: "Zona 14, Cantón Exposición",
        price: "Q. 1,900,000",
        status: "nueva",
        images: ["https://i.ibb.co/xt3NVXLy/premium-apartment.jpg", "https://i.ibb.co/HDyVg0Mv/prop-1-extra1-1777756548971.jpg"],
        beds: 1,
        baths: 1.5,
        area: "95 m²",
        description: "Apartamento estilo loft de doble altura, paredes de ladrillo expuesto y ventanales amplios. Diseño vanguardista para un estilo de vida contemporáneo."
    },
    {
        id: 18,
        title: "Terreno Industrial",
        location: "Palín, Escuintla",
        price: "Q. 12,000,000",
        status: "disponible",
        images: ["https://i.ibb.co/KpqBv9r8/premium-terrain.jpg"],
        beds: 0,
        baths: 0,
        area: "5000 v²",
        description: "Terreno plano a orilla de carretera CA-9. Ideal para ofibodegas, centro de distribución o planta industrial. Excelente acceso logístico."
    },
    {
        id: 19,
        title: "Casa de Lago",
        location: "Panajachel, Sololá",
        price: "Q. 5,500,000",
        status: "disponible",
        images: ["https://i.ibb.co/jZ6XKyNP/mansion-4k-hero.jpg", "https://i.ibb.co/v4mw2pqY/guatemala-hero2-1777756534757.jpg"],
        beds: 5,
        baths: 4,
        area: "500 m²",
        description: "Espectacular propiedad frente al Lago de Atitlán con muelle privado. Vistas inigualables, jardines terrazados y arquitectura que integra el paisaje."
    },
    {
        id: 20,
        title: "Apartamento Vista Hermosa II",
        location: "Zona 15, Guatemala",
        price: "Q. 2,200,000",
        status: "oferta",
        images: ["https://i.ibb.co/xt3NVXLy/premium-apartment.jpg", "https://i.ibb.co/ch2P2C1R/prop-1-extra2-1777756561921.jpg"],
        beds: 2,
        baths: 2,
        area: "110 m²",
        description: "Apartamento para estrenar en edificio boutique. Acabados premium, balcón con vista al bosque y amenidades como rooftop lounge y gym."
    }
];

// Load properties from localStorage or use defaults
let properties = [];
const storedProperties = localStorage.getItem('inmoexpress_properties_v4');
if (storedProperties) {
    properties = JSON.parse(storedProperties);
} else {
    properties = defaultProperties;
    localStorage.setItem('inmoexpress_properties_v4', JSON.stringify(properties));
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
    setupFaq();
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
        window.open('https://wa.me/50224259777?text=Hola,%20estoy%20interesado%20en%20recibir%20información%20sobre%20propiedades.', '_blank');
    });
}

// Setup FAQ Accordion
function setupFaq() {
    const triggers = document.querySelectorAll('.faq-trigger');
    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const item = trigger.closest('.faq-item');
            const wrapper = item.querySelector('.faq-answer-wrapper');
            const content = item.querySelector('.faq-answer-content');
            const isActive = item.classList.contains('active');
            
            // Close all other items
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer-wrapper').style.maxHeight = '0';
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
                wrapper.style.maxHeight = '0';
            } else {
                item.classList.add('active');
                wrapper.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
}

