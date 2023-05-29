if (screen.width < 1000) {
  /* Set the width of the side navigation to 250px */
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
}
if (screen.width > 1000) {
  function hovering(elem) {
    elem.style.paddingTop = "0";
    elem.style.paddingBottom = "0.1em";
    elem.style.transition = "0.6s";
  }
  function nothovering(elem) {
    elem.style.padding = "1em";
    elem.style.transition = "0.6s";
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

(function () { // function expression closure to contain variables
  var i = 0;
  var pics = ["/webProject/images/img2.webp", "/webProject/images/img3.jpg", "/webProject/images/img4.jpg"];
  var el = document.getElementById("pic"); // el doesn't change
  function toggle() {
    el.src = pics[i]; // set the image
    i = (i + 1) % pics.length; // update the counter
  }
  setInterval(toggle, 2000);
})();




