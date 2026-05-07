//mini header
document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {

            const target = this.getAttribute("data-tab");

            // quitar clases activas
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            // activar actual
            this.classList.add("active");

            const content = document.getElementById(target);
            if (content) {
                content.classList.add("active");
            }

        });
    });

});
//iconos
lucide.createIcons();