document.addEventListener("DOMContentLoaded", function () {
    var accordions = document.querySelectorAll(".accordion");

    accordions.forEach(function (accordion) {
        var accordionBtn = accordion.querySelector(".accordion-btn");
        var panel = accordion.querySelector(".panel");

        accordionBtn.addEventListener("click", function () {
            this.classList.toggle("active");
            panel.style.display = panel.style.display === "block" ? "none" : "block";
        });
    });
});
