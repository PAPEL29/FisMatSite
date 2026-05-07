//primera seccion
document.querySelectorAll(".acc-title").forEach(title => {
    title.addEventListener("click", () => {

        const item = title.parentElement;

        document.querySelectorAll(".acc-item").forEach(i => {
            if (i !== item) i.classList.remove("active");
        });

        item.classList.toggle("active");

    });
});