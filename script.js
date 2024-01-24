let nav = document.getElementById("nav")

function reveal() {
    if (window.innerWidth > 678) {
        if (window.scrollY > 30) {
            nav.classList.add("header")
        } else {
            nav.classList.remove("header")
        }
    }else {
        if (window.scrollY >= 10) {
            nav.classList.add("header")
        }
        if (window.scrollY <= 5) {
            nav.classList.remove("header")
        }
    }

    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

if (location.hash != "") {
    location.href = location.hash;
}


let css = document.getElementById("loadOverlay");

css.classList.add("show")