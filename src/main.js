import './style.css';
import {GameBoard} from './factories/gameboard';
import {Player} from './factories/player';
import {Ship} from './factories/ship';
import {Dom} from './dom';

const player = Player();
const computerPlayer = Player();
let turn = 1;

function game() {
    populateGameBoard(player.playerGameBoard);
    populateGameBoard(computerPlayer.playerGameBoard);
    
    Dom.renderShips(player.playerGameBoard.getBoard(), 'player');
    Dom.renderShips(computerPlayer.playerGameBoard.getBoard(), 'computer');
    Dom.setAttackCallback(attack);
    Dom.displayOnMsgBoard("Your turn to attack");

}

async function attack(x, y){
    player.attack(computerPlayer, x, y);
    Dom.renderShips(computerPlayer.playerGameBoard.getBoard(), 'computer');
    Dom.displayOnMsgBoard("Computer is attacking.");
    await new Promise((resolve) => {
        setTimeout(() => {
            
            computerPlayer.computerAttack(player);
            resolve();
        }, 1000);
    }) 
    Dom.displayOnMsgBoard("Your turn to attack");
    Dom.renderShips(player.playerGameBoard.getBoard(), 'player');
    
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

