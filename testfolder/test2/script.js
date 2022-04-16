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
   
            getJSON('https://indexer.algoexplorerapi.io/v2/assets/226265212',
          function(err, data0) {                  
            getJSON('https://indexer.algoexplorerapi.io/v2/assets/555540865',
          function(err, data1) {    
            getJSON('https://indexer.algoexplorerapi.io/v2/assets/426526699',
          function(err, data2) {    
            getJSON('https://indexer.algoexplorerapi.io/v2/assets/393495312',
          function(err, data3) {    
            getJSON('https://indexer.algoexplorerapi.io/v2/assets/305992851',
          function(err, data4) {    

    var jsObj = [
        {"Element":"0", "Unit_Name": "ACORN", "ID": "226265212", "Algo Verified": "TBD", "Name": "AlgoNuts", "TX_Counter": data0.asset['asset-tx-counter'], "Work History": "TBD",
        "Algo Grant": "TBD", "Company": "TBD", "Paper": "TBD", "Roadmap": "TBD", "Wallets": "Creator, Manager, Reserve", 
        "Other Links": "Discord, Email, TinyChart, Twitter"},
        {"Element":"1", "Unit_Name": "ACRES", "ID": "555540865", "Algo Verified": "TBD", "Name": "80Acres", "TX_Counter": data1.asset['asset-tx-counter'], "Work History": "TBD",
        "Algo Grant": "TBD", "Company": "TBD", "Paper": "TBD", "Roadmap": "TBD", "Wallets": "Creator, Manager, Reserve", 
        "Other Links": "Email, Phone, TinyChart"},
        {"Element":"2", "Unit_Name": "ADVENTUR", "ID": "426526699", "Algo Verified": "TBD", "Name": "Adventure Coin", "TX_Counter": data2.asset['asset-tx-counter'], "Work History": "TBD",
        "Algo Grant": "TBD", "Company": "TBD", "Paper": "TBD", "Roadmap": "TBD", "Wallets": "Creator, Manager, Reserve", 
        "Other Links": "Reddit, TinyChart, Twitter"},
        {"Element":"3", "Unit_Name": "AFD", "ID": "393495312", "Algo Verified": "TBD", "Name": "Algorand Faucet Drops", "TX_Counter": data3.asset['asset-tx-counter'], "Work History": "TBD",
        "Algo Grant": "TBD", "Company": "TBD", "Paper": "Yes", "Roadmap": "TBD", "Wallets": "Creator, Reserve", "Other Links": "Discord, TinyChart, Twitter"},
        {"Element":"4", "Unit_Name": "AGNR", "ID": "305992851", "Algo Verified": "TBD", "Name": "Algoneer", "TX_Counter": data3.asset['asset-tx-counter'], "Work History": "Team (1,2)",
        "Algo Grant": "TBD", "Company": "TBD", "Paper": "TBD", "Roadmap": "TBD", "Wallets": "Creator, Manager, Reserve", 
        "Other Links": "Discord, Ecosystem, GitHub, Reddit, TinyChart"}];            
            
    var exampleTable = $('#example')
        .DataTable({
            data: jsObj,
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

    }); }); }); }); }) })