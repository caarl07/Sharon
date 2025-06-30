function goToScreen2() {
    document.getElementById("screen1").classList.remove("active");
    document.getElementById("screen2").classList.add("active");
  
    // 🔊 Iniciar música al primer clic
    const music = document.getElementById("bgMusic");
    music.volume = 0.2;
    music.play().catch((e) => {
      console.log("Autoplay bloqueado, espera otro clic");
    });
  }

function showMessage() {
    document.getElementById("screen2").classList.remove("active");
    const screen3 = document.getElementById("screen3");
    screen3.classList.add("active");
  
    const message = 
    `🎉 Feliz Cumpleaños, mi amorcito! 🎂,
    Hoy celebramos la maravillosa persona que eres 💖,
    Gracias por llenar mi vida de luz ✨,
    Deseo que cumplas muchísmos años más 🎯,
    Y que me permitas seguir compartiendolos contigo 💖,
    Estoy muy orgulloso de ti, bonita ✨,
    Te amo con todo mi corazón 💘,
    Siempre estaré aquí para ti 🫂,
    ¡Feliz cumpleaños, Sharon <3! 🥳`;
  
    const box = document.getElementById("messageBox");
    box.textContent = '';
  
    let index = 0;
  
    const interval = setInterval(() => {
      if (index < message.length) {
        box.textContent += message.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
  }
window.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("bgMusic");
    music.volume = 0.5;
  });