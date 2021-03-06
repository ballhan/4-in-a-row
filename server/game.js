const initBoard = () => {
  var boardArray = [];
  for (let r = 0; r < 6; r++) {
    let row = [];
    for (let c = 0; c < 7; c++) {
      row.push(null);
    }
    boardArray.push(row);
  }
  return boardArray;
};

const checkVertical = (board) => {
  // Check only if row is 3 or greater
  for (let r = 3; r < 6; r++) {
    for (let c = 0; c < 7; c++) {
      if (board[r][c]) {
        if (
          board[r][c] === board[r - 1][c] &&
          board[r][c] === board[r - 2][c] &&
          board[r][c] === board[r - 3][c]
        ) {
          return board[r][c];
        }
      }
    }
  }
};

const checkHorizontal = (board) => {
  // Check only if column is 3 or less
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 4; c++) {
      if (board[r][c]) {
        if (
          board[r][c] === board[r][c + 1] &&
          board[r][c] === board[r][c + 2] &&
          board[r][c] === board[r][c + 3]
        ) {
          return board[r][c];
        }
      }
    }
  }
};

const checkDiagonalRight = (board) => {
  // Check only if row is 3 or greater AND column is 3 or less
  for (let r = 3; r < 6; r++) {
    for (let c = 0; c < 4; c++) {
      if (board[r][c]) {
        if (
          board[r][c] === board[r - 1][c + 1] &&
          board[r][c] === board[r - 2][c + 2] &&
          board[r][c] === board[r - 3][c + 3]
        ) {
          return board[r][c];
        }
      }
    }
  }
};

const checkDiagonalLeft = (board) => {
  // Check only if row is 3 or greater AND column is 3 or greater
  for (let r = 3; r < 6; r++) {
    for (let c = 3; c < 7; c++) {
      if (board[r][c]) {
        if (
          board[r][c] === board[r - 1][c - 1] &&
          board[r][c] === board[r - 2][c - 2] &&
          board[r][c] === board[r - 3][c - 3]
        ) {
          return board[r][c];
        }
      }
    }
  }
};

const checkDraw = (board) => {
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 7; c++) {
      if (board[r][c] === null) {
        return null;
      }
    }
  }
  return "draw";
};

const checkWin = (board) => {
  return (
    checkVertical(board) ||
    checkDiagonalRight(board) ||
    checkDiagonalLeft(board) ||
    checkHorizontal(board) ||
    checkDraw(board)
  );
};

const updateMove = (move) => {
  return move ? false : true;
};

const updateBoard = (board, column, color) => {
  for (let r = 5; r >= 0; r--) {
    if (!board[r][column]) {
      board[r][column] = color;
      break;
    }
  }
  return board;
};

module.exports = { initBoard, checkWin, updateBoard, updateMove };
