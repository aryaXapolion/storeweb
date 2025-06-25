document.addEventListener("DOMContentLoaded", function () {
  const toggleTheme = document.getElementById("toggle-theme");
  const toggleAudio = document.getElementById("toggle-audio");
  const bgMusic = document.getElementById("bg-music");

  toggleTheme.addEventListener("change", () => {
    document.body.classList.toggle("light-mode", !toggleTheme.checked);
  });

  toggleAudio.addEventListener("change", () => {
    if (toggleAudio.checked) {
      bgMusic.play();
    } else {
      bgMusic.pause();
      bgMusic.currentTime = 0;
    }
  });
});


window.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  const wibHour = (now.getUTCHours() + 7) % 24;

  const isOpen = wibHour >= 6 && wibHour < 21;

  if (!isOpen) {
    document.body.innerHTML = ''; // Kosongkan body (opsional)
    document.body.appendChild(document.getElementById("lockOverlay"));
    document.getElementById("lockOverlay").style.display = "flex";
  }
});
