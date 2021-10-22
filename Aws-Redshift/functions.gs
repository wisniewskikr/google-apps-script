function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Functions')
    .addItem('Redshift Schemas', 'myFunction')    
    .addToUi();
}

function myFunction() {

  var recordArray = getSchemasFromRedshift(defaultDatabaseRedshift);
  var result = getSchemas(recordArray);

  var ui = SpreadsheetApp.getUi();
  ui.alert('Redshift Schemas: ' + result);
}

function initAWS() {
  AWS.init(accessKey, secretKey);
}

function getSchemasFromRedshift(database) {
  
  initAWS();
  
  var recordArray = [];
  var nextToken = null;
  var statementResult = null;
  do {
    statementResult = runListSchemas(database, nextToken);    
    recordArray.push(statementResult.Schemas);
    nextToken = statementResult.NextToken;
    Logger.log("Get Schemas from Redshift Result. Next Token: " + nextToken);    
  } while (statementResult.NextToken); 
  
  return recordArray;

}

function runListSchemas(database, nextToken) {

  var resultJson = AWS.request(
        typeAWS, 
        locationAWS,
        'RedshiftData.ListSchemas', 
        {"Version": versionAWS},
        method='POST',
        payload={
          "ClusterIdentifier": clusterIdentifierReshift, 
          "Database": database,                     
          "DbUser": dbUserRedshift, 
          "NextToken" : nextToken
        },
        headers={
          "X-Amz-Target": "RedshiftData.ListSchemas", 
          "Content-Type": "application/x-amz-json-1.1"
        }
  );
  
  Logger.log("Execute Statement result: " + resultJson);
  return JSON.parse(resultJson);

}

function getSchemas(recordArray) {  

  var result = [];  
      
  for (var i = 0; i < recordArray.length; i++) {

    var schemas = recordArray[i];

    for (var j = 0; j < schemas.length; j++) {
      result.push(schemas[j]);
    }    

  }

  return result;

}