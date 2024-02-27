document.addEventListener("DOMContentLoaded", function() {
  const toggleSwitch = document.getElementById('theme-toggle');
  toggleSwitch.addEventListener('change', function() {
      const theme = this.checked ? 'dark' : 'light';
      document.body.setAttribute('data-theme', theme);
  });
});

