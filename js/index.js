var body = document.getElementById('Sieb');
var rowInput = document.getElementById('row-input');
var columnInput = document.getElementById('column-input');
var goButton = document.getElementById('go-button');
var nextStepButton = document.getElementById('next-step-button');

goButton.onclick = function () {

    const tableElement = document.createElement('table');
    body.appendChild(tableElement);

    var tableRowElement = document.createElement('tr');

    var numberOfRows = 1;
    var numberOfCells = 1;
    var myRow = new Number(rowInput.value);
    var myColumn = new Number(columnInput.value);

    do {

        var numberOfColumns = 1;

        do {

            var tableCellElement = document.createElement('td');
            textElement = document.createTextNode(numberOfCells);
            tableCellElement.appendChild(textElement);
            tableRowElement.appendChild(tableCellElement);
            tableElement.appendChild(tableRowElement);
            numberOfColumns += 1;
            tableCellElement.id = 'id' + numberOfCells;
            numberOfCells += 1;

        }
        while (numberOfColumns != myColumn + 1);

        var tableRowElement = document.createElement('tr');
        tableElement.appendChild(tableRowElement);
        numberOfRows = numberOfRows + 1;

    }
    while (numberOfRows != myRow + 1);

    nextStepButton.onclick = function () {

        var currentCell = document.getElementById('currentCellId');

        var idOfCell = 1;
        var idOfLastCell = idOfCell - 1;
        var myCell = numberOfCells;
        numberOfCells = 1;

        var hideNrOne = document.getElementById('id1');
        hideNrOne.style.visibility = "hidden";

        while (idOfCell <= myCell) {

            //const myTimeout = setTimeout(redCellNow, 1000);

            //function redCellNow(){

            var redCell = document.getElementById('id' + idOfCell);
            redCell.style.backgroundColor = "red";
            redCell.style.color = "white";

            if (idOfCell != 1) {
                var notRedCell = document.getElementById('id' + idOfLastCell);
                notRedCell.style.backgroundColor = "white";
                notRedCell.style.color = "black";
            }

            idOfLastCell += 1;
            currentCell += 1;
            idOfCell += 1;
            // }

            // clearTimeout(myTimeout);




        }
    }
}
