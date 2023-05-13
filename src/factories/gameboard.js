const BOARD_SIZE = 10;

function GameBoard(){
    // Represent the game board as a 2d array of objects.
    const board = Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(null));

    // place ship that starts at (x0,y0) and ends at (x1,y1).
    const placeShip = (ship, x, y, direction) => {
        for(let i = 0; i < ship.length; i++){
            if (x < 0 || x >= BOARD_SIZE || y < 0 || y >= BOARD_SIZE) {
                throw new Error('Invalid ship placement: coordinates are out of bounds.');
            }
        
            if (board[x][y]) {
                throw new Error('Invalid ship placement: overlapping ships.');
            }


            board[x][y] = ship;
            switch(direction){
                case 'right':
                    y = y + 1;
                case 'left':
                    y = y - 1;
                case 'down':
                    x = x - 1;
                case 'up':
                    x = x + 1;
            }
            i++;
        }       
    }

    return {
        board,
        placeShip
    }
}

export {GameBoard};