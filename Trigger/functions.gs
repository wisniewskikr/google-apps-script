 function myFunction() {

   var spreadsheetSource = SpreadsheetApp.openById("1DTvZTADFpIDqrQ-8ExS_GuTegenywainvt_ZW7G_G50");
  var value = spreadsheetSource.getRange('A1').getValue();  

  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue(value);
};