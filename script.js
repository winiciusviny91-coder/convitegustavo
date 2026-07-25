// Function to open invitation (Screen 1 -> Screen 2)
function abrirConvite() {
  document.getElementById('tela1').classList.remove('ativo');
  document.getElementById('tela2').classList.add('ativo');
}

// Function to view gifts (Screen 2 -> Screen 3)
function verPresentes() {
  document.getElementById('tela2').classList.remove('ativo');
  document.getElementById('tela3').classList.add('ativo');
}

// Function to return to main invitation (Screen 3 -> Screen 2)
function voltarConvite() {
  document.getElementById('tela3').classList.remove('ativo');
  document.getElementById('tela2').classList.add('ativo');
}

// Function to return to cover (Screen 2 -> Screen 1)
function voltarInicio() {
  document.getElementById('tela2').classList.remove('ativo');
  document.getElementById('tela1').classList.add('ativo');
}

// Function to confirm presence via WhatsApp
function confirmarPresenca() {
  const numeroWhatsApp = "5571984774238"; // Replace with your phone number with DDD
  const mensagem = encodeURIComponent("Olá! Gostaria de confirmar minha presença na festa de 1 aninho do Gustavo! 🦖🎉");
  window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagem}`, '_blank');
}
