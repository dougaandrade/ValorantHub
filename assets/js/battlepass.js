const imagensGuns = [
  { tier: "TIER 1", guns: "/assets/img/battlepass/ammo1.webp" },
  { tier: "TIER 2", guns: "/assets/img/battlepass/ammo2.webp" },
  { tier: "TIER 3", guns: "/assets/img/battlepass/ammo3.webp" },
  { tier: "TIER 4", guns: "/assets/img/battlepass/ammo4.webp" },
  { tier: "TIER 5", guns: "/assets/img/battlepass/ammo5.webp" },
  { tier: "TIER 6", guns: "/assets/img/battlepass/ammo6.webp" },
  { tier: "TIER 7", guns: "/assets/img/battlepass/ammo7.webp" },
];

let imagemAtual = imagensGuns;

function exibirImagemAleatoria() {
  const img_main = document.querySelector(".arms_content");
  img_main.style.margin = "1rem";
  img_main.innerHTML = `
   <img src="${imagemAtual[0].guns}" class="armas_main">
  </div>`;
}

function exibirCardsHtml() {
  const cardGuns = document.querySelector(".episode");
  imagensGuns.forEach((card) => {
    const cardHTML = `
    <div class="card">
        <div class="ep-basic">
        <img src="${card.guns}" class="icon-guns">
        <div class="card-span">
        <span class="span">${card.tier}</span>
        <span class="span"><ion-icon name="lock-closed" class="icon-close"></ion-icon></span>
        </div>
        </div>
      </div>  
    `;
    cardGuns.insertAdjacentHTML("beforeend", cardHTML);
  });
}

function exibirGuns() {
  const img_main = document.querySelector(".arms_content");
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.addEventListener("click", function () {
      if (img_main.querySelector("img")) {
        img_main.querySelector("img").remove();
      }

      // Cria e exibe a nova imagem selecionada
      const imgSelecionada = document.createElement("img");
      imgSelecionada.src = imagensGuns[index].guns;
      imgSelecionada.className = "armas_main";
      img_main.appendChild(imgSelecionada);

      imagemAtual = index;
    });
  });
}

exibirCardsHtml();
exibirGuns();
exibirImagemAleatoria();
