function onEdit(e) {
  myFunction(e);
}

function myFunction(e) {

  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = activeSpreadsheet.insertSheet();
  sheet.setName("Hello World");
  
}