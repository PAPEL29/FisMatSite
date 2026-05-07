//ocultar y mostra contenido de tarjetas

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
//cards
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {

        const icon = card.querySelector("span");

        card.classList.toggle("active");

        icon.textContent = card.classList.contains("active") ? "−" : "+";
    });
});