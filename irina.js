document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in');

  const observerOptions = {
    root: null, // Uses the browser viewport
    rootMargin: '0px 0px -50px 0px', // Triggers slightly before the bottom edge
    threshold: 0.15, // Triggers when 15% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Stop observing once the animation has triggered
      } else{
        entry.target.classList.remove('is-visible');
      }
    });
  }, observerOptions);

  fadeElements.forEach((element) => {
    observer.observe(element);
  });
});


const copyButton = document.getElementById('copy-email');
const status = document.getElementById('copy-status');

if (copyButton) {
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(copyButton.dataset.email);
      status.textContent = 'Email copied';
    } catch (error) {
      status.textContent =
        'Could not copy. Select the address and copy it manually.';
    }
  });
}
