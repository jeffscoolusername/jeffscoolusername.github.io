$(document)
.ready(function() {

    //Get request for the Algorand API
    let getJSON = function(url, callback) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
            let status = xhr.status;
            if (status === 200) {
                callback(null, xhr.response);
            } else {
                callback(status, xhr.response);
            }
        };
        xhr.send();
    };

    //Wall of variables - Todo: Make this more efficient
    var api = 'https://indexer.algoexplorerapi.io/v2/assets/';
    //Disable alerts
    var url0 = api + '397111682';

    var tb0,tb1,tb2,tb3,tb4,tb5,tb6,tb7 = 'loading';

    var marshmellar = getJSON(url0,async function (err, data0){
        if (err !== null) 
        {
            setTimeout(marshmellar, 300);  
            
        }
        else         
        {
            tb0 = data0.asset.params['unit-name'];
            tb1 = data0.asset['index'];
            tb2 = data0.asset['created-at-round'];
            tb3 = data0.asset.params['name'];
            tb4 = data0.asset['asset-tx-counter'];
            tb5 = data0.asset.params['circulating-supply'];
            tb6 = data0.asset.params['total'];
            tb7 = ((data0.asset.params['circulating-supply']/data0.asset.params['total'])*100).toFixed(6);   
        }
     });
    
     
    marshmellar;


    // The array
    var jsObj = [
      {'Unit Name' : tb0, 'ID': tb1, 'Created at Round': tb2, 'Name': tb3, 'Transactions Counter': tb4, 'Circulating Supply': tb5, 'Total Supply': tb6, 
      '% in Circulation': tb7 }];            
        
    //The table
    var exampleTable = $('#example')
        .DataTable({
            data: jsObj,
            colReorder: true,
            paging: false,
            keys: true,
            'columns': [
                { 'data': 'Unit Name' },
                { 'data': 'ID' },
                { 'data': 'Created at Round' },
                { 'data': 'Name' },
                { 'data': 'Transactions Counter' },
                { 'data': 'Circulating Supply' },
                { 'data': 'Total Supply' },
                { 'data': '% in Circulation' }
            ]
        }); 

         
    }); 