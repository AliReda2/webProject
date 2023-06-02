if (screen.width < 1000) {
  /* Set the width of the side navigation to 250px */
  function openNav() {
    document.getElementById("mySidenav").style.width = "40vw";
  }

  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
}
if (screen.width > 1000) {
  (function () {
    var i = 0;
    var pics = ["/webProject/images/img2.webp", "/webProject/images/img3.jpg", "/webProject/images/img4.jpg"];
    var el = document.getElementById("pic");
    let opacity = 0.4;
    function fadeIn() {
      if (opacity >= 1) {
        clearInterval(fadeIn);
      }
      el.style.opacity = opacity;
      opacity += 0.01;
    } setInterval(fadeIn, 20);
    function toggle() {
      el.src = pics[i];
      i = (i + 1) % pics.length;
      opacity=0.4;
      fadeIn();
    }
    setInterval(toggle, 2000);
  })();

  function hovering(elem) {
    elem.style.paddingTop = "0";
    elem.style.paddingBottom = "0.1em";
    elem.style.transition = "0.6s";
    var span = elem.nextSibling;
    span.style.transition = "all 500ms"
    span.style.opacity = "1"

    span.style.bottom = "50px"
    console.log(span)
  }
  function nothovering(elem) {
    elem.style.padding = "1em";
    elem.style.transition = "0.6s";

    var span = elem.nextSibling;
    span.style.transition = "all 1000ms"

    span.style.bottom = "0"
    console.log(span)

  }
}

function search() {
  let city = document.getElementById("city").value;
  let month = document.getElementById("month").value;;
  if (city == "tokyo") {
    location.href = "/webProject/tokyo.html";
  } else if (city == "soel") {
    location.href = "/webProject/soel.html";
  } else if (city == "paris") {
    location.href = "/webProject/paris.html";
  } else if (city == "london") {
    location.href = "/webProject/london.html";
  }
  else {
    alert("not available");
  }

}








let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}