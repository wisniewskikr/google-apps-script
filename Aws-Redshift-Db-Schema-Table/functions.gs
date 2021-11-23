function runListDatabases_(nextToken) {

  var resultJson = AWS.request(
        getTypeAWS_(), 
        getLocationAWS_(),
        'RedshiftData.ListDatabases', 
        {"Version": getVersionAWS_()},
        method='POST',
        payload={
          "ClusterIdentifier": getClusterIdentifierReshift_(),
          "Database": getDefaultDatabaseRedshift_(),                                
          "DbUser": getDbUserRedshift_(), 
          "NextToken" : nextToken
        },
        headers={
          "X-Amz-Target": "RedshiftData.ExecuteStatement", 
          "Content-Type": "application/x-amz-json-1.1"
        }
  ); 

  Logger.log("Execute Statement result: " + resultJson);
  return JSON.parse(resultJson);

}

function runListSchemas_(database, nextToken) {

  var resultJson = AWS.request(
        getTypeAWS_(), 
        getLocationAWS_(),
        'RedshiftData.ListSchemas', 
        {"Version": getVersionAWS_()},
        method='POST',
        payload={
          "ClusterIdentifier": getClusterIdentifierReshift_(), 
          "Database": database,                     
          "DbUser": getDbUserRedshift_(), 
          "NextToken" : nextToken
        },
        headers={
          "X-Amz-Target": "RedshiftData.ExecuteStatement", 
          "Content-Type": "application/x-amz-json-1.1"
        }
  );

  Logger.log("Execute Statement result: " + resultJson);
  return JSON.parse(resultJson);

}

function runListTables_(database, schema, nextToken) {

  var resultJson = AWS.request(
        getTypeAWS_(), 
        getLocationAWS_(),
        'RedshiftData.ListTables', 
        {"Version": getVersionAWS_()},
        method='POST',
        payload={
          "ClusterIdentifier": getClusterIdentifierReshift_(), 
          "Database": database, 
          "SchemaPattern": schema,
          "DbUser": getDbUserRedshift_(), 
          "NextToken" : nextToken
        },
        headers={
          "X-Amz-Target": "RedshiftData.ExecuteStatement", 
          "Content-Type": "application/x-amz-json-1.1"
        }
  );
  
  Logger.log("Execute Statement result: " + resultJson);  
  return JSON.parse(resultJson.getContentText());

}