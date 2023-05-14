import { GameBoard } from "./gameboard";

function Player(id){
    let playerGameBoard = GameBoard();

    const attack = (enemy, x, y) => {
        enemy.playerGameBoard.receiveAttack(x, y);
    }

    return {
        id,
        playerGameBoard,
        attack
    }
}

export {Player};