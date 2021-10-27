AWS REDSHIFT S3
===============


GSHEET URL
----------

* **Gsheet URL**: https://docs.google.com/spreadsheets/d/1sC544XjwAdX6XtDjSLMR9cC70uswxGdorf0MB0TxHcw/edit?usp=sharing


DESCRIPTION
-----------

##### Goal
The goal of this project is to show how to connect Gsheet with AWS and copy some data from Redshift to S3.

##### Result 
When user click on menu: "Functions -> Copy Data From Redshift To S3" then data should be taken form Redshift copied to S3.


IMPLEMENTATION
-----------

Implementation details:
* In file "configuration.gs" is all configuration to AWS Redshift;
* In file "aws.gs" are all functions connected with AWS;
* In file "functions.gs" create all functions;
* In AWS Redshift has to be created new cluster;
* In AWS IAM has to be created new user with Administrator role.
  

LAUNCH
------

To launch project please:
* Open Gsheet;
* Choose "Functions -> Copy Data From Redshift To S3";
* (Optional) Sometimes you will be asked to confirm permissions.