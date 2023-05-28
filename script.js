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
function search() {
  alert("found");
  let city = document.getElementById("city");
  let month = document.getElementById("month");
  var Array;
  for (let index = 0; index < document.getElementsByClassName("options").length; index++) {
    Array[index] = document.getElementsByClassName("options")[index]
    if (city == Array[index]) {
      // found name matching search, display it
      alert("found");

    } else {
      // no match, don't display name
      alert("not found");
    }

  }
}
function validateForm() {
  var name = document.getElementById('name').value;
  if (name == "") {
    document.querySelector('.status').innerHTML = "Name cannot be empty";
    return false;
  }
  var email = document.getElementById('email').value;
  if (email == "") {
    document.querySelector('.status').innerHTML = "Email cannot be empty";
    return false;
  } else {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      document.querySelector('.status').innerHTML = "Email format invalid";
      return false;
    }
  }
  var subject = document.getElementById('subject').value;
  if (subject == "") {
    document.querySelector('.status').innerHTML = "Subject cannot be empty";
    return false;
  }
  var message = document.getElementById('message').value;
  if (message == "") {
    document.querySelector('.status').innerHTML = "Message cannot be empty";
    return false;
  }
  document.querySelector('.status').innerHTML = "Sending...";
}
function hovering(elem) {
  // let img=document.getElementById("hover");
  elem.style.paddingTop = "0";
  elem.style.paddingBottom = "0.1em";
  elem.style.transition = "0.6s";
}
function nothovering(elem) {
  // let img=document.getElementById("hover");
  elem.style.padding = "1em";
  elem.style.transition = "0.6s";
}
function navbar(elem) {
console.log(elem);
}
(function () { // function expression closure to contain variables
  var i = 0;
  var pics = ["/webProject/images/popular2.jpg", "/webProject/images/popular3.jpg", "/webProject/images/img1.jpg"];
  var el = document.getElementById("pic"); // el doesn't change
  function toggle() {
    el.src = pics[i]; // set the image
    i = (i + 1) % pics.length; // update the counter
  }
  setInterval(toggle, 2000);
})();
