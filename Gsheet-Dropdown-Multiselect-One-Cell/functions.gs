function onEdit(e) {
  
  const sheet = e.range.getSheet();
  const row = e.range.rowStart;
  const col = columnToLetter(e.range.columnStart);

  if (row != 2 || col != 'A') {
    return;
  }

  var source = sheet.getRange(col + row).getValue();
  var target = getTarget(col + row);

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

  sheet.getRange(col + row).setValue(target);
  setTarget(col + row, target);

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

function getTarget(cell) {

  var properties = PropertiesService.getUserProperties();
  var property = properties.getProperty("dropdown-" + cell);
  return (property == null) ? "" : property;

}

function setTarget(cell, target) {

  var properties = PropertiesService.getUserProperties();
  properties.setProperty("dropdown-" + cell, target);  

}