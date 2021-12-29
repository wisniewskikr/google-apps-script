function onEdit(e) {
  
  const sheet = e.range.getSheet();
  const row = e.range.rowStart;
  const col = columnToLetter(e.range.columnStart);

  onEditMessage(sheet, row, col);
  onEditResult(sheet, row, col);

}

function onEditMessage(sheet, row, col) {

  if (row != 2 || col != 'A') {
    return;
  }

  var source = sheet.getRange(col + row).getValue();
  var target = sheet.getRange("B2").getValue();

  if (target == "") {
    target += source;
  } else if (!target.includes(source)) {
    target += "," + source;
  } else if (target.includes("," + source)) {
    target = target.replace("," + source, "");
  } else if (target.includes(source + ",")) {
    target = target.replace(source + ",", "");
  } else if (target.includes(source)) {
    target = target.replace(source, "");
  }

  sheet.getRange("A2").setValue("");
  sheet.getRange("B2").setValue(target);

}

function onEditResult(sheet, row, col) {

  if (row != 2 || col != 'B') {
    return;
  }

  var value = sheet.getRange(col + row).getValue();
  var values = value.split(",");
  var rules = getRules();

  for (var v of values) {    
    if (v != null && v != "" && !rules.includes(v)) {
      Browser.msgBox("Following value is not valid: " + v);
      sheet.getRange(col + row).clear();
    }
  }  

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

function getRules() {

  var result = [];

  var cell = SpreadsheetApp.getActive().getRange('A2');
  var rule = cell.getDataValidation();
  if (rule != null) {
    var criteria = rule.getCriteriaType();
    var args = rule.getCriteriaValues();
    result = args[0];
  } 

  return result;

}