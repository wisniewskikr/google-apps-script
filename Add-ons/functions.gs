function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Greeting')
    .addItem('Write "Hello World" in cell A1', 'writeInCell')
    .addItem('Read "Hello World" from cell A1', 'readFromCell')
    .addItem('Write "Hello World" in column A1:A3', 'writeInColumn')
    .addItem('Read "Hello World" from column A1:A3', 'readFromColumn')
    .addItem('Write "Hello World" in row A1:C1', 'writeInRow')
    .addItem('Read "Hello World" from row A1:C1', 'readFromRow')
    .addItem('Write "Hello World" in range A1:C3', 'writeInRange')
    .addItem('Read "Hello World" from range A1:C3', 'readFromRange')             
    .addToUi();
}

function writeInCell() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1').setValue('Hello World');  
};

function readFromCell() {
  var spreadsheet = SpreadsheetApp.getActive();
  var value = spreadsheet.getRange('A1').getValue();
  Logger.log("Value of cell A1: " + value);
  SpreadsheetApp.getUi().alert("Value of cell A1: " + value);
};

function writeInColumn() {  
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1:A3').setValue("Hello World");  
}

function readFromColumn() {
  var count = 0;
  var spreadsheet = SpreadsheetApp.getActive();
  var rows = spreadsheet.getRange('A1:A3').getValues();
  for(var i = 0; i < rows.length; i++) {
    var value = rows[i];
    if ("Hello World" == value) {
      count++;
    }
  }
  Logger.log("Count of 'Hello World' from column A1:A3 is: " + count);
  SpreadsheetApp.getUi().alert("Count of 'Hello World' from column A1:A3 is: " + count);
}

function writeInRow() {  
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1:C1').setValue("Hello World");  
}

function readFromRow() {
  var count = 0;
  var spreadsheet = SpreadsheetApp.getActive();
  var rows = spreadsheet.getRange('A1:C1').getValues();
  var columns = rows[0];
  for(var i = 0; i < columns.length; i++) {
    var value = columns[i];
    if ("Hello World" == value) {
      count++;
    }
  }
  Logger.log("Count of 'Hello World' from column A1:C1 is: " + count);
  SpreadsheetApp.getUi().alert("Count of 'Hello World' from column A1:C1 is: " + count);
}

function writeInRange() {  
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1:C3').setValue("Hello World");  
}

function readFromRange() {
  var count = 0;
  var spreadsheet = SpreadsheetApp.getActive();
  var rows = spreadsheet.getRange('A1:C3').getValues();
  
  for(var i = 0; i < rows.length; i++) {
    var columns = rows[i];
    for(var j = 0; j < columns.length; j++) {
      var value = columns[j];
      if ("Hello World" == value) {
        count++;
      }
    }  
  }
  Logger.log("Count of 'Hello World' from column A1:C1 is: " + count);
  SpreadsheetApp.getUi().alert("Count of 'Hello World' from column A1:C1 is: " + count);
}