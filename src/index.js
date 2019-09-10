let board = document.getElementById("board").firstElementChild;
for (let i = 0; i < 5; i++) {
  let tr = document.createElement("tr");
  for (let j = 0; j < 5; j++) {
    let td = document.createElement("td");

    tr.append(td);
  }
  board.append(tr);
}
let player = 1;
board.addEventListener("mousedown", function(ev) {
  let td = ev.target;
  if (player === 1) {
    td.innerHTML = "x";
    td.classList.add("player1");
    td.classList.remove("player2");
  } else {
    td.innerHTML = "o";
    td.classList.add("player2");
    td.classList.remove("player1");
  }
  player = (player + 1) % 2;
});
