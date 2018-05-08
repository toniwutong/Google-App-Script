function getNameandId() {
 
 //Define the target folder
 var folder = DriveApp.getFolderById(FolderId); 
 
 //Get all files in the target folder
 var files = folder.getFiles();
 
 //Create a sheet to store Name and SpreadsheetId
 var contact_list = SpreadsheetApp.create('Name_Id')
 var contacts = contact_list.getActiveSheet()
 contacts.appendRow(["Name","File_Id"]);
 
 //Define varibales
 var name;
 var id;
 var data;
 
 while (files.hasNext()){
   file = files.next()
   var fullname = file.getName()
   if (fullname.toString() == 'PMO_Alarm system CB/Local summary '){
     continue
   }
   else
   {
     var array1 = [{}];
     array1 = fullname.toString().split("_");
     name = array1[1];
     name = name.replace(/^\s+|\s+$/g,"")
     
     //store name and spreadsheetid of each file in contact_list
     id = file.getId();
     data = [name,id];
     contacts.appendRow(data);
     
     //Check the result
     Logger.log(name);
   }
  }
}

