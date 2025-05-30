document.addEventListener("DOMContentLoaded", function () {
  // Kodas, skirtas aktyviai navigacijos nuorodai pažymėti
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Kodas, skirtas kontaktų formos modalui valdyti
  const modal = document.getElementById('contactFormModal');
  const btn = document.getElementById('openFormBtn');
  const span = document.getElementsByClassName('close-button')[0];

  // Atidaryti modalą paspaudus mygtuką
  if (btn) { // Patikriname, ar mygtukas egzistuoja (aktualu tik contact.html puslapyje)
    btn.onclick = function() {
      modal.style.display = 'block';
    }
  }

  // Uždaryti modalą paspaudus 'x' mygtuką
  if (span) { // Patikriname, ar uždarymo mygtukas egzistuoja
    span.onclick = function() {
      modal.style.display = 'none';
    }
  }

  // Uždaryti modalą paspaudus bet kur už modalo turinio ribų
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
});