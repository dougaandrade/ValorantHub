async function store() {
  try {
    const response = await fetch("/assets/db/storeArms.json");
    const data = await response.json();
    return data.store || data;
  } catch (error) {
    console.error("Erro:", error);
    return null;
  }
}

async function renderStore() {
  const storeData = await store();
  if (!storeData) return;

  const storeContainer = document.querySelector(".cards-arms");

  // Embaralhar os dados e pegar apenas os primeiros 5 itens
  const shuffledData = [...storeData].sort(() => 0.5 - Math.random());
  const limitedData = shuffledData.slice(0, 5);

  limitedData.forEach((item) => {
    const itemHTML = `
        <div class="card">
            <div class="content-card">
                <h2 class="text-arms-h2">
                    <img src="/assets/img/menu/Valorant_Points.webp" class="icons-vp-rp" alt="VP" />${item.price}
                    <img src="${item["icon-exclusive"]}" class="icon-exclusive" alt="premiun-icon" />
                </h2>
                <img src="${item.image}" class="img-container" alt="${item.name}" />
                <div class="text-arms-main">
                    <h1 class="text-arms-h1">${item.name}</h1>
                </div>
            </div>
        </div>
    `;
    storeContainer.insertAdjacentHTML("beforeend", itemHTML);
  });
}

document.addEventListener("DOMContentLoaded", renderStore);
