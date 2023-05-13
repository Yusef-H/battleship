import { Ship } from '../factories/ship';

describe('Ship', () => {
    let ship;

    beforeEach(() => {
        ship = Ship('Cruiser', 3);
    });

    test('creates a ship with the correct type and length', () => {
        expect(ship.type).toBe('Cruiser');
        expect(ship.length).toBe(3);
    });

    test('increments damage when hit', () => {
        ship.hit();
        expect(ship.getTakenDamage()).toBe(1);

        ship.hit();
        expect(ship.getTakenDamage()).toBe(2);
    });

    test('returns true for isSunk when damage equals length', () => {
        expect(ship.isSunk()).toBe(false);

        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });

    test('returns false for isSunk when damage is less than length', () => {
        expect(ship.isSunk()).toBe(false);

        ship.hit();
        expect(ship.isSunk()).toBe(false);
    });
});