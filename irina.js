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
