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

    var thingie1 = '';   
    var thingie2 = '';
    var thingie3 = '';
    var thingie4 = '';
    var thingie5 = '';   

    getJSON('https://indexer.algoexplorerapi.io/v2/assets/226265212',
          function(err, data) {                  
            thingie1 = data.asset['asset-tx-counter'];
            getJSON('https://indexer.algoexplorerapi.io/v2/assets/555540865',
          function(err, data2) {    
            thingie2 = data2.asset['asset-tx-counter'];
            getJSON('https://indexer.algoexplorerapi.io/v2/assets/426526699',
          function(err, data3) {    
            thingie3 = data3.asset['asset-tx-counter'];
            getJSON('https://indexer.algoexplorerapi.io/v2/assets/393495312',
          function(err, data4) {    
            thingie4 = data4.asset['asset-tx-counter'];
            getJSON('https://indexer.algoexplorerapi.io/v2/assets/305992851',
          function(err, data5) {    
            thingie5 = data5.asset['asset-tx-counter'];

    var jsObj = [
        {"Asdf":"1", "Unit_Name": "ACORN", "ID": "226265212", "Algo Verified": "TBD", "Name": "AlgoNuts", "TX_Counter": thingie1, "Work History": "TBD",
        "Algo Grant": "TBD", "Company": "TBD", "Paper": "TBD", "Roadmap": "TBD", "Wallets": "Creator, Manager, Reserve", 
        "Other Links": "Discord, Email, TinyChart, Twitter"},
        {"Asdf":"2", "Unit_Name": "ACRES", "ID": "555540865", "Algo Verified": "TBD", "Name": "80Acres", "TX_Counter": thingie2, "Work History": "TBD",
        "Algo Grant": "TBD", "Company": "TBD", "Paper": "TBD", "Roadmap": "TBD", "Wallets": "Creator, Manager, Reserve", 
        "Other Links": "Email, Phone, TinyChart"},
        {"Asdf":"3", "Unit_Name": "ADVENTUR", "ID": "426526699", "Algo Verified": "TBD", "Name": "Adventure Coin", "TX_Counter": thingie3, "Work History": "TBD",
        "Algo Grant": "TBD", "Company": "TBD", "Paper": "TBD", "Roadmap": "TBD", "Wallets": "Creator, Manager, Reserve", 
        "Other Links": "Reddit, TinyChart, Twitter"},
        {"Asdf":"4", "Unit_Name": "AFD", "ID": "393495312", "Algo Verified": "TBD", "Name": "Algorand Faucet Drops", "TX_Counter": thingie4, "Work History": "TBD",
        "Algo Grant": "TBD", "Company": "TBD", "Paper": "Yes", "Roadmap": "TBD", "Wallets": "Creator, Reserve", "Other Links": "Discord, TinyChart, Twitter"},
        {"Asdf":"5", "Unit_Name": "AGNR", "ID": "305992851", "Algo Verified": "TBD", "Name": "Algoneer", "TX_Counter": thingie5, "Work History": "Team (1,2)",
        "Algo Grant": "TBD", "Company": "TBD", "Paper": "TBD", "Roadmap": "TBD", "Wallets": "Creator, Manager, Reserve", 
        "Other Links": "Discord, Ecosystem, GitHub, Reddit, TinyChart"}];            
     
            
    var exampleTable = $('#example')
        .DataTable({
            data: jsObj,
            'aaSorting': [[1, 'asc']],
            dom: "<'row'<'col-md-6 text-left'T><'col-md-6 text-right'f>>" +
                "<'row'<'col-md-12't>>" +
                "<'row'<'col-md-6'i><'col-md-6'p>>",
            'columnDefs': [
                { 'width': '25px', 'targets': [0] }
            ],
            colReorder: true,
            paging: false,
            keys: true,
            fixedHeader: true,
            'columns': [
                { 'data': 'Unit_Name' },
                { 'data': 'ID' },
                { 'data': 'Algo Verified' },
                { 'data': 'Name' },
                { 'data': 'TX_Counter' },
                { 'data': 'Work History' },
                { 'data': 'Algo Grant' },
                { 'data': 'Company' },
                { 'data': 'Paper' },
                { 'data': 'Roadmap' },
                { 'data': 'Wallets' },
                { 'data': 'Other Links' },
            ]
        });        

    });  

    });    }); }); }); }); 