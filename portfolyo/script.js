// Projeleri aç/kapat
function toggleProjects() {
    var projeler = document.getElementById('project-list');
    projeler.style.display = projeler.style.display === 'none' ? 'block' : 'none';
}

// Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Form doğrulama
function validateForm() {
    var email = document.getElementById('email').value;
    var errorMessage = document.getElementById('error-message');
    
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        errorMessage.innerText = "Geçerli bir e-posta girin!";
        return false;
    }
    return true;
}
