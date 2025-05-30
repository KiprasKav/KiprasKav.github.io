document.addEventListener("DOMContentLoaded", function () {

  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  
  const modal = document.getElementById('contactFormModal');
  const btn = document.getElementById('openFormBtn');
  const span = document.getElementsByClassName('close-button')[0];

  
  if (btn) { 
    btn.onclick = function() {
      modal.style.display = 'block';
    }
  }

  
  if (span) { 
    span.onclick = function() {
      modal.style.display = 'none';
    }
  }

  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
});