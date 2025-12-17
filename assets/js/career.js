class CareerManager {
  dataUrl = "/assets/db/career.json";
  containerSelector = ".carrer-content";

  async fetchCareerData() {
    try {
      const response = await fetch(this.dataUrl);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: Falha ao buscar dados`);
      }
      const data = await response.json();
      return data.career?.[0]?.player_stats?.match_history || null;
    } catch (error) {
      console.error("Erro ao carregar carreira:", error);
      return null;
    }
  }

  validateMatch(match) {
    return !!(
      match.agent_icon &&
      match.map_image &&
      match.score_friendly !== undefined &&
      match.score_enemy !== undefined
    );
  }

  createMatchHTML(match) {
    const {
      agent_icon,
      agent = "Unknown",
      kda = "0/0/0",
      combat_score = 0,
      is_mvp,
      result = "UNKNOWN",
      score_friendly,
      score_enemy,
      map_image,
      map_name = "map",
    } = match;

    const resultClass =
      result.toLowerCase() === "victory" ? "victory" : "defeat";
    const mvpBadge = is_mvp ? '<span class="mvp-cell">MATCH MVP</span>' : "";

    return `
      <tr class="result-${resultClass}">
        <td class="agent-cell">
          <img src="${agent_icon}" alt="${agent}" class="agent-icon" />
          <div class="agent-stats">
            <span class="combat-text">KDA ${kda}</span>
            <span class="combat-score-cell">SCORE ${combat_score.toLocaleString()}</span>
            ${mvpBadge}
          </div>
        </td>
        <td class="result-cell">
          <span class="result-text">${result.toUpperCase()}</span>
          <span class="score-cell">${score_friendly} - ${score_enemy}</span>
        </td>
        <td class="map-cell">
          <img src="${map_image}" alt="${map_name}" class="map-icon" />
        </td>
      </tr>
    `;
  }

  renderMatches(matches, container) {
    const validMatches = matches.filter((match) => {
      if (!this.validateMatch(match)) {
        console.warn("Match incompleto ignorado:", match);
        return false;
      }
      return true;
    });

    const tableHTML = `
      <table class="career-table">
        <tbody>
          ${validMatches.map((match) => this.createMatchHTML(match)).join("")}
        </tbody>
      </table>
    `;

    container.innerHTML = tableHTML;
  }

  async init() {
    const container = document.querySelector(this.containerSelector);
    if (!container) {
      console.warn(`Elemento '${this.containerSelector}' não encontrado`);
      return;
    }

    const matches = await this.fetchCareerData();
    if (!matches || matches.length === 0) {
      console.warn("Nenhum dado de carreira encontrado");
      container.innerHTML = '<p class="no-data">Nenhuma partida encontrada</p>';
      return;
    }

    this.renderMatches(matches, container);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const careerManager = new CareerManager();
  careerManager.init();
});
