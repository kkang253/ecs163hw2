//game data store

//chosen data
let arrGame = new Array(9).fill(0); // 0 for empty, 1 for computer, 2 for user

//empty data
let arrEmpty = new Array(9).fill(1); // 1 for empty, 0 for taken

let end = false; // initialize end

//line to check game win/lose/tie
let lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

//user pick square
function userMove(row, col) {

    //check game ended
    if (end==true){
    return;
    
}
    if (arrEmpty[row * 3 + col] == 1) {
        document.getElementById("s" + (row * 3 + col + 1)).innerText = "X";
        arrGame[row * 3 + col] = 2;
        arrEmpty[row * 3 + col] = 0;
        checkWin();
        setTimeout(computerMove, 800);
    }
}


//computer pick squre
function computerMove() {
    // Check if game has ended
    if (end==true){
        return;
    } 

    // check if computer has 2 in a line and the last element in line is empty,
    for (let i=0; i<8; i++){
        let line = [];
        let emptyCount = 0;
        let computerCount = 0;

        for (let j=0; j<3; j++) {
            const square = arrGame[lines[i][j]];

            if (square==0){
                emptyCount++;
            } 
            else if (square==1){
                computerCount++;
            }

            line.push(square);
        }

        if (computerCount==2 && emptyCount==1){
            let k = lines[i][line.indexOf(0)];
            makeComputerMove(k);
            return;
        }
    }

    // check if user has in a line and the last element in line is empty
    for (let i=0; i<8; i++){
        let line = [];
        let emptyCount = 0;
        let userCount = 0;

        for (let j=0; j<3; j++){
            const square = arrGame[lines[i][j]];

            if (square==0){
                emptyCount++;
            }
            else if (square==2){
                userCount++;
            }

            line.push(square);
        }

        if (userCount==2 && emptyCount==1){
            let k = lines[i][line.indexOf(0)];
            makeComputerMove(k);
            return;
        }
    }

    //computer choose (1,1) if empty
    if (arrEmpty[4]==1){
        makeComputerMove(4);
        return;
    }

    // randomly select an empty square if all other not executed
    let emptySquare = [];
    for (let k=0; k<arrEmpty.length; k++){
        if (arrEmpty[k]==1) {
            emptySquare.push(k);
        }
    }
    let rand = Math.floor(Math.random()*emptySquare.length);
    makeComputerMove(emptySquare[rand]);
}

//update arrays and display of computerMove
function makeComputerMove(k) {
    document.getElementById("s"+(k+1)).innerText = "O";
    arrGame[k] = 1;
    arrEmpty[k] = 0;
    checkWin();
    }

//check ended or not & result
function checkWin() {
    for (let i = 0; i < 8; i++) {
        let line = [];
        for (let j = 0; j < 3; j++) {
            line.push(arrGame[lines[i][j]]);
        }

        if (line.every(x=>x==1)) { //computer won
            end = true;
            document.getElementById("gameResult").innerText = "Computer won!";
            return;
        } 

        else if (line.every(x=>x==2)) { //user won
            end = true;
            document.getElementById("gameResult").innerText = "You won!";
            return;
        }
    }
    
    //tie, force end
    if (arrEmpty.every(x => x == 0)) {
        end = true;
        document.getElementById("gameResult").innerText = "It's a tie!";
        return;
    }
}


