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

// CONTADOR
let tempo = 600;
setInterval(() => {
    let min = Math.floor(tempo / 60);
    let sec = tempo % 60;
    document.getElementById("tempo").innerText =
        `${min}:${sec < 10 ? '0' : ''}${sec}`;
    tempo--;
}, 1000);

// PROVA SOCIAL
let nomes = ["Lucas", "Ana", "Pedro", "Julia", "Rafael"];

setInterval(() => {
    let nome = nomes[Math.floor(Math.random() * nomes.length)];
    let popup = document.getElementById("popup");

    popup.innerText = `${nome} acabou de comprar uma bolha 🔥`;
    popup.style.display = "block";

    setTimeout(() => popup.style.display = "none", 3000);
}, 5000);