function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Greeting')
    .addItem('Add One Column', 'addOneColumn')  
    .addItem('Add Three Columns', 'addThreeColumns')  
    .addToUi();
}

function addOneColumn() {

  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();

  var lastColumn = sheet.getMaxColumns();
  sheet.insertColumnAfter(lastColumn);

}

function addThreeColumns() {

  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();

  var lastColumn = sheet.getMaxColumns();
  sheet.insertColumnsAfter(lastColumn, 3);

}