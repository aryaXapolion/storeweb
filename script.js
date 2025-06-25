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
document.getElementById("laporanForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Cegah reload

  const form = e.target;

  // Kirim data ke FormSubmit
  fetch("https://formsubmit.co/ajax/aryayogasakti@gmail.com", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nama: form.nama.value,
      email: form.email.value,
      pesan: form.pesan.value
    })
  })
  .then(response => {
    if (response.ok) {
      showPopup();
      form.reset();
    } else {
      alert("❌ Gagal mengirim laporan.");
    }
  })
  .catch(error => {
    alert("❌ Error: " + error.message);
  });
});

function showPopup() {
  document.getElementById("popupSuccess").style.display = "block";
}

function closePopup() {
  document.getElementById("popupSuccess").style.display = "none";
}
