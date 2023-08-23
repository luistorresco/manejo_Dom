
var scrollIndicator = document.querySelector('.scroll-indicator');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        scrollIndicator.classList.add('scrolled');
    } else {
        scrollIndicator.classList.remove('scrolled');
    }
});

var myButton = document.getElementById("myBtn");

window.addEventListener('scroll', () => {
  
    if (window.scrollY > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
});

myButton.addEventListener('click', () => {

    window.scroll({top: 0, behavior: "smooth" });
});






