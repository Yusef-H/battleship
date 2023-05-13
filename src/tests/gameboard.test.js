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

  
});