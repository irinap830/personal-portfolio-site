function isClicked(){
    if (document.getElementById('App')) {
      addEventListener('click', () => {
        window.location.href = 'adelin.html';
      });
    }
    else{
        addEventListener('click',()=>{
            window.location.href = 'irina.html';
        })
    }
}

const toggleBtn = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia(
  '(prefers-color-scheme: dark)',
).matches;
const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

function applyTheme(theme) {
  rootElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  toggleBtn.textContent = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
}

applyTheme(initialTheme);

toggleBtn.addEventListener('click', () => {
  const currentTheme = rootElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
});
