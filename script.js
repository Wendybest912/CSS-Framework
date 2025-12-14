
// ===========================
// Smooth scroll
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {

        // Prevent the default scroll
        e.preventDefault();

        // Get the target element based on the link href
        const target = document.querySelector(this.getAttribute('href'));

        // Scroll smoothly to the target section if it exists
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth' 
            });
        }
    });
});

// ===========================
// Portfolio sort
// ===========================
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Remove the active class from all filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add the active class to the clicked button
        this.classList.add('active');
        
        // filter value
        const filterValue = this.getAttribute('data-filter');
        
        // get all items in the portfolio
        const portfolioItems = document.querySelectorAll('.portfolio-col');
        
        // items sort
        portfolioItems.forEach(item => {
            if (filterValue === 'all') {
                // display items
                item.classList.remove('hide');
            } else {
                // display desired items 
                if (item.getAttribute('data-category') === filterValue) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            }
        });
    });
});


// ===========================
// Contact form validation
// ===========================
(function() {
    'use strict';

    // Get the contact form element
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(event) {

            // Prevent form submission
            event.preventDefault();
            event.stopPropagation();

            // Custom validation for the phone number
            const telInput = document.getElementById('phone');
            const telRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
            
            if (telInput && !telRegex.test(telInput.value)) {
                telInput.setCustomValidity('Please enter a valid French phone number.');
            } else if (telInput) {
                telInput.setCustomValidity('');
            }

            // Check the overall form validity
            if (!form.checkValidity()) {
                form.classList.add('was-validated');
            } else {
                // Form is valid
                form.classList.add('was-validated');
                
                // Create and display a success message
                const successMessage = document.createElement('div');
                successMessage.className = 'alert alert-success mt-3';
                successMessage.innerHTML = '<strong>Thank you!</strong> Your message has been sent successfully. I will get back to you soon.';
                
                form.parentNode.insertBefore(successMessage, form.nextSibling);
                
                // Reset the form
                form.reset();
                form.classList.remove('was-validated');
                
                // Remove the success message after 5 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }
        });

        // Real-time validation
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {

            input.addEventListener('blur', function() {
                if (this.checkValidity()) {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                } else {
                    this.classList.remove('is-valid');
                    this.classList.add('is-invalid');
                }
            });

            input.addEventListener('input', function() {
                if (form.classList.contains('was-validated')) {
                    if (this.checkValidity()) {
                        this.classList.remove('is-invalid');
                        this.classList.add('is-valid');
                    } else {
                        this.classList.remove('is-valid');
                        this.classList.add('is-invalid');
                    }
                }
            });
        });
    }
})();