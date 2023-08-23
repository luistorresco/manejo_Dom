document.addEventListener("DOMContentLoaded", function () {
    var mobileMenuButton = document.getElementById("mobileMenu");
    var navbar = document.getElementById("myNavbar");
  
    mobileMenuButton.addEventListener("click", function () {
      navbar.classList.toggle("responsive");
    });
  });
  