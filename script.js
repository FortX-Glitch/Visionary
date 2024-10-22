document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    alert('Merci pour votre message ! Nous vous répondrons bientôt.');
    this.reset(); // Réinitialise le formulaire
});
