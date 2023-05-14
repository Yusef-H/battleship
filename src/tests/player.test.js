import {Player} from '../factories/player';
import {GameBoard} from '../factories/gameboard'
import {Ship} from '../factories/ship'

let player1;
let player2;
let ship;
beforeEach(() => {
    player1 = Player(1);
    player2 = Player(2);
    ship = Ship('cruiser', 3);
})

describe('Attack function', () =>{
   
    test('Attack hits enemy', () => {
        player2.playerGameBoard.placeShip(ship, 0, 0, 'right');
        player1.attack(player2, 0, 0);
        expect(player2.playerGameBoard.getBoard()[0][0]).toEqual('Hit');
        player1.attack(player2, 0, 2);
        expect(player2.playerGameBoard.getBoard()[0][2]).toEqual('Hit');
    })

    test('Attack misses enemy', () => {
        player1.attack(player2, 0, 0);
        expect(player2.playerGameBoard.getBoard()[0][0]).toEqual('Missed');
        player2.attack(player1, 0, 0);
        expect(player1.playerGameBoard.getBoard()[0][0]).toEqual('Missed');
    })
})

describe('computer attack function', () =>{
    
    test('attack hits in the random cords', () => {
        let cords = player1.computerAttack(player2);
        expect(player2.playerGameBoard.getBoard()[cords.x][cords.y]).toEqual('Missed');
        cords = player1.computerAttack(player2);
        expect(player2.playerGameBoard.getBoard()[cords.x][cords.y]).toEqual('Missed');
    })

    
})