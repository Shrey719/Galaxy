function panicKeyListener(event) {
    const savedPanicKey = localStorage.getItem('panicKey');
    const savedPanicUrl = localStorage.getItem('panicUrl');

    console.log('Key pressed:', event.key);
    console.log('Saved Panic Key:', savedPanicKey);
    console.log('Saved Panic URL:', savedPanicUrl);

    if (event.key.toLowerCase() === savedPanicKey) {
        console.log('Panic key matched. Redirecting to:', savedPanicUrl);
        window.location.href = savedPanicUrl;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedPanicKey = localStorage.getItem('panicKey');
    const savedPanicUrl = localStorage.getItem('panicUrl');
    console.log('DOM loaded. Panic Key:', savedPanicKey, 'Panic URL:', savedPanicUrl);
    window.document.title = localStorage.getItem("cloakTitle")
    if (savedPanicKey && savedPanicUrl) {
        document.addEventListener('keydown', panicKeyListener);
        console.log('Panic key listener added.');
    } else {
        console.log('Panic key or URL not set.');
    }
});
function onSaveTheme()  {
       const selectedOption = document.querySelector("#theme-select");
    window.localStorage.setItem("theme", selectedOption.value);
    applyTheme(selectedOption.value);
    }
function applyTheme(theme) {
    const element = document.querySelector("body");
    const themes = ["oceanic", "galaxy", "gaming", "cyberpunk", "techno", "hacker", "midnight", "crimson" "artic" "retro" "pastel" "forest" ]; 
"sunset" "desert" themes.forEach(themeClass => {
        if (themeClass !== theme) {
            element.classList.remove(themeClass);
        }
     if (theme !== "default") {
        document.body.style.backgroundImage = 'none';
        element.classList.add(theme); // Only add the theme class if it's not already present
    } else {
        document.body.style.backgroundImage = "url('images/bg.png')";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const theme = window.localStorage.getItem("theme") || "default";
    applyTheme(theme);
});
// Encapsulate other initializations to ensure DOM is fully loaded before they run
document.addEventListener('DOMContentLoaded', function() {
    // Setup the event listener for the "Save Theme" button
    const saveThemeButton = document.getElementById('save-theme-button');
    if (saveThemeButton) {
        saveThemeButton.addEventListener('click', onSaveTheme);
    }
      const fileInput = document.querySelector("#background-upload");
      fileInput.addEventListener('change', function() {
          if (fileInput.files.length > 0) {
              const file = fileInput.files[0];
              const reader = new FileReader();
              reader.onload = function(event) {
                  document.body.style.backgroundImage = `url(${event.target.result})`;
              };
              reader.readAsDataURL(file);
          } else {
              console.error("No file selected.");
          }
      });
      // Image URL saving functionality
      const imageUrlInput = document.getElementById('image-url');
      const imageSaveButton = document.querySelector('#image-settings button'); // Make sure the selector matches your HTML
      imageSaveButton.addEventListener('click', function() {
          const imageUrl = imageUrlInput.value;
          document.body.style.backgroundImage = `url(${imageUrl})`;
      });
