 function myFunction() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('Hello World');
};