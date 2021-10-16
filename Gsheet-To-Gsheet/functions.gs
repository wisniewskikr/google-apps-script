 function onOpen() {

  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Greeting')
    .addItem('Display Hello World in Gsheet Target', 'myFunction')    
    .addToUi();

}
 
 function myFunction() {

  // You can find id in Gsheet URL
  var spreadsheet = SpreadsheetApp.openById("1lwreUbcAjrBun2k_hlb9E-dqHGTRYBKsv_p7PdnuY8g");
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('Hello World');

  Browser.msgBox("Text 'Hello World' was added in cell A1 in 'Gsheet Target'");

}