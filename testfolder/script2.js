$(document).ready( function () {
  
    var table1 = $('#example').DataTable({
          "url": "https://indexer.algoexplorerapi.io/v2/assets/226265212",
          "columns": [
             // { "data": "asset.[asset-tx-counter]" }
             // { "data": "asset-tx-counter" }
             // { "asset": "asset-tx-counter" }                       
             // { "asset": ".[asset-tx-counter]" }
             // { "asset[]": "asset-tx-counter" }   
          ]
  
    });
  
   
  } );
  