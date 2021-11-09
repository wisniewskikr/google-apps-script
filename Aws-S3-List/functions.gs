var accessKeyAWS = "";
var secretKeyAWS = "";

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('S3 Functions')
    .addItem('Import Data from S3', 'importS3')
    .addItem('Export Data to S3', 'exportS3') 
    .addItem('Create Bucket "wisniewskikr-tmp"', 'createBucket')
    .addItem('Delete Bucket "wisniewskikr-tmp"', 'deleteBucket')   
    .addItem('Create Folder "tmp" with file', 'createFolder')
    .addItem('Delete Folder "tmp" with file', 'deleteFolder')    
    .addToUi();
}

function importS3() {

  var s3 = S3.getInstance(accessKeyAWS, secretKeyAWS);
  var fromS3 = s3.getObject("wisniewskikr-demo", "demo.csv");

  var ui = SpreadsheetApp.getUi();
  ui.alert(fromS3.getDataAsString());

}

function exportS3() {

  var s3 = S3.getInstance(accessKeyAWS, secretKeyAWS);
  s3.putObject("wisniewskikr-demo", "tmp/demo.txt", "Hello World", {logRequests:true});

  var ui = SpreadsheetApp.getUi();
  ui.alert("Data was exported");

}

function createBucket() {

  var s3 = S3.getInstance(accessKeyAWS, secretKeyAWS);
  s3.createBucket("wisniewskikr-tmp");

  var ui = SpreadsheetApp.getUi();
  ui.alert('Bucket "wisniewskikr-tmp" was created');

}

function deleteBucket() {

  var s3 = S3.getInstance(accessKeyAWS, secretKeyAWS);
  s3.deleteBucket("wisniewskikr-tmp");

  var ui = SpreadsheetApp.getUi();
  ui.alert('Bucket "wisniewskikr-tmp" was deleted');

}

function createFolder() {

  var s3 = S3.getInstance(accessKeyAWS, secretKeyAWS);
  s3.putObject("wisniewskikr-demo", "tmp/demo.txt", "Hello World", {logRequests:true});

  var ui = SpreadsheetApp.getUi();
  ui.alert('Folder "tmp" was created');

}

function deleteFolder() {

  var s3 = S3.getInstance(accessKeyAWS, secretKeyAWS);
  s3.deleteObject("wisniewskikr-demo", "tmp/demo.txt");

  var ui = SpreadsheetApp.getUi();
  ui.alert('Folder "tmp" was deleted');

}