function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Greeting')
    .addItem("Send an email", 'myFunction')    
    .addToUi();
}

function myFunction() {
  
  GmailApp.sendEmail("krzysztof.wisniewski@contractors.roche.com", "Hello World", "Greetings from Google Apps Script.");
  Browser.msgBox("The email was sent.");

}