function countrymaincat() {
  
  //prepare data
  var ss = SpreadsheetApp.openById('1EntyxzaN1H8v0JmpBBQrVovvC2jBUHV00duJ9pGFXyA');
  var tw = ss.getSheetByName('tw').getRange('C:D').getValues();
  var id = ss.getSheetByName('id').getRange('C:D').getValues();
  var vn = ss.getSheetByName('vn').getRange('C:D').getValues();
  var my = ss.getSheetByName('my').getRange('C:D').getValues();
  var ph = ss.getSheetByName('ph').getRange('C:D').getValues();
  var sg = ss.getSheetByName('sg').getRange('C:D').getValues();
  var th = ss.getSheetByName('th').getRange('C:D').getValues();
 
  //remove duplicates for tw
  var newData_tw = new Array();
  for(i in tw){
    var row = tw[i];
    var duplicate = false;
    for(j in newData_tw){
      if(row.join() == newData_tw[j].join()){
        duplicate = true;
      }
    }
    if(!duplicate){
      newData_tw.push(row);
    }
  }
  
  //remove duplicates for id
  var newData_id = new Array();
  for(i in id){
    var row = id[i];
    var duplicate = false;
    for(j in newData_id){
      if(row.join() == newData_id[j].join()){
        duplicate = true;
      }
    }
    if(!duplicate){
      newData_id.push(row);
    }
  }
  
  //remove duplicates for vn
  var newData_vn = new Array();
  for(i in vn){
    var row = vn[i];
    var duplicate = false;
    for(j in newData_vn){
      if(row.join() == newData_vn[j].join()){
        duplicate = true;
      }
    }
    if(!duplicate){
      newData_vn.push(row);
    }
  }
  
  //remove duplicates for my
  var newData_my = new Array();
  for(i in my){
    var row = my[i];
    var duplicate = false;
    for(j in newData_my){
      if(row.join() == newData_my[j].join()){
        duplicate = true;
      }
    }
    if(!duplicate){
      newData_my.push(row);
    }
  }
  
  //remove duplicates for ph
  var newData_ph = new Array();
  for(i in ph){
    var row = ph[i];
    var duplicate = false;
    for(j in newData_ph){
      if(row.join() == newData_ph[j].join()){
        duplicate = true;
      }
    }
    if(!duplicate){
      newData_ph.push(row);
    }
  }
  
  //remove duplicates for sg
  var newData_sg = new Array();
  for(i in sg){
    var row = sg[i];
    var duplicate = false;
    for(j in newData_sg){
      if(row.join() == newData_sg[j].join()){
        duplicate = true;
      }
    }
    if(!duplicate){
      newData_sg.push(row);
    }
  }
  
  //remove duplicates for th
  var newData_th = new Array();
  for(i in th){
    var row = th[i];
    var duplicate = false;
    for(j in newData_th){
      if(row.join() == newData_th[j].join()){
        duplicate = true;
      }
    }
    if(!duplicate){
      newData_th.push(row);
    }
  }
  

  
  //copy into target
  var target=SpreadsheetApp.openById('1unVJfo53DLPH4X4PO1a72lVcXlGaiowtoTg7eCHUJnw');
  var id_list=target.getSheetByName('id_list')
  var my_list=target.getSheetByName('my_list')
  var tw_list=target.getSheetByName('tw_list')
  var sg_list=target.getSheetByName('sg_list')
  var th_list=target.getSheetByName('th_list')
  var ph_list=target.getSheetByName('ph_list')
  var vn_list=target.getSheetByName('vn_list')
  
  //id
  id_list.clearContents()
  id_list.getRange(1,1,newData_id.length,newData_id[0].length).setValues(newData_id)
  
  //my
  my_list.clearContents()
  my_list.getRange(1,1,newData_my.length,newData_my[0].length).setValues(newData_my)
  
  //tw
  tw_list.clearContents()
  tw_list.getRange(1,1,newData_tw.length,newData_tw[0].length).setValues(newData_tw)
  
  //sg
  sg_list.clearContents()
  sg_list.getRange(1,1,newData_sg.length,newData_sg[0].length).setValues(newData_sg)
  
  //th
  th_list.clearContents()
  th_list.getRange(1,1,newData_th.length,newData_th[0].length).setValues(newData_th)
  
  //ph
  ph_list.clearContents()
  ph_list.getRange(1,1,newData_ph.length,newData_ph[0].length).setValues(newData_ph)
  
  //vn
  vn_list.clearContents()
  vn_list.getRange(1,1,newData_vn.length,newData_vn[0].length).setValues(newData_vn)
}

