$(document)

var jsonObj = [
    {"Unit Name": "ACORN", "ID": "226265212", "Algo Verified": "TBD", "Name": "AlgoNuts", "Date Created": "Jun 21, 2021", "Work History": "TBD",
    "Algo Grant": "TBD", "Company": "TBD", "Paper": "TBD", "Roadmap": "TBD", "Wallets": "Creator, Manager, Reserve", 
    "Other Links": "Discord, Email, TinyChart, Twitter"},
    {"Unit Name": "ACRES", "ID": "555540865", "Algo Verified": "TBD", "Name": "80Acres", "Date Created": "Jan 20, 2022", "Work History": "TBD",
    "Algo Grant": "TBD", "Company": "TBD", "Paper": "TBD", "Roadmap": "TBD", "Wallets": "Creator, Manager, Reserve", 
    "Other Links": "Email, Phone, TinyChart"},
    {"Unit Name": "ADVENTUR", "ID": "426526699", "Algo Verified": "TBD", "Name": "Adventure Coin", "Date Created": "Nov 17, 2021", "Work History": "TBD",
    "Algo Grant": "TBD", "Company": "TBD", "Paper": "TBD", "Roadmap": "TBD", "Wallets": "Creator, Manager, Reserve", 
    "Other Links": "Reddit, TinyChart, Twitter"},
    {"Unit Name": "AFD", "ID": "393495312", "Algo Verified": "TBD", "Name": "Algorand Faucet Drops", "Date Created": "Nov 2, 2021", "Work History": "TBD",
    "Algo Grant": "TBD", "Company": "TBD", "Paper": "Yes", "Roadmap": "TBD", "Wallets": "Creator, Reserve", "Other Links": "Discord, TinyChart, Twitter"},
    {"Unit Name": "AGNR", "ID": "305992851", "Algo Verified": "TBD", "Name": "Algoneer", "Date Created": "Aug 18, 2021", "Work History": "Team (1,2)",
    "Algo Grant": "TBD", "Company": "TBD", "Paper": "TBD", "Roadmap": "TBD", "Wallets": "Creator, Manager, Reserve", 
    "Other Links": "Discord, Ecosystem, GitHub, Reddit, TinyChart"}]

.ready(function() {
    $.ajax({
        data: jsonObj,
        method: 'get',
        dataType: 'json',
        success: function(data) {
            var exampleTable = $('#example')
                .DataTable({
                    data: data,
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
                        { 'data': 'Unit Name' },
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
        }
    });
});


function setName(id, newName) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (jsonObj[i].Id === id) {
        jsonObj[i].Name = newName;
        return;
      }
    }
  }

  setName(3, "Thomas");
