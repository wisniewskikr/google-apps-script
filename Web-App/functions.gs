 function doGet() {
   myFunction();
 }
 
 function myFunction() {
  var spreadsheet = SpreadsheetApp.openById("1_JG9Ghk0WMp1J8ZXLtQL7N84lwZu3BHkjAREY7yfbnA");
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('Hello World');
};