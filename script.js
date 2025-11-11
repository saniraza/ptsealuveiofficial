document.querySelectorAll('.container').forEach(card => {
  let stage = 0;
  card.addEventListener('click', e => {
    e.stopPropagation();
    if (stage === 0) {
      card.classList.add('active', 'show-gif');
      stage = 1;
    } else if (stage === 1) {
      card.classList.remove('show-gif');
      stage = 2;
    } else {
      card.classList.remove('active');
      stage = 0;
    }
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
