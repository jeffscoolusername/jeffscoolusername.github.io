$(document)
.ready(function() {
    $.ajax({
        url: 'asatdbackupnolinks.json',
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

var myTable = document.getElementById('example');

  getJSON('https://indexer.algoexplorerapi.io/v2/assets/226265212?include-all=true',
    function(err, data) {
        if (err !== null) {
        } else {                
          myTable.rows[1].cells[4].innerHTML = data.asset['asset-tx-counter'];
        }
    });          

  getJSON('https://indexer.algoexplorerapi.io/v2/assets/393537671?include-all=true',
    function(err, data) {
        if (err !== null) {
        } else {                
          myTable.rows[2].cells[4].innerHTML = data.asset['asset-tx-counter'];
        }
    });

    getJSON('https://indexer.algoexplorerapi.io/v2/assets/511484048?include-all=true',
    function(err, data) {
        if (err !== null) {
        } else {                
          myTable.rows[3].cells[4].innerHTML = data.asset['asset-tx-counter'];
        }
    });

