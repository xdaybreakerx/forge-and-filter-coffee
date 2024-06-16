document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');

  // Apply the saved theme from local storage on page load
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeToggle.checked = savedTheme === 'coffee';

  // Listen for changes in theme selection
  themeToggle.addEventListener('change', function () {
    if (this.checked) {
      document.documentElement.setAttribute('data-theme', 'coffee');
      localStorage.setItem('theme', 'coffee'); // Save theme to local storage
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light'); // Save theme to local storage
    }

    
  });
});
