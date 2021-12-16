TRIGGER
=======


GSHEET URL
----------

* **Gsheet URL**: https://docs.google.com/spreadsheets/d/1QhObceF2_XOlzkalnlfZYJ32juXA1HGhrVqcY125Pio/edit?usp=sharing
* **Source URL**: https://docs.google.com/spreadsheets/d/1DTvZTADFpIDqrQ-8ExS_GuTegenywainvt_ZW7G_G50/edit?usp=sharing


DESCRIPTION
-----------

##### Goal
The goal of this project is to show how Triggers work in Google Apps Script.

##### Details
We have two Gsheets here: "Source Trigger" and "Trigger". "Source Trigger" contains text "Hello World" in cell "A1". 
Sheet "Trigger" has function which copy cell "A1" from source. It has also Trigger which runs this function every minute.


IMPLEMENTATION
-----------

Implementation details:
* In file "functions.gs" create function myFunction().
  

LAUNCH
------

To launch project please:
* Open Gsheet;
* Choose "Tools -> Script editor";
* In dropdown choose file "functions.gs" and function "myFunction";
* Click "Run";
* (Optional) Sometimes you will be asked to confirm permissions.
