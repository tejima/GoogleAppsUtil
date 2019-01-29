function onEdit(event) {
  var rowidx = SpreadsheetApp.getActiveRange().getRow();
  var sheet = SpreadsheetApp.getActiveSheet();
  var range_paint = sheet.getRange(rowidx + ':' + rowidx); //塗るのは行全体

  switch(sheet.getRange(rowidx, 1).getValue().toUpperCase()){ //先頭行の記号が、、、、
    case 'A':
      range_paint.setBackgroundColor('IndianRed');
      range_paint.setFontColor('black');
      break;

    case 'B':
      range_paint.setBackgroundColor('blue');
      range_paint.setFontColor('white');
      break;

    case 'CLEAR':
    case 'C':
      range_paint.setBackgroundColor('white');
      range_paint.setFontColor('black');
      sheet.getRange(rowidx, 1).setValue('');
      break;

    case 'D':
    case 'DONE':
      range_paint.setBackgroundColor('gray');
      range_paint.setFontColor('black');
      break;

    case 'E':
      range_paint.setBackgroundColor('yellow');
      range_paint.setFontColor('black');
      break;

    case 'F':
      range_paint.setBackgroundColor('forestgreen');
      range_paint.setFontColor('white');
      break;

    case 'G':
      range_paint.setBackgroundColor('green');
      range_paint.setFontColor('white');
      break;

    case 'R':
      range_paint.setBackgroundColor('red');
      range_paint.setFontColor('white');
      break;

    case 'L':
      range_paint.setBackgroundColor('lightgray');
      range_paint.setFontColor('black');
      break;
      
    case 'K':
      range_paint.setBackgroundColor('lightgreen');
      range_paint.setFontColor('black');
      break;

    case 'P':
      range_paint.setBackgroundColor('deeppink');
      range_paint.setFontColor('white');
      break;

    case 'BB': //INSERT LINE BEFORE
      sheet.getRange(rowidx, 1).setValue('');
      sheet.insertRowsBefore(rowidx,1);
      break;

    case 'BBB': //INSERT LINE BEFORE
      sheet.getRange(rowidx, 1).setValue('');
      sheet.insertRowsBefore(rowidx,2);
      break;

    case 'BBBB': //INSERT LINE BEFORE
      sheet.getRange(rowidx, 1).setValue('');
      sheet.insertRowsBefore(rowidx,3);
      break;

    case 'BBBBB': //INSERT LINE BEFORE
      sheet.getRange(rowidx, 1).setValue('');
      sheet.insertRowsBefore(rowidx,4);
      break;

    case 'BBBBBB': //INSERT LINE BEFORE
      sheet.getRange(rowidx, 1).setValue('');
      sheet.insertRowsBefore(rowidx,5);
      break;

    case 'AA': //INSERT LINE AFTER
      sheet.getRange(rowidx, 1).setValue('');
      sheet.insertRowsAfter(rowidx,1);
      break;

    case 'AAA': //INSERT LINE AFTER
      sheet.getRange(rowidx, 1).setValue('');
      sheet.insertRowsAfter(rowidx,2);
      break;

    case 'AAAA': //INSERT LINE AFTER
      sheet.getRange(rowidx, 1).setValue('');
      sheet.insertRowsAfter(rowidx,3);
      break;
 
    case 'AAAAA': //INSERT LINE AFTER
      sheet.getRange(rowidx, 1).setValue('');
      sheet.insertRowsAfter(rowidx,4);
      break;

    case 'AAAAAA': //INSERT LINE AFTER
      sheet.getRange(rowidx, 1).setValue('');
      sheet.insertRowsAfter(rowidx,5);
      break;
 
    case 'X': //DELETE LINE
      sheet.deleteRow(rowidx);
      break;
      
    case 'XX': //DELETE 2 LINES 
      sheet.deleteRows(rowidx,2);
      break;

    case 'XXX': //DELETE 3 LINES
      sheet.deleteRows(rowidx,3);
      break;
      
    case 'XXXX': //DELETE 4 LINES
      sheet.deleteRows(rowidx,4);
      break;

    case 'XXXXX': //DELETE 5 LINES
      sheet.deleteRows(rowidx,5);
      break;
      
    case 'Z': //SUPER DONE
      var raw_values = sheet.getRange(rowidx,1,1,sheet.getLastColumn()).getValues();
      sheet.appendRow(raw_values[0]);
      sheet.deleteRow(rowidx);
      var rowidx_last = sheet.getLastRow();
      var range_last = sheet.getRange(rowidx_last + ':' + rowidx_last);

      range_last.setBackgroundColor('gray');
      range_last.setFontColor('black');
      break;
            
    default: //DO NOTHING
  }
}

function line_insert_1(){
  line_insert_x(1);
}
function line_insert_3(){
  line_insert_x(3);
}
function line_insert_5(){
  line_insert_x(5);
}

function line_insert_x(num){  
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.insertRowsAfter(sheet.getActiveRange().getLastRow(), num);
}

function onOpen() {
  SpreadsheetApp.getUi()
  .createMenu("GoogleAppsUtil")
  .addItem("1行追加", "line_insert_1")
  .addItem("3行追加", "line_insert_3")
  .addItem("5行追加", "line_insert_5")
  .addToUi();
}
