async function fetchBattlepass() {
  try {
    const response = await fetch("/assets/db/battlepass.json");
    const data = await response.json();
    return data.battlepass || data;
  } catch (error) {
    console.error("Erro:", error);
    return null;
  }
}

console.log("Battlepass JS carregado com sucesso.", fetchBattlepass());

async function init() {
  const battlepass = await fetchBattlepass();

  if (!battlepass) return;

  const cardContainer = document.querySelector(".episode");
  const radioContainer = document.querySelector(".radio-input");

  if (!cardContainer) {
    console.error("Container .episode não encontrado");
    return;
  }

  function renderRadioButtons() {
    const selection = radioContainer.querySelector(".selection");

    battlepass.forEach((tier, index) => {
      const radioHTML = `
        <label>
          <input type="radio" id="value-${
            index + 1
          }" name="value-radio" value="value-${index + 1}" ${
        index === 0 ? "checked" : ""
      } />
          <span>${tier.name.replace("TIER ", "")}</span>
        </label>
      `;
      selection.insertAdjacentHTML("beforebegin", radioHTML);
    });

    // Adiciona opção Epilogue
    const epilogueHTML = `
      <label>
        <input type="radio" id="value-ep" name="value-radio" value="value-ep" />
        <span>Epilogue</span>
      </label>
    `;
    selection.insertAdjacentHTML("beforebegin", epilogueHTML);
  }

  function renderTier(tierIndex) {
    cardContainer.innerHTML = "";

    if (!battlepass[tierIndex] || !battlepass[tierIndex].arms) {
      console.log("Tier não encontrado ou sem armas");
      return;
    }

    const tier = battlepass[tierIndex];

    tier.arms.forEach((arm, armIndex) => {
      const cardHTML = `
      <div class="card" data-tier="${tierIndex}" data-index="${armIndex}">
        <div class="content-card">
          <img src="${arm.armo}" class="icon-guns" alt="${arm.name}">
          <ion-icon name="lock-closed" class="icon-close"></ion-icon>
        </div>
      </div>
      `;
      cardContainer.insertAdjacentHTML("beforeend", cardHTML);
    });

    // Renderiza a primeira arma em destaque
    if (tier.arms.length > 0) {
      renderMainArm(tierIndex, 0);
    }
  }

  // Renderiza a arma em destaque (na área principal)
  function renderMainArm(tierIndex, armIndex) {
    const arm = battlepass[tierIndex].arms[armIndex];
    const armContainer = document.querySelector(".arms_content");

    if (!armContainer) return;

    armContainer.innerHTML = `
      <img src="${arm.armo}" alt="${arm.name}" class="armas_main" />
    `;
  }

  // Evento de clique nas cartas
  cardContainer.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;

    const tierIndex = parseInt(card.getAttribute("data-tier"));
    const armIndex = parseInt(card.getAttribute("data-index"));

    renderMainArm(tierIndex, armIndex);
  });

  // Renderiza os radio buttons

  renderRadioButtons();

  // Adiciona evento de clique nos radio buttons (após gerá-los)
  const radioButtons = document.querySelectorAll('input[name="value-radio"]');

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      const value = e.target.value;

      if (value === "value-ep") {
        renderTier(battlepass.length - 1);
      } else {
        const tierNumber = parseInt(value.replace("value-", "")) - 1;
        renderTier(tierNumber);
      }
    });
  });

  // Renderiza o primeiro tier por padrão
  renderTier(0);

  // Marca o primeiro radio como selecionado
  const firstRadio = document.querySelector("#value-1");
  if (firstRadio) firstRadio.checked = true;
}
document.addEventListener("DOMContentLoaded", init);
