function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Greeting')
    .addItem('Add One Row', 'addOneRow')  
    .addItem('Add Three Rows', 'addThreeRows')  
    .addItem('Extend to 5 000 Rows', 'extendRowsToFiveThousend')
    .addItem('Extend to 10 000 Rows', 'extendRowsToTenThousend')  
    .addToUi();
}

function addOneRow() {

  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();

  var lastRow = sheet.getMaxRows();
  sheet.insertRowAfter(lastRow);

}

function addThreeRows() {

  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();

  var lastRow = sheet.getMaxRows();
  sheet.insertRowsAfter(lastRow, 3);

}

function extendRowsToFiveThousend() {

  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();

  var lastRow = sheet.getMaxRows();
  var missingRows = 5000 - lastRow;
  sheet.insertRowsAfter(lastRow, missingRows);

}

function extendRowsToTenThousend() {

  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();

  var lastRow = sheet.getMaxRows();
  var missingRows = 10000 - lastRow;
  sheet.insertRowsAfter(lastRow, missingRows);

}