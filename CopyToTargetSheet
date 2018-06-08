function copybycountry() {
  //filter for all countries
  var all_list = SpreadsheetApp.openById('1unVJfo53DLPH4X4PO1a72lVcXlGaiowtoTg7eCHUJnw');
  //id filter
  var id_list = all_list.getSheetByName('id_list');
  var id_lr = id_list.getLastRow();
  var id_filter = id_list.getRange(1, 1, id_lr, 2).getValues();
  //my filter
  var my_list = all_list.getSheetByName('my_list');
  var my_lr = my_list.getLastRow();
  var my_filter = my_list.getRange(1, 1, my_lr, 2).getValues();
  //tw filter
  var tw_list = all_list.getSheetByName('tw_list');
  var tw_lr = tw_list.getLastRow();
  var tw_filter = tw_list.getRange(1, 1, tw_lr, 2).getValues();
  //sg filter
  var sg_list = all_list.getSheetByName('sg_list');
  var sg_lr = sg_list.getLastRow();
  var sg_filter = sg_list.getRange(1, 1, sg_lr, 2).getValues();
  //th filter
  var th_list = all_list.getSheetByName('th_list');
  var th_lr = th_list.getLastRow();
  var th_filter = th_list.getRange(1, 1, th_lr, 2).getValues();
  //ph filter
  var ph_list = all_list.getSheetByName('ph_list');
  var ph_lr = ph_list.getLastRow();
  var ph_filter = ph_list.getRange(1, 1, ph_lr, 2).getValues();
  //vn filter
  var vn_list = all_list.getSheetByName('vn_list');
  var vn_lr = vn_list.getLastRow();
  var vn_filter = vn_list.getRange(1, 1, vn_lr, 2).getValues();
  
  //raw data
  var origin = SpreadsheetApp.openById('1EntyxzaN1H8v0JmpBBQrVovvC2jBUHV00duJ9pGFXyA');
  //raw data of sgmytw
  var sg_origin = origin.getSheetByName('sg')
  var sg_lr = sg_origin.getLastRow()
  var sg_data = sg_origin.getRange(1, 1, sg_lr, 13).getValues()
  
  var my_origin = origin.getSheetByName('my')
  var my_lr = my_origin.getLastRow()
  var my_data = my_origin.getRange(1, 1, my_lr, 13).getValues()
  
  var tw_origin = origin.getSheetByName('tw')
  var tw_lr = tw_origin.getLastRow()
  var tw_data = tw_origin.getRange(1, 1, tw_lr, 13).getValues()
  
  //raw data of idth
  var id_origin = origin.getSheetByName('id')
  var id_lr = id_origin.getLastRow()
  var id_data = id_origin.getRange(1, 1, id_lr, 13).getValues()
  
  var th_origin = origin.getSheetByName('th')
  var th_lr = th_origin.getLastRow()
  var th_data = th_origin.getRange(1, 1, th_lr, 13).getValues()
  
  //raw data of phvn
  var ph_origin = origin.getSheetByName('ph');
  var ph_lr = ph_origin.getLastRow();
  var ph_data = ph_origin.getRange(1, 1, ph_lr, 13).getValues();
  
  var vn_origin = origin.getSheetByName('vn');
  var vn_lr = vn_origin.getLastRow();
  var vn_data = vn_origin.getRange(1, 1, vn_lr, 13).getValues();
  
  //sg all target
  var sg_target = SpreadsheetApp.openById('1F0petyS8lsjTOLK0VxfzbcnoUysj8J1nVhjVIYtIH7Y');
  var sg_sheets = sg_target.getSheets();
  for (i = 1; i < sg_sheets.length; i++) {
    sg_target.deleteSheet(sg_sheets[i]);
  }
  //
  for (t in sg_filter){
    var country = sg_filter[t][0]
    var maincat = sg_filter[t][1]
    var data=[]
    //filter rows and write into sheets
    for (i in sg_data){
      if(((sg_data[i][2] == 'country')||sg_data[i][2] == country)&((sg_data[i][3] == 'main_category')||(sg_data[i][3] == maincat)))
      {
        data.push(sg_data[i])
      }
    }
    var ds = sg_target.insertSheet(country+'_'+maincat, i);
    ds.getRange(ds.getLastRow()+1, 1, data.length, data[0].length).setValues(data);
    ds.getRange("N2").setFormula("=IMAGE(M2,4,100,100)")
    var filldownrange=ds.getRange(2, 14, data.length,1)
    ds.getRange("N2").copyTo(filldownrange)
    ds.setRowHeights(2, data.length, 100)
    ds.setFrozenRows(1);
    ds.getRange("A1:N1").setFontWeight("bold");
    ds.getRange("K1:K100").setNumberFormat('0.00');
  }
  var sg_sheets_new = sg_target.getSheets()
  sg_target.deleteSheet(sg_sheets_new[1])
  
  //my all target
  var my_target = SpreadsheetApp.openById('1jFLynpP6Q5V9fM-G4MfBaA_WlYCQyDimEX5pdIjXSMA');
  var my_sheets = my_target.getSheets();
  for (i = 1; i < my_sheets.length; i++) {
    my_target.deleteSheet(my_sheets[i]);
  }
  //
  for (t in my_filter){
    var country = my_filter[t][0]
    var maincat = my_filter[t][1]
    var data=[]
    //filter rows and write into sheets
    for (i in my_data){
      if(((my_data[i][2] == 'country')||my_data[i][2] == country)&((my_data[i][3] == 'main_category')||(my_data[i][3] == maincat)))
      {
        data.push(my_data[i])
      }
    }
    var ds = my_target.insertSheet(country+'_'+maincat, i);
    ds.getRange(ds.getLastRow()+1, 1, data.length, data[0].length).setValues(data);
    ds.getRange("N2").setFormula("=IMAGE(M2,4,100,100)")
    var filldownrange=ds.getRange(2, 14, data.length,1)
    ds.getRange("N2").copyTo(filldownrange)
    ds.setRowHeights(2, data.length, 100)
    ds.setFrozenRows(1);
    ds.getRange("A1:N1").setFontWeight("bold");
    ds.getRange("K1:K100").setNumberFormat('0.00');
  }
  var my_sheets_new = my_target.getSheets()
  my_target.deleteSheet(my_sheets_new[1])
  
  //tw all target
  var tw_target = SpreadsheetApp.openById('1WSea00vx23LevvgEkFfdsDnaHmqw8BpLvL_vVI0liyQ')
  var tw_sheets = tw_target.getSheets();
  for (i = 1; i < tw_sheets.length; i++) {
    tw_target.deleteSheet(tw_sheets[i]);
  }
  //
  for (t in tw_filter){
    var country = tw_filter[t][0]
    var maincat = tw_filter[t][1]
    var data=[]
    //filter rows and write into sheets
    for (i in tw_data){
      if(((tw_data[i][2] == 'country')||tw_data[i][2] == country)&((tw_data[i][3] == 'main_category')||(tw_data[i][3] == maincat)))
      {
        data.push(tw_data[i])
      }
    }
    var ds = tw_target.insertSheet(country+'_'+maincat, i);
    ds.getRange(ds.getLastRow()+1, 1, data.length, data[0].length).setValues(data);
    ds.getRange("N2").setFormula("=IMAGE(M2,4,100,100)")
    var filldownrange=ds.getRange(2, 14, data.length,1)
    ds.getRange("N2").copyTo(filldownrange)
    ds.setRowHeights(2, data.length, 100)
    ds.setFrozenRows(1);
    ds.getRange("A1:N1").setFontWeight("bold");
    ds.getRange("K1:K100").setNumberFormat('0.00');
  }
  var tw_sheets_new = tw_target.getSheets()
  tw_target.deleteSheet(tw_sheets_new[1])
  
  //id all target
  var id_target = SpreadsheetApp.openById('1zr0_qZ9rXK5MqJjwRt9VIAHW27u-wwIAknIlh_0lrAM')
  var id_sheets = id_target.getSheets();
  for (i = 1; i < id_sheets.length; i++) {
    id_target.deleteSheet(id_sheets[i]);
  }
  //
  for (t in id_filter){
    var country = id_filter[t][0]
    var maincat = id_filter[t][1]
    var data=[]
    //filter rows and write into sheets
    for (i in id_data){
      if(((id_data[i][2] == 'country')||id_data[i][2] == country)&((id_data[i][3] == 'main_category')||(id_data[i][3] == maincat)))
      {
        data.push(id_data[i])
      }
    }
    var ds = id_target.insertSheet(country+'_'+maincat, i);
    ds.getRange(ds.getLastRow()+1, 1, data.length, data[0].length).setValues(data);
    ds.getRange("N2").setFormula("=IMAGE(M2,4,100,100)")
    var filldownrange=ds.getRange(2, 14, data.length,1)
    ds.getRange("N2").copyTo(filldownrange)
    ds.setRowHeights(2, data.length, 100)
    ds.setFrozenRows(1);
    ds.getRange("A1:N1").setFontWeight("bold");
    ds.getRange("K1:K100").setNumberFormat('0.00');
  }
  var id_sheets_new = id_target.getSheets()
  id_target.deleteSheet(id_sheets_new[1])
  
  //th all target
  var th_target = SpreadsheetApp.openById('1ijd1DZ-PEoy4slJpuhbNIrbVQJxsfH5UZki0nKj7LIA')
  var th_sheets = th_target.getSheets();
  for (i = 1; i < th_sheets.length; i++) {
    th_target.deleteSheet(th_sheets[i]);
  }
  //
  for (t in th_filter){
    var country = th_filter[t][0]
    var maincat = th_filter[t][1]
    var data=[]
    //filter rows and write into sheets
    for (i in th_data){
      if(((th_data[i][2] == 'country')||th_data[i][2] == country)&((th_data[i][3] == 'main_category')||(th_data[i][3] == maincat)))
      {
        data.push(th_data[i])
      }
    }
    var ds = th_target.insertSheet(country+'_'+maincat, i);
    ds.getRange(ds.getLastRow()+1, 1, data.length, data[0].length).setValues(data);
    ds.getRange("N2").setFormula("=IMAGE(M2,4,100,100)")
    var filldownrange=ds.getRange(2, 14, data.length,1)
    ds.getRange("N2").copyTo(filldownrange)
    ds.setRowHeights(2, data.length, 100)
    ds.setFrozenRows(1);
    ds.getRange("A1:N1").setFontWeight("bold");
    ds.getRange("K1:K100").setNumberFormat('0.00');
  }
  var th_sheets_new = th_target.getSheets()
  th_target.deleteSheet(th_sheets_new[1])
  
  //ph all target
  var ph_target = SpreadsheetApp.openById('1v3dSiZGu2GptXhrGuq0PE4lb49bAAM9LXUchmuYdEHI')
  var ph_sheets = ph_target.getSheets();
  for (i = 1; i < ph_sheets.length; i++) {
    ph_target.deleteSheet(ph_sheets[i]);
  }
  //
  for (t in ph_filter){
    var country = ph_filter[t][0]
    var maincat = ph_filter[t][1]
    var data=[]
    //filter rows and write into sheets
    for (i in ph_data){
      if(((ph_data[i][2] == 'country')||ph_data[i][2] == country)&((ph_data[i][3] == 'main_category')||(ph_data[i][3] == maincat)))
      {
        data.push(ph_data[i])
      }
    }
    var ds = ph_target.insertSheet(country+'_'+maincat, i);
    ds.getRange(ds.getLastRow()+1, 1, data.length, data[0].length).setValues(data);
    ds.getRange("N2").setFormula("=IMAGE(M2,4,100,100)")
    var filldownrange=ds.getRange(2, 14, data.length,1)
    ds.getRange("N2").copyTo(filldownrange)
    ds.setRowHeights(2, data.length, 100)
    ds.setFrozenRows(1);
    ds.getRange("A1:N1").setFontWeight("bold");
    ds.getRange("K1:K100").setNumberFormat('0.00');
  }
  var ph_sheets_new = ph_target.getSheets()
  ph_target.deleteSheet(ph_sheets_new[1])
  
  //vn all target
  var vn_target = SpreadsheetApp.openById('1XAwV1HuuaLynkxjzU42ouxKZU9PXz0bCmCOCeHBshbU')
  var vn_sheets = vn_target.getSheets();
  for (i = 1; i < vn_sheets.length; i++) {
    vn_target.deleteSheet(vn_sheets[i]);
  }
  //
  for (t in vn_filter){
    var country = vn_filter[t][0]
    var maincat = vn_filter[t][1]
    var data=[]
    //filter rows and write into sheets
    for (i in vn_data){
      if(((vn_data[i][2] == 'country')||vn_data[i][2] == country)&((vn_data[i][3] == 'main_category')||(vn_data[i][3] == maincat)))
      {
        data.push(vn_data[i])
      }
    }
    var ds = vn_target.insertSheet(country+'_'+maincat, i);
    ds.getRange(ds.getLastRow()+1, 1, data.length, data[0].length).setValues(data);
    ds.getRange("N2").setFormula("=IMAGE(M2,4,100,100)")
    var filldownrange=ds.getRange(2, 14, data.length,1)
    ds.getRange("N2").copyTo(filldownrange)
    ds.setRowHeights(2, data.length, 100)
    ds.setFrozenRows(1);
    ds.getRange("A1:N1").setHorizontalAlignment("center");
    ds.getRange("A1:N1").setFontWeight("bold");
    ds.getRange("K1:K100").setNumberFormat('0.00');
  }
  var vn_sheets_new = vn_target.getSheets()
  vn_target.deleteSheet(vn_sheets_new[1])
}

