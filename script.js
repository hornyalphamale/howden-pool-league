const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");
menuToggle?.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
mainNav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
}));

document.querySelector("#year").textContent = new Date().getFullYear();

const search = document.querySelector("#teamSearch");
const rows = [...document.querySelectorAll("#leagueTable tbody tr")];
const teamCount = document.querySelector("#teamCount");
search?.addEventListener("input", () => {
  const query = search.value.trim().toLowerCase();
  let visible = 0;
  rows.forEach(row => {
    const show = row.querySelector(".team-name").textContent.toLowerCase().includes(query);
    row.hidden = !show;
    if (show) visible++;
  });
  teamCount.textContent = `${visible} team${visible === 1 ? "" : "s"}`;
});

const matchCards = document.querySelector("#matchCards");
const matchNote = document.querySelector("#matchNote");
const fixtureMarkup = [
  ["The Railway", "The Crown", "Thursday · 7:30 pm", "Home venue TBC"],
  ["Howden Club", "The Black Horse", "Thursday · 7:30 pm", "Home venue TBC"],
  ["The Ship Inn", "The Fox", "Thursday · 7:30 pm", "Home venue TBC"]
];
const resultMarkup = [
  ["The Railway", "The Crown", "6 – 4", "Sample result"],
  ["Howden Club", "The Black Horse", "5 – 5", "Sample result"],
  ["The Ship Inn", "The Fox", "7 – 3", "Sample result"]
];
function renderMatches(view) {
  const data = view === "results" ? resultMarkup : fixtureMarkup;
  matchCards.innerHTML = data.map(([home, away, detail, venue]) => `
    <article class="match-card">
      <div class="match-meta"><span>${view === "results" ? "RECENT RESULT" : "LEAGUE NIGHT"}</span><span>DEMO</span></div>
      <div class="match-teams"><strong>${home}</strong><span>${view === "results" ? detail : "VS"}</span><strong>${away}</strong></div>
      <div class="match-bottom"><span>${detail}</span><span class="venue">${venue}</span></div>
    </article>`).join("");
  matchNote.textContent = view === "results"
    ? "Sample scores only. Replace with verified match results."
    : "Sample fixtures only. Replace dates, teams and venues with confirmed details.";
}
document.querySelectorAll(".switch").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".switch").forEach(item => item.classList.toggle("active", item === button));
    renderMatches(button.dataset.view);
  });
});

document.querySelector("#contactButton")?.addEventListener("click", async () => {
  const placeholder = "Add official league contact details here before publishing.";
  const feedback = document.querySelector("#contactFeedback");
  try {
    await navigator.clipboard.writeText(placeholder);
    feedback.textContent = "Placeholder copied. Replace it with the official contact details.";
  } catch {
    feedback.textContent = placeholder;
  }
});