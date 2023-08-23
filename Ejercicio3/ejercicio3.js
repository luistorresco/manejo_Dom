document.addEventListener("DOMContentLoaded", function () {
    var sidebarbtn = document.getElementById("sidebarbtn");
    var sidebar = document.getElementById("mySidebar");

    sidebarbtn.addEventListener("click", function () {
        if (sidebar.style.left === "0px") {
            sidebar.style.left = "-200px";
            sidebarbtn.innerHTML = "☰ Open Sidebar";
            document.body.classList.remove("sidebar-active");
        } else {
            sidebar.style.left = "0";
            sidebarbtn.innerHTML = "× Close Sidebar";
            document.body.classList.add("sidebar-active");
        }
    });
});
