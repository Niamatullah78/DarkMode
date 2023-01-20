const toggleDarkModeButton = document.getElementById("toggle-dark-mode");
const content = document.getElementById("content");

let isDarkMode = false;

toggleDarkModeButton.addEventListener("click", () => {
  if (isDarkMode) {
    content.style.setProperty("--light-mode-bg-color", "#fff");
    content.style.setProperty("--light-mode-text-color", "#000");
  } else {
    content.style.setProperty("--dark-mode-bg-color", "#333");
    content.style.setProperty("--dark-mode-text-color", "#fff");
  }

  isDarkMode = !isDarkMode;
});
