$(document)
.ready(function() {
    var jsonObj = [
        {"ID":"1", "Unit_Name": "ACORN", "ID": "226265212", "Algo Verified": "TBD", "Name": "AlgoNuts", "Date Created": "Jun 21, 2021", "Work History": "TBD",
        "Algo Grant": "TBD", "Company": "TBD", "Paper": "TBD", "Roadmap": "TBD", "Wallets": "Creator, Manager, Reserve", 
        "Other Links": "Discord, Email, TinyChart, Twitter"},
        {"ID":"2", "Unit_Name": "ACRES", "ID": "555540865", "Algo Verified": "TBD", "Name": "80Acres", "Date Created": "Jan 20, 2022", "Work History": "TBD",
        "Algo Grant": "TBD", "Company": "TBD", "Paper": "TBD", "Roadmap": "TBD", "Wallets": "Creator, Manager, Reserve", 
        "Other Links": "Email, Phone, TinyChart"},
        {"ID":"3", "Unit_Name": "ADVENTUR", "ID": "426526699", "Algo Verified": "TBD", "Name": "Adventure Coin", "Date Created": "Nov 17, 2021", "Work History": "TBD",
        "Algo Grant": "TBD", "Company": "TBD", "Paper": "TBD", "Roadmap": "TBD", "Wallets": "Creator, Manager, Reserve", 
        "Other Links": "Reddit, TinyChart, Twitter"},
        {"ID":"4", "Unit_Name": "AFD", "ID": "393495312", "Algo Verified": "TBD", "Name": "Algorand Faucet Drops", "Date Created": "Nov 2, 2021", "Work History": "TBD",
        "Algo Grant": "TBD", "Company": "TBD", "Paper": "Yes", "Roadmap": "TBD", "Wallets": "Creator, Reserve", "Other Links": "Discord, TinyChart, Twitter"},
        {"ID":"5", "Unit_Name": "AGNR", "ID": "305992851", "Algo Verified": "TBD", "Name": "Algoneer", "Date Created": "Aug 18, 2021", "Work History": "Team (1,2)",
        "Algo Grant": "TBD", "Company": "TBD", "Paper": "TBD", "Roadmap": "TBD", "Wallets": "Creator, Manager, Reserve", 
        "Other Links": "Discord, Ecosystem, GitHub, Reddit, TinyChart"}];

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
    
    /*
    getJSON('https://indexer.algoexplorerapi.io/v2/assets/226265212?include-all=true',
    function(err, data) {
        if (err !== null) {
        } else {                
            $.each(jsonObj,function(i,v){       
                if (v.Id == 3) {
                  v.Name = "Thomas";
                  return false;
                }
              });
        }
    });      */

    $.each(jsonObj,function(i,v){       
        if (v.Id == 3) {
          v.Name = "Thomas";
          return false;
        }
      });

    alert("New Name: " + jsonObj[3].Name);
       
});

