function onEdit(event)
{

  var keywordCol = 1;
  var range = event.source.getActiveRange();
  var rowidx = range.getRow();
  
  var sheet = event.source.getActiveSheet();
  switch(sheet.getRange(rowidx, keywordCol).getValue()){
    case 'DONE':
      sheet.getRange(rowidx + ":" + rowidx).setBackgroundColor('gray');
      sheet.getRange(rowidx + ":" + rowidx).setFontColor('black');  
      break;
    case 'PRJ':
    case 'PROJECT':
    case 'BLUE':
    case 'B':
      sheet.getRange(rowidx + ":" + rowidx).setBackgroundColor('blue');  
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
    case 'KAIZEN':
      sheet.getRange(rowidx + ":" + rowidx).setBackgroundColor('lightgreen');  
      sheet.getRange(rowidx + ":" + rowidx).setFontColor('white');
      break;
    case 'CLEAR':
    case 'C':
      sheet.getRange(rowidx + ":" + rowidx).setBackgroundColor('white');
      sheet.getRange(rowidx + ":" + rowidx).setFontColor('black');  
      break;
    case 'ACTIVE':
      sheet.getRange(rowidx, 1, 1, 1).setBackgroundColor('red');
      break;
    case 'P':
    case 'PLANNING':
      sheet.getRange(rowidx, 1, 1, 1).setBackgroundColor('green');
      break;
    default:
      sheet.getRange(rowidx, 1, 1, 1).setBackgroundColor('white');
      sheet.getRange(rowidx, 1, 1, 1).setFontColor('black');  
  }
}
