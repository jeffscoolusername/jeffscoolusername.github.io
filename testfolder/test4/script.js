$.getJSON( "https://api.myjson.com/bins/un18a", function( data ) {
   //console.log(data);
   jsonArr =data;
   //header
  if(jsonArr.length >0)
  {
    let firstRow =jsonArr[1];
    let allKeys =Object.keys(firstRow);
    var tblHeader = document.getElementById("header");
    allKeys.forEach(function(key) {
      var newel = document.createElement('th');
      newel.innerHTML = key;
      tblHeader.appendChild(newel);
  });

  var tblBody = document.getElementById("tbody");

  //rows
  jsonArr.forEach(function(row) {
     var newTr = document.createElement('tr');
     allKeys.forEach(function(key) {
        var newel = document.createElement('td');
        newel.innerHTML = row[key];
        newTr.appendChild(newel);
     });
    tblBody.appendChild(newTr); 
  });  
  }

  $('#example').DataTable();

});