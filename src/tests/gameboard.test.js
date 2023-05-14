import { GameBoard } from '../factories/gameboard';
import { Ship } from '../factories/ship';



describe('GameBoard', () => {
  let gameBoard;
  let ship;

  beforeEach(() => {
    gameBoard = GameBoard();
    ship = Ship('cruiser', 3);
  });

  test('Place ship to right direction', () => {
    gameBoard.placeShip(ship, 0, 0, 'right');
    
    expect(gameBoard.board[0][0]).toEqual(ship);
    expect(gameBoard.board[0][1]).toEqual(ship);
    expect(gameBoard.board[0][2]).toEqual(ship);
    
  })

  test('Place ship to left direction', () => {
    gameBoard.placeShip(ship, 0, 3, 'left');
    
    expect(gameBoard.board[0][3]).toEqual(ship);
    expect(gameBoard.board[0][2]).toEqual(ship);
    expect(gameBoard.board[0][1]).toEqual(ship);
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
