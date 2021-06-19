function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Greeting')
    .addItem('Display Current User Email', 'myFunction')    
    .addToUi();
}

function myFunction() {
  var email = Session.getActiveUser().getEmail();
  var ui = SpreadsheetApp.getUi();
  ui.alert('Hello World: ' + email);
}