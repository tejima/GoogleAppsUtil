function onEdit(event)
{
  var range = event.source.getActiveRange();
  var rowidx = range.getRow();
  var sheet = event.source.getActiveSheet();
  switch(sheet.getRange(rowidx, 1).getValue()){
    case 'DONE':
      sheet.getRange(rowidx + ":" + rowidx).setBackgroundColor('gray');
      sheet.getRange(rowidx + ":" + rowidx).setFontColor('black');
      break;

    case 'L':
    case 'LIGHTGRAY':
      sheet.getRange(rowidx + ":" + rowidx).setBackgroundColor('lightgray');
      sheet.getRange(rowidx + ":" + rowidx).setFontColor('black');
      break;

    case 'PRJ':
    case 'PROJECT':
    case 'BLUE':
    case 'B':
      sheet.getRange(rowidx + ":" + rowidx).setBackgroundColor('blue');
      sheet.getRange(rowidx + ":" + rowidx).setFontColor('white');
      break;

    case 'P':
      sheet.getRange(rowidx + ":" + rowidx).setBackgroundColor('pink');
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

    case 'K':
    case 'KIMIDORI':
    case 'KAIZEN':
      sheet.getRange(rowidx + ":" + rowidx).setBackgroundColor('lightgreen');
      sheet.getRange(rowidx + ":" + rowidx).setFontColor('white');
      break;

    case 'CLEAR':
    case 'C':
    case 'W':
      sheet.getRange(rowidx + ":" + rowidx).setBackgroundColor('white');
      sheet.getRange(rowidx + ":" + rowidx).setFontColor('black');
      break;

    case 'ACTIVE':
      sheet.getRange(rowidx, 1, 1, 1).setBackgroundColor('red');
      break;

    case 'A':
      sheet.getRange(rowidx + ":" + rowidx).setBackgroundColor('IndianRed');
      break;

    default:
      sheet.getRange(rowidx, 1, 1, 1).setBackgroundColor('white');
      sheet.getRange(rowidx, 1, 1, 1).setFontColor('black');
  }
}

function updateTitle(){
  var sheet = SpreadsheetApp.getActiveSheet();
  for(var i=1;i<100;i++){
    var url = sheet.getRange(i, 10).getValue();
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
