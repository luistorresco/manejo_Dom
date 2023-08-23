
window.addEventListener("load", function () {
    var loadingOverlay = document.getElementById("loadingOverlay");
    loadingOverlay.style.display = "block";

    setTimeout(function(){
        loadingOverlay.style.display = "none";
    },4000 );
});


