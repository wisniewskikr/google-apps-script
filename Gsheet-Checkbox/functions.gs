function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Greeting')
    .addItem('Display Messages', 'myFunction')    
    .addToUi();
}

function myFunction() {

  var spreadsheet = SpreadsheetApp.getActive();
  var result = [];
  var checkboxChecked;

  checkboxChecked = spreadsheet.getRange('A2').getValue();
  if (checkboxChecked) {
    result.push(spreadsheet.getRange('B2').getValue())
  }

  checkboxChecked = spreadsheet.getRange('A3').getValue();
  if (checkboxChecked) {
    result.push(spreadsheet.getRange('B3').getValue())
  }

  checkboxChecked = spreadsheet.getRange('A4').getValue();
  if (checkboxChecked) {
    result.push(spreadsheet.getRange('B4').getValue())
  }

  if (result.length == 0) {
    Browser.msgBox("No message selected");
  } else {
    Browser.msgBox(result);
  }
  
}