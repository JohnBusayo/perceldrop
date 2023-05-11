var menu = document.querySelector('.navbar-menu');
const link = document.querySelectorAll('.navbar-menu a')

function toggleMenu() {
    menu.classList.toggle('active');
    
  }


//   SIGN IN MODAL
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var close = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
  menu.classList.toggle.disabled = true;
  menu.classList.remove('active');
}

close.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

  