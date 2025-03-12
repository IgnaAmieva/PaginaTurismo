/********************************************
 * Carrusel principal (hero) escritorio
 ********************************************/

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(n) {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === n) {
      slide.classList.add('active');
    }
  });
}
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
if (slides.length > 0) {
  showSlide(currentSlide);
  setInterval(nextSlide, 5000);
}

/********************************************
 * Carrusel principal (hero) móvil
 ********************************************/
let currentSlideMobile = 0;
const mobileSlides = document.querySelectorAll('.carousel-slide-mobile');

function showSlideMobile(n) {
  mobileSlides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === n) {
      slide.classList.add('active');
    }
  });
}
function nextSlideMobile() {
  currentSlideMobile = (currentSlideMobile + 1) % mobileSlides.length;
  showSlideMobile(currentSlideMobile);
}
if (mobileSlides.length > 0) {
  showSlideMobile(currentSlideMobile);
  setInterval(nextSlideMobile, 5000);
}

/********************************************
 * Menú hamburguesa (móvil)
 ********************************************/
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');

hamburgerBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) &&
      e.target !== hamburgerBtn &&
      !hamburgerBtn.contains(e.target)) {
    navLinks.classList.remove('open');
  }
});

/********************************************
 * Scroll suave en enlaces internos
 ********************************************/
const menuLinks = document.querySelectorAll('.nav-links a, .scroll-link');
menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href') || '';
    if (href.startsWith('#')) {
      e.preventDefault();
      navLinks.classList.remove('open');
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

/********************************************
 * Navbar transparente y scroll
 ********************************************/
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.remove('transparent');
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
    navbar.classList.add('transparent');
  }
  toggleScrollTopButton();
});

/********************************************
 * Flechita "scroll-to-top"
 ********************************************/
const scrollTopBtn = document.getElementById('scrollTopBtn');

