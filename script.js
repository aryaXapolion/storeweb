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
