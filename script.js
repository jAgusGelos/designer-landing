// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {

    // ========== Menu Toggle para Mobile ==========
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle del menú hamburguesa
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // ========== Scroll Suave ==========
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========== Botón Volver Arriba ==========
    const scrollTopBtn = document.getElementById('scrollTop');

    // Mostrar/ocultar botón según scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }

        // Navbar con sombra al hacer scroll
        const navbar = document.getElementById('navbar');
        if (window.pageYOffset > 50) {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        }
    });

    // Funcionalidad del botón volver arriba
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ========== Formulario de Contacto ==========
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Obtener valores del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validación básica
        if (!name || !email || !message) {
            showFeedback('Por favor completá todos los campos', 'error');
            return;
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFeedback('Por favor ingresá un email válido', 'error');
            return;
        }

        // Simular envío de formulario
        // En producción, aquí se enviaría a un servidor o servicio de email
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;

        // Simular delay de envío
        setTimeout(function() {
            // Mensaje de éxito
            showFeedback('¡Mensaje enviado con éxito! Te responderé pronto.', 'success');

            // Resetear formulario
            contactForm.reset();

            // Restaurar botón
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;

            // En producción, aquí podrías enviar el formulario con:
            // - FormSubmit (https://formsubmit.co/)
            // - EmailJS (https://www.emailjs.com/)
            // - Tu propio backend
            // Ejemplo con mailto (alternativa simple):
            // window.location.href = `mailto:hola@diseñadora.com?subject=Mensaje de ${name}&body=${message}%0D%0A%0D%0AEmail: ${email}`;
        }, 1500);
    });

    function showFeedback(message, type) {
        formFeedback.textContent = message;
        formFeedback.className = 'form-feedback ' + type;

        // Ocultar mensaje después de 5 segundos
        setTimeout(function() {
            formFeedback.className = 'form-feedback';
        }, 5000);
    }

    // ========== Animación de Scroll para Elementos ==========
    // Observador de intersección para animaciones al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar las tarjetas de proyectos
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // ========== Destacar Link Activo en Navbar ==========
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        const navbarHeight = document.getElementById('navbar').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 100;
            const sectionHeight = section.offsetHeight;

            if (window.pageYOffset >= sectionTop &&
                window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // ========== Cerrar menú mobile al hacer click fuera ==========
    document.addEventListener('click', function(e) {
        const isClickInsideMenu = navMenu.contains(e.target);
        const isClickOnToggle = menuToggle.contains(e.target);

        if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // ========== Log de desarrollo ==========
    console.log('Portfolio cargado correctamente ✓');
    console.log('Para integrar un servicio de email, considerá:');
    console.log('- FormSubmit: https://formsubmit.co/');
    console.log('- EmailJS: https://www.emailjs.com/');
    console.log('- Netlify Forms (si usás Netlify)');
});
