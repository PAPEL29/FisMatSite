function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    
    // Ocultar todo el contenido
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Quitar clase "active" de los botones
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostrar pestaña actual y añadir clase active
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
const counters = document.querySelectorAll(".stat-card h2");

counters.forEach(counter => {
    const update = () => {
        const target = parseInt(counter.innerText);
        let current = 0;

        const step = target / 50;

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