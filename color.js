function onEdit(event)
{
  var range = event.source.getActiveRange();
  var rowidx = range.getRow();
  var sheet = event.source.getActiveSheet();
  switch(sheet.getRange(rowidx, 1).getValue().toUpperCase()){
    case 'A':
      sheet.getRange(rowidx + ":" + rowidx).setBackgroundColor('IndianRed');
      break;

    case 'BLUE':
    case 'B':
    case 'PRJ':
    case 'PROJECT':
      sheet.getRange(rowidx + ":" + rowidx).setBackgroundColor('blue');
      sheet.getRange(rowidx + ":" + rowidx).setFontColor('white');
      break;

    case 'CLEAR':
    case 'C':
    case 'W':
      sheet.getRange(rowidx + ":" + rowidx).setBackgroundColor('white');
      sheet.getRange(rowidx + ":" + rowidx).setFontColor('black');
      break;

    case 'D':
      sheet.getRange(rowidx + ":" + rowidx).setBackgroundColor('deeppink');
      sheet.getRange(rowidx + ":" + rowidx).setFontColor('white');
      break;

    case 'DONE':
      sheet.getRange(rowidx + ":" + rowidx).setBackgroundColor('gray');
      sheet.getRange(rowidx + ":" + rowidx).setFontColor('black');
      break;

    case 'E':
      sheet.getRange(rowidx + ":" + rowidx).setBackgroundColor('yellow');
      sheet.getRange(rowidx + ":" + rowidx).setFontColor('black');
      break;

    case 'F':
      sheet.getRange(rowidx + ":" + rowidx).setBackgroundColor('forestgreen');
      sheet.getRange(rowidx + ":" + rowidx).setFontColor('white');
      break;

    case 'G':
      sheet.getRange(rowidx + ":" + rowidx).setBackgroundColor('green');
      sheet.getRange(rowidx + ":" + rowidx).setFontColor('white');
      break;

    case 'NAVI':
    case 'RED':
    case 'R':
      sheet.getRange(rowidx + ":" + rowidx).setBackgroundColor('red');
      sheet.getRange(rowidx + ":" + rowidx).setFontColor('white');
      break;

    case 'L':
    case 'LIGHTGRAY':
      sheet.getRange(rowidx + ":" + rowidx).setBackgroundColor('lightgray');
      sheet.getRange(rowidx + ":" + rowidx).setFontColor('black');
      break;

    case 'K':
    case 'KIMIDORI':
    case 'KAIZEN':
      sheet.getRange(rowidx + ":" + rowidx).setBackgroundColor('lightgreen');
      sheet.getRange(rowidx + ":" + rowidx).setFontColor('black');
      break;

    case 'ACTIVE':
      sheet.getRange(rowidx, 1, 1, 1).setBackgroundColor('red');
      break;

    case 'P':
      sheet.getRange(rowidx + ":" + rowidx).setBackgroundColor('pink');
      sheet.getRange(rowidx + ":" + rowidx).setFontColor('white');
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
