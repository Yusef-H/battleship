import { GameBoard } from '../factories/gameboard';
import { Ship } from '../factories/ship';



describe('GameBoard', () => {
  let gameBoard;
  let ship;
  describe('placeShip function', () =>{
    beforeEach(() => {
      gameBoard = GameBoard();
      ship = Ship('cruiser', 3);
    });
  
    test('Place ship to right direction', () => {
      gameBoard.placeShip(ship, 0, 0, 'right');
      
      expect(gameBoard.getBoard()[0][0]).toEqual(ship);
      expect(gameBoard.getBoard()[0][1]).toEqual(ship);
      expect(gameBoard.getBoard()[0][2]).toEqual(ship);
      
    })
  
    test('Place ship to left direction', () => {
      gameBoard.placeShip(ship, 0, 3, 'left');
      
      expect(gameBoard.getBoard()[0][3]).toEqual(ship);
      expect(gameBoard.getBoard()[0][2]).toEqual(ship);
      expect(gameBoard.getBoard()[0][1]).toEqual(ship);
    })
  
    test('place ship in illegal spot', () => {
      expect(() => {
        gameBoard.placeShip(ship, 0, 0, 'left');
      }).toThrow("Invalid ship placement: coordinates are out of bounds.");
    })
  
    test('overlapping ships', () => {
      expect(() => {
        gameBoard.placeShip(ship, 0, 0, 'right');
        gameBoard.placeShip(ship, 0, 1, 'right');
      }).toThrow("Invalid ship placement: overlapping ships.");
    })
  })

  describe('receiveAttack function', () =>{
    let gameBoard;
    let ship;
    beforeEach(() => {
      gameBoard = GameBoard();
      ship = Ship('carrier', 5);
      gameBoard.placeShip(ship, 0, 0, 'right');
    });

    test('valid attack on ship', () => {
      gameBoard.receiveAttack(0,0);
      expect(ship.getTakenDamage()).toBe(1);

      gameBoard.receiveAttack(0,1);
      expect(ship.getTakenDamage()).toBe(2);
    })

    test('miss', () =>{
      gameBoard.receiveAttack(1,6);
      expect(gameBoard.getBoard()[1][6]).toEqual('Missed');
    })
  })

  describe('allSunk function', () =>{
    let gameBoard;
    let ship1;
    let ship2;
    beforeEach(() => {
      gameBoard = GameBoard();
      ship1 = Ship('carrier', 5);
      ship2 = Ship('cruiser', 3);
      gameBoard.placeShip(ship1, 0, 0, 'right');
      gameBoard.placeShip(ship2, 6, 0, 'down');
    });

    test('allSunk truthy', () => {
      gameBoard.receiveAttack(0, 0);
      gameBoard.receiveAttack(0, 1);
      gameBoard.receiveAttack(0, 2);
      gameBoard.receiveAttack(0, 3);
      gameBoard.receiveAttack(0, 4);
      gameBoard.receiveAttack(6, 0);
      gameBoard.receiveAttack(5, 0);
      gameBoard.receiveAttack(4, 0);
      expect(gameBoard.isAllSunk()).toBeTruthy();
    })

    test('allSunk falsy', () => {
      gameBoard.receiveAttack(0, 0);
      gameBoard.receiveAttack(0, 1);
      gameBoard.receiveAttack(0, 2);
      expect(gameBoard.isAllSunk()).toBeFalsy();
      
      gameBoard.receiveAttack(6, 0);
      gameBoard.receiveAttack(5, 0);
      gameBoard.receiveAttack(4, 0);
      expect(gameBoard.isAllSunk()).toBeFalsy();
    })
  })
  
})
