if (screen.width < 1000) {
  /* Set the width of the side navigation to 250px */
  function openNav() {
    document.getElementById("mySidenav").style.width = "44vw";
  }

  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  function showContent(elem) {
    var content = elem.nextElementSibling;
    var input = content.nextSibling.nextSibling;
    input.style.opacity = "1";
    input.style.transition = "all 500ms";
    content.style.opacity = "1";
    content.style.transition = "all 500ms";
  }
}
if (screen.width > 1000) {
  function showContent(elem) {
    var content = elem.nextElementSibling;
    var input = content.nextSibling.nextSibling;
    input.style.opacity = "1";
    input.style.transition = "all 500ms";
    content.style.opacity = "1";
    content.style.transition = "all 500ms";
  }

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
      opacity = 0.4;
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
    span.style.transition = "all 1000ms";
    span.style.bottom = "0";
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

function formText(elem) {
  var span = elem.nextSibling;
  span.style.transition = "all 500ms";
  elem.style.transition = "all 500ms";
  span.style.bottom = "5em";
  elem.style.backgroundColor = "white";
}
function checkNull(elem) {
  var span = elem.nextSibling;
  span.style.transition = "all 500ms";
  if (elem.value == "") {
    span.style.bottom = "3em";
    elem.style.backgroundColor = "lightgrey";
  }
  console.log(elem.value)
}
setInterval(checkNull, 10);

function openPopup() {
  let popup = document.getElementById("popup");
  document.body.style.backgroundColor = "grey";
  document.body.style.transition = "all 500ms";
  popup.style.visibility = "visible";
}
function closePopup() {
  let popup = document.getElementById("popup");
  document.body.style.backgroundColor = "white";
  document.body.style.transition = "all 500ms";
  popup.style.visibility = "hidden";
}

function goTo() {
  location.href = "https://www.google.com/maps/place/All+Day+Place+Shibuya/data=!4m10!3m9!1s0x60188ca790fe7323:0xb79cf267239df9bb!5m2!4m1!1i2!8m2!3d35.661448!4d139.703109!16s%2Fg%2F11s1bcqgzt!19sChIJI3P-kKeMGGARu_mdI2fynLc?authuser=0&hl=en&rclk=1";
}
function hideContent(elem) {
  var content = elem.nextElementSibling;
  var input = content.nextSibling.nextSibling;
  input.style.opacity = "0";
  input.style.transition = "all 500ms";
  content.style.opacity = "0";
  content.style.transition = "all 500ms";
}
