var body = document.getElementById('Sieb');
var rowInput = document.getElementById('row-input');
var columnInput = document.getElementById('column-input');
var goButton = document.getElementById('go-button');
var nextStepButton = document.getElementById('next-step-button');
var insertNumberButton = document.getElementById('insert-number-button');

goButton.onclick = function () {

    const tableElement = document.createElement('table');
    body.appendChild(tableElement);

    var tableRowElement = document.createElement('tr');

    var numberOfRows = 1;
    var numberOfCells = 1;
    var myRow = new Number(rowInput.value);
    var myColumn = new Number(columnInput.value);
    var numberOfColumns = 1;
    do {

        do {
            tableElement.appendChild(tableRowElement);
            numberOfColumns += 1;

        }
        while (numberOfColumns <= myColumn + 1);
        var tableRowElement = document.createElement('tr');

        tableElement.appendChild(tableRowElement);
        numberOfRows += 1;
    }
    while (numberOfRows != myRow + 1);

    numberOfCells = 1;
    calculatedNumberOfCells = myRow * myColumn;
    var columnCounter = 1;

    insertNumberButton.onclick = function () {
        // if (numberOfRows != myRow + 1) {
        //     var tableRowElement = document.createElement('tr');
        //     tableElement.appendChild(tableRowElement);
        //     numberOfRows += 1;
        // }
        if (numberOfCells <= calculatedNumberOfCells) {
            var tableCellElement = document.createElement('td');
            tableRowElement.appendChild(tableCellElement);
            textElement = document.createTextNode(numberOfCells);
            tableCellElement.appendChild(textElement);
            tableCellElement.id = 'id' + numberOfCells;
            
            myColumn = new Number(columnInput.value);
            numberOfCells += 1;

            if (columnCounter != myColumn) {

                columnCounter += 1;
            }
            else {
                tableRowElement = document.createElement('tr');
                tableElement.appendChild(tableRowElement);
                columnCounter = 1;
            }
        }
    }

    // var myCell = numberOfCells;

    // if (idOfCell + 1 <= myCell) {

    // nextStepButton.onclick = function () {

    // var idOfCell = 1;
    // numberOfCells = 1;

    // var currentCell = document.getElementById('currentCellId');

    // if (idOfCell == 1) {
    //     var hideNrOne = document.getElementById('id1');
    //     hideNrOne.style.visibility = "hidden";
    //     idOfCell += 1;
    // }

    // else {

    //     var idOfLastCell = idOfCell - 1;

    //     var redCell = document.getElementById('id' + idOfCell);
    //     redCell.style.backgroundColor = "red";
    //     redCell.style.color = "white";

    //     if (idOfCell != 1 && idOfCell != 2) {
    //         var notRedCell = document.getElementById('id' + idOfLastCell);
    //         notRedCell.style.backgroundColor = "white";
    //         notRedCell.style.color = "black";
    //     }

    //     idOfLastCell += 1;
    //     currentCell += 1;
    //     idOfCell += 1;
    //}
    // }
    // }
}
