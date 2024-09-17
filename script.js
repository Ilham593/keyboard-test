const huruf = document.querySelectorAll('.key'); // Elemen keyboard virtual di layar
const input = document.getElementById('hasil')
const label_clear = document.getElementById('label-clear')

label_clear.addEventListener('click', function(){
  input.value = ''
})

window.addEventListener('keydown', function(e) {
  huruf.forEach(button => {
    if (button.textContent.toLowerCase() === e.key.toLowerCase()) {

      // Jika tombol yang ditekan cocok dengan teks di tombol virtual (case-insensitive)
      handle(button); // Tambahkan kelas 'aktif' ke tombol yang sesuai
      input.value += button.textContent;
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


window.addEventListener('keyup', function(e) {
  huruf.forEach(button => {
    if (button.textContent.toLowerCase() === e.key.toLowerCase()) {

      // Jika tombol yang ditekan cocok dengan teks di tombol virtual (case-insensitive)
      handle(button); // Tambahkan kelas 'aktif' ke tombol yang sesuai
      input.value += button.textContent;
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

window.addEventListener('DOMContentLoaded', function(){
  let width = window.innerWidth
  let height = window.innerHeight

  console.log(width , height)
  const container =  document.getElementById('container')
  const warning = document.querySelector('.warning-none')
  if(width < 800){
    alert(' nampaknya anda membuka di layar hp,web ini khusus layar desktop')
    container.style.display = 'none'
    warning.style.display = 'block'

  }
})
