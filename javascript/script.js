document.addEventListener('DOMContentLoaded', function() {
    const changeThemeBtn = document.getElementById("change-theme");
    
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    changeThemeBtn.checked = isDarkMode;
    

    document.body.classList.toggle("dark-mode", changeThemeBtn.checked);
  
    changeThemeBtn.addEventListener("change", function() {
        document.body.classList.toggle("dark-mode", this.checked);
        localStorage.setItem('darkMode', this.checked);
    });
  });