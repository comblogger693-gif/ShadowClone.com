const episodesPerPage = 18;
let currentPage = 1;
let allEpisodes = [];
let episodes = [];

// ✅ Actual Google Drive file IDs
const driveIds = [
  "1YV4fDtE1OVqr9-M5h7U7q3LgeGWjPUY3",
  "1VHMkdRd_1_QbrOcDUmB6ZpLEXZQFXW4G",
  "1wbM1Xas4vDHY2Le77SLhO67lewgztklu",
  "19G0t5dd_xj793KLAr33PkDtFBImBeSeH",
  "1NCtdDI_Ne-eTWt3ZQPWmH4ylNn550ekp",
  "1tMr8lADa-vvaIEQuSFOAQHHrMhPGOR1n",
  "1CVifHgnf5b5hstVeImMjLyGAh6B_rOR_",
  "1OtkkLSmPT_hXW8jFXint-z-gP4pWepyM",
  "1PJGWZn_KLN8_k6ztDIjBHYMJelx813Pk",
  "1X9PX636s5HPy077JRd9S0VE9RXLWkeJN"
  // Add up to 300 more...
];

document.addEventListener("DOMContentLoaded", () => {
  generateEpisodes();
  renderEpisodes();
  setupPagination();
  setupSearchAndFilter();
});

function generateEpisodes() {
  allEpisodes = driveIds.map((id, index) => {
    const number = index + 1;
    return {
      number,
      title: `Episode ${number}`,
      image: `assets/images/${number}.jpg`,
      video: `https://drive.google.com/file/d/${id}/preview`,
      download: `https://drive.google.com/uc?export=download&id=${id}`,
      watched: number % 2 === 0
    };
  });
  episodes = [...allEpisodes];
}

function renderEpisodes() {
  const list = document.getElementById("episodeList");
  const start = (currentPage - 1) * episodesPerPage;
  const end = start + episodesPerPage;
  const visible = episodes.slice(start, end);

  if (visible.length === 0) {
    list.innerHTML = `<p>No episodes found.</p>`;
    document.getElementById("pageInfo").textContent = ``;
    return;
  }

  list.innerHTML = visible.map(ep => `
    <div class="episode-card">
      <img src="${ep.image}" class="episode-thumbnail" alt="Episode ${ep.number}">
      <div class="episode-info">
        <h2>${ep.title}</h2>
        <div class="episode-buttons">
          <a href="download.html?download=${encodeURIComponent(ep.download)}&video=${encodeURIComponent(ep.video)}" class="icon-button" title="Download">
            <i class="fas fa-download"></i>
          </a>
          <a href="${ep.video}" class="icon-button" target="_blank" title="Stream">
            <i class="fas fa-play"></i>
          </a>
        </div>
      </div>
    </div>
  `).join('');

  const totalPages = Math.ceil(episodes.length / episodesPerPage);
  document.getElementById("pageInfo").textContent = `Page ${currentPage} of ${totalPages}`;
}

function setupPagination() {
  document.getElementById("prevPage").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderEpisodes();
    }
  });

  document.getElementById("nextPage").addEventListener("click", () => {
    const totalPages = Math.ceil(episodes.length / episodesPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      renderEpisodes();
    }
  });
}

function setupSearchAndFilter() {
  document.getElementById("searchInput").addEventListener("input", filterEpisodes);
  document.getElementById("filterSelect").addEventListener("change", filterEpisodes);
}

function filterEpisodes() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const filter = document.getElementById("filterSelect").value;

  episodes = allEpisodes.filter(e => {
    const matchesSearch = e.title.toLowerCase().includes(search);
    const matchesFilter = filter === "all" ||
      (filter === "watched" && e.watched) ||
      (filter === "unwatched" && !e.watched);

    return matchesSearch && matchesFilter;
  });

  const totalPages = Math.ceil(episodes.length / episodesPerPage);
  if (currentPage > totalPages) {
    currentPage = totalPages || 1;
  }

  renderEpisodes();
}
