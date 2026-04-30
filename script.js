document.addEventListener("DOMContentLoaded", function() {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const siblings = Array.from(target.parentElement.children).filter(el =>
          el.classList.contains('to-animate')
        );
        const order = siblings.indexOf(target);
        const delay = order >= 0 ? order * 150 : 0;

        setTimeout(() => {
          target.classList.add("visible");
          target.classList.remove("fade");
          target.classList.add("animated", "fadeInUp");
        }, delay);

        observer.unobserve(target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  });

  document.querySelectorAll('.to-animate').forEach(el => observer.observe(el));
});

function openCertModal(img) {
  const modal = document.getElementById('certModal');
  const modalImg = document.getElementById('certModalImg');
  modal.classList.add('active');
  modalImg.src = img.src;
  modalImg.alt = img.alt;
  document.body.style.overflow = 'hidden';
}

function closeCertModal() {
  document.getElementById('certModal').classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeCertModal();
});

document.addEventListener('contextmenu', (e) => {
  if (e.target.tagName === 'IMG') e.preventDefault();
});

console.log("What's up developer? Hire me!");