


// header toggle script
const toggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// counter js
window.onload = function () {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
      let count = 0;
      const target = +counter.getAttribute('data-target');
      const step = Math.ceil(target / 100);

      const update = setInterval(() => {
        count += step;
        if (count >= target) {
          count = target;
          clearInterval(update);
        }
        counter.innerText = count;
      }, 20);
    });
  };

//   lightbox script


  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
    });
  });

  function closeLightbox() {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
  }

