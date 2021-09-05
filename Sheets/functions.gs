function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Greeting')
    .addItem('Create Sheet Hello World', 'createSheet')
    .addItem('Delete Sheet Hello World', 'deleteSheet')     
    .addToUi();
}

function createSheet() {

  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var helloWorldSheet = activeSpreadsheet.getSheetByName("Hello World");

    if (helloWorldSheet != null) {
        var ui = SpreadsheetApp.getUi();
        ui.alert('Can not create sheet Hello World. Sheet already exists. Please delete this sheet first.');
        return;
    }

    helloWorldSheet = activeSpreadsheet.insertSheet();
    helloWorldSheet.setName("Hello World");

}

function deleteSheet() {

  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var helloWorldSheet = activeSpreadsheet.getSheetByName("Hello World");

    if (helloWorldSheet == null) {
        var ui = SpreadsheetApp.getUi();
        ui.alert('Can not delete sheet Hello World. Sheet does not exist. Please create this sheet first');
        return;
    }

    activeSpreadsheet.deleteSheet(helloWorldSheet);

}