 // Create 3D floating bubbles
        function createBubble() {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            
            // Random size between 20px and 100px
            const size = Math.random() * 80 + 20;
            bubble.style.width = size + 'px';
            bubble.style.height = size + 'px';
            
            // Random horizontal position
            bubble.style.left = Math.random() * 100 + '%';
            
            // Random animation duration
            const duration = Math.random() * 10 + 10;
            bubble.style.animationDuration = duration + 's';
            
            // Random delay
            const delay = Math.random() * 5;
            bubble.style.animationDelay = delay + 's';
            
            document.getElementById('bubbleContainer').appendChild(bubble);
            
            // Remove bubble after animation
            setTimeout(() => {
                if (bubble.parentNode) {
                    bubble.parentNode.removeChild(bubble);
                }
            }, (duration + delay) * 1000);
        }

        // Create bubbles continuously
        setInterval(createBubble, 800);

        // Initial bubbles
        for (let i = 0; i < 5; i++) {
            setTimeout(createBubble, i * 200);
        }

        // Cursor trail effect
        document.addEventListener('mousemove', function(e) {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.style.left = e.clientX + 'px';
            trail.style.top = e.clientY + 'px';
            document.body.appendChild(trail);
            
            setTimeout(() => {
                document.body.removeChild(trail);
            }, 1000);
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Enhanced scroll effect for navigation
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(10, 10, 10, 0.95)';
                header.style.backdropFilter = 'blur(20px)';
            } else {
                header.style.background = 'rgba(10, 10, 10, 0.9)';
                header.style.backdropFilter = 'blur(20px)';
            }
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.project-card, .skill-item, .contact-item').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });