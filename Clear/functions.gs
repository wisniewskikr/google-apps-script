function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Greeting')
    .addItem('Clear', 'myFunction')      
    .addToUi();

   writeInCell(); 
}

function myFunction() {

  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();

  sheet.clear();

}

function writeInCell() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1').setValue('Hello World');  
}