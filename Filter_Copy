function copytoallfinal(){
  
  //Open NameId spreadsheet
  var ss = SpreadsheetApp.openById(NameIdspreadsheet);
  var last_row = ss.getActiveSheet().getLastRow();
  var last_column = ss.getActiveRange().getLastColumn();
  var data = ss.getActiveSheet().getRange(2, 1, last_row-1,2);
  var ssid = ""
  
  //Get the name and spreadsheetid of each gpowner
  for (t in data){
    var gpowner=data[t][0]
    var ssid=data[t][1]
    
    //Sourcesheet
    var s1 = SpreadsheetApp.openById(Sourcesheet);
    var sourcesheet = s1.getSheetByName('KAM_price');
    var values = sourcesheet.getRange('A:I').getValues();
    var data1 = [];
    
    //Filter data for each gpowner
    for (var i = 0; i< values.length ; i++){
     if((values[i][3] == 'gp_account_owner')||(values[i][3] == gpowner))
     {
     data1.push(values[i])
     }
    }
    
    //Targetsheet
    var destinationss = SpreadsheetApp.openById(ssid);
    
    //Set target sheet index
    var ds = destinationss.insertSheet('Price_'+gpowner, 9);
    ds.getRange(ds.getLastRow()+1, 1, data1.length, data1[0].length).setValues(data1); 
    ds.setName('price_'+gpowner);
    
    //Log the result
    Logger.log(ds.getName());
  }
}
