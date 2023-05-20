import './style.css';
import {Player} from './factories/player';
import {Ship} from './factories/ship';
import {Dom} from './dom';

const player = Player();
const computerPlayer = Player();
let gameOver = false;

function game() {
    gameOver = false;
    player.playerGameBoard.resetGameBoard();
    computerPlayer.playerGameBoard.resetGameBoard();    
    
    populateGameBoard(player.playerGameBoard);
    populateGameBoard(computerPlayer.playerGameBoard);
    
    Dom.renderShips(player.playerGameBoard.getBoard(), 'player');
    Dom.renderShips(computerPlayer.playerGameBoard.getBoard(), 'computer');
    Dom.setAttackCallback(attack);
    Dom.setGameCallBack(game);
    Dom.displayOnMsgBoard("Your turn to attack");

}

async function attack(x, y){
    if(gameOver){
        return;
    }
    let validAttack = player.attack(computerPlayer, x, y);
    Dom.renderShips(computerPlayer.playerGameBoard.getBoard(), 'computer');
    if(validAttack){
        Dom.displayOnMsgBoard("Computer is attacking.");
        await new Promise((resolve) => {
            setTimeout(() => {
                
                computerPlayer.computerAttack(player);
                resolve();
            }, 1000);
        }) 
        Dom.displayOnMsgBoard("Your turn to attack");
        Dom.renderShips(player.playerGameBoard.getBoard(), 'player');

        let gameResults = isGameOver();
        if(gameResults.end){
            if(gameResults.winner === 'player'){
                Dom.displayOnMsgBoard("You have won the Game!");
            }
            else{
                Dom.displayOnMsgBoard("You have lost! The computer has made all your ships sink!")
            }
            gameOver = true;
        }
    }
    
}

function isGameOver(){
    if(computerPlayer.playerGameBoard.isAllSunk()){
        return {end: true, winner: 'player'};
    }
    else if(player.playerGameBoard.isAllSunk()){   
        return {end: true, winner: 'computer'};
    }
    else{
        return {end: false, winner: 'None'};
    }
}





function populateGameBoard(playerGameBoard){
    const carrier = Ship('carrier', 5);
    const battleship = Ship('battleship', 4);  
    const cruiser = Ship('cruiser', 3);
    const submarine = Ship('submarine', 3);
    const destroyer = Ship('destroyer', 2);

    playerGameBoard.randomPlaceShip(carrier);
    playerGameBoard.randomPlaceShip(battleship);
    playerGameBoard.randomPlaceShip(cruiser);
    playerGameBoard.randomPlaceShip(submarine);
    playerGameBoard.randomPlaceShip(destroyer);
}


game();