function toggleScrollTopButton() {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/********************************************
 * Efectos de fade-in con IntersectionObserver
 ********************************************/
const fadeInSections = document.querySelectorAll('.fade-in-section');
const fadeInSides = document.querySelectorAll('.fade-in-side, .about-horizontal-image, .about-vertical-image');
const observerOptions = { threshold: 0.1 };

const fadeInObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeInSections.forEach(section => fadeInObserver.observe(section));
fadeInSides.forEach(item => fadeInObserver.observe(item));

/********************************************
 * Carrusel "Ustedes"
 ********************************************/
let ustedesIndex = 0;
const ustedesSlides = document.querySelectorAll('.ustedes-slide');

function showUstedes(n) {
  ustedesSlides.forEach((slide, idx) => {
    slide.classList.remove('active');
    if (idx === n) {
      slide.classList.add('active');
    }
  });
}
function ustedesNext() {
  ustedesIndex = (ustedesIndex + 1) % ustedesSlides.length;
  showUstedes(ustedesIndex);
}
function ustedesPrev() {
  ustedesIndex = (ustedesIndex - 1 + ustedesSlides.length) % ustedesSlides.length;
  showUstedes(ustedesIndex);
}
if (ustedesSlides.length > 0) {
  showUstedes(ustedesIndex);
}

const savedLanguage = localStorage.getItem('selectedLanguage') || 'es';
/********************************************
 * i18next: configuración y traducciones
 ********************************************/
const resources = {
  es: {
    translation: {
      /* ====== TRADUCCIONES GENERALES (Index) ====== */
    
          navbar: {
            logoText: "Frecuencia Sur Ushuaia",
            inicio: "Inicio",
            tours: "Tours",
            sobreNosotros: "Sobre Nosotros",
            contacto: "Contacto",
            ustedes: "Ustedes",
            lenguajeBtn: "Idioma"
          },
          tours: {
            title: "Tours, Expediciones y Actividades",
            paragraph: "No importa si viajas solo, en grupo o en familia, tenemos una experiencia para ti...",
            card1tag: "Dificultad Media/Baja",
            card1location: "Laguna Esmeralda",
            card2tag: "Dificultad Alta",
            card2location: "Glaciar y Laguna Ojo de Albino",
            card3tag: "Dificultad Media",
            card3location: "Glaciar Martial",
            card4tag: "Dificultad Media",
            card4location: "Glaciar Vinciguerra",
            cardBtn: "Ver Tour"
          },
          about: {
            title: "¿Quiénes somos?",
            paragraph: "Somos una empresa amante de la naturaleza dedicada a realizar actividades de trekking y montaña. Está conformada por Guías locales con una amplia experiencia en la materia para poder brindarte seguridad y toda la información necesaria para que disfrutes de una aventura inolvidable en el fin del mundo."
          },
          contact: {
            title: "¿Listo para tu próxima aventura?",
            paragraph: "¡Nos encantaría saber de ti! Escríbenos o síguenos en redes sociales para más información.",
            paragraph2: "¡Reserva Ahora!",
            paragraph3: "Recordamos que todas las excursiones cuentan con traslado ida y vuelta hasta el hospedaje y cobertura total contra accidentes personales.",
          },
          ustedes: {
            title: "¡Nuestros viajeros!",
            paragraph: "Descubre experiencias increíbles de quienes ya vivieron la aventura",
            slide1: "Caminata al Glaciar Ojo del Albino.",
            slide2: "La impresionante Laguna de los Témpanos.",
            slide3: "Glaciar Ojo del Albino en su esplendor.",
            slide4: "Una familia explorando Martial.",
            slide5: "La mejor experiencia en Laguna y Glaciar Ojo del Albino.",
            slide6: "Laguna Esmeralda en verano, un paraíso.",
            slide7: "Laguna Esmeralda desde los balcones del Albino.",
            slide8: "Senderismo en el Glaciar Vinciguerra.",
            slide9: "La belleza de la Laguna de los Témpanos."
          },
          footer: {
            numero: "Teléfono",
            mail: "Mail",
            tour: "Tours",
            copy: "Copyright © 2025 Frecuencia Sur Ushuaia"
          },
          lagunaEsmeraldaPage: {
            htmlTitle: "Laguna Esmeralda - Frecuencia Sur Ushuaia",
            heroH1: "Laguna Esmeralda",
            heroSubtitle: "Trekking en el Fin del Mundo",
            heroBtnReserva: "¡Reserva Aquí!",
            heroMobileSubtitle: "¡Versión Móvil!",
            
            sectionTitle: "Descubre la Maravilla de Laguna Esmeralda",
            sectionPar1: "La Laguna Esmeralda es un trek de dificultad media, ideal para personas sin experiencia en trekking pero con buen estado físico. Inicia en la Ruta Nacional Nº3 y recorre bosques, castoreras y un hermoso valle hasta llegar a la laguna con su imponente color verde esmeralda.",
            sectionMapTitle: "Ubicación en Google Earth",
            sectionMapCaption: "Click para imágenes satelitales",
            floraFauna: " Durante el recorrido, tendrás la oportunidad de apreciar la flora y fauna del lugar, permitiéndote sumergirte en la belleza natural y la biodiversidad única de la región.",
            
            trekInfoTitle: "Información del Trek",
            trekInfoSubtitle: "Datos clave para que planees tu aventura...",
            dificTitle: "Dificultad",
            dificValue: "Media-Baja",
            distTitle: "Distancia",
            distValue: "9.8 km",
            duraTitle: "Duración",
            duraValue: "4 - 6 horas",
            desnTitle: "Desnivel",
            desnValue: "200 m",
            diasTitle: "Días y Horarios",
            diasValue: "Pick Up 08:00hs",
            climaTitle: "Clima",
            climaValue: "Variable",
            equipTitle: "Equipamiento (No incluido)",
            equipPanel: "Son Imprescindibles",
            equipPanel2:"Botas o borcegos de trekking, campera y pantalón impermeables. También es necesario llevar agua y mochila.",
            infoAdTitle: "Info Adicional",
            infoAdPanel1: "Incluye un box lunch (sandwich, alfajor y frutos secos) y una infusión caliente.",
            infoAdPanel2: "Incluye bastones, grampines, crampones y casco según sea necesario.",
            infoAdPanel3: "No se cancela por lluvias, únicamente por condiciones climatológicas extremas (temporal de nieve o viento).",
            infoAdPanel4: "Seguro de accidentes personales con cobertura total.",
            infoAdPanel5: "Traslado ida y vuelta desde y hasta el alojamiento.",

            importantNoteTitle: "IMPORTANTE",
            importantNoteParagraph: "Si el pasajero no se presenta o las condiciones climáticas no son adecuadas, se perderá el importe abonado.",
            importantNoteParagraph2: "Cambios o cancelaciones con menos de 24 horas de anticipación tienen una penalización del 100%.",
            importantNoteParagraph3:" Ayúdanos a reducir el impacto de nuestra actividad Por favor, lleva tu botella de agua reutilizable.",

            footerNumber: "Número",
            footerMail: "Mail",
            footerTour: "Tour",
            footerCopy: "Copyright © 2025 Frecuencia Sur Ushuaia"
          },
          ojoAlbinoPage: {
            htmlTitle: "Glaciar Ojo del Albino - Frecuencia Sur Ushuaia",
            heroH1: "Glaciar y Laguna Ojo del Albino",
            heroSubtitle: "Trekking en el Fin del Mundo",
            heroMobileSubtitle: "",
            heroBtnReserva: "¡Reserva Aquí!",
    
            sectionTitle: "Descubre la Maravilla del Glaciar y la Laguna Ojo del Albino",
            sectionPar1: " El Glaciar Ojo del Albino es un trekking de alta dificultad. Se recorren 20 km de caminos agrestes con una desafiante pendiente a lo largo del recorrido, atravesaremos bosques y diversos terrenos con nieve, hielo y barro, hasta llegar a la laguna Ojo del Albino y su majestuoso glaciar homónimo. ",
            sectionMapTitle: "Ubicación en Google Earth",
            sectionMapCaption: "Click para imágenes satelitales",
            floraFauna: "Durante el recorrido, tendrás la oportunidad de apreciar la flora y fauna del lugar, inmerso en la belleza natural y la biodiversidad única de la región..",
    
            infoTitle: "Información del Recorrido",
            infoSubtitle: "Datos clave para que planees tu aventura...",
            dificTitle: "Dificultad",
            dificValue: "Alta",
            distTitle: "Distancia",
            distValue: "20 km",
            duraTitle: "Duración",
            duraValue: "10 - 12 horas",
            desnTitle: "Desnivel",
            desnValue: "800 m",
            diasTitle: "Días y Horarios",
            diasValue: "Pick Up 08:00",
            climaTitle: "Clima",
            climaValue: "Frío y variable",
            equipTitle: "Equipamiento (No incluido)",
            equipPanel: "Son imprescindibles: botas de trekking, campera y pantalón impermeables...",
            infoAdTitle: "Info Adicional",
            infoAdPanel1: "Incluye box lunch y equipamiento básico...",
            infoAdPanel2: "No se cancela por lluvias, salvo clima extremo.",
    
            importantNoteTitle: "IMPORTANTE",
            importantNoteParagraph: "Si el pasajero no se presenta o las condiciones climáticas no son adecuadas, se perderá el importe abonado.",
            importantNoteParagraph2: "Cambios o cancelaciones con menos de 24 horas de anticipación tienen una penalización del 100%.",
            importantNoteParagraph3:" Ayúdanos a reducir el impacto de nuestra actividad Por favor, lleva tu botella de agua reutilizable.",
    
            footerNumber: "Número",
            footerMail: "Mail",
            footerTour: "Tour",
            footerCopy: "Copyright © 2025 Frecuencia Sur Ushuaia"
          },
          martialPage: {
            htmlTitle: "Glaciar Martial - Frecuencia Sur Ushuaia",
            heroH1: "Glaciar Martial",
            heroSubtitle: "Trekking en el Fin del Mundo",
            heroMobileSubtitle: "¡Versión Móvil!",
            heroBtnReserva: "¡Reserva Aquí!",
    
            sectionTitle: "La Maravilla del Martial",
            sectionPar1: "Comenzamos el trekking con un ascenso que acompaña la antigua pista de esquí del Martial y se avanza sobre la parte más alta del bosque fueguino. Luego de pasar el límite de vegetación se camina sobre morena glaciar hasta dar con el punto de avistamiento sobre el manto glaciario.",
            sectionMapTitle: "Ubicación en Google Earth",
            sectionMapCaption: "Click para imágenes satelitales",
            sectionPar3: "Si el tiempo lo permite se realiza el almuerzo en el mirador con la impactante vista de la ciudad y el Canal Beagle.",
    
            infoTitle: "Información del Trek",
            infoSubtitle: "Datos clave para que planees tu aventura...",
            dificTitle: "Dificultad",
            dificValue: "Media",
            distTitle: "Distancia",
            distValue: "8 km",
            duraTitle: "Duración",
            duraValue: "5 horas",
            desnTitle: "Desnivel",
            desnValue: "400 m",
            diasTitle: "Días y Horarios",
            diasValue: "Pick Up 9hs",
            climaTitle: "Clima",
            climaValue: "Frío, lluvias, nevadas y vientos",
            equipTitle: "Equipamiento (No incluido)",
            equipPanel: "Son Imprescindibles",
            equipPanel2:"Botas o borcegos de trekking, campera y pantalón impermeables. También es necesario llevar agua y mochila.",
            infoAdTitle: "Info Adicional",
            infoAdPanel1: "Incluye un box lunch (sandwich, alfajor y frutos secos) y una infusión caliente.",
            infoAdPanel2: "Incluye bastones, grampines, crampones y casco según sea necesario.",
            infoAdPanel3: "No se cancela por lluvias, únicamente por condiciones climatológicas extremas (temporal de nieve o viento).",
            
            importantNoteTitle: "IMPORTANTE",
            importantNoteParagraph: "Si el pasajero no se presenta o las condiciones climáticas no son adecuadas, se perderá el importe abonado.",
            importantNoteParagraph2: "Cambios o cancelaciones con menos de 24 horas de anticipación tienen una penalización del 100%.",
            importantNoteParagraph3:" Ayúdanos a reducir el impacto de nuestra actividad Por favor, lleva tu botella de agua reutilizable.",

            footerNumber: "Número",
            footerMail: "Mail",
            footerTour: "Tour",
            footerCopy: "Copyright © 2025 Frecuencia Sur Ushuaia"
          },
          vinciguerraPage: {
            htmlTitle: "Glaciar Vinciguerra - Frecuencia Sur Ushuaia",
            heroH1: "Glaciar Vinciguerra",
            heroSubtitle: "Trekking en el Fin del Mundo",
            heroMobileSubtitle: "¡Trekking en el fin del mundo!",
            heroBtnReserva: "¡Reserva Aquí!",
    
            sectionTitle: "Laguna de los Témpanos y Glaciar Vinciguerra, el lugar de tus sueños",
            sectionPar1: "Comenzamos sobre un área de fácil acceso hasta dar con el puente que cruza el arroyo grande y luego la senda se adentra en el bosque fueguino que, dominado por lengas y coihues, nos prepara para el ascenso de unos 600 mts. de desnivel hasta el límite de vegetación.",
            sectionPar2: " La última etapa del ascenso es sobre terreno montañoso con una desafiante pendiente que permite llegar a la Laguna de los Témpanos. Si el clima y el grupo de caminantes están en condiciones se rodea la laguna y se realiza una aproximación al Glaciar Vinciguerra, que según época del año y si las condiciones son favorables nos adentramos a sus cuevas y reconocemos sus partes.",
            sectionMapTitle: "Ubicación en Google Earth",
            sectionMapCaption: "Click para imágenes satelitales",
    
            infoTitle: "Información del Trek",
            infoSubtitle: "Datos clave para que planees tu aventura...",
            dificTitle: "Dificultad",
            dificValue: "Media/Alta",
            distTitle: "Distancia",
            distValue: "12 km",
            duraTitle: "Duración",
            duraValue: "8 horas",
            desnTitle: "Desnivel",
            desnValue: "600 m",
            diasTitle: "Días y Horarios",
            diasValue: "Pick Up 09:00hs",
            climaTitle: "Clima",
            climaValue: "Frío, lluvia, nevada, viento",
            equipTitle: "Equipamiento (No incluido)",
            equipPanel: "Son Imprescindibles",
            equipPanel2:"Botas o borcegos de trekking, campera y pantalón impermeables. También es necesario llevar agua y mochila.",
            infoAdTitle: "Info Adicional",
            infoAdPanel1: "Incluye un box lunch (sandwich, alfajor y frutos secos) y una infusión caliente.",
            infoAdPanel2: "Incluye bastones, grampines, crampones y casco según sea necesario.",
            infoAdPanel3: "No se cancela por lluvias, únicamente por condiciones climatológicas extremas (temporal de nieve o viento).",
            
            importantNoteTitle: "IMPORTANTE",
            importantNoteParagraph: "Si el pasajero no se presenta o las condiciones climáticas no son adecuadas, se perderá el importe abonado.",
            importantNoteParagraph2: "Cambios o cancelaciones con menos de 24 horas de anticipación tienen una penalización del 100%.",
            importantNoteParagraph3:" Ayúdanos a reducir el impacto de nuestra actividad Por favor, lleva tu botella de agua reutilizable.",

            importantNoteTitle: "IMPORTANTE",
            importantNoteParagraph: "Ayúdanos a reducir el impacto de nuestra actividad...",
            
            summerTab: "Verano",
            winterTab: "Invierno",
            
            footerNumber: "Número",
            footerMail: "Mail",
            footerTour: "Tour",
            footerCopy: "Copyright © 2025 Frecuencia Sur Ushuaia",
            backToTop: "Volver al Inicio"
          },
        }
      },
         
      en: {
        translation: {
           /* ====== TRADUCCIONES GENÉRICAS (navbar, footer) ====== */
           navbar: {
            logoText: "Frecuencia Sur Ushuaia",
            inicio: "Home",
            tours: "Tours",
            sobreNosotros: "About Us",
            contacto: "Contact",
            ustedes: "You",
            lenguajeBtn: "Language"
        },
        tours: {
            title: "Tours, Expeditions, and Activities",
            paragraph: "No matter if you travel alone, in a group, or with family, we have an experience for you...",
            card1tag: "Easy/Moderate",
            card1location: "Emerald Lagoon",
            card2tag: "Challenging",
            card2location: "Glacier & Albino Eye Lagoon",
            card3tag: "Moderate",
            card3location: "Martial Glacier",
            card4tag: "Moderate",
            card4location: "Vinciguerra Glacier",
            cardBtn: "Explore Tour",
        },
        about: {
            title: "Who are we?",
            paragraph: "We are a nature-loving company dedicated to trekking and mountain activities. Our team consists of experienced local guides who will provide you with safety and all the necessary information to enjoy an unforgettable adventure at the End of the World."
        },
        contact: {
            title: "Ready for your next adventure?",
            paragraph: "We would love to hear from you! Write to us or follow us on social media for more information.",
            paragraph2:"¡Book Now!",
    paragraph3:"We remind you that all excursions include round-trip transportation to your accommodation and personal accident insurance.",
        },
        ustedes: {
            title: "Our Travelers!",
            paragraph: "Discover incredible experiences from those who have already lived the adventure",
            slide1: "Hiking to Ojo del Albino Glacier.",
            slide2: "The impressive Laguna de los Témpanos.",
            slide3: "Ojo del Albino Glacier in all its splendor.",
            slide4: "A family exploring Martial.",
            slide5: "The best experience at Ojo del Albino Lagoon and Glacier.",
            slide6: "Laguna Esmeralda in summer, a paradise.",
            slide7: "Esmeralda Lagoon from the Albino balconies.",
            slide8: "Hiking on Vinciguerra Glacier.",
            slide9: "The beauty of Laguna de los Témpanos."
        },
        footer: {
            numero: "Phone",
            mail: "Email",
            tour: "Tour",
            copy: "Copyright © 2025 Frecuencia Sur Ushuaia"
        },
        
          // NUEVO: Para lagunaEsmeraldaPage en inglés
          lagunaEsmeraldaPage: {
            htmlTitle: "Laguna Esmeralda - Frecuencia Sur Ushuaia",
            heroH1: "Laguna Esmeralda",
            heroSubtitle: "Trekking at the End of the World",
            heroBtnReserva: "Book Here!",
            heroMobileSubtitle: "Mobile Version!",
        
            sectionTitle: "Discover the Wonder of Laguna Esmeralda",
            sectionPar1: "Laguna Esmeralda is a medium-difficulty trek, ideal for people with no trekking experience but in good physical condition. It starts at National Route Nº3 and passes through forests, beaver dams, and a beautiful valley before reaching the lagoon with its stunning emerald green color.",
            sectionMapTitle: "Location on Google Earth",
            sectionMapCaption: "Click for satellite images",
            floraFauna: "During the trek, you'll have the opportunity to appreciate the local flora and fauna, allowing you to immerse yourself in the natural beauty and unique biodiversity of the region.",
        
            trekInfoTitle: "Trek Information",
            trekInfoSubtitle: "Key details to plan your adventure...",
            dificTitle: "Difficulty",
            dificValue: "Easy-Moderate",
            distTitle: "Distance",
            distValue: "9.8 km",
            duraTitle: "Duration",
            duraValue: "4 - 6 hours",
            desnTitle: "Elevation Gain",
            desnValue: "200 m",
            diasTitle: "Days and Schedule",
            diasValue: "Pick Up 08:00 AM",
            climaTitle: "Weather",
            climaValue: "Variable",
            equipTitle: "Equipment (Not Included)",
            equipPanel: "Essential Items",
            equipPanel2: "Trekking boots, waterproof jacket and pants are essential. You also need to bring water and a backpack.",
            infoAdTitle: "Additional Info",
            infoAdPanel1: "Includes a box lunch (sandwich, alfajor, and nuts) and a hot beverage.",
infoAdPanel2: "Includes trekking poles, grampines, crampons, and a helmet as needed.",
infoAdPanel3: "Not canceled for rain, only for extreme weather conditions (snowstorms or high winds).",
infoAdPanel4: "Personal accident insurance with full coverage.",
infoAdPanel5: "Round-trip transfer to and from the accommodation.",

            
            importantNoteTitle: "IMPORTANT",
            importantNoteParagraph: "If the passenger does not show up or if the weather conditions are not suitable, the amount paid will be lost.",
            importantNoteParagraph2:"Changes or cancellations within less than 24 hours will incur a 100% penalty.",
            importantNoteParagraph3: "Help us reduce the impact of our activity. Please bring your reusable water bottle.",
        
            footerNumber: "Number",
            footerMail: "Mail",
            footerTour: "Tour",
            footerCopy: "Copyright © 2025 Frecuencia Sur Ushuaia"
        },
        
          navbar: {
            logoText: "Frecuencia Sur Ushuaia",
            inicio: "Home",
            tours: "Tours",
            sobreNosotros: "About Us",
            contacto: "Contact",
            ustedes: "Travelers",
            lenguajeBtn: "Language"
          },
          about: {
            title: "Who are we?",
            paragraph: "We are a company passionate about nature, specializing in trekking and mountain activities. Our team consists of experienced local guides dedicated to ensuring your safety and providing all the information you need to enjoy an unforgettable adventure at the end of the world."
          },
          contact: {
            title: "Ready for your next adventure?",
            paragraph: "We’d love to hear from you! Contact us or follow us on social media for more details.",
              paragraph2:"¡Book Now!",
      paragraph3:"We remind you that all excursions include round-trip transportation to your accommodation and personal accident insurance.",
            
          },
          footer: {
            numero: "Phone",
            mail: "Email",
            tour: "Excursion",
            copy: "Copyright © 2025 Frecuencia Sur Ushuaia"
          },
          /* ====== Ojo del Albino Page ====== */
          ojoAlbinoPage: {
            htmlTitle: "Ojo del Albino Glacier - Frecuencia Sur Ushuaia",
            heroH1: "Ojo del Albino Glacier and Lagoon",
            heroSubtitle: "Trekking at the End of the World",
            heroMobileSubtitle: "",
            heroBtnReserva: "Book Here!",
        
            sectionTitle: "Discover the Wonder of Ojo del Albino Glacier and Lagoon",
            sectionPar1: "The Ojo del Albino Glacier trek is highly challenging. It covers 20 kilometers of rugged trails with steep climbs along the way. We'll pass through forests and various terrains including snow, ice, and mud, until reaching the Ojo del Albino lagoon and its majestic glacier.",
            sectionMapTitle: "Location on Google Earth",
            sectionMapCaption: "Click for satellite images",
            floraFauna: "During the trek, you'll have the opportunity to appreciate the local flora and fauna, immersed in the natural beauty and unique biodiversity of the region.",
        
            infoTitle: "Trek Information",
            infoSubtitle: "Key details to plan your adventure...",
            dificTitle: "Difficulty",
            dificValue: "High",
            distTitle: "Distance",
            distValue: "20 km",
            duraTitle: "Duration",
            duraValue: "10 - 12 hours",
            desnTitle: "Elevation Gain",
            desnValue: "800 m",
            diasTitle: "Days and Schedule",
            diasValue: "Pick Up 08:00 AM",
            climaTitle: "Weather",
            climaValue: "Cold and variable",
            equipTitle: "Equipment (Not Included)",
            equipPanel: "Essential items: trekking boots, waterproof jacket and pants...",
            infoAdTitle: "Additional Info",
            infoAdPanel1: "Includes a box lunch (sandwich, alfajor, and nuts) and a hot beverage.",
infoAdPanel2: "Includes trekking poles, grampines, crampons, and a helmet as needed.",
infoAdPanel3: "Not canceled for rain, only for extreme weather conditions (snowstorms or high winds).",
infoAdPanel4: "Personal accident insurance with full coverage.",
infoAdPanel5: "Round-trip transfer to and from the accommodation.",

        
            importantNoteTitle: "IMPORTANT",
            importantNoteParagraph: "If the passenger does not show up or if the weather conditions are not suitable, the amount paid will be lost.",
            importantNoteParagraph2:"Changes or cancellations within less than 24 hours will incur a 100% penalty.",
            importantNoteParagraph3: "Help us reduce the impact of our activity. Please bring your reusable water bottle.",
        
            footerNumber: "Number",
            footerMail: "Mail",
            footerTour: "Tour",
            footerCopy: "Copyright © 2025 Frecuencia Sur Ushuaia"
        },
        

      /* ====== Glaciar Martial Page ====== */
      martialPage: {
        htmlTitle: "Martial Glacier - Frecuencia Sur Ushuaia",
        heroH1: "Martial Glacier",
        heroSubtitle: "Trekking at the End of the World",
        heroMobileSubtitle: "Mobile Version!",
        heroBtnReserva: "Book Here!",
    
        sectionTitle: "The Wonder of Martial",
        sectionPar1: "We begin the trek with an ascent along the old Martial ski slope, advancing over the highest part of the Fuegian forest. The trail follows the meltwater stream coming from the glacier. After crossing the vegetation limit, the path continues over loose rock and ice.",
        sectionPar2: "The trail continues along the stream...",
        sectionMapTitle: "Location on Google Earth",
        sectionMapCaption: "Click for satellite images",
        sectionPar3: "If the weather permits, lunch will be enjoyed at the viewpoint, offering an impressive view of the city and the Beagle Channel.",
    
        infoTitle: "Trek Information",
        infoSubtitle: "Key details to plan your adventure...",
        dificTitle: "Difficulty",
        dificValue: "Medium",
        distTitle: "Distance",
        distValue: "8 km",
        duraTitle: "Duration",
        duraValue: "5 hours",
        desnTitle: "Elevation Gain",
        desnValue: "400 m",
        diasTitle: "Days and Schedule",
        diasValue: "Pick Up 9:00 AM",
        climaTitle: "Weather",
        climaValue: "Cold, rain, snow, and wind",
        equipTitle: "Equipment (Not Included)",
        equipPanel: "Essential Items",
        equipPanel2: "Trekking boots, waterproof jacket and pants are essential. You also need to bring water and a backpack.",
        infoAdTitle: "Additional Info",
        infoAdPanel1: "Includes a box lunch (sandwich, alfajor, and nuts) and a hot beverage.",
        infoAdPanel2: "Includes trekking poles, grampines, crampons, and a helmet as needed.",
        infoAdPanel3: "Not canceled for rain, only for extreme weather conditions (snowstorms or high winds).",
        infoAdPanel4: "Personal accident insurance with full coverage.",
        infoAdPanel5: "Round-trip transfer to and from the accommodation.",
        
    
        importantNoteTitle: "IMPORTANT",
            importantNoteParagraph: "If the passenger does not show up or if the weather conditions are not suitable, the amount paid will be lost.",
            importantNoteParagraph2:"Changes or cancellations within less than 24 hours will incur a 100% penalty.",
            importantNoteParagraph3: "Help us reduce the impact of our activity. Please bring your reusable water bottle.",
    
        footerNumber: "Number",
        footerMail: "Mail",
        footerTour: "Tour",
        footerCopy: "Copyright © 2025 Frecuencia Sur Ushuaia"
    },
    
      /* ====== Glaciar Vinciguerra Page ====== */
      vinciguerraPage: {
        htmlTitle: "Vinciguerra Glacier - Frecuencia Sur Ushuaia",
        heroH1: "Vinciguerra Glacier",
        heroSubtitle: "Trekking at the End of the World",
        heroMobileSubtitle: "Mobile Version!",
        heroBtnReserva: "Book Here!",
    
        sectionTitle: "Laguna de los Témpanos and Vinciguerra Glacier, the place of your dreams",
        sectionPar1: "We start the trek with an ascent along the old Martial ski slope, continuing through the highest part of the Fuegian forest. After crossing the tree line, we walk over glacial moraine until reaching the viewpoint overlooking the glacier's surface.",
        sectionPar2: "The last part of the ascent is over mountainous terrain with a challenging slope, leading to Laguna de los Témpanos. If the weather and the group conditions allow, we will walk around the lagoon and approach the Vinciguerra Glacier. Depending on the time of year and the conditions, we may explore its ice caves and discover its formations.",
        sectionMapTitle: "Location on Google Earth",
        sectionMapCaption: "Click for satellite images",
    
        infoTitle: "Trek Information",
        infoSubtitle: "Key details to plan your adventure...",
        dificTitle: "Difficulty",
        dificValue: "Medium/High",
        distTitle: "Distance",
        distValue: "12 km",
        duraTitle: "Duration",
        duraValue: "8 hours",
        desnTitle: "Elevation Gain",
        desnValue: "600 m",
        diasTitle: "Days and Schedule",
        diasValue: "Pick Up 09:00 AM",
        climaTitle: "Weather",
        climaValue: "Cold, rain, snow, wind",
        equipTitle: "Equipment (Not Included)",
        equipPanel: "Essential Items",
        equipPanel2: "Trekking boots, waterproof jacket and pants are essential. You also need to bring water and a backpack.",
        infoAdTitle: "Additional Info",
        infoAdPanel1: "Includes a box lunch (sandwich, alfajor, and nuts) and a hot beverage.",
infoAdPanel2: "Includes trekking poles, grampines, crampons, and a helmet as needed.",
infoAdPanel3: "Not canceled for rain, only for extreme weather conditions (snowstorms or high winds).",
infoAdPanel4: "Personal accident insurance with full coverage.",
infoAdPanel5: "Round-trip transfer to and from the accommodation.",

    
importantNoteTitle: "IMPORTANT",
importantNoteParagraph: "If the passenger does not show up or if the weather conditions are not suitable, the amount paid will be lost.",
importantNoteParagraph2:"Changes or cancellations within less than 24 hours will incur a 100% penalty.",
importantNoteParagraph3: "Help us reduce the impact of our activity. Please bring your reusable water bottle.",
    
        summerTab: "Summer",
        winterTab: "Winter",
    
        footerNumber: "Number",
        footerMail: "Mail",
        footerTour: "Tour",
        footerCopy: "Copyright © 2025 Frecuencia Sur Ushuaia",
        backToTop: "Back to Top"
    },
      }
      },
      
      pt: {
        translation: {
          navbar: {
    logoText: "Frecuencia Sur Ushuaia",
    inicio: "Início",
    tours: "Passeios",
    sobreNosotros: "Sobre Nós",
    contacto: "Contato",
    ustedes: "Vocês",
    lenguajeBtn: "Idioma"
},
tours: {
    title: "Passeios, Expedições e Atividades",
    paragraph: "Não importa se você viaja sozinho, em grupo ou com a família, temos uma experiência para você...",
    card1tag: "Média/Baixa Dificuldade",
    card1location: "Laguna Esmeralda",
    card2tag: "Alta Dificuldade",
    card2location: "Glaciar e Lagoa Ojo de Albino",
    card3tag: "Média Dificuldade",
    card3location: "Glaciar Martial",
    card4tag: "Média Dificuldade",
    card4location: "Glaciar Vinciguerra",
    cardBtn: "Ver Passeio"
},
about: {
    title: "Quem somos?",
    paragraph: "Somos uma empresa apaixonada pela natureza, dedicada a atividades de trekking e montanhismo. Nossa equipe é composta por guias locais experientes que garantem segurança e todas as informações necessárias para que você desfrute de uma aventura inesquecível no Fim do Mundo."
},
contact: {
    title: "Pronto para sua próxima aventura?",
    paragraph: "Adoraríamos saber de você! Escreva para nós ou nos siga nas redes sociais para mais informações.",
    paragraph2:"¡Reserve agora!",
    paragraph3:"Lembramos que todos os passeios incluem traslado de ida e volta até a hospedagem e seguro contra acidentes pessoais.",
},
ustedes: {
    title: "Nossos Viajantes!",
    paragraph: "Descubra experiências incríveis de quem já viveu essa aventura",
    slide1: "Caminhada até o Glaciar Ojo del Albino.",
    slide2: "A impressionante Laguna de los Témpanos.",
    slide3: "Glaciar Ojo del Albino em todo o seu esplendor.",
    slide4: "Uma família explorando Martial.",
    slide5: "A melhor experiência na Laguna e Glaciar Ojo del Albino.",
    slide6: "Laguna Esmeralda no verão, um paraíso.",
    slide7: "Laguna Esmeralda vista das sacadas do Albino.",
    slide8: "Trilha no Glaciar Vinciguerra.",
    slide9: "A beleza da Laguna de los Témpanos."
},
footer: {
    numero: "Telefone",
    mail: "E-mail",
    tour: "Excursão",
    copy: "Copyright © 2025 Frecuencia Sur Ushuaia"
},

          // NUEVO: Para lagunaEsmeraldaPage en portugués
          lagunaEsmeraldaPage: {
            htmlTitle: "Laguna Esmeralda - Frecuencia Sur Ushuaia",
            heroH1: "Laguna Esmeralda",
            heroSubtitle: "Trekking no Fim do Mundo",
            heroBtnReserva: "Reserve Aqui!",
            heroMobileSubtitle: "Versão Mobile!",
        
            sectionTitle: "Descubra a Maravilha da Laguna Esmeralda",
            sectionPar1: "A Laguna Esmeralda é uma trilha de dificuldade média, ideal para pessoas sem experiência em trekking, mas com boa condição física. Começa na Rota Nacional Nº3 e atravessa florestas, represas de castores e um lindo vale antes de chegar à lagoa, com sua impressionante cor verde esmeralda.",
            sectionMapTitle: "Localização no Google Earth",
            sectionMapCaption: "Clique para imagens de satélite",
            floraFauna: "Durante o percurso, você terá a oportunidade de apreciar a flora e a fauna locais, permitindo que você se envolva na beleza natural e na biodiversidade única da região.",
        
            trekInfoTitle: "Informações da Trilha",
            trekInfoSubtitle: "Detalhes essenciais para planejar sua aventura...",
            dificTitle: "Dificuldade",
            dificValue: "Média-Baixa",
            distTitle: "Distância",
            distValue: "9.8 km",
            duraTitle: "Duração",
            duraValue: "4 - 6 horas",
            desnTitle: "Desnível",
            desnValue: "200 m",
            diasTitle: "Dias e Horários",
            diasValue: "Pick Up 08:00hs",
            climaTitle: "Clima",
            climaValue: "Variável",
            equipTitle: "Equipamento (Não incluído)",
            equipPanel: "Itens Essenciais",
            equipPanel2: "Botas de trekking, jaqueta e calça impermeáveis são indispensáveis. Também é necessário levar água e mochila.",
            infoAdTitle: "Informações Adicionais",
            infoAdPanel1: "Inclui um box lunch (sanduíche, alfajor e mix de castanhas) e uma infusão quente.",
infoAdPanel2: "Inclui bastões, grampines, crampons e capacete conforme necessário.",
infoAdPanel3: "Não é cancelado por chuva, somente por condições climáticas extremas (tempestade de neve ou vento).",
infoAdPanel4: "Seguro de acidentes pessoais com cobertura total.",
infoAdPanel5: "Translado de ida e volta da acomodação.",

        
            importantNoteTitle: "IMPORTANTE",
            importantNoteParagraph: "Se o passageiro não comparecer ou se as condições climáticas não forem adequadas, o valor pago será perdido.",
            importantNoteParagraph2:"Alterações ou cancelamentos com menos de 24 horas de antecedência terão uma penalização de 100%.",
            importantNoteParagraph3: "Ajude-nos a reduzir o impacto da nossa atividade. Por favor, leve sua garrafa de água reutilizável.",
        
            footerNumber: "Número",
            footerMail: "E-mail",
            footerTour: "Tour",
            footerCopy: "Copyright © 2025 Frecuencia Sur Ushuaia"
        },
        
     /* ====== GENÉRICO (navbar, footer) ====== */
     navbar: {
      logoText: "Frecuencia Sur Ushuaia",
      inicio: "Início",
      tours: "Passeios",
      sobreNosotros: "Sobre Nós",
      contacto: "Contato",
      ustedes: "Viajantes",
      lenguajeBtn: "Idioma"
    },
    footer: {
      numero: "Telefone",
      mail: "Email",
      tour: "Passeio",
      copy: "Copyright © 2025 Frecuencia Sur Ushuaia"
    },

    /* ====== Ojo del Albino Page ====== */
    ojoAlbinoPage: {
      htmlTitle: "Glaciar Ojo del Albino - Frecuencia Sur Ushuaia",
      heroH1: "Glaciar e Lagoa Ojo del Albino",
      heroSubtitle: "Trekking no Fim do Mundo",
      heroMobileSubtitle: "",
      heroBtnReserva: "Reserve Aqui!",
  
      sectionTitle: "Descubra a Maravilha do Glaciar e da Lagoa Ojo del Albino",
      sectionPar1: "A trilha até o Glaciar Ojo del Albino é de alta dificuldade. São 20 km de caminhos agrestes com inclinações desafiadoras durante todo o percurso. Passaremos por bosques e diferentes tipos de terreno com neve, gelo e lama, até chegarmos à lagoa Ojo del Albino e seu imponente glaciar homônimo.",
      sectionMapTitle: "Localização no Google Earth",
      sectionMapCaption: "Clique para imagens de satélite",
      floraFauna: "Durante o percurso, você terá a oportunidade de apreciar a flora e a fauna locais, imerso na beleza natural e na biodiversidade única da região.",
  
      infoTitle: "Informações da Trilha",
      infoSubtitle: "Detalhes essenciais para planejar sua aventura...",
      dificTitle: "Dificuldade",
      dificValue: "Alta",
      distTitle: "Distância",
      distValue: "20 km",
      duraTitle: "Duração",
      duraValue: "10 - 12 horas",
      desnTitle: "Desnível",
      desnValue: "800 m",
      diasTitle: "Dias e Horários",
      diasValue: "Pick Up 08:00",
      climaTitle: "Clima",
      climaValue: "Frio e variável",
      equipTitle: "Equipamento (Não incluído)",
      equipPanel: "Itens essenciais: botas de trekking, jaqueta e calça impermeáveis...",
      infoAdTitle: "Informações Adicionais",
      infoAdPanel1: "Inclui um box lunch (sanduíche, alfajor e mix de castanhas) e uma infusão quente.",
infoAdPanel2: "Inclui bastões, grampines, crampons e capacete conforme necessário.",
infoAdPanel3: "Não é cancelado por chuva, somente por condições climáticas extremas (tempestade de neve ou vento).",
infoAdPanel4: "Seguro de acidentes pessoais com cobertura total.",
infoAdPanel5: "Translado de ida e volta da acomodação.",

  
      importantNoteTitle: "IMPORTANTE",
      importantNoteParagraph: "Se o passageiro não comparecer ou se as condições climáticas não forem adequadas, o valor pago será perdido.",
            importantNoteParagraph2:"Alterações ou cancelamentos com menos de 24 horas de antecedência terão uma penalização de 100%.",
            importantNoteParagraph3: "Ajude-nos a reduzir o impacto da nossa atividade. Por favor, leve sua garrafa de água reutilizável.",
  
      footerNumber: "Número",
      footerMail: "E-mail",
      footerTour: "Tour",
      footerCopy: "Copyright © 2025 Frecuencia Sur Ushuaia"
  },
  

    /* ====== Glaciar Martial Page ====== */
    martialPage: {
      htmlTitle: "Glaciar Martial - Frecuencia Sur Ushuaia",
      heroH1: "Glaciar Martial",
      heroSubtitle: "Trekking no Fim do Mundo",
      heroMobileSubtitle: "Versão Mobile!",
      heroBtnReserva: "Reserve Aqui!",
  
      sectionTitle: "A Maravilha do Martial",
      sectionPar1: "Começamos a trilha com uma subida que acompanha a antiga pista de esqui do Martial, avançando sobre a parte mais alta da floresta fueguina. A trilha segue o riacho formado pelo degelo do glaciar. Após ultrapassar o limite da vegetação, o percurso continua sobre rochas soltas e gelo.",
      sectionPar2: "A trilha continua acompanhando o riacho...",
      sectionMapTitle: "Localização no Google Earth",
      sectionMapCaption: "Clique para imagens de satélite",
      sectionPar3: "Se o tempo permitir, o almoço será realizado no mirante, oferecendo uma vista impressionante da cidade e do Canal Beagle.",
  
      infoTitle: "Informações da Trilha",
      infoSubtitle: "Detalhes essenciais para planejar sua aventura...",
      dificTitle: "Dificuldade",
      dificValue: "Média",
      distTitle: "Distância",
      distValue: "8 km",
      duraTitle: "Duração",
      duraValue: "5 horas",
      desnTitle: "Desnível",
      desnValue: "400 m",
      diasTitle: "Dias e Horários",
      diasValue: "Pick Up 9:00",
      climaTitle: "Clima",
      climaValue: "Frio, chuva, neve e vento",
      equipTitle: "Equipamento (Não incluído)",
      equipPanel: "Itens Essenciais",
      equipPanel2: "Botas de trekking, jaqueta e calça impermeáveis são essenciais. Também é necessário levar água e mochila.",
      infoAdTitle: "Informações Adicionais",
      infoAdPanel1: "Inclui um box lunch (sanduíche, alfajor e mix de castanhas) e uma infusão quente.",
infoAdPanel2: "Inclui bastões, grampines, crampons e capacete conforme necessário.",
infoAdPanel3: "Não é cancelado por chuva, somente por condições climáticas extremas (tempestade de neve ou vento).",
infoAdPanel4: "Seguro de acidentes pessoais com cobertura total.",
infoAdPanel5: "Translado de ida e volta da acomodação.",

  
      importantNoteTitle: "IMPORTANTE",
      importantNoteParagraph: "Se o passageiro não comparecer ou se as condições climáticas não forem adequadas, o valor pago será perdido.",
      importantNoteParagraph2:"Alterações ou cancelamentos com menos de 24 horas de antecedência terão uma penalização de 100%.",
      importantNoteParagraph3: "Ajude-nos a reduzir o impacto da nossa atividade. Por favor, leve sua garrafa de água reutilizável.",
  
      footerNumber: "Número",
      footerMail: "E-mail",
      footerTour: "Tour",
      footerCopy: "Copyright © 2025 Frecuencia Sur Ushuaia"
  },
  

    /* ====== Glaciar Vinciguerra Page ====== */
    vinciguerraPage: {
      htmlTitle: "Glaciar Vinciguerra - Frecuencia Sur Ushuaia",
      heroH1: "Glaciar Vinciguerra",
      heroSubtitle: "Trekking no Fim do Mundo",
      heroMobileSubtitle: "Versão Mobile!",
      heroBtnReserva: "Reserve Aqui!",
  
      sectionTitle: "Laguna de los Témpanos e Glaciar Vinciguerra, o lugar dos seus sonhos",
      sectionPar1: "Começamos a trilha com uma subida pela antiga pista de esqui do Martial, seguindo pela parte mais alta do bosque fueguino. Após ultrapassar o limite da vegetação, caminhamos sobre a morena glaciar até chegarmos ao ponto de observação com vista para o manto glacial.",
      sectionPar2: "A última etapa da subida é sobre terreno montanhoso com uma inclinação desafiadora, levando à Laguna de los Témpanos. Se o clima e as condições do grupo permitirem, caminharemos ao redor da lagoa e nos aproximaremos do Glaciar Vinciguerra. Dependendo da época do ano e das condições, podemos explorar suas cavernas de gelo e conhecer suas formações.",
      sectionMapTitle: "Localização no Google Earth",
      sectionMapCaption: "Clique para imagens de satélite",
  
      infoTitle: "Informações da Trilha",
      infoSubtitle: "Detalhes essenciais para planejar sua aventura...",
      dificTitle: "Dificuldade",
      dificValue: "Média/Alta",
      distTitle: "Distância",
      distValue: "12 km",
      duraTitle: "Duração",
      duraValue: "8 horas",
      desnTitle: "Desnível",
      desnValue: "600 m",
      diasTitle: "Dias e Horários",
      diasValue: "Pick Up 09:00",
      climaTitle: "Clima",
      climaValue: "Frio, chuva, neve, vento",
      equipTitle: "Equipamento (Não incluído)",
      equipPanel: "Itens Essenciais",
      equipPanel2: "Botas de trekking, jaqueta e calça impermeáveis são essenciais. Também é necessário levar água e mochila.",
      infoAdTitle: "Informações Adicionais",
      infoAdPanel1: "Inclui um box lunch (sanduíche, alfajor e mix de castanhas) e uma infusão quente.",
infoAdPanel2: "Inclui bastões, grampines, crampons e capacete conforme necessário.",
infoAdPanel3: "Não é cancelado por chuva, somente por condições climáticas extremas (tempestade de neve ou vento).",
infoAdPanel4: "Seguro de acidentes pessoais com cobertura total.",
infoAdPanel5: "Translado de ida e volta da acomodação.",

  
      importantNoteTitle: "IMPORTANTE",
      importantNoteParagraph: "Se o passageiro não comparecer ou se as condições climáticas não forem adequadas, o valor pago será perdido.",
            importantNoteParagraph2:"Alterações ou cancelamentos com menos de 24 horas de antecedência terão uma penalização de 100%.",
            importantNoteParagraph3: "Ajude-nos a reduzir o impacto da nossa atividade. Por favor, leve sua garrafa de água reutilizável.",
  
      summerTab: "Verão",
      winterTab: "Inverno",
  
      footerNumber: "Número",
      footerMail: "E-mail",
      footerTour: "Tour",
      footerCopy: "Copyright © 2025 Frecuencia Sur Ushuaia",
      backToTop: "Voltar ao Início"
  },
      }
      },
    };
// 2) Inicializamos i18next con el idioma guardado
i18next.init({
  lng: savedLanguage,  // <--- Importante: arrancar con 'savedLanguage'
  debug: false,
  resources
}, (err, t) => {
  if (err) console.error(err);
  updateContent();
});

// Función para aplicar traducciones en el DOM
function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const translationKey = el.getAttribute('data-i18n');
    el.textContent = i18next.t(translationKey);
  });
}

