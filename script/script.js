        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Fade in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = '0.2s';
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Form submission handler
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
            this.reset();
        });

        // Header background on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'linear-gradient(135deg, rgba(15, 15, 15, 0.98), rgba(45, 27, 46, 0.98), rgba(26, 13, 26, 0.98))';
                header.style.boxShadow = '0 4px 25px rgba(255, 23, 68, 0.4)';
            } else {
                header.style.background = 'linear-gradient(135deg, rgba(15, 15, 15, 0.95), rgba(45, 27, 46, 0.95), rgba(26, 13, 26, 0.95))';
                header.style.boxShadow = '0 4px 20px rgba(255, 23, 68, 0.3)';
            }
        });