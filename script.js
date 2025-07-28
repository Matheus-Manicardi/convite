const texto = `Oi gatinha❤️

Eu preparei essa cartinha eletrônica pra te fazer um convite.

Você topa sair comigo essa semana? 😍`;

function mostrarMensagem() {

  const musica = document.getElementById("musica");
  if (musica) {
    musica.play().then(() => {
      console.log("Música começou a tocar.");
    }).catch((error) => {
      console.log("Erro ao tocar a música:", error);
    });

  let i = 0;
  const carta = document.getElementById("carta");
  const abrirBtn = document.getElementById("abrir");
  abrirBtn.style.display = "none";
  carta.innerHTML = "";

  const intervalo = setInterval(() => {
    carta.innerHTML += texto[i];
    i++;
    if (i >= texto.length) {
      clearInterval(intervalo);
      document.getElementById("botoes").classList.remove("hidden");
    }
  }, 90);

  
}

}


document.getElementById("sim").addEventListener("click", () => {
  document.getElementById("resposta").innerText = "Te vejo Sábado as 19:30 <3"  ;
  
});



const naoBtn = document.getElementById("nao");

naoBtn.addEventListener("mouseover", () => {
  const container = document.querySelector(".container");
  const maxX = container.offsetWidth - naoBtn.offsetWidth;
  const maxY = container.offsetHeight - naoBtn.offsetHeight;

  const randX = Math.random() * maxX;
  const randY = Math.random() * maxY;

  naoBtn.style.left = `${randX}px`;
  naoBtn.style.top = `${randY}px`;
});
