function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Greeting')
    .addItem('Clear Sheet', 'clearSheet') 
    .addItem('Clear Cell A1', 'clearA1')
    .addItem('Clear Validation A2', 'clearValidationA2')        
    .addToUi();

   writeInCell(); 
}

function clearSheet() {

  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();

  sheet.clear();

}

function clearA1() {

  var spreadsheet = SpreadsheetApp.getActive();  
  spreadsheet.getRange('A1').clear();

}

function clearValidationA2() {

  var spreadsheet = SpreadsheetApp.getActive();  
  spreadsheet.getRange('A2').setDataValidation(null);
  spreadsheet.getRange('A2').clear();

}

function writeInCell() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1').setValue('Hello World');  
};
