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
    var myRow = new Number(rowInput.value);
    var myColumn = new Number(columnInput.value);
    var numberOfColumns = 0;
    var numberOfCells = 1;
    var calculatedNumberOfCells = myRow * myColumn;
    var columnCounter = 1;

    //Columns einfuegen
    do {
        tableElement.appendChild(tableRowElement);
        numberOfColumns += 1;
    }
    while (numberOfColumns <= myColumn);

    //Button für Zahlen einfuegen
    insertNumberButton.onclick = function () {

        //Zahlen einfuegen
        if (numberOfCells <= calculatedNumberOfCells) {
            var tableCellElement = document.createElement('td');
            tableRowElement.appendChild(tableCellElement);
            textElement = document.createTextNode(numberOfCells);
            tableCellElement.appendChild(textElement);
            tableCellElement.id = 'id' + numberOfCells;

            numberOfCells += 1;

            //Anzahl Columns zaehlen bis es neue Row braucht
            if (columnCounter != myColumn) {
                columnCounter += 1;
            }

            //Neue Row einfuegen
            else {
                tableRowElement = document.createElement('tr');
                tableElement.appendChild(tableRowElement);
                columnCounter = 1;
            }
        }
    }

    var idOfCell = 1;

    //Button für Feld markieren
    nextStepButton.onclick = function () {

        if (idOfCell <= calculatedNumberOfCells) {

            //Feld mit Nr. 1 verstecken
            if (idOfCell == 1) {
                var hideNrOne = document.getElementById('id1');
                hideNrOne.style.visibility = "hidden";
            }

            //Felder anders einfaerben
            else if (idOfCell != 1) {

                var idOfLastCell = idOfCell - 1;

                //ausgewaehltes Feld in anders einfaerben
                var redCell = document.getElementById('id' + idOfCell);
                redCell.style.backgroundColor = "rgb(255, 220, 144)";

                //Das vorherige Feld wieder normal einfaerben
                if ((idOfCell != 1 && idOfCell != 2) || idOfCell == calculatedNumberOfCells) {
                    var notRedCell = document.getElementById('id' + idOfLastCell);
                    notRedCell.style.backgroundColor = "rgb(255, 239, 204)";
                }

                idOfLastCell += 1;
            }

            idOfCell += 1;
        }
    }
}
