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
