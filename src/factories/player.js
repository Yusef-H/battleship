import { GameBoard } from "./gameboard";

function Player(id){
    let playerGameBoard = GameBoard();

    const attack = (enemy, x, y) => {
        enemy.playerGameBoard.receiveAttack(x, y);
    }

    const computerAttack = (enemy) => {
        let randomCords = getRandomCoordinates();
        // keep getting random cords until we get valid ones.
        while(enemy.playerGameBoard.getBoard()[randomCords.x][randomCords.y] == 'Hit' ||
              enemy.playerGameBoard.getBoard()[randomCords.x][randomCords.y] == 'Missed'){
                randomCords = getRandomCoordinates();
        }
        attack(enemy, randomCords.x, randomCords.y);
        //for testing
        return randomCords;
    }

    const getRandomCoordinates = () => {
        const x = Math.floor(Math.random() * 10); 
        const y = Math.floor(Math.random() * 10); 
      
        return { x, y };
    }

    return {
        id,
        playerGameBoard,
        attack,
        computerAttack
    }
}

export {Player};