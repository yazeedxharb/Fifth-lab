const data = [
  { team: "Manchester Utd", player: "Bruno Fernandes", position: "Midfielder", nationality: "Portuguese", age: 30 },
  { team: "Real Madrid", player: "Karim Benzema", position: "Forward", nationality: "French", age: 36 },
  { team: "Barcelona", player: "Robert Lewandowski", position: "Forward", nationality: "Polish", age: 35 },
  { team: "Bayern Munich", player: "Joshua Kimmich", position: "Midfielder", nationality: "German", age: 29 },
  { team: "PSG", player: "Kylian Mbappé", position: "Forward", nationality: "French", age: 25 },
  { team: "Juventus", player: "Cristiano Ronaldo", position: "Forward", nationality: "Portuguese", age: 39 },
  { team: "Chelsea", player: "Enzo Fernández", position: "Midfielder", nationality: "Argentine", age: 23 },
  { team: "Liverpool", player: "Mohamed Salah", position: "Forward", nationality: "Egyptian", age: 32 },
];

// Reference elements
const playerTableBody = document.getElementById("player-rows");
const searchInput = document.getElementById("search");
const teamFilter = document.getElementById("team-filter");
const darkModeToggle = document.getElementById("dark-mode-toggle");

// Populate table
function populateTable(data) {
  playerTableBody.innerHTML = ""; // Clear existing rows
  data.forEach((player) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${player.player}</td>
            <td>${player.team}</td>
            <td>${player.position}</td>
            <td>${player.nationality}</td>
            <td>${player.age}</td>
        `;
    playerTableBody.appendChild(row);
  });
}

// Populate team filter dropdown
function populateTeamFilter() {
  const teams = [...new Set(data.map((player) => player.team))].sort();
  teams.forEach((team) => {
    const option = document.createElement("option");
    option.value = team;
    option.textContent = team;
    teamFilter.appendChild(option);
  });
}

// Filter data by search and team
function filterData() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedTeam = teamFilter.value;
  const filteredData = data.filter((player) => {
    const matchesSearch = player.player.toLowerCase().includes(searchTerm);
    const matchesTeam = selectedTeam === "all" || player.team === selectedTeam;
    return matchesSearch && matchesTeam;
  });
  populateTable(filteredData);
}

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Add event listeners
searchInput.addEventListener("input", filterData);
teamFilter.addEventListener("change", filterData);
darkModeToggle.addEventListener("click", toggleDarkMode);

// Initial setup
populateTable(data);
populateTeamFilter();