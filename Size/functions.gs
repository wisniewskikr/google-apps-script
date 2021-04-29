function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Greeting')
    .addItem('Fill Sheet with data', 'fillSheetWithData')
    .addItem('Clear Sheet', 'clearSheet')
    .addItem('Get last column with data', 'lastColumnWithData') 
    .addItem('Get last row with data', 'lastRowWithData') 
    .addItem('Get last column with data in range A1:C3', 'lastColumnWithDataInRange') 
    .addItem('Get last row with data in range A1:C3', 'lastRowWithDataInRange') 
    .addItem('Get last from column A', 'lastFromColumnA')  
    .addItem('Get last from row One', 'lastFromRowOne')     
    .addToUi();
}

function fillSheetWithData() {  
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1:C3').setValue("Hello World");  
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
  
  Logger.log(columnLetter);
  SpreadsheetApp.getUi().alert("Last column with data: " + columnLetter);
}

function lastRowWithData() {
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();
  var lastRow = sheet.getLastRow();  
 
  Logger.log(lastRow);
  SpreadsheetApp.getUi().alert("Last row with data: " + lastRow);
}

function lastColumnWithDataInRange() {
  var spreadsheet = SpreadsheetApp.getActive();
  var range = spreadsheet.getRange("A1:C3");  
  var result = getLastRowAndColumnInRange(range);
  Logger.log("Last Row: " + result[0]);
  Logger.log("Last Column: " + result[1]);

  var columnLetter = columnToLetter(result[1]);
  SpreadsheetApp.getUi().alert("Last column with data in range: " + columnLetter);
}

function lastRowWithDataInRange() {
  var spreadsheet = SpreadsheetApp.getActive();
  var range = spreadsheet.getRange("A1:C3");  
  var result = getLastRowAndColumnInRange(range);
  Logger.log("Last Row: " + result[0]);
  Logger.log("Last Column: " + result[1]);
  
  SpreadsheetApp.getUi().alert("Last row with data in range: " + result[0]);
}

function lastFromColumnA() {
  var spreadsheet = SpreadsheetApp.getActive();
  var range = spreadsheet.getRange("A1:A");  
  var result = getLastRowAndColumnInRange(range);
  Logger.log("Last Row: " + result[0]);
  Logger.log("Last Column: " + result[1]);

  SpreadsheetApp.getUi().alert("Last from column A: " + "A:" + result[0]);
}

function lastFromRowOne() {
  var spreadsheet = SpreadsheetApp.getActive();
  var range = spreadsheet.getRange("A1:1");  
  var result = getLastRowAndColumnInRange(range);
  Logger.log("Last Row: " + result[0]);
  Logger.log("Last Column: " + result[1]);

  var columnLetter = columnToLetter(result[1]);
  SpreadsheetApp.getUi().alert("Last from row One: " + columnLetter + ":1");
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

function getLastRowAndColumnInRange(range) {

  var result = [];
  var maxRow = 0;
  var maxColumn = 0;

  var rows = range.getDisplayValues();
  for (var i = 0; i < rows.length; i++) {
    var columns = rows[i];
    for (var j = 0; j < columns.length; j++) {
      if (columns[j]) {
        var row = i + 1;
        var column = j + 1;
        maxRow = (row > maxRow) ? row : maxRow;
        maxColumn = (column > maxColumn) ? column : maxColumn;
      } 
    }
  }

  result.push(maxRow);
  result.push(maxColumn);
  return result;

}


