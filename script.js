// WHATSAPP
function comprar(plano, preco) {

    let numero = "5521990682259";

    let mensagem = `Olá! 👋

Tenho interesse no *${plano}* ${preco ? `(R$ ${preco})` : ''}.

Quero uma bolha profissional para destacar meu perfil.

📌 Nome:
📌 Estilo:
📌 Cores:

Aguardo atendimento 🚀`;

    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

let time = 600

setInterval(() => {
  let minutes = Math.floor(time / 60)
  let seconds = time % 60

  document.getElementById("timer").innerText =
    `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`

  if (time > 0) time--
}, 1000)