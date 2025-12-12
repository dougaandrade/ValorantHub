function renderHeader() {
  const header = document.createElement("header");
  header.innerHTML = `
         <nav class="navbar">
            <div class="navbar-button">
                <a href="/"><img src="../img/keyboard_double_arrow_left_FILL0_wght400_GRAD0_opsz24.svg" class="button0"
                        alt="button-back"></a>
                <h1 class="button-text">Back</h1>
            </div>
            <div class="nav-links">
                <ul class="background-nav">
                    <li><a href="/"><img src="../img/Vhome.webp" class="img-bar" alt="home"></a></li>
                    <li><a href="/assets/html/battlepass.html"><img src="../img/Vpass.webp" class="img-bar"
                                alt="battlepass"></a>
                    </li>
                    <li><a href="/assets/html/agents.html"><img src="../img/Vagents.webp" class="img-bar"
                                alt="agents"></a>
                    </li>
                    <div class="play-navbar">
                        <li><a href="../html/play.html">
                                <h1 class="text-play">PLAY</h1>
                            </a></li>
                    </div>
                    <li><a href="/assets/html/career.html"><img src="../img/Vcareer.webp" class="img-bar"
                                alt="career"></a>
                    </li>
                    <li><a href="/assets/html/collection.html"><img src="../img/Vcoll.webp" class="img-bar"
                                alt="collection"></a>
                    </li>
                    <li><a href="/assets/html/store.html"><img src="../img/Vshop.webp" class="img-bar" alt="store"></a>
                    </li>
                </ul>
            </div>
            <div class="user-profile">
                <div class="navbar-miss">
                    <ul class="nav-bar-vlrt">
                        <li class="itens-navbar"><ion-icon name="time-outline"></ion-icon>2/2</li>
                        <li class="itens-navbar"><ion-icon name="close-circle-outline"></ion-icon>3/3</li>
                        <div class="point-nav">
                            <li class="itens-navbar"><img src="../img/Radianite_Points.webp" class="icons-vp-rp"
                                    alt="RP">1.550
                            </li>
                            <li class="itens-navbar"><img src="../img/Valorant_Points.webp" class="icons-vp-rp"
                                    alt="VP">9.999
                            </li>
                            <li class="settings-nav"><ion-icon name="settings-sharp" class="settings"></ion-icon></li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="navbar-profile">
            <ul class="nav-bar-vlrt-bar">
                <li class="itens-bar"><img src="../img/RGX_Card_Large.webp" class="card-profile" alt="card1">
                </li>
                <li class="itens-bar people">1</li>
                <li class="itens-bar"><img src="../img/RGX_Card_Large.webp" class="card-profile" alt="card1">
                </li>
                <li class="itens-bar"><img src="../img/RGX_Card_Large.webp" class="card-profile" alt="card1">
                </li>
                <li class="itens-bar people">0</li>
                <li class="itens-bar people">30</li>
            </ul>
        </div>
  `;
  return header;
}

const app = document.getElementById("nav-header");
app.appendChild(renderHeader());

function updateDateTime() {
  const timeElement = document.getElementById("time");
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;
  timeElement.textContent = timeString;
}

setInterval(updateDateTime, 1000);
updateDateTime();
