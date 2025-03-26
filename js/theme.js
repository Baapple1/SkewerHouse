function changeTheme() {
  var theme = document.getElementById("theme"); // Store location of link tag
  var themeName = theme.getAttribute("href"); // Point to the link tag, pull the attribute href, store contents (light.css / dark.css)

  // If stored href is light.css:
  if (themeName == "css/light.css") {
    theme.setAttribute("href", "css/dark.css"); // Change href to dark.css
    localStorage.setItem("theme", "dark"); // Push change to memory
  }
  // If stored href is anything else:
  else {
    theme.setAttribute("href", "css/light.css"); // Change href to light.css
    localStorage.setItem("theme", "light"); // Push changes to memory
  }
}

// Store theme to memory:
var savedTheme = localStorage.getItem("theme"); // Pull theme from Local Storge
// If saved theme is dark:
if (savedTheme == "dark") {
  document.getElementById("theme").setAttribute("href", "css/dark.css"); // Set href to dark.css
}
