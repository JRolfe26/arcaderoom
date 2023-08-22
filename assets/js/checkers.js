const board = document.createElement('div');
board.style.width = '20cm';
board.style.height = '20cm';
board.style.display = 'flex';
board.style.flexWrap = 'wrap';

let currentPlayer = 1;
const squares = [];

for (let i = 0; i < 100; i++) {
  const square = document.createElement('div');
  square.style.width = '2cm';
  square.style.height = '2cm';
  square.style.backgroundColor = (i + Math.floor(i / 10)) % 2 === 0 ? 'white' : 'brown';
  if (square.style.backgroundColor === 'brown' && (i < 40 || i >= 60)) {
    const piece = document.createElement('div');
    piece.style.width = '1.5cm';
    piece.style.height = '1.5cm';
    piece.style.borderRadius = '50%';
    piece.style.backgroundColor = i < 40 ? 'black' : 'white';
    piece.style.margin = '.25cm';
    piece.player = i < 40 ? 1 : 2;
    piece.onclick = function() {
      if (this.player === currentPlayer) {
        if (document.querySelector('.selected')) {
          document.querySelector('.selected').classList.remove('selected');
        }
        this.classList.add('selected');
        highlightMoves(this);
      }
    };
    square.appendChild(piece);
  }
  square.onclick = function() {
    const selectedPiece = document.querySelector('.selected');
    if (selectedPiece && this.children.length === 0 && this.style.backgroundColor === 'yellow') {
      this.appendChild(selectedPiece);
      selectedPiece.classList.remove('selected');
      currentPlayer = currentPlayer === 1 ? 2 : 1;
      clearHighlights();
    }
  };
  squares.push(square);
  board.appendChild(square);
}

document.body.appendChild(board);

function highlightMoves(piece) {
  clearHighlights();
  const index = squares.indexOf(piece.parentNode);
  const row = Math.floor(index / 10);
  const col = index % 10;
  
   if (currentPlayer ===1) {
     if(row<9 && col>0){
       const targetSquare=squares[index+9];
       if(targetSquare.children.length===0){
         targetSquare.style.backgroundColor='yellow';
       }
     }
     if(row<9 && col<9){
       const targetSquare=squares[index+11];
       if(targetSquare.children.length===0){
         targetSquare.style.backgroundColor='yellow';
       }
     }
   } else {
     if(row>0 && col>0){
       const targetSquare=squares[index-11];
       if(targetSquare.children.length===0){
         targetSquare.style.backgroundColor='yellow';
       }
     }
     if(row>0 && col<9){
       const targetSquare=squares[index-9];
       if(targetSquare.children.length===0){
         targetSquare.style.backgroundColor='yellow';
       }
     }
   }
}

function clearHighlights() {
squares.forEach(square => {
if(square.style.backgroundColor==='yellow'){
square.style.backgroundColor='brown'
}
})
}
