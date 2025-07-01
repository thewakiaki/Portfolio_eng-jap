const themeToggle = document.getElementById('theme-toggle')
const savedTheme =  localStorage.getItem("theme");
const body = document.body;


const prefersDark = window.matchMedia( `(prefers-color-scheme: dark)`).matches;

savedTheme == 'dark-mode' || !savedTheme && prefersDark ? body.classList.add('dark-mode') : body.classList.add('light-mode');

if (savedTheme === 'dark-mode') 
{
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    themeToggle.checked = true;
} 
else 
{
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    themeToggle.checked = false;
}

themeToggle.addEventListener('change', function() {
    
    if(this.checked) 
    {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode')
    }
    else
    {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode')
    }
});