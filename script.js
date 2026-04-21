document.addEventListener("DOMContentLoaded", function() {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                entry.target.classList.remove("fade");
                entry.target.classList.add("animated", "fadeInUp");
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.9
    });

    document.querySelectorAll('.to-animate').forEach(el => observer.observe(el));
});

function openCertModal(img) {
  const modal = document.getElementById('certModal');
  const modalImg = document.getElementById('certModalImg');
  modal.classList.add('active');
  modalImg.src = img.src;
  modalImg.alt = img.alt;
  document.body.style.overflow = 'hidden'; // prevent background scroll
}

function closeCertModal() {
  document.getElementById('certModal').classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeCertModal();
});

console.log("What's up developer? Hire me!");