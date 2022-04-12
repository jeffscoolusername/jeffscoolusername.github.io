$(document).ready( function () {
  
    var table = $('#example').DataTable(); 
    var table1 = $('#example1').DataTable({
          "ajax": "asatdbackupnolinks.json",
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
          ajax: 'asatdbackupnolinks.json',
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
  