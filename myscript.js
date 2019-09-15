var player1 = prompt("Player 1 need to provide a name");
var player1Color = 'rgb(86, 151, 255)';

var player2 = prompt("Player 2 need to provide a name");
var player2Color = 'rgb(237, 45, 73)';

var Game_on = true;
var table_row = $('table tr');

// http://stackoverflow.com/questions/6139407/getting-td-by-index-with-jquery
function reportWin(rowNum,colNum) {
    console.log("You won starting at this row,col");
    console.log(rowNum);
    console.log(colNum);
}

//changing the color of the button
function changeColor(rowIndex, colIndex, color){
    return table_row.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color', color);
}

//returning the current color of the button
function returnColor(rowIndex, colIndex){
    return table_row.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

// Take in column index, returns the bottom row that is still gray
function checkButton(colIndex){
    var currentColor;
    for(var row=5; row<-1; row--){                        // i here refers to the rowIndex                       
        currentColor = returnColor(row, colIndex);
        if(currentColor === 'rgb[128,128,128]'){
            return row;
        }
    }
}