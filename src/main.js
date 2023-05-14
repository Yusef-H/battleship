import './style.css';
import {GameBoard} from './factories/gameboard';
import {Player} from './factories/player';
import {Ship} from './factories/ship';


function game() {
    const player1 = Player(1);
    const player2 = Player(2);
    populateGameBoard(player1.playerGameBoard);
    populateGameBoard(player2.playerGameBoard);
    console.log(player1.playerGameBoard.getBoard());
}



function populateGameBoard(playerGameBoard){
    const carrier = Ship('carrier', 5);
    const battleship = Ship('battleship', 4);  
    const cruiser = Ship('cruiser', 3);
    const submarine = Ship('submarine', 3);
    const destroyer = Ship('destroyer', 2);

    playerGameBoard.placeShip(carrier, 0, 0, 'down');
    playerGameBoard.placeShip(battleship, 9, 0, 'right');
    playerGameBoard.placeShip(cruiser, 2, 2, 'up');
    playerGameBoard.placeShip(submarine, 0, 9, 'down');
    playerGameBoard.placeShip(destroyer, 9, 9, 'up');
}

game();