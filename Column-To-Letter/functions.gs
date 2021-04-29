function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Greeting')    
    .addItem('Clear Sheet', 'clearSheet')
    .addItem('Get last column with data', 'lastColumnWithData')         
    .addToUi();
}

function clearSheet() {  
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();
  sheet.clear();
}

function lastColumnWithData() {
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();
  var lastColumn = sheet.getLastColumn();  
  var columnLetter = columnToLetter(lastColumn);
  var columnNumber = letterToColumn(columnLetter);
  
  Logger.log(columnLetter);
  SpreadsheetApp.getUi().alert("Last column with data as letter: " + columnLetter + " and number: " + columnNumber);
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

function letterToColumn(letter) {
  var column = 0, length = letter.length;
  for (var i = 0; i < length; i++) {
    column += (letter.charCodeAt(i) - 64) * Math.pow(26, length - i - 1);
  }
  return column;
}