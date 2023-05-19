
function Ship(type, length){

    let damage = 0;

    const hit = () => {
        damage++;
    }

    const isSunk = () => {
        return damage == length;
    }

    const getTakenDamage = () => {
        return damage;
    }

    

    return {
        type, 
        length, 
        hit,
        isSunk,
        getTakenDamage
    }
}

export {Ship};