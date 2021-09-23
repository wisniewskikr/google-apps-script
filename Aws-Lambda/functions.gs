function invoke() {
  initRedshiftAWS();
  var resultJson = AWS.request(
        getTypeAWS(), 
        getLocationAWS(),
        'invoke',
        {}, 
        'POST',
        {},
        {},
        "/2015-03-31/functions/dev-gps-lh-ecr-gsheetlambdafunctionA6620295-02zzKaulNwvI/invocations"
  );
  Logger.log("Execute Statement result: " + resultJson);
  return resultJson;
}

