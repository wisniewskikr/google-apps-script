function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Greeting')
    .addItem('Merge Cells A1 and A2', 'merge') 
    .addItem('Separate Cells A1 and A2', 'separate')    
    .addToUi();

}

function merge() {
  
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange("A1:A2").merge();
  spreadsheet.getRange('A1').setValue("Hello World");

}

function separate() {
  
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange("A1:A2").breakApart();
  spreadsheet.getRange('A1').setValue("Hello World");

}