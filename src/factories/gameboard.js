

const BOARD_SIZE = 10;

function GameBoard(){
    // Represent the game board as a 2d array of objects.
    let board = Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(null));

    // place ship starting at (x,y) according to length and direction.
    const placeShip = (ship, x, y, direction) => {
        if(!isValidPositioning(ship, x, y, direction)){
            return false;
        }
        for(let i = 0; i < ship.length; i++){
            board[x][y] = ship;
            switch(direction){
                case 'right':
                    y++;
                    break;
                case 'left':
                    y--;
                    break;
                case 'down':
                    x++;
                    break;
                case 'up':
                    x--;
                    break;
            }
        }   
        return true;    
    }

    function isValidPositioning(ship, x, y, direction){
        for(let i = 0; i < ship.length; i++){
            if (x < 0 || x >= BOARD_SIZE || y < 0 || y >= BOARD_SIZE) {
                return false;
            }   
        
            if (board[x][y]) {
                return false;
            }
            switch(direction){
                case 'right':
                    y++;
                    break;
                case 'left':
                    y--;
                    break;
                case 'down':
                    x++;
                    break;
                case 'up':
                    x--;
                    break;
            }
        }
        return true;
    }

    /* Randomly place ship in the board */ 
    function randomPlaceShip(ship) {
        const boardSize = 10;
      
        let shipPlaced = false;
        // tries until a valid ship placement happens.
        while (!shipPlaced) {
            let direction = Math.random() < 0.5 ? 'horizontal' : 'vertical'; // Randomly choose the ship's direction
        
            let startX, startY;
            if (direction === 'horizontal') {
                startX = Math.floor(Math.random() * (boardSize - ship.length + 1));
                startY = Math.floor(Math.random() * boardSize);
            } else {
                startX = Math.floor(Math.random() * boardSize);
                startY = Math.floor(Math.random() * (boardSize - ship.length + 1));
            }
            // Check if the selected positions are available for placing the ship
            direction = direction === 'horizontal' ? 'right' : 'up';
            if(placeShip(ship, startX, startY, direction)){
                shipPlaced = true;
            }
        }
    }

    const receiveAttack = (x, y) => {
        if(board[x][y] != null && board[x][y] !== 'Missed' && board[x][y] !== 'Hit'){
            const shipDamaged = board[x][y];
            shipDamaged.hit();
            board[x][y] = 'Hit';
            return true;
        }
        else if(board[x][y] == null){
            board[x][y] = 'Missed';
            return true;
        }
        else{
            return false;
        }
    }

    const isAllSunk = () => {
        for(let x = 0; x < BOARD_SIZE; x++){
            for(let y = 0; y < BOARD_SIZE; y++){
                if(board[x][y] !== 'Hit' && board[x][y] !== 'Missed' && board[x][y] != null){
                    return false;
                }
            }
        }
        return true;
    }

    const getBoard = () => {
        return board;
    }

    const resetGameBoard = () => {
        board = Array(BOARD_SIZE).fill(null).map(() => Array(BOARD_SIZE).fill(null));
    }

    return {
        getBoard,
        placeShip,
        receiveAttack,
        isAllSunk,
        randomPlaceShip,
        resetGameBoard
    }
}

export {GameBoard};