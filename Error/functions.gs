function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Greeting')
    .addItem('Display "Hello World"', 'myFunction')    
    .addToUi();
}

function myFunction() {
  
  throw new Error('Hello World Error');
  
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('Hello World');  

}