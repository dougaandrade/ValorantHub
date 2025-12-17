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

// 2. Criamos uma função principal para garantir a ordem de execução
async function init() {
  // Aguarda os dados chegarem antes de continuar
  const listaAgentes = await fetchAgents();

  if (!listaAgentes) return; // Para se houver erro no fetch

  const img_main = document.querySelector(".agents-content");

  // Função para exibir a imagem e nome central (reutilizável)
  function renderMainAgent(agent) {
    // Limpa o conteúdo anterior de forma eficiente
    img_main.innerHTML = "";

    const imgElement = document.createElement("img");
    imgElement.src = agent.image;
    imgElement.className = "agents_main";

    const nameElement = document.createElement("h1");
    nameElement.className = "name-agents";
    nameElement.innerText = agent.player || agent.name; // Ajustado para aceitar 'name' do nosso JSON

    img_main.appendChild(imgElement);
    img_main.appendChild(nameElement);
  }

  // Função para exibir os cards
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
  exibirCardsHtml();

  // Exibe um aleatório para começar
  const randomAgent =
    listaAgentes[Math.floor(Math.random() * listaAgentes.length)];
  renderMainAgent(randomAgent);
}

// Inicializa tudo quando a página carregar
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
