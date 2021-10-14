function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Greeting')
    .addItem('Url for Download S3', 'displayUrl')    
    .addToUi();
}

function displayUrl() {

  var url = getS3SignedGetUrl("wisniewskikr-demo", "demo.csv");

  var ui = SpreadsheetApp.getUi();
  ui.alert(url);

}