function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Greeting')
    .addItem('Add Header', 'myFunction')    
    .addToUi();
}

function myFunction() {

  var spreadsheet = SpreadsheetApp.getActive();

  spreadsheet.getRange('A1:C1')
    .setValue("Hello World")
    .setBackground('#4c1130')
    .setFontColor('#ffffff')
    .setFontWeight('bold');

  spreadsheet.setFrozenRows(1);  

}