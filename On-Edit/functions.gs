function onEdit(e) {
  myFunction(e);
}

function myFunction(e) {

   var range = e.range;
  var spreadSheet = e.source;
  var sheetName = spreadSheet.getActiveSheet().getName();
  var column = range.getColumn();
  var row = range.getRow();
  var inputValue = e.value;

  var ui = SpreadsheetApp.getUi();
  ui.alert('Hello World ' + inputValue + " (sheet: " + sheetName + "; column: " + column + "; row: " + row + ").");
  
}