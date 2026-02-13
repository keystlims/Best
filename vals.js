function openSurprise() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main").classList.remove("hidden");
  document.getElementById("bgMusic").play();
  createHearts();
}

function createHearts() {
  for (let i = 0; i < 25; i++) {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";
    document.body.appendChild(heart);
  }
}