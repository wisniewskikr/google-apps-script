GSHEET DROPDOWN MULTISELECT ONE CELL
====================================


GSHEET URL
----------

* **Gsheet URL**: https://docs.google.com/spreadsheets/d/1q1lH9lgr83xHEkQhwqtxd3pgkL-aYjdfVQWmQ8uM5E8/edit?usp=sharing

DESCRIPTION
-----------

##### Goal
The goal of this project is to show how to use dropdown multiselect in Gsheet in only one cell. 

##### Result 
User can select many messages using dropdown in Gsheet. All selected values from cell A2 are displayed in this cell. 
Unfortunately also red flag is displayed. 


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