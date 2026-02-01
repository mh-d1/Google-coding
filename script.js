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
// ================================
//  TEMPAT KAMU ISI PERTANYAAN & JAWABAN
// ================================
const qa = {
  "apa itu html": "HTML (HyperText Markup Language) adalah bahasa dasar untuk membuat struktur halaman web.",
  "belajar css dari nol": "CSS digunakan untuk mengatur tampilan website seperti warna, layout, ukuran, dan dekorasi.",
  "javascript dasar untuk pemula": "JavaScript membuat website menjadi interaktif, seperti tombol, animasi, event, dan logika.",
  "frontend vs backend": "Frontend adalah tampilan website. Backend adalah logika server, database, dan API.",
  "react js vs next js": "React adalah library UI. Next.js adalah framework React dengan fitur SSR, routing, dan SEO lebih baik.",
  "cara membuat api": "API adalah jembatan data. Kamu bisa membuatnya dengan Express.js, Laravel, atau Next.js API Routes.",
  "cara kerja database": "Database menyimpan data. Query digunakan untuk membaca, menulis, update, dan delete data.",
  "git & github untuk pemula": "Git adalah version control. GitHub tempat menyimpan repo online untuk kolaborasi.",
  "apa itu framework": "Framework adalah paket alat siap pakai untuk mempercepat pengembangan.",
  "cara deploy website": "Deploy dapat ke GitHub Pages, Netlify, atau Vercel agar website bisa dibuka online."
};

// Convert keys biar gampang dicari
const questions = Object.keys(qa);


// ================================
//  FUNGSI SEARCH
// ================================
function showResults() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let resultBox = document.getElementById("resultBox");

  if (input === "") {
    resultBox.style.display = "none";
    return;
  }

  let filtered = questions.filter(q =>
    q.toLowerCase().includes(input)
  );

  if (filtered.length === 0) {
    resultBox.innerHTML = "<p>Tidak ditemukan...</p>";
  } else {
    resultBox.innerHTML = filtered
      .map(q => `<p class="item" onclick="showAnswer('${q}')">${q}</p>`)
      .join("");
  }

  resultBox.style.display = "block";
}


// ================================
//  MENAMPILKAN JAWABAN PERTANYAAN
// ================================
function showAnswer(question) {
  let resultBox = document.getElementById("resultBox");
  resultBox.innerHTML = `
    <h3>${question}</h3>
    <p>${qa[question]}</p>
    <button onclick="goBack()">Kembali</button>
  `;
}

// tombol Kembali ke list search
function goBack() {
  showResults();
}


// ================================
//  TOMBOL TOPIK ACAK
// ================================
function randomTopic() {
  let q = questions[Math.floor(Math.random() * questions.length)];
  showAnswer(q);
  document.getElementById("resultBox").style.display = "block";
}


// ================================
//  CLEAR
// ================================
function clearSearch() {
  document.getElementById("searchInput").value = "";
  document.getElementById("resultBox").style.display = "none";
}
