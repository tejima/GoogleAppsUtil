function onEdit(event)
{

  var keywordCol = 1;
  var columnStart = 1;
  var columnNum = 100;
  var range = event.source.getActiveRange();
  var rowidx = range.getRow();
  
  var sheet = event.source.getActiveSheet();
  switch(sheet.getRange(rowidx, keywordCol).getValue()){
    case 'DONE':
    sheet.getRange(rowidx, columnStart, 1, columnNum).setBackgroundColor('gray');
      break;
    case 'L':
    case 'LIGHTGRAY':
    sheet.getRange(rowidx, columnStart, 1, columnNum).setBackgroundColor('lightgray');
      break;
      
    case 'PRJ':
    case 'PROJECT':
    case 'BLUE':
    case 'B':
      sheet.getRange(rowidx, columnStart, 1, columnNum).setBackgroundColor('blue');  
      sheet.getRange(rowidx, columnStart, 1, columnNum).setFontColor('white');  
      break;
    case 'G':
      sheet.getRange(rowidx, columnStart, 1, columnNum).setBackgroundColor('green');  
      sheet.getRange(rowidx, columnStart, 1, columnNum).setFontColor('white');  
      break;
    case 'NAVI':
    case 'RED':
    case 'R':
      sheet.getRange(rowidx, columnStart, 1, columnNum).setBackgroundColor('red');  
      sheet.getRange(rowidx, columnStart, 1, columnNum).setFontColor('white');
      break;
    case 'K':
    case 'KAIZEN':
      sheet.getRange(rowidx, columnStart, 1, columnNum).setBackgroundColor('lightgreen');  
      sheet.getRange(rowidx, columnStart, 1, columnNum).setFontColor('white');
      break;
    case 'CLEAR':
    case 'C':
    case 'W':
      sheet.getRange(rowidx, columnStart, 1, columnNum).setBackgroundColor('white');
      sheet.getRange(rowidx, columnStart, 1, columnNum).setFontColor('black');  
      break;
    case 'ACTIVE':
      sheet.getRange(rowidx, columnStart, 1, 1).setBackgroundColor('red');
      break;
    case 'P':
    case 'PLANNING':
      sheet.getRange(rowidx, columnStart, 1, 1).setBackgroundColor('green');
      break;
    case 'A':
      sheet.getRange(rowidx, columnStart, 1, columnNum).setBackgroundColor('IndianRed');
      break;

  
    default:
      sheet.getRange(rowidx, columnStart, 1, 1).setBackgroundColor('white');
      sheet.getRange(rowidx, columnStart, 1, 1).setFontColor('black');  
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
  if(url.indexOf("http") != 0){
    return "";
  }  
  var txt = UrlFetchApp.fetch(url).getContentText();
  var doc = Xml.parse(txt, true);  
  var title = doc.html.head.title.getText();
  return title;
}

