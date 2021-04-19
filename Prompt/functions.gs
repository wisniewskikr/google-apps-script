function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Greeting')
    .addItem('Display Hello World', 'myFunction')    
    .addToUi();
}

function myFunction() {
  var ui = SpreadsheetApp.getUi();
  var response = ui.prompt('Enter your name:');

  if (response.getSelectedButton() == ui.Button.OK) {    
    displayHelloWorld(response.getResponseText());
  } else {
    Logger.log('The user clicked the close button in the dialog\'s title bar.');
  }

}

function displayHelloWorld(name) {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('Hello World: ' + name);
}