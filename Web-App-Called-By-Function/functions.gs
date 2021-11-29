function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Greeting')
    .addItem('Display Hello World', 'callApi')    
    .addToUi();
}

function callApi() {
  var url = "https://script.google.com/macros/s/AKfycbyQgI3EW3LCm0VRCOfnZMTIsULOwh132L00fZDZRdY592KQYKJtjeiof6TzS-tw-2jf/exec";
  UrlFetchApp.fetch(url);
}
 
 function doGet() {
   myFunction();
 }
 
 function myFunction() {
  var spreadsheet = SpreadsheetApp.openById("1QIxI6bP_HgxU5n7TA5vNVediJz08cfWFKdADiL3CZEs");
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('Hello World');
};