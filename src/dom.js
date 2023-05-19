import {Player} from './factories/player';
const Dom = (() =>  {
    const board1 = document.getElementById('board1');
    const board2 = document.getElementById('board2');
    const msgBoard = document.getElementById('msg-board');
    let attackCallback = null; // Callback function for handling attacks

    initializeBoards();

    function initializeBoards(){
        generateCells(board1, false);
        generateCells(board2, true);
    }

    function generateCells(board, isEnemy){
        for(let i = 0; i < 100; i++){
            const cell = document.createElement('div');
            if(isEnemy){
                cell.addEventListener('click', handleClick.bind(null, i));
                cell.classList.add('invisible');
            }
            board.appendChild(cell);
        }
    }

    function handleClick(index){
        // Calculate the x and y coordinates based on the index
        const {x, y} = getCordsFromIdx(index);
        attackCallback(x, y);
        
    }

    function renderShips(fleet, caller){
        for(let x = 0; x < fleet.length; x++){
            for(let y = 0; y < fleet[0].length; y++){
                let index = getCellIdxFromCords(x, y);
                let board = caller == 'player' ? board1 : board2;
                let ship = fleet[x][y];
                const cells = Array.from(board.children);
                if(ship != null && ship != 'Missed' && ship != 'Hit'){   
                    if(caller !== 'computer')
                        cells[index].style = "background-color: red;";   
                }
                if(ship == 'Hit'){
                    cells[index].style = "background-color: red;"
                    cells[index].innerHTML = 'X';
                }
                if(ship == 'Missed'){
                    cells[index].innerHTML = '&middot';
                }
                
            }
        }
    }


    function getCellIdxFromCords(x, y){
        return x*10 + y;
    }

    function getCordsFromIdx(index){
        return {x: Math.floor(index / 10), y: index % 10};
    }

    function displayOnMsgBoard(text){
        msgBoard.innerHTML = text;
    }

    function setAttackCallback(callback){
        attackCallback = callback;
    }

    return{
        renderShips,
        displayOnMsgBoard,
        setAttackCallback
    }
})();

export {Dom};

