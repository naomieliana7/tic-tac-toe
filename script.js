const cells = document.querySelectorAll(".cells");
const winMessage = document.getElementById('mensaje');
const reiniciar =document.getElementById('reset');
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]; 


let currentPlayer = "X";
let gameEnd = false;
reiniciar.addEventListener('click', reinicio);

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    if (gameEnd) {
      return;
    }
    if (cell.textContent === "") {
      cell.textContent = currentPlayer;
      if (checkWin()) {
          gameEnd = true;
          let mensaje = currentPlayer + ' es el ganador!'
          winMessage.innerHTML = mensaje; 
          
          
      } else if (checkTie()) {
          gameEnd = true;
          winMessage.innerHTML = "Excelente juego, es un empate!"
         
      } else {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  });
});

function checkWin() {
//en base a nuestra constante winConditions verificamos si la posición del tablero muestra alguna victoria.
  return winConditions.some(condition => {
    return condition.every(index => {
      return cells[index].textContent === currentPlayer;
    });
  });
}

function checkTie() {
//en base a nuestras celdas del tablero verificamos que todas las celdas estén ocupadas por alguna ficha.
  return Array.from(cells).every(cell => {
    return cell.textContent !== "";
  });
}

function reinicio(){
  cells.forEach(function(cell){
    cell.textContent="";
    cell.classList.remove("X", "O");

  });
  winMessage.innerHTML="";
  currentPlayer = "X";
  let gameEnd = false;
reiniciar.addEventListener('click', reinicio);

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    if (gameEnd) {
      return;
    }
    if (cell.textContent === "") {
      cell.textContent = currentPlayer;
      if (checkWin()) {
          gameEnd = true;
          let mensaje = currentPlayer + ' es el ganador!'
          winMessage.innerHTML = mensaje; 
          
          
      } else if (checkTie()) {
          gameEnd = true;
          winMessage.innerHTML = "Excelente juego, es un empate!"
         
      } else {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  });
});
}

