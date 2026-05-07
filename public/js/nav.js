//navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 5%';
        navbar.style.background = 'rgba(10, 25, 47, 0.71)';
    } else {
        navbar.style.padding = '10px 5%';
        navbar.style.background = '#002147';
        
    }
});