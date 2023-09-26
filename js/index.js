var body = document.getElementById('Sieb');
var rowInput = document.getElementById('row-input');
var columnInput = document.getElementById('column-input');
var goButton = document.getElementById('go-button');

goButton.onclick = function(){

    const tableElement= document.createElement( 'table');
    body.appendChild( tableElement);


    var tableRowElement = document.createElement( 'tr');

    var numberOfRows = 1;
    var numberOfColumns = 1;
    var myRow = new Number(rowInput.value);
    var myColumn = new Number(columnInput.value);
    var rowsInTable = 1;

    do{

        var tableCellElement = document.createElement( 'td');
        textElement = document.createTextNode(numberOfColumns);
        tableCellElement.appendChild(textElement);
        tableRowElement.appendChild( tableCellElement);
        numberOfColumns = numberOfColumns + 1;
        tableElement.appendChild(tableRowElement);  

        if(numberOfColumns % myColumn == 0 && numberOfColumns / myColumn == 1 && numberOfRows <= myRow){
            var tableRowElement = document.createElement( 'tr');
            rowsInTable = rowsInTable + 1;
            tableElement.appendChild(tableRowElement);  
        }

    }
    while(numberOfColumns  != myColumn);



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
