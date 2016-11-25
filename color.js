function onEdit(event)
{
  var range = event.source.getActiveRange();
  var rowidx = range.getRow();
  var sheet = event.source.getActiveSheet();
  var range_paint = sheet.getRange(rowidx + ":" + rowidx);
  switch(sheet.getRange(rowidx, 1).getValue().toUpperCase()){
    case 'A':
      range_paint.setBackgroundColor('IndianRed');
      break;

    case 'BLUE':
    case 'B':
    case 'PRJ':
    case 'PROJECT':
      range_paint.setBackgroundColor('blue');
      range_paint.setFontColor('white');
      break;

    case 'CLEAR':
    case 'C':
    case 'W':
      range_paint.setBackgroundColor('white');
      range_paint.setFontColor('black');
      break;

    case 'D':
      range_paint.setBackgroundColor('deeppink');
      range_paint.setFontColor('white');
      break;

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

    case 'NAVI':
    case 'RED':
    case 'R':
      range_paint.setBackgroundColor('red');
      range_paint.setFontColor('white');
      break;

    case 'L':
    case 'LIGHTGRAY':
      range_paint.setBackgroundColor('lightgray');
      range_paint.setFontColor('black');
      break;

    case 'K':
    case 'KIMIDORI':
    case 'KAIZEN':
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
      range_paint.setBackgroundColor('pink');
      range_paint.setFontColor('white');
      break;

    default:
      sheet.getRange(rowidx, 1, 1, 1).setBackgroundColor('white');
      sheet.getRange(rowidx, 1, 1, 1).setFontColor('black');
  }
}

function updateTitle(){
  for(var i=1;i<100;i++){
    var url = SpreadsheetApp.getActiveSheet().getRange(i, 10).getValue();
    var title = getTitle(url);
    sheet.getRange(i, 11).setValue(title);
  }
}

function getTitle(url) {
  if(url.indexOf("http") !== 0){
    return "";
  }
  UrlFetchApp.fetch(url).getContentText();
  var doc = Xml.parse(txt, true);
  var title = doc.html.head.title.getText();
  return title;
}

//-------------------------------------

var mailto = "test@example.com";

var title_row = 9;
var title_col = 2;

var timer_row = 1;
var timer_col = 3;

var canvas_row = 2;
var canvas_col = 3;
