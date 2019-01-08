
function onEdit(event) {
  var range = event.source.getActiveRange();
  var rowidx = range.getRow();
  var sheet = event.source.getActiveSheet();
  var range_paint = sheet.getRange(rowidx + ':' + rowidx);

  switch(sheet.getRange(rowidx, 1).getValue().toUpperCase()){
    case 'A':
      range_paint.setBackgroundColor('IndianRed');
      break;

    case 'B':
      range_paint.setBackgroundColor('blue');
      range_paint.setFontColor('white');
      break;

    case 'CLEAR':
    case 'C':
    case 'W':
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

    case 'ACTIVE':
      sheet.getRange(rowidx, 1, 1, 1).setBackgroundColor('red');
      break;

    case 'PAUSE':
      sheet.getRange(rowidx, 1, 1, 1).setBackgroundColor('yellow');
      break;

    case 'P':
      range_paint.setBackgroundColor('deeppink');
      range_paint.setFontColor('white');
      break;
      
    default:
      sheet.getRange(rowidx, 1, 1, 1).setBackgroundColor('white');
      sheet.getRange(rowidx, 1, 1, 1).setFontColor('black');
  }
}


function onEdit(event) {
  var range = event.source.getActiveRange();
  var rowidx = range.getRow();
  var sheet = event.source.getActiveSheet();
  var range_paint = sheet.getRange(rowidx + ':' + rowidx);

  switch(sheet.getRange(rowidx, 1).getValue().toUpperCase()){
    case 'A':
      range_paint.setBackgroundColor('IndianRed');
      break;

    case 'B':
      range_paint.setBackgroundColor('blue');
      range_paint.setFontColor('white');
      break;

    case 'CLEAR':
    case 'C':
    case 'W':
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

    case 'ACTIVE':
      sheet.getRange(rowidx, 1, 1, 1).setBackgroundColor('red');
      break;

    case 'PAUSE':
      sheet.getRange(rowidx, 1, 1, 1).setBackgroundColor('yellow');
      break;

    case 'P':
      range_paint.setBackgroundColor('deeppink');
      range_paint.setFontColor('white');
      break;
      
    default:
      sheet.getRange(rowidx, 1, 1, 1).setBackgroundColor('white');
      sheet.getRange(rowidx, 1, 1, 1).setFontColor('black');
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
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();
  spreadsheet.getActiveSheet().insertRowsAfter(spreadsheet.getActiveRange().getLastRow(), num);
}

function onOpen() {
  SpreadsheetApp.getUi()
  .createMenu("GoogleAppsUtil")
  .addItem("行追加1", "line_insert_1")
  .addItem("行追加3", "line_insert_3")
  .addItem("行追加5", "line_insert_5")
  .addToUi();
}


//-------------------------------------

var title_row = 9;
var title_col = 2;

var timer_row = 1;
var timer_col = 3;

var canvas_row = 2;
var canvas_col = 3;
//-------------------------------------

var title_row = 9;
var title_col = 2;

var timer_row = 1;
var timer_col = 3;

var canvas_row = 2;
var canvas_col = 3;
