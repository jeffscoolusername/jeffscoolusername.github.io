$(document).ready( function () {
  
    var table = $('#example').DataTable(); 
    var table1 = $('#example1').DataTable({
          "ajax": "https://jeffscoolusername.github.io/testfolder/test2/asatdbackupnolinks.json",
          "columns": [
              { "data": "Unit Name" },
              { "data": "ID" },
              { "data": "Algo Verified" },
              { "data": "Name" },
              { "data": "Date Created" },
              { "data": "Work History" }
          ]
  
    });
    var table2 = $('#example2').DataTable({
          ajax: 'https://jeffscoolusername.github.io/testfolder/test2/asatdbackupnolinks.json',
          "columns": [
              { "data": "Unit Name" },
              { "data": "ID" },
              { "data": "Algo Verified" },
              { "data": "Name" },
              { "data": "Date Created" },
              { "data": "Work History" }
          ]
  
    });
  
   
  } );
  