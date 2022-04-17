$(document)
.ready(function() {

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

    var algoexplorerapi = 'https://indexer.algoexplorerapi.io/v2/assets/';

    var url0 = algoexplorerapi + '397111682';var url1 = algoexplorerapi + '353409462';

    var p0 = 'loading';
    var p1 = 'loading';
    var p2 = 'loading';
    var p3 = 'loading';
    var p4 = 'loading';
    var p5 = 'loading';
    var p6 = 'loading';
    var p7 = 'loading';
    var p8 = 'loading';
    var p9 = 'loading';
    var p10 = 'loading';
    var p11 = 'loading';
    var p12 = 'loading';
    var p13 = 'loading';
    var p14 = 'loading';
    
    var myTable = document.getElementById('example');

    var jsObj = [
        {'Element':'0', 'Unit Name': p0, 'ID': p1, 'Created at Round': p2,      
        'Name': p3, 'Transactions Counter': p4, 'Circulating Supply': p5,
        'Total Supply': p6, '% in Circulation': p7 + '%'},
        {'Element':'1', 'Unit Name': p7, 'ID': p8, 'Created at Round': p9,      
        'Name': p10, 'Transactions Counter': p11, 'Circulating Supply': p12,
        'Total Supply': p13, '% in Circulation': p14 + '%'}];     

    
    getJSON('https://indexer.algoexplorerapi.io/v2/assets/226265212?include-all=true',
        function(err, data) {
            if (err !== null) {
            } else {         
            p0 = data.asset['unit-name'];
            p1 = data.asset['asset-tx-counter'];
            p2 = data.asset['created-at-round'];
            p3 = data.asset.params['name'];
            p4 = data.asset['asset-tx-counter'];
            p5 = data.asset.params['circulating-supply'];
            p6 = data.asset.params['total'];
            p7 = (data.asset.params['circulating-supply']/data.asset.params['total']).toFixed(2);
            }
        });       
            
    var exampleTable = $('#example')
        .DataTable({
            ajax: {
                    data: jsObj,
                    colReorder: true,
                    paging: false,
                    keys: true,
                    //fixedHeader: true,
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
                }
     });   


    }) 