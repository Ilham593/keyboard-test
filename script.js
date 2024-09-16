const huruf = document.querySelectorAll('.key'); // Elemen keyboard virtual di layar

window.addEventListener('keydown', function(e) {
  huruf.forEach(button => {
    if (button.textContent.toLowerCase() === e.key.toLowerCase()) {
      // Jika tombol yang ditekan cocok dengan teks di tombol virtual (case-insensitive)
      handle(button); // Tambahkan kelas 'aktif' ke tombol yang sesuai
    } else if (e.key === "Escape") {
      console.log("Escape key pressed");
      handleSpecialButton('Escape');
    } else if (e.key === "Control") {
      console.log("Control key pressed");
      handleSpecialButton('Control');
    } else if (e.key === "Enter") {
      console.log("Enter key pressed");
      handleSpecialButton('Enter');
    }
    // Tambahkan pengecekan tombol lainnya seperti Shift, Alt, dll.
  });
});

function handle(button) {
  button.classList.toggle('aktif'); // Tambahkan efek pada tombol huruf/angka
}

function handleSpecialButton(keyName) {
  const specialButton = document.querySelector(`.huruf[data-key="${keyName}"]`);
  if (specialButton) {
    specialButton.classList.add('spesial'); // Tambahkan efek pada tombol khusus
  }
}
