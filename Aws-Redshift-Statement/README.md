AWS REDSHIFT STATEMENT
======================


GSHEET URL
----------

* **Gsheet URL**: https://docs.google.com/spreadsheets/d/1UNJi3EbPM5B_qkqpVem--IH6d8kxLOdY4nVSN1OQEbA/edit?usp=sharing


DESCRIPTION
-----------

##### Goal
The goal of this project is to show how to connect Gsheet with AWS Redshifd and run some statement (SQL).

##### Result 
When user click on menu: "Functions -> Redshift Data" then data should be taken form Redshift and display in Gsheet.


IMPLEMENTATION
-----------

Implementation details:
* In file "configuration.gs" is all configuration to AWS Redshift;
* In file "aws.gs" are all functions connected with AWS;
* In file "functions.gs" create all functions;
* In AWS Redshift has to be created new cluster;
* In AWS IAM has to be created new user with roles "AmazonRedshiftFullAccess" and "AmazonRedshiftDataFullAccess". 
  

LAUNCH
------

To launch project please:
* Open Gsheet;
* Choose "Functions -> Redshift Data";
* (Optional) Sometimes you will be asked to confirm permissions.