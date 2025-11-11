
    // efek gelembung laut
    const sea = document.getElementById('sea');
    for (let i = 0; i < 20; i++) {
      const b = document.createElement('div');
      b.classList.add('bubble');
      b.style.left = Math.random() * 100 + '%';
      b.style.width = b.style.height = Math.random() * 12 + 8 + 'px';
      b.style.animationDuration = Math.random() * 4 + 4 + 's';
      b.style.animationDelay = Math.random() * 3 + 's';
      sea.appendChild(b);
    }

    // animasi teks muncul saat discroll
    const cards = document.querySelectorAll('.card');
    window.addEventListener('scroll', () => {
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          card.classList.add('visible');
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
