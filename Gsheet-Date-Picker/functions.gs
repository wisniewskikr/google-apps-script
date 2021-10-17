function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Greeting')
    .addItem('Display Hello World', 'myFunction')    
    .addToUi();
}

function myFunction() {

  var spreadsheet = SpreadsheetApp.getActive();
  var date = spreadsheet.getRange('A2').getValue();

  Browser.msgBox("Hello World: " + date);

}