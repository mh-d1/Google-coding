const codingTopics = [
  "Apa itu HTML?",
  "Belajar CSS dari nol",
  "JavaScript dasar untuk pemula",
  "Frontend vs Backend",
  "React JS vs Next JS",
  "Cara membuat API",
  "Cara kerja database",
  "Git & GitHub untuk pemula",
  "Apa itu framework?",
  "Cara deploy website"
];

function showResults() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let resultBox = document.getElementById("resultBox");

  if (input === "") {
    resultBox.style.display = "none";
    return;
  }

  let filtered = codingTopics.filter(topic =>
    topic.toLowerCase().includes(input)
  );

  resultBox.innerHTML = filtered.length 
    ? filtered.map(t => `<p>${t}</p>`).join("")
    : "<p>Tidak ditemukan...</p>";

  resultBox.style.display = "block";
}

function randomTopic() {
  let topic = codingTopics[Math.floor(Math.random() * codingTopics.length)];
  document.getElementById("resultBox").innerHTML = `<p>${topic}</p>`;
  document.getElementById("resultBox").style.display = "block";
}

function clearSearch() {
  document.getElementById("searchInput").value = "";
  document.getElementById("resultBox").style.display = "none";
}
