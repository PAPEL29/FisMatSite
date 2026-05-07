const numbers = document.querySelectorAll('.card-number');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const endValue = parseInt(target.innerText.replace(',', ''));
            let startValue = 0;
            let duration = 2000; // 2 segundos
            let stepTime = Math.abs(Math.floor(duration / endValue));
            
            let timer = setInterval(() => {
                startValue += Math.ceil(endValue / 100);
                if (startValue >= endValue) {
                    target.innerText = target.innerText.includes('+') ? endValue.toLocaleString() + '+' : endValue.toLocaleString() + (target.innerText.includes('%') ? '%' : '');
                    clearInterval(timer);
                } else {
                    target.innerText = startValue.toLocaleString();
                }
            }, 20);
            observer.unobserve(target);
        }
    });
}, { threshold: 0.5 });

numbers.forEach(num => observer.observe(num));
//------------------------------
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px)";
        card.style.transition = "0.2s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});
//---------------------
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

timelineItems.forEach(item => timelineObserver.observe(item));
//-----------------------------
document.querySelectorAll(".plan-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.5)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "none";
    });
});