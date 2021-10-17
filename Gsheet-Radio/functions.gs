function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Greeting')
    .addItem('Display Message', 'myFunction')    
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

function onEdit(e) {
  
  const sheet = e.range.getSheet();
  const row = e.range.rowStart;
  const col = e.range.columnStart;

  if (col != 1) {
    return;
  }

  const colLetter = columnToLetter(col);

  switch(row) {
    
    case 2:
      sheet.getRange(colLetter + "3" + ":" + colLetter + "4").uncheck();
      break;

    case 3:
      sheet.getRangeList([colLetter + "2",colLetter + "4"]).uncheck();
      break;

    case 4:
      sheet.getRange(colLetter + "2" + ":" + colLetter + "3").uncheck();
      break;    

    default:
      return;

  }

}

function columnToLetter(column) {
  var temp, letter = '';
  while (column > 0) {
    temp = (column - 1) % 26;
    letter = String.fromCharCode(temp + 65) + letter;
    column = (column - temp - 1) / 26;
  }
  return letter;
}