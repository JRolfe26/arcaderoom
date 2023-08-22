const board = document.createElement('div');
board.style.width = '20cm';
board.style.height = '20cm';
board.style.display = 'grid';
board.style.gridTemplateColumns = 'repeat(10, 2cm)';
board.style.gridTemplateRows = 'repeat(10, 2cm)';
for (let i = 0; i < 100; i++) {
    const square = document.createElement('div');
    square.style.width = '2cm';
    square.style.height = '2cm';
    if (Math.floor(i / 10) % 2 === 0) {
        square.style.backgroundColor = i % 2 === 0 ? 'brown' : 'white';
    } else {
        square.style.backgroundColor = i % 2 === 0 ? 'white' : 'brown';
    }
    board.appendChild(square);
}
document.body.appendChild(board);
