GSHEET DROPDOWN MULTISELECT VALIDATION
=======================================


GSHEET URL
----------

* **Gsheet URL**: https://docs.google.com/spreadsheets/d/1ye-yGWFiUdZFL5unB_GR1YHHfSKFeW2IMhbhD3PiLsA/edit?usp=sharing

DESCRIPTION
-----------

##### Goal
The goal of this project is to show how to validate dropdown multiselect in Gsheet. 

##### Result 
User can select many messages using dropdown in Gsheet. When he selects one from cell A2 then value is copied to cell B2.
If value already exists in B2 then is removed. If user manually types some value in cell B2 then this value is validated.


IMPLEMENTATION
-----------

Implementation details:
* In file "functions.gs" create all functions.
* In Gsheet select the cell or cells where you want to create a drop-down list.
* Click Data and then Data validation.
* Next to "Criteria," choose an option:
	* List from a range: Choose the cells that will be included in the list.
	* List of items: Enter items, separated by commas and no spaces.
  

LAUNCH
------

To launch project please:
* Open Gsheet;
* Select value in Multiselect field;
* (Optional) Sometimes you will be asked to confirm permissions.