function renderHeader() {
  const header = document.createElement("header");
  header.innerHTML = `
            <nav class="navbar">
                    <div class="navbar-miss-left">
                            <div class="point-nav">
                                    <ul>
                                            <li class="itens-navbar">
                                                    <ion-icon name="time-outline"></ion-icon>2/2
                                            </li>
                                            <li class="itens-navbar">
                                                    <ion-icon name="close-circle-outline"></ion-icon>5/3
                                            </li>
                                    </ul>
                            </div>
                    </div>
                    
                    <div class="nav-links">
                            <ul class="background-nav">
                                    <li><a href="/">HOME</a></li>
                                    <li>
                                            <a href="/assets/html/battlepass.html">BATTLEPASS</a>
                                            <div class="progress-container">
                                                    <div class="progress-navbar">
                                                            <div class="bar-navbar"></div>
                                                    </div>
                                            </div>
                                    </li>
                                    <li>
                                            <a href="/assets/html/agents.html">AGENTS</a>
                                            <div class="progress-container">
                                                    <div class="progress-navbar">
                                                            <div class="bar-navbar"></div>
                                                    </div>
                                            </div>
                                    </li>
                                    <div class="play-navbar">
                                            <a href="/assets/html/play.html">
                                                    <h1 class="text-play">PLAY</h1>
                                            </a>
                                    </div>
                                    <li><a href="/assets/html/career.html">CAREER</a></li>
                                    <li><a href="/assets/html/collection.html">COLLECTION</a></li>
                                    <li><a href="/assets/html/store.html">STORE</a></li>
                            </ul>
                    </div>
                    
                    <div class="navbar-miss-right">
                            <div class="point-nav">
                                    <ul>
                                            <li class="itens-navbar">
                                                    <img src="/assets/img/menu/Radianite_Points.webp" class="icons-vp-rp" alt="Radianite Points currency icon: 1.550">1.550
                                            </li>
                                            <li class="itens-navbar">
                                                    <img src="/assets/img/menu/Valorant_Points.webp" class="icons-vp-rp" alt="Valorant Points currency icon: 9.999">9.999
                                            </li>
                                    </ul>
                            </div>
                    </div>
            </nav>
            <div class="navbar-profile">
                    <ul class="nav-bar-vlrt-bar">
                            <li class="itens-bar">
                                    <img src="/assets/img/menu/RGX_Card_Large.webp" class="card-profile" alt="RGX player card 1">
                            </li>
                            <li class="itens-bar people">1</li>
                            <li class="itens-bar">
                                    <img src="/assets/img/menu/RGX_Card_Large.webp" class="card-profile" alt="RGX player card 2">
                            </li>
                            <li class="itens-bar">
                                    <img src="/assets/img/menu/RGX_Card_Large.webp" class="card-profile" alt="RGX player card 3">
                            </li>
                            <li class="itens-bar people">0</li>
                            <li class="itens-bar people">30</li>
                    </ul>
            </div>
`;
  return header;
}

// Função para inicializar o header
function initializeHeader() {
  const app = document.getElementById("nav-header");
  if (app) {
    app.appendChild(renderHeader());
  }
}

// Função para atualizar data e hora
function updateDateTime() {
  const timeElement = document.getElementById("time");
  if (!timeElement) return;

  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;

  timeElement.textContent = timeString;
}

// Inicialização
document.addEventListener("DOMContentLoaded", function () {
  initializeHeader();

  // Atualizar relógio se existir elemento
  if (document.getElementById("time")) {
    updateDateTime(); // Atualização inicial
    setInterval(updateDateTime, 1000); // Atualizar a cada segundo
  }
});
