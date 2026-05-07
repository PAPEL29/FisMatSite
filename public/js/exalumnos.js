// Inicializar al cargar
if (window.innerWidth < 768) {
    document.body.classList.add('mobile-layout');
}

//------ egresados graficas---------
// PIE CHART
new Chart(document.getElementById("pieChart"), {
    type: "pie",
    data: {
        labels: ["Tecnología", "Finanzas", "Academia", "Consultoría"],
        datasets: [{
            data: [35, 25, 30, 10]
        }]
    }
});

// BAR CHART
new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
        labels: ["Tecnología", "Finanzas", "Academia", "Consultoría"],
        datasets: [{
            data: [150, 130, 90, 120]
        }]
    }
});
const observerOptions = { threshold: 0.2 };

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.story-card, .thesis-card').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 3.0s ease-out";
    revealObserver.observe(el);
});


//crecimiento de las cards
const counters = document.querySelectorAll(".map-stats h3");

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


const counters1 = document.querySelectorAll(".eg-card h3");

counters1.forEach(counter => {
    const update = () => {
        const target = parseInt(counter.innerText);
        let current = 0;

        const step = target / 125;

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

