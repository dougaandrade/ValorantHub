const imagemAgents = [
  { player: "Jett", image: "../img/Jett_Artwork_Full.webp" },
  { player: "Astra", image: "../img/Astra_Artwork_Full.webp" },
  { player: "Breach", image: "../img/Breach_Artwork_Full.webp" },
  { player: "Brimstone", image: "../img/Brimstone_Artwork_Full.webp" },
  { player: "Chamber", image: "../img/Chamber_Artwork_Full.webp" },
  { player: "Cypher", image: "../img/Cypher_Artwork_Full.webp" },
  { player: "Deadlock", image: "../img/Deadlock_Artwork_Full.webp" },
  { player: "Fade", image: "../img/Fade_Artwork_Full.webp" },
  { player: "Gekko", image: "../img/Gekko_Artwork_Full.webp" },
  { player: "Yoru", image: "../img/Yoru_Artwork_Full.webp" },
  { player: "Viper", image: "../img/Viper_Artwork_Full.webp" },
  { player: "Harbor", image: "../img/Harbor_Artwork_Full.webp" },
  { player: "Kay-O", image: "../img/KAYO_Artwork_Full.webp" },
  { player: "Killjoy", image: "../img/Killjoy_Artwork_Full.webp" },
  { player: "Neon", image: "../img/Neon_Artwork_Full.webp" },
  { player: "Omen", image: "../img/Omen_Artwork_Full.webp" },
  { player: "Phoenix", image: "../img/Phoenix_Artwork_Full.webp" },
  { player: "Raze", image: "../img/Raze_Artwork_Full.webp" },
  { player: "Reyna", image: "../img/Reyna_Artwork_Full.webp" },
  { player: "Sage", image: "../img/Sage_Artwork_Full.webp" },
  { player: "Sova", image: "../img/Sova_Artwork_Full.webp" },
  { player: "Skye", image: "../img/Skye_Artwork_Full.webp" },
];

const img_main = document.querySelector(".agents-content");

// Função para exibir uma imagem aleatória inicialmente
function exibirImagemAleatoria() {
  const randomImagens =
    imagemAgents[Math.floor(Math.random() * imagemAgents.length)];

  // Cria o elemento de imagem e define o caminho correto
  const imgSelecionada = document.createElement("img");
  imgSelecionada.src = randomImagens.image;
  imgSelecionada.className = "agents_main";
  img_main.appendChild(imgSelecionada);

  const namePlayer = document.createElement("h1");
  namePlayer.className = "name-agents";
  namePlayer.innerText = randomImagens.player;
  img_main.appendChild(namePlayer);
}
// Função para exibir os cards de agentes
function exibirCardsHtml() {
  const cardAgents = document.querySelector(".content");

  imagemAgents.forEach((agent) => {
    const cardHTML = `
      <div class="card">
        <div class="content-card">
          <img src="${agent.image}" class="icon-agents">
          <ion-icon name="lock-closed" class="icon-close"></ion-icon>
        </div>
      </div>
    `;
    cardAgents.insertAdjacentHTML("beforeend", cardHTML);
  });
}
// Função para manipular a seleção de um agente ao clicar no card
function exibirPersonagens() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.addEventListener("click", function () {
      // Remove a imagem e o nome anterior, se existirem
      const ImagemAnterior = img_main.querySelector("img");
      const NamePlayerAnterior = img_main.querySelector("h1");

      if (ImagemAnterior) ImagemAnterior.remove();
      if (NamePlayerAnterior) NamePlayerAnterior.remove();

      // Cria e exibe a nova imagem do agente selecionado
      const imgSelecionada = document.createElement("img");
      imgSelecionada.src = imagemAgents[index].image;
      imgSelecionada.className = "agents_main";
      img_main.appendChild(imgSelecionada);

      // Cria e exibe o nome do agente selecionado
      const NamePlayer = document.querySelector(".name-agents");
      NamePlayer.innerText = imagemAgents[index].player;
      img_main.appendChild(NamePlayer);
    });
  });
}

// Chama as funções em ordem correta
exibirCardsHtml();
exibirPersonagens();
exibirImagemAleatoria();
