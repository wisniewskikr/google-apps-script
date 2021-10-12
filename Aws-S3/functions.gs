function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Greeting')
    .addItem('Import Data from S3', 'importS3')    
    .addToUi();
}

function importS3() {

  var s3 = S3.getInstance("AKIAVRQI2P3ZOZASCPBU", "UKW8Yr5JSzKfKX9Ni+wx3XWkpi9wvpQXYk1K9WAC");
  var fromS3 = s3.getObject("wisniewskikr-demo", "demo.csv");

  var ui = SpreadsheetApp.getUi();
  ui.alert(fromS3.getDataAsString());

}