/********************************************
 * Manejo de botones de idioma
 ********************************************/
const langMainBtn = document.getElementById('langMainBtn');
const dropdownContent = document.getElementById('dropdownContent');
const langButtons = document.querySelectorAll('.lang-btn');

// Al hacer clic en un botón de idioma:
langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const newLang = btn.dataset.lang;
    
    // Cambiamos el idioma en i18next
    i18next.changeLanguage(newLang, () => {
      updateContent();
    });
    // Guardamos el idioma en localStorage
    localStorage.setItem('selectedLanguage', newLang);

    // Cerrar el dropdown
    dropdownContent.classList.remove('show');
  });
});

// Abrir/cerrar dropdown del idioma
langMainBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdownContent.classList.toggle('show');
});
document.addEventListener('click', (e) => {
  if (!dropdownContent.contains(e.target) && e.target !== langMainBtn) {
    dropdownContent.classList.remove('show');
  }
});
document.addEventListener('DOMContentLoaded', function() {
  // --- Manejo del Banner de Cookies ---
  const cookieBanner = document.getElementById('cookieConsentBanner');
  const acceptBtn = document.getElementById('acceptCookies');

  // Mostrar el banner si aún no se aceptaron las cookies
  if (!localStorage.getItem('cookiesAccepted')) {
    cookieBanner.style.display = 'block';
  } else {
    cookieBanner.style.display = 'none';
  }

  // Al hacer clic en "Aceptar", guarda la preferencia y oculta el banner
  acceptBtn.addEventListener('click', function() {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.style.display = 'none';
  });

  // --- Prevención del Overscroll en Móviles ---
  let touchStartY = 0;
  window.addEventListener('touchstart', function(e) {
    touchStartY = e.touches[0].clientY;
  }, { passive: false });

  window.addEventListener('touchmove', function(e) {
    let touchCurrentY = e.touches[0].clientY;
    let touchDiff = touchCurrentY - touchStartY;
    // Si estamos en el tope de la página y el usuario desliza hacia abajo, prevenir el scroll
    if (window.scrollY <= 0 && touchDiff > 0) {
      e.preventDefault();
    }
  }, { passive: false });
});