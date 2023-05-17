
const Dom = (() =>  {
    const board1 = document.getElementById('board1');
    const board2 = document.getElementById('board2');

    initializeBoards();

    function initializeBoards(){
        generateCells(board1, false);
        generateCells(board2, true);
    }

    function generateCells(board, isEnemy){
        for(let i = 0; i < 100; i++){
            const cell = document.createElement('div');
            if(isEnemy)
                cell.addEventListener('click', handleClick);
            board.appendChild(cell);
        }
    }

    function handleClick(e){
        const cell = e.target; // Get the clicked cell element
        const index = Array.from(cell.parentNode.children).indexOf(cell); // Get the index of the clicked cell

        // Calculate the x and y coordinates based on the index
        const {x, y} = getCordsFromIdx(index);
        
        console.log('Clicked cell:', x, y);
    }

    function renderShips(fleet, caller){
        for(let x = 0; x < fleet.length; x++){
            for(let y = 0; y < fleet[0].length; y++){
                    if(fleet[x][y] != null && fleet[x][y] != 'Missed' && fleet[x][y] != 'Hit'){
                        let index = getCellIdxFromCords(x, y);
                        let board = caller == 'player' ? board1 : board2;
                        const cells = Array.from(board.children);
                        cells[index].style = "background-color: red;";
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

    return{
        renderShips
    }
})();

export {Dom};

