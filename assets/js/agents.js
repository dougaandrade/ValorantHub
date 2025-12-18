// 1. Mudamos o nome da função para evitar conflito com a constante de dados
async function fetchAgents() {
  try {
    const response = await fetch("/assets/db/agents.json");
    if (!response.ok) throw new Error("Erro ao carregar o arquivo JSON");

    const data = await response.json();
    return data.agents || data;
  } catch (error) {
    console.error("Erro:", error);
    return null;
  }
}

function renderMainAgent(agent) {
  const mainContainer = document.querySelector(".agents-content");

  mainContainer.innerHTML = `
  <img src="${agent.image}" alt="${agent.name}" class="agents_main" />
  <div class="agents-container">
    <span class="name-agents">${agent.name}</span>
    <p class="biography-agents">${agent.biography}</p>
    <p class="role-agents">${agent.role}</p>
    </div>
    <h3 class="abilities-title">Habilidades</h3>
    <div class="abilities-container">
      ${agent.abilities
        .map(
          (ability) => `
        <div class="ability-card">
          
          <h4 class="ability-name">${ability.name}</h4>
          <h5 class="ability-cost">Custo: ${
            ability.cost || ability.points || "0"
          }</h5>
          <p class="ability-description">${ability.description}</p>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}

async function init() {
  const listaAgentes = await fetchAgents();

  if (!listaAgentes) return;

  function exibirCardsHtml() {
    const cardContainer = document.querySelector(".content");

    listaAgentes.forEach((agent, index) => {
      const cardHTML = `
      <div class="card" data-index="${index}">
        <div class="content-card">
          <img src="${agent.icon}" class="icon-agents">
          <ion-icon name="lock-closed" class="icon-close"></ion-icon>
        </div>
      </div>
      `;
      cardContainer.insertAdjacentHTML("beforeend", cardHTML);
    });

    // Adiciona evento de clique logo após criar os cards
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", (e) => {
        const idx = e.currentTarget.dataset.index;
        renderMainAgent(listaAgentes[idx]);
      });
    });
  }

  // Executa o fluxo

  // Exibe um aleatório para começar
  const agenteAleatorio =
    listaAgentes[Math.floor(Math.random() * listaAgentes.length)];
  renderMainAgent(agenteAleatorio);
  exibirCardsHtml();
}

// Exibe os cards

document.addEventListener("DOMContentLoaded", init);
