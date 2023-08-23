document.addEventListener("DOMContentLoaded", function () {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");

    checkBox.addEventListener("change", function () {
        text.style.display = this.checked ? "block" : "none";
    });
});
