function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Greeting')
    .addItem('Display Hello World', 'myFunction')    
    .addToUi();
}

function myFunction() {
  var ui = SpreadsheetApp.getUi();
  var response = ui.alert('Display test "Hello World" in cell A!?', ui.ButtonSet.YES_NO);

  if (response == ui.Button.YES) {
    Logger.log('The user clicked "Yes."');
    displayHelloWorld();
  } else {    
    Logger.log('The user clicked "No" or the close button in the dialog\'s title bar.');
    removeHelloWorld();
  }

};

function displayHelloWorld() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('Hello World');
}

function removeHelloWorld() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue(null);
}