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