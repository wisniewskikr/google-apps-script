function onOpen() {
  myFunction();
}

function myFunction() {

  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1').setValue('Hello World');  

}