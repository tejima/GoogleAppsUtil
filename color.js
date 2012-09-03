function onEdit(event)
{

  var keywordCol = 1;
  var columnStart = 1;
  var columnNum = 25;
  var range = event.source.getActiveRange();
  var rowidx = range.getRow();

  
  var sheet = event.source.getActiveSheet();
  switch(sheet.getRange(rowidx, keywordCol).getValue()){
    case 'DONE':
    sheet.getRange(rowidx, columnStart, 1, columnNum).setBackgroundColor('gray');
      break;
    case 'PRJ':
    case 'PROJECT':
      sheet.getRange(rowidx, columnStart, 1, columnNum).setBackgroundColor('blue');  
      sheet.getRange(rowidx, columnStart, 1, columnNum).setFontColor('white');  
      break;
    case 'NAVI':
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
    default:
      sheet.getRange(rowidx, columnStart, 1, 1).setBackgroundColor('white');
      sheet.getRange(rowidx, columnStart, 1, 1).setFontColor('black');  
  }
}