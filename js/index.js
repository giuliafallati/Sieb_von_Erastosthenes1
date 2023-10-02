var body = document.getElementById('Sieb');
var rowInput = document.getElementById('row-input');
var columnInput = document.getElementById('column-input');
var goButton = document.getElementById('go-button');

goButton.onclick = function(){

    const tableElement= document.createElement( 'table');
    body.appendChild( tableElement);


    var tableRowElement = document.createElement( 'tr');

    var numberOfRows = 1;
    var numberOfCells = 1;
    var myRow = new Number(rowInput.value);
    var myColumn = new Number(columnInput.value);
    var rowsInTable = 1;

    do{

        var numberOfColumns = 1;

        do{

            var tableCellElement = document.createElement( 'td');
            textElement = document.createTextNode(numberOfCells);
            tableCellElement.appendChild(textElement);
            tableRowElement.appendChild( tableCellElement);
            tableElement.appendChild(tableRowElement);  
            numberOfColumns = numberOfColumns + 1;
            numberOfCells = numberOfCells + 1;
            numberOfCells.id  = numberOfCells;
    

            /*if(numberOfColumns == myColumn + 1){
            tableRowElement = document.createElement( 'tr');
            rowsInTable = rowsInTable + 1;
            tableElement.appendChild(tableRowElement);  
            }*/

        }
        while(numberOfColumns  != myColumn + 1);

        var tableRowElement = document.createElement( 'tr');
        tableElement.appendChild(tableRowElement);  
        numberOfRows = numberOfRows + 1; 
        


    }
    while(numberOfRows != myRow + 1);


    var idOfCell = 1;
    var myCell = numberOfCells;
    numberOfCells = 1;

    for (; numberOfCells <= myCell; numberOfCells++){

        document.getElementById(idOfCell);
        
        idOfCell += 1;
    }



   /* do{

        var tableCellElement = document.createElement( 'td');
        textElement = document.createTextNode(numberOfColumns);
        tableCellElement.appendChild(textElement);
        tableRowElement.appendChild( tableCellElement);
        numberOfColumns = numberOfColumns + 1;
        tableElement.appendChild(tableRowElement);  

    }
    while(numberOfColumns -1 != myColumn);
*/
}
