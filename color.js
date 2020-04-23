function onEdit(event) {
  var rowidx = SpreadsheetApp.getActiveRange().getRow();
  var sheet = SpreadsheetApp.getActiveSheet();
  var range_paint = sheet.getRange(rowidx + ':' + rowidx); //塗るのは行全体

  switch(sheet.getRange(rowidx, 1).getValue().toUpperCase()){ //先頭行の記号が、、、、
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

    //INSERT LINE BEFORE
    case 'BB': 
      sheet.getRange(rowidx, 1).setValue('');
      sheet.insertRowsBefore(rowidx,2);
      break;

    case 'BBB': 
      sheet.getRange(rowidx, 1).setValue('');
      sheet.insertRowsBefore(rowidx,3);
      break;

    case 'BBBB': 
      sheet.getRange(rowidx, 1).setValue('');
      sheet.insertRowsBefore(rowidx,4);
      break;

    case 'BBBBB': 
      sheet.getRange(rowidx, 1).setValue('');
      sheet.insertRowsBefore(rowidx,5);
      break;

    case 'BBBBBB': 
      sheet.getRange(rowidx, 1).setValue('');
      sheet.insertRowsBefore(rowidx,6);
      break;

    case 'BBBBBBB': 
      sheet.getRange(rowidx, 1).setValue('');
      sheet.insertRowsBefore(rowidx,7);
      break;

    case 'BBBBBBBB': 
      sheet.getRange(rowidx, 1).setValue('');
      sheet.insertRowsBefore(rowidx,8);
      break;

    case 'BBBBBBBBB': 
      sheet.getRange(rowidx, 1).setValue('');
      sheet.insertRowsBefore(rowidx,9);
      break;

    case 'BBBBBBBBBB': 
      sheet.getRange(rowidx, 1).setValue('');
      sheet.insertRowsBefore(rowidx,10);
      break;

    //INSERT LINE AFTER
    case 'A': 
      sheet.getRange(rowidx, 1).setValue('');
      sheet.insertRowsAfter(rowidx,1);
      break;

    case 'AA': 
      sheet.getRange(rowidx, 1).setValue('');
      sheet.insertRowsAfter(rowidx,2);
      break;

    case 'AAA': 
      sheet.getRange(rowidx, 1).setValue('');
      sheet.insertRowsAfter(rowidx,3);
      break;

    case 'AAAA': 
      sheet.getRange(rowidx, 1).setValue('');
      sheet.insertRowsAfter(rowidx,4);
      break;
 
    case 'AAAAA': 
      sheet.getRange(rowidx, 1).setValue('');
      sheet.insertRowsAfter(rowidx,5);
      break;

    case 'AAAAAA': 
      sheet.getRange(rowidx, 1).setValue('');
      sheet.insertRowsAfter(rowidx,6);
      break;
    
    case 'AAAAAAA': 
      sheet.getRange(rowidx, 1).setValue('');
      sheet.insertRowsAfter(rowidx,7);
      break;

    case 'AAAAAAAA': 
      sheet.getRange(rowidx, 1).setValue('');
      sheet.insertRowsAfter(rowidx,8);
      break;

    case 'AAAAAAAAA': 
      sheet.getRange(rowidx, 1).setValue('');
      sheet.insertRowsAfter(rowidx,9);
    break;

    case 'AAAAAAAAAA': 
      sheet.getRange(rowidx, 1).setValue('');
      sheet.insertRowsAfter(rowidx,10);
    break;

    //DELETE LINE
    case 'X':
      sheet.deleteRow(rowidx);
      break;
      
    case 'XX':
      sheet.deleteRows(rowidx,2);
      break;

    case 'XXX':
      sheet.deleteRows(rowidx,3);
      break;
      
    case 'XXXX':
      sheet.deleteRows(rowidx,4);
      break;

    case 'XXXXX':
      sheet.deleteRows(rowidx,5);
      break;

    case 'XXXXXX':
      sheet.deleteRows(rowidx,6);
      break;

    case 'XXXXXXX':
      sheet.deleteRows(rowidx,7);
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

function line_insert_5(){
  line_insert_x(5);
}

function line_insert_10(){
  line_insert_x(10);
}

function line_insert_20(){
  line_insert_x(20);
}

function line_insert_40(){
  line_insert_x(40);
}

function line_insert_x(num){  
  var sheet = SpreadsheetApp.getActiveSheet(); 
  sheet.insertRowsAfter(sheet.getActiveRange().getLastRow(), num);
}

function onOpen() {
  SpreadsheetApp.getUi()
  .createMenu("GoogleAppsUtil")
  .addItem("5行追加", "line_insert_5")
  .addItem("10行追加", "line_insert_10")
  .addItem("20行追加", "line_insert_20")
  .addItem("40行追加", "line_insert_40")
  .addToUi();
}
