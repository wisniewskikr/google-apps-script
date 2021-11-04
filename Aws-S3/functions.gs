function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('S3 Functions')
    .addItem('Import Data from S3', 'importS3')
    .addItem('Export Data to S3', 'exportS3')     
    .addToUi();
}

function importS3() {

  var s3 = S3.getInstance("AKIAVRQI2P3ZOZASCPBU", "UKW8Yr5JSzKfKX9Ni+wx3XWkpi9wvpQXYk1K9WAC");
  var fromS3 = s3.getObject("wisniewskikr-demo", "demo.csv");

  var ui = SpreadsheetApp.getUi();
  ui.alert(fromS3.getDataAsString());

}

function exportS3() {

  var s3 = S3.getInstance("AKIAVRQI2P3ZOZASCPBU", "UKW8Yr5JSzKfKX9Ni+wx3XWkpi9wvpQXYk1K9WAC");
  s3.putObject("wisniewskikr-demo", "demo.txt", "Hello World", {logRequests:true});

  var ui = SpreadsheetApp.getUi();
  ui.alert("Data was exported");

}