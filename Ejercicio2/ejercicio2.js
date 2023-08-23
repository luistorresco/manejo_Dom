document.addEventListener("DOMContentLoaded", function () {
    var dropdownButton = document.getElementById("dropdownButton");
    var dropdownContent = document.getElementById("myDropdown");

    dropdownButton.addEventListener("click", function () {
        dropdownContent.classList.toggle("show");
    });

    window.addEventListener("click", function (event) {
        if (!event.target.matches('.dropbtn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});
