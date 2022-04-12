var editor; // use a global for the submit and return data rendering in the examples
 
$(document).ready(function() {
    editor = new $.fn.dataTable( {
        ajax: "/testdata.json",
        table: "#example",
        fields: [ {
                label: "asset-tx-counter:",
                name: "asset.asset-tx-counter"
            } 
        ]
    } );
} );