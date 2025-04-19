// Menampilkan konten setelah loading selesai
window.onload = function() {
  const loadingScreen = document.getElementById("loadingScreen");
  const mainContent = document.querySelector(".main-content");

  setTimeout(() => {
    loadingScreen.style.display = "none"; // Menghilangkan loading screen
    mainContent.style.display = "block";  // Menampilkan konten utama
  }, 3000); // Waktu loading 3 detik
};