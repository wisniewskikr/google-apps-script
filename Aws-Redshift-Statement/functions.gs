function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Functions')
    .addItem('Redshift Data', 'myFunction')    
    .addToUi();
}

function myFunction() {

  var sql = "select * from GREETINGS";
  var recordArray = getDataFromRedshift(sql);
  fillGsheet(recordArray);

}

function initAWS() {
  AWS.init(accessKey, secretKey);
}

function getDataFromRedshift(sql) {

  initAWS();
  
  var executeStatement = runExecuteStatement(sql);
  var recordArray = null;
    
  do {    
    var describeStatement = runDescribeStatement(executeStatement.Id);    
    if (describeStatement.Status == "FAILED") {      
      throw new Error('Error during connection with Redshift Data API. Error description: ' + describeStatement.Error);
    }
  } while (describeStatement.Status !== "FINISHED");
    
  return getRecordArray(executeStatement);

}

function runExecuteStatement(sql) {

  var resultJson = AWS.request(
        typeAWS, 
        locationAWS,
        'RedshiftData.ExecuteStatement', 
        {"Version": versionAWS},
        method='POST',
        payload={
          "ClusterIdentifier": clusterIdentifierReshift, 
          "Database": defaultDatabaseRedshift,                     
          "DbUser": dbUserRedshift,
          "Sql": sql
        },
        headers={
          "X-Amz-Target": "RedshiftData.ExecuteStatement", 
          "Content-Type": "application/x-amz-json-1.1"
        }
  );  
  
  Logger.log("Execute Statement result: " + resultJson);  
  return JSON.parse(resultJson.getContentText());

}

function runDescribeStatement(id) {
  
  var resultJson = AWS.request(
      typeAWS, 
      locationAWS,
      'RedshiftData.DescribeStatement', 
      {"Version": versionAWS},
      method='POST',
      payload={
        "Id": id
      },
      headers={
        "X-Amz-Target": "RedshiftData.DescribeStatement", 
        "Content-Type": "application/x-amz-json-1.1"
      }
  )  
  
  Logger.log("Describe Statement result: " + resultJson);
  return JSON.parse(resultJson.getContentText());
  
}

function getRecordArray(executeStatement) {

  var recordArray = [];
  var nextToken = null;
  var statementResult = null;
  do {
    statementResult = runGetStatementResult(executeStatement.Id, nextToken);    
    recordArray.push(statementResult.Records);
    nextToken = statementResult.NextToken;
    Logger.log("Get Statement Result. Next Token: " + nextToken);    
  } while (statementResult.NextToken);  

  return recordArray;

}

function runGetStatementResult(id, nextToken) {
  var resultJson = AWS.request(
      typeAWS, 
      locationAWS,
      'RedshiftData.GetStatementResult', 
      {"Version": versionAWS},
      method='POST',
      payload={
        "Id": id,
        "NextToken" : nextToken
      },
      headers={
        "X-Amz-Target": "RedshiftData.GetStatementResult", 
        "Content-Type": "application/x-amz-json-1.1"
      }
  )

  Logger.log("Get Statement Result result: " + resultJson);
  return JSON.parse(resultJson.getContentText());

}

function fillGsheet(recordArray) {  
  
  var rowIndex = 1;
  for (var i = 0; i < recordArray.length; i++) {   
        
    var rows = recordArray[i];
    for (var j = 0; j < rows.length; j++) {
      var columns = rows[j];
      rowIndex++;
      var columnIndex = 'A';
      
      for (var k = 0; k < columns.length; k++) {
        
        var field = columns[k];        
        var value = getFieldValue(field);
        var range = columnIndex + rowIndex;
        addToCell(range, value);

        columnIndex = nextChar(columnIndex);

      }

    }

  }

}

function getFieldValue(field) {

  if (field.isNull != null) {
    return null;
  }

  if (field.stringValue != null) {
    return field.stringValue;
  }

  if (field.longValue != null) {
    return field.longValue;
  }

  if (field.doubleValue != null) {
    return null;
  }

  if (field.booleanValue != null) {
    return field.booleanValue;
  }

  if (field.blobValue != null) {
    return field.blobValue;
  }

  Logger.log("Can not find value for following field: " + JSON.stringify(field));
  return null;

}

function nextChar(c) {
    var column = letterToColumn(c);
    column++;
    return columnToLetter(column);
}

 function addToCell(range, value) {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange(range).setValue(value);  
}

function columnToLetter(column) {
  var temp, letter = '';
  while (column > 0) {
    temp = (column - 1) % 26;
    letter = String.fromCharCode(temp + 65) + letter;
    column = (column - temp - 1) / 26;
  }
  return letter;
}

function letterToColumn(letter) {
  var column = 0, length = letter.length;
  for (var i = 0; i < length; i++) {
    column += (letter.charCodeAt(i) - 64) * Math.pow(26, length - i - 1);
  }
  return column;
}