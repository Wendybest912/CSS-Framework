// ===========================
// Smooth Scroll pour les ancres
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth' 
            });
        }
    });
});

// ===========================
// Filtrage du Portfolio
// ===========================
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Retirer la classe active de tous les boutons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Ajouter la classe active au bouton cliqué
        this.classList.add('active');
        
        // Récupérer la valeur du filtre
        const filterValue = this.getAttribute('data-filter');
        
        // Récupérer tous les éléments du portfolio
        const portfolioItems = document.querySelectorAll('.portfolio-col');
        
        // Filtrer les éléments
        portfolioItems.forEach(item => {
            if (filterValue === 'all') {
                // Afficher tous les éléments
                item.classList.remove('hide');
            } else {
                // Afficher uniquement les éléments correspondants
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
// Validation du Formulaire de Contact
// ===========================
(function() {
    'use strict';

    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            event.stopPropagation();

            // Validation personnalisée pour le téléphone
            const telInput = document.getElementById('phone');
            const telRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
            
            if (telInput && !telRegex.test(telInput.value)) {
                telInput.setCustomValidity('Veuillez entrer un numéro de téléphone valide (format français).');
            } else if (telInput) {
                telInput.setCustomValidity('');
            }

            // Vérifier la validité du formulaire
            if (!form.checkValidity()) {
                form.classList.add('was-validated');
            } else {
                // Formulaire valide
                form.classList.add('was-validated');
                
                // Message de succès
                const successMessage = document.createElement('div');
                successMessage.className = 'alert alert-success mt-3';
                successMessage.innerHTML = '<strong>Thank you!</strong> Your message has been sent successfully. I will get back to you soon.';
                
                form.parentNode.insertBefore(successMessage, form.nextSibling);
                
                // Réinitialiser le formulaire
                form.reset();
                form.classList.remove('was-validated');
                
                // Retirer le message après 5 secondes
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }
        });

        // Validation en temps réel
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