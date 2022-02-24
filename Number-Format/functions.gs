function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Greeting')
    .addItem('Get Format A1', 'myFunction')    
    .addToUi();
}

function myFunction() {

  var spreadsheet = SpreadsheetApp.getActive();
  var cell = spreadsheet.getRange('A1');
  Browser.msgBox(cell.getNumberFormat()); 

}