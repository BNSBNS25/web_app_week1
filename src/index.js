let board = document
  .getElementById("board")
  .getElementsByClassName("game-field")[0];

let progress = document
  .getElementById("board")
  .getElementsByClassName("determinate")[0];
let perc = 0;
let player = 1;
window.setInterval(function() {
  if (perc === 100) {
    perc = 0;
    player = (player + 1) % 2;
  }
  progress.style.width = perc + "%";
  perc++;
}, 100);

for (let i = 0; i < 5; i++) {
  let row = document.createElement("div");
  row.classList.add("row");
  for (let j = 0; j < 5; j++) {
    let col = document.createElement("div");
    col.classList.add("col");
    col.classList.add("s1");
    row.append(col);
  }
  board.append(row);
}

board.addEventListener("mousedown", function(ev) {
  let div = ev.target;
  perc = 0;
  if (player === 1) {
    div.innerHTML = "x";
    div.classList.add("player1");
    div.classList.remove("player2");
  } else {
    div.innerHTML = "o";
    div.classList.add("player2");
    div.classList.remove("player1");
  }
  player = (player + 1) % 2;
});
