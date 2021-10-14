AWS S3 SIGNED URL
=================


GSHEET URL
----------

* **Gsheet URL**: https://docs.google.com/spreadsheets/d/1aDIMojoN6wU8CF0PZG8IFEEo7A_xQ0RROHqkRKvQebs/edit?usp=sharing


DESCRIPTION
-----------

##### Goal
The goal of this project is to show how to create signed URL to download file from S3

##### Details
After click on menu item alert with signed URL should be displayed. After copy and paste this link in browser file from S3 should be downloaded.

##### Result 
File form S3 should be downloaded after click on menu item.


IMPLEMENTATION
--------------

Implementation details:
* In file "functions.gs" create all functions;
* File "UrlGenerateor.gs" contains all functions connected with generate sighed URL. You have to fill here AWS credentials, AWS Region and link expiration time.
  

LAUNCH
------

To launch project please:
* Open Gsheet;
* Choose "Greeting -> Url for Download S3;
* (Optional) Sometimes you will be asked to confirm permissions.


ADDITIONAL
----------

Source code for "UrlGenerator": https://github.com/kmotrebski/gas-s3-url-generator