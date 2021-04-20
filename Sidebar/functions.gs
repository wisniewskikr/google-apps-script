function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Greeting')
    .addItem('Display Hello World', 'myFunction')    
    .addToUi();
}

function myFunction() {   
  
  var htmlOutput = HtmlService
    .createHtmlOutput('<p>Hello World</p>')
    .setTitle("Greeting");
  
  SpreadsheetApp.getUi().showSidebar(htmlOutput);

}