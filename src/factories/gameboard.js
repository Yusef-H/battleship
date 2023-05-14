const BOARD_SIZE = 10;

function GameBoard(){
    // Represent the game board as a 2d array of objects.
    const board = Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(null));

    // place ship starting at (x,y) according to length and direction.
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
                    y++;
                    break;
                case 'left':
                    y--;
                    break;
                case 'down':
                    x--;
                    break;
                case 'up':
                    x++;
                    break;
            }
        }       
    }

    const receiveAttack = (x, y) => {
        if(board[x][y] && board[x][y] !== 'Missed'){
            const shipDamaged = board[x][y];
            shipDamaged.hit();
        }
        else{
            board[x][y] = 'Missed';
        }
    }

    return {
        board,
        placeShip,
        receiveAttack
    }
}

export {GameBoard};