$(document)
.ready(function() {
    $.ajax({
        url: 'https://indexer.algoexplorerapi.io/v2/assets/393537671?include-all=true',
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
                        { 'data': 'asset-tx-counter' },
                        { 'data': 'created-at' },
                        { 'data': 'creation-txid' }
                    ]
                });
        }
    });
});

