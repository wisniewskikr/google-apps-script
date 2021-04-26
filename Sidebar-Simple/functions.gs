function onOpen() {
  SpreadsheetApp
    .getUi()
    .createMenu('Sidebar')
    .addItem('Open', 'openSidebar')
    .addToUi()
}

function openSidebar() {
  var ui = HtmlService.createTemplateFromFile('Sidebar')
    .evaluate()
    .setTitle('Hello World Example')
  
  SpreadsheetApp.getUi().showSidebar(ui)
}

function onOpenSidebar() {
  return "Hello World";
}

function onFormSubmit(form) {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1').setValue(form.greeting); 
} 

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent()
}