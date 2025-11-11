let activeProduct = '';

    function showReviews(id) {
      document.querySelectorAll('.review-container').forEach(el => el.style.display = 'none');
      document.getElementById(id).style.display = 'grid';
    }

    function openPopup(productId) {
      activeProduct = productId;
      document.getElementById('popup').style.display = 'flex';
    }

    function closePopup() {
      document.getElementById('popup').style.display = 'none';
      document.getElementById('name').value = '';
      document.getElementById('review').value = '';
    }

    function addReview() {
      const name = document.getElementById('name').value;
      const review = document.getElementById('review').value;

      if (name && review) {
        const container = document.getElementById(activeProduct);
        const card = document.createElement('div');
        card.className = 'review-card';
        card.innerHTML = `<p class="review-text">“${review}”</p><h4 class="review-name">— ${name}</h4>`;
        container.insertBefore(card, container.querySelector('.add-btn'));
        closePopup();
      } else {
        alert('Isi nama dan review dulu ya 💕');
      }
    }
    
    
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
    