// Hubungi Kami
const card = document.getElementById('contactCard');
const form = document.getElementById('contactForm');

card.addEventListener('click', () => {
  card.classList.add('active');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Pesan berhasil dikirim!");
  form.reset();
});

// Informasi Kontak
const scrollItems = document.querySelectorAll('.scroll-item');
scrollItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('open');
  });
});


const navBar = document.getElementById('navBar');
    let hasScrolled = false;

    function toggleNav() {
      navBar.classList.toggle('show');
    }

    function setActive(el, link) {
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
      el.classList.add('active');
      setTimeout(() => window.location.href = link, 400);
    }

    // muncul saat scroll pertama kali
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30 && !hasScrolled) {
        navBar.classList.add('show');
        hasScrolled = true;
      }
    });
