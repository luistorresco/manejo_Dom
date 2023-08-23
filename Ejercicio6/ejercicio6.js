document.addEventListener("DOMContentLoaded", function () {
    var selectElement = document.querySelector(".nieve");
    var resultadoElement = document.querySelector(".resultado");

    selectElement.addEventListener("change", function () {
        var saborElegido = this.value;

        if (saborElegido !== "") {
            resultadoElement.textContent = "Ha elegido el sabor: " + saborElegido;
        } else {
            resultadoElement.textContent = "";
        }
    });
});
