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

    var jsonObj = [
        {"Asdf":"1", "Unit_Name": "ACORN", "ID": "226265212", "Algo Verified": "TBD", "Name": "AlgoNuts", "Date Created": "3", "Work History": "TBD",
        "Algo Grant": "TBD", "Company": "TBD", "Paper": "TBD", "Roadmap": "TBD", "Wallets": "Creator, Manager, Reserve", 
        "Other Links": "Discord, Email, TinyChart, Twitter"},
        {"Asdf":"2", "Unit_Name": "ACRES", "ID": "555540865", "Algo Verified": "TBD", "Name": "80Acres", "Date Created": "2", "Work History": "TBD",
        "Algo Grant": "TBD", "Company": "TBD", "Paper": "TBD", "Roadmap": "TBD", "Wallets": "Creator, Manager, Reserve", 
        "Other Links": "Email, Phone, TinyChart"},
        {"Asdf":"3", "Unit_Name": "ADVENTUR", "ID": "426526699", "Algo Verified": "TBD", "Name": "Adventure Coin", "Date Created": "3", "Work History": "TBD",
        "Algo Grant": "TBD", "Company": "TBD", "Paper": "TBD", "Roadmap": "TBD", "Wallets": "Creator, Manager, Reserve", 
        "Other Links": "Reddit, TinyChart, Twitter"},
        {"Asdf":"4", "Unit_Name": "AFD", "ID": "393495312", "Algo Verified": "TBD", "Name": "Algorand Faucet Drops", "Date Created": "4", "Work History": "TBD",
        "Algo Grant": "TBD", "Company": "TBD", "Paper": "Yes", "Roadmap": "TBD", "Wallets": "Creator, Reserve", "Other Links": "Discord, TinyChart, Twitter"},
        {"Asdf":"5", "Unit_Name": "AGNR", "ID": "305992851", "Algo Verified": "TBD", "Name": "Algoneer", "Date Created": "5", "Work History": "Team (1,2)",
        "Algo Grant": "TBD", "Company": "TBD", "Paper": "TBD", "Roadmap": "TBD", "Wallets": "Creator, Manager, Reserve", 
        "Other Links": "Discord, Ecosystem, GitHub, Reddit, TinyChart"}];
    
    var myTable = document.getElementById('example');

    getJSON('https://indexer.algoexplorerapi.io/v2/assets/226265212?include-all=true',
        function(err, data) {
            if (err !== null) {
            } else {                
            myTable.rows[1].cells[4].innerHTML = data.asset['asset-tx-counter'];
            jsonObj[0]['Date Created'] = data.asset['asset-tx-counter'];
            //alert("New Username: " + jsonObj[0]['Date Created']);
            }
        });     
    

    /*for (var i = 0; i < jsonObj.length; ++i) {
        if (jsonObj[i]['Asdf'] === '3') {
            jsonObj[i]['Date Created'] = 'UPDATED TEXT HERE';
        }
    }*/
        
    var exampleTable = $('#example')
        .DataTable({
            data: jsonObj,
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
                { 'data': 'Date Created' },
                { 'data': 'Work History' },
                { 'data': 'Algo Grant' },
                { 'data': 'Company' },
                { 'data': 'Paper' },
                { 'data': 'Roadmap' },
                { 'data': 'Wallets' },
                { 'data': 'Other Links' },
            ]
        });        

    /*
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
    
    getJSON('https://indexer.algoexplorerapi.io/v2/assets/226265212?include-all=true',
    function(err, data) {
        if (err !== null) {
        } else {                
            example.rows[2].cells[4].innerHTML = data.asset['asset-tx-counter'];
        }
    });      */
    
});

