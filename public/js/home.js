const numbers = document.querySelectorAll('.number');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const endValue = parseInt(target.innerText.replace(',', ''));
            let startValue = 0;
            let duration = 3500; // 3.5 segundos
            let stepTime = Math.abs(Math.floor(duration / endValue));
            
            let timer = setInterval(() => {
                startValue += Math.ceil(endValue / 200);
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