document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('py-2');
            navbar.classList.remove('py-4');
        } else {
            navbar.classList.add('py-4');
            navbar.classList.remove('py-2');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Lógica del Formulario y Modal
    const orderForm = document.getElementById('orderForm');
    const successModal = document.getElementById('successModal');
    const modalContent = document.getElementById('modalContent');
    const closeModalBtn = document.getElementById('closeModalBtn');

    const openModal = () => {
        successModal.classList.add('modal-active');
        modalContent.classList.add('modal-content-active');
    };

    const closeModal = () => {
        successModal.classList.remove('modal-active');
        modalContent.classList.remove('modal-content-active');
    };

    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        openModal();
        orderForm.reset();
    });

    closeModalBtn.addEventListener('click', closeModal);

    // Cerrar modal al hacer clic fuera del contenido
    successModal.addEventListener('click', (e) => {
        if (e.target === successModal) {
            closeModal();
        }
    });
});