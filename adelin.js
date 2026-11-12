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

const copyButton1 = document.getElementById('copy-email-ade');
const status1 = document.getElementById('copy-status1');

if (copyButton1) {
  copyButton1.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(copyButton1.dataset.email);
      status1.textContent = 'Email copied';
    } catch (error) {
      status1.textContent =
        'Could not copy. Select the address and copy it manually.';
    }
  });
}
const copyButton2=document.getElementById('copy-email-ade');
const status2=document.getElementById('copy-status2');
if (copyButton2) {
  copyButton2.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(copyButton2.dataset.text);
      status2.textContent = 'Password copied';
    } catch (error) {
      status2.textContent =
        'Could not copy. Select the password and copy it manually.';
    }
  });
}
