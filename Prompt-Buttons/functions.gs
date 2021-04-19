function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Greeting')
    .addItem('Display Hello World', 'myFunction')    
    .addToUi();
}

function myFunction() {
  var ui = SpreadsheetApp.getUi();
  var response = ui.prompt('May I know your name?', ui.ButtonSet.YES_NO);

  if (response.getSelectedButton() == ui.Button.YES) {
    Logger.log('The user\'s name is %s.', response.getResponseText());
    displayHelloWorld(response.getResponseText());
  } else if (response.getSelectedButton() == ui.Button.NO) {
    Logger.log('The user didn\'t want to provide a name.');
    displayHelloWorld("Stranger");
  } else {
    Logger.log('The user clicked the close button in the dialog\'s title bar.');
  }

}

function displayHelloWorld(name) {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('Hello World: ' + name);
}