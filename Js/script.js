// Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Menu tabs functionality
        const menuTabs = document.querySelectorAll('.menu-tab');
        const menuCategories = document.querySelectorAll('.menu-category');
        
        menuTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active and highlight classes from all tabs
                menuTabs.forEach(t => {
                    t.classList.remove('active', 'bg-red-600', 'text-white');
                    t.classList.add('bg-gray-200');
                });

                // Add active and highlight classes to clicked tab
                this.classList.add('active', 'bg-red-600', 'text-white');
                this.classList.remove('bg-gray-200');

                // Hide all menu categories
                menuCategories.forEach(cat => cat.classList.add('hidden'));

                // Show selected category
                const categoryId = this.getAttribute('data-category');
                document.getElementById(categoryId).classList.remove('hidden');
            });
        });

        // Set initial state: show only Appetizers and set first tab as active
        menuTabs.forEach((tab, idx) => {
            if(idx === 0) {
                tab.classList.add('active', 'bg-red-600', 'text-white');
                tab.classList.remove('bg-gray-200');
            } else {
                tab.classList.remove('active', 'bg-red-600', 'text-white');
                tab.classList.add('bg-gray-200');
            }
        });
        menuCategories.forEach((cat, idx) => {
            if(idx === 0) {
                cat.classList.remove('hidden');
            } else {
                cat.classList.add('hidden');
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
                
                // Scroll to section
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            });
        });

        // Form submission
        const reservationForm = document.querySelector('.reservation-form');
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const date = document.getElementById('date').value;
            
            // Show success message
            alert(`Thank you, ${name}! Your reservation for ${date} has been received. We'll contact you shortly to confirm.`);
            
            // Reset form
            reservationForm.reset();
        });

        // Set minimum date for reservation (today)
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('date').setAttribute('min', today);
