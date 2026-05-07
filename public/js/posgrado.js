//--------

document.querySelectorAll(".lab-card").forEach(card => {
    card.addEventListener("click", () => {
        alert("Aquí puedes abrir detalles del laboratorio");
    });
});
//----------------------
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    
    const countUp = (entry) => {
        const target = +entry.getAttribute("data-target"); // El número final
        const suffix = entry.getAttribute("data-suffix") || "+"; // % o +
        const duration = 2000; // Duración en milisegundos (2 segundos)
        const frameRate = 1000 / 60; // 60 cuadros por segundo
        const totalFrames = Math.round(duration / frameRate);
        let currentFrame = 0;

        const animate = () => {
            currentFrame++;
            const progress = currentFrame / totalFrames;
            // Usamos una función de "easeOut" para que desacelere al final
            const easeOutValue = 1 - Math.pow(1 - progress, 3);
            const currentNumber = Math.round(target * easeOutValue);

            entry.innerText = currentNumber.toLocaleString() + suffix;

            if (currentFrame < totalFrames) {
                requestAnimationFrame(animate);
            } else {
                entry.innerText = target.toLocaleString() + suffix;
            }
        };

        requestAnimationFrame(animate);
    };

    // Observer para disparar la animación al hacer scroll
    const observerOptions = {
        threshold: 0.7, // Se dispara cuando el 70% del elemento es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                countUp(entry.target);
                observer.unobserve(entry.target); // Para que solo ocurra una vez
            }
        });
    }, observerOptions);

    counters.forEach((counter) => observer.observe(counter));
});