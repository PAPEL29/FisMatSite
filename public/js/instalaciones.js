function toggleInfo(button) {
    // Buscamos el contenedor de información extra dentro de la misma tarjeta
    const extraInfo = button.previousElementSibling;
    
    if (extraInfo.style.display === "none") {
        extraInfo.style.display = "block";
        button.textContent = "Ver menos";
        
        // Opcional: Añadir una pequeña animación de entrada
        extraInfo.style.opacity = "0";
        setTimeout(() => {
            extraInfo.style.opacity = "1";
            extraInfo.style.transition = "opacity 0.4s ease";
        }, 10);
        
    } else {
        extraInfo.style.display = "none";
        button.textContent = "Ver más";
    }
}
//incremento de stats
const counters = document.querySelectorAll(".stat-card h2");

counters.forEach(counter => {
    const update = () => {
        const target = parseInt(counter.innerText);
        let current = 0;

        const step = target / 150;

        const interval = setInterval(() => {
            current += step;
            if (current >= target) {
                counter.innerText = target + (counter.innerText.includes("+") ? "+" : "");
                clearInterval(interval);
            } else {
                counter.innerText = Math.floor(current);
            }
        }, 20);
    };

    update();
});
//iconos
lucide.createIcons();
//ocultar info extra
function toggleCard(button) {
    // Buscamos el contenedor que está justo antes del botón
    const collapsible = button.previousElementSibling;
    
    // Alternamos la clase CSS
    collapsible.classList.toggle('is-open');
    
    // Cambiamos el texto del botón según el estado
    if (collapsible.classList.contains('is-open')) {
        button.textContent = "Leer menos";
        // Opcional: Rotar el icono si lo añadieras al botón
    } else {
        button.textContent = "Leer más";
    }
}