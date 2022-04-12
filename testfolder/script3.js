$(document).ready(function() {
    $('#example').DataTable( {
        ajax: "testdata.json",
        table: "#example",
        fields: [ {
                label: "asset-tx-counter:",
                name: "asset.asset-tx-counter"
            } 
        ]
    } );
} );