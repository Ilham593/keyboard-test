const huruf = document.querySelectorAll('.key'); 

document.addEventListener('keydown', function(e) {
  huruf.forEach(button => {
    if (button.textContent.toLowerCase() === e.key.toLowerCase()) {
      handle(button); 
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


document.addEventListener('keyup', function(e) {
  huruf.forEach(button => {
    if (button.textContent.toLowerCase() === e.key.toLowerCase()) {
      handle(button); 
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


