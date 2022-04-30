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

        var algochartsapi = 'https://algocharts.net/api/?asset_in=';
        var algoexplorerapi = 'https://indexer.algoexplorerapi.io/v2/assets/';
        var algowalletexplorerapi = 'https://api.algoexplorer.io/v1/account/';

        var url0 = algoexplorerapi + '397111682';
        var url1 = algoexplorerapi + '511484048';
        var url2 = algoexplorerapi + '27165954';
        var url3 = algoexplorerapi + '478549868';
        var url4 = algoexplorerapi + '470842789';
        var url5 = algoexplorerapi + '31566704';
        var url6 = algoexplorerapi + '237913743';
        var url7 = algoexplorerapi + '307329013';
        var url8 = algoexplorerapi + '257805044';      

        var asatokenarray = ['397111682', '353409462', '430838314', '226265212'];       
        var unusedasatokenarray = ['237913743', '307329013', '257805044', '276461096', '306034694', '287504952', '310079703', '284090786'];

        var asset0 = '&asset_out=0';        

        var url00 = algochartsapi + asatokenarray[0] + asset0;
        var url01 = algochartsapi + asatokenarray[1] + asset0;
        var url02 = algochartsapi + asatokenarray[2] + asset0;
        var url03 = algochartsapi + asatokenarray[3] + asset0;    
        
        var urlalgoexplorer00 = algoexplorerapi + asatokenarray[0];
        var urlalgoexplorer01 = algoexplorerapi + asatokenarray[1];
        var urlalgoexplorer02 = algoexplorerapi + asatokenarray[2];
        var urlalgoexplorer03 = algoexplorerapi + asatokenarray[3];

        var urlalgoexplorerunused00 = algoexplorerapi + unusedasatokenarray[0];

        const b = [url00, url01, url02, url03, urlalgoexplorer00, urlalgoexplorer01, urlalgoexplorer02, urlalgoexplorer03];        

        var tinymanwoof420 = 420;
        var tinymanwoof421 = 421;
        var tinymanwoof422 = 422;
        var tinymanwoof423 = 423;

        var algoexplorercreatedatround0 = 0;
        var algoexplorercreationtxid0 = 0;
        var algoexplorerdecimals0 = 0;
        var algoexplorerdefaultfrozen0 = 0;
        var algoexplorerindex0 = 0;
        var algoexplorername0 = 0;
        var algoexplorercirculatingsupply0 = 0;
        var algoexplorerpercentcirculation0 = 0;
        var algoexplorertotal0 = 0;
        var algoexplorerassettxcounter0 = 0;
        var algoexplorerassetunitname0 = 0;

        var algoexplorercreatedatround1 = 0;
        var algoexplorercreationtxid1 = 0;
        var algoexplorerdecimals1 = 0;
        var algoexplorerdefaultfrozen1 = 0;
        var algoexplorerindex1 = 0;
        var algoexplorername1 = 0;
        var algoexplorercirculatingsupply1 = 0;
        var algoexplorerpercentcirculation1 = 0;
        var algoexplorertotal1 = 0;
        var algoexplorerassettxcounter1 = 0;
        var algoexplorerassetunitname1 = 0;

        var algoexplorercreatedatround2 = 0;
        var algoexplorercreationtxid2 = 0;
        var algoexplorerdecimals2 = 0;
        var algoexplorerdefaultfrozen2 = 0;
        var algoexplorerindex2 = 0;
        var algoexplorername2 = 0;
        var algoexplorercirculatingsupply2 = 0;
        var algoexplorerpercentcirculation2 = 0;
        var algoexplorertotal2 = 0;
        var algoexplorerassettxcounter2 = 0;
        var algoexplorerassetunitname2 = 0;
        
        var algoexplorercreatedatround3 = 0;
        var algoexplorercreationtxid3 = 0;
        var algoexplorerdecimals3 = 0;
        var algoexplorerdefaultfrozen3 = 0;
        var algoexplorerindex3 = 0;
        var algoexplorername3 = 0;
        var algoexplorercirculatingsupply3 = 0;
        var algoexplorerpercentcirculation3 = 0;
        var algoexplorertotal3 = 0;
        var algoexplorerassettxcounter3 = 0;
        var algoexplorerassetunitname3 = 0;

        for (const element of b) { // You can use `let` instead of `const` if you like
            //console.log(element);
            getJSON(element, async function(err, data42071) {
                if (err !== null) {
                    return $.getJSON(element);
                } else {

                    if (url00 === element) {
                        tinymanwoof420 = data42071.data/*.toFixed(6)*/;    
                    }
                    if (url01 === element) {
                        tinymanwoof421 = data42071.data;    
                    }
                    if (url02 === element) {
                        tinymanwoof422 = data42071.data;    
                    }
                    if (url03 === element) {
                        tinymanwoof423 = data42071.data;    
                    }                    
                    
                    if (urlalgoexplorer00 === element) {
                        algoexplorercreatedatround0 = data42071.asset['created-at-round'];    
                        algoexplorercreationtxid0 = data42071.asset['creation-txid'];  
                        algoexplorerdecimals0 = data42071.asset.params['decimals'];
                        algoexplorerdefaultfrozen0 = data42071.asset.params['default-frozen'];
                        algoexplorerindex0 = data42071.asset['index'];
                        algoexplorername0 = data42071.asset.params['name'];
                        algoexplorercirculatingsupply0 = data42071.asset.params['circulating-supply'];
                        algoexplorerpercentcirculation0 = ((data42071.asset.params['circulating-supply'] / data42071.asset.params['total']) * 100).toFixed(6);
                        algoexplorertotal0 = data42071.asset.params['total'];
                        algoexplorerassettxcounter0 = data42071.asset['asset-tx-counter']; 
                        algoexplorerassetunitname0 = data42071.asset.params['unit-name'];  
                        }
                    if (urlalgoexplorer01 === element) {
                        algoexplorercreatedatround1 = data42071.asset['created-at-round'];    
                        algoexplorercreationtxid1 = data42071.asset['creation-txid'];  
                        algoexplorerdecimals1 = data42071.asset.params['decimals'];
                        algoexplorerdefaultfrozen1 = data42071.asset.params['default-frozen'];
                        algoexplorerindex1 = data42071.asset['index'];
                        algoexplorername1 = data42071.asset.params['name'];
                        algoexplorercirculatingsupply1 = data42071.asset.params['circulating-supply'];
                        algoexplorerpercentcirculation1 = ((data42071.asset.params['circulating-supply'] / data42071.asset.params['total']) * 100).toFixed(6);
                        algoexplorertotal1 = data42071.asset.params['total'];
                        algoexplorerassettxcounter1 = data42071.asset['asset-tx-counter']; 
                        algoexplorerassetunitname1 = data42071.asset.params['unit-name'];  
                        }
                    if (urlalgoexplorer02 === element) {  
                        algoexplorercreatedatround2 = data42071.asset['created-at-round'];    
                        algoexplorercreationtxid2 = data42071.asset['creation-txid'];  
                        algoexplorerdecimals2 = data42071.asset.params['decimals'];
                        algoexplorerdefaultfrozen2 = data42071.asset.params['default-frozen'];
                        algoexplorerindex2 = data42071.asset['index'];
                        algoexplorername2 = data42071.asset.params['name'];
                        algoexplorercirculatingsupply2 = data42071.asset.params['circulating-supply'];
                        algoexplorerpercentcirculation2 = ((data42071.asset.params['circulating-supply'] / data42071.asset.params['total']) * 100).toFixed(6);
                        algoexplorertotal2 = data42071.asset.params['total'];
                        algoexplorerassettxcounter2 = data42071.asset['asset-tx-counter']; 
                        algoexplorerassetunitname2 = data42071.asset.params['unit-name'];  
                        }
                    if (urlalgoexplorer03 === element) {  
                        algoexplorercreatedatround3 = data42071.asset['created-at-round'];    
                        algoexplorercreationtxid3 = data42071.asset['creation-txid'];  
                        algoexplorerdecimals3 = data42071.asset.params['decimals'];
                        algoexplorerdefaultfrozen3 = data42071.asset.params['default-frozen'];
                        algoexplorerindex3 = data42071.asset['index'];
                        algoexplorername3 = data42071.asset.params['name'];
                        algoexplorercirculatingsupply3 = data42071.asset.params['circulating-supply'];
                        algoexplorerpercentcirculation3 = ((data42071.asset.params['circulating-supply'] / data42071.asset.params['total']) * 100).toFixed(6);
                        algoexplorertotal3 = data42071.asset.params['total'];
                        algoexplorerassettxcounter3 = data42071.asset['asset-tx-counter']; 
                        algoexplorerassetunitname3 = data42071.asset.params['unit-name'];  
                        }                

                }
    
            });  
        }     
        
        //i realize this part of the code is programatically absurd but i'm just not quite good enough yet to figure out another solution
        //if you know a better way plz help me here and make this less cringe     
        //ideas: call the below (minus the shell of a getJSON chain) at the end of the above stuff   

        getJSON(urlalgoexplorerunused00, async function(err, dataunused0) {
            if (err !== null) {
                return $.getJSON(urlalgoexplorerunused00);
            } else {
                var jsObj0 = [
                    {
                        'Name': algoexplorername0,
                        'Index': algoexplorerindex0,
                        'Tinyman Price' : tinymanwoof420,
                        '% in Circulation': algoexplorerpercentcirculation0,
                        'Transactions Counter': algoexplorerassettxcounter0,
                        'Created at Round': algoexplorercreatedatround0
                    },
                    {
                        'Name': algoexplorername1,
                        'Index': algoexplorerindex1,
                        'Tinyman Price' : tinymanwoof421,
                        '% in Circulation': algoexplorerpercentcirculation1,
                        'Transactions Counter': algoexplorerassettxcounter1,
                        'Created at Round': algoexplorercreatedatround1
                    },
                    {
                        'Name': algoexplorername2,
                        'Index': algoexplorerindex2,
                        'Tinyman Price' : tinymanwoof422,
                        '% in Circulation': algoexplorerpercentcirculation2,
                        'Transactions Counter': algoexplorerassettxcounter2,
                        'Created at Round': algoexplorercreatedatround2
                    },
                    {
                        'Name': algoexplorername3,
                        'Index': algoexplorerindex3,
                        'Tinyman Price' : tinymanwoof423,
                        '% in Circulation': algoexplorerpercentcirculation3,
                        'Transactions Counter': algoexplorerassettxcounter3,
                        'Created at Round': algoexplorercreatedatround3
                    }
                ];
                
                var exampleTable1 = $('#example1')
                .DataTable({
                    data: jsObj0,
                    stateSave: true,
                    dom: 'Bfrtip',
                    initComplete: function () {
                        // Apply the search
                        this.api().columns().every( function () {
                            var that = this;
            
                            $( 'input', this.footer() ).on( 'keyup change clear', function () {
                                if ( that.search() !== this.value ) {
                                    that
                                        .search( this.value )
                                        .draw();
                                }
                            } );
                        } );
                    },
                    buttons: [
                    {
                        extend: "copy",
                        exportOptions: {
                        modifier: { search: 'none', selected: true}
                        }
                    },
                    {
                        extend: "csv",
                        exportOptions: {
                        modifier: { search: 'none', selected: true}
                        }
                    },
                    {
                        extend: "excel",
                        exportOptions: {
                        modifier: { search: 'none', selected: true}
                        }
                    },
                    {
                        extend: "pdfHtml5",
                        exportOptions: {
                        modifier: { search: 'none', selected: true}
                        }
                    },
                    {
                        extend: "print",
                        exportOptions: {
                        modifier: { search: 'none', selected: true}
                        }
                    },
                    {
                        extend: 'colvis',
                        text: 'Columns'
                    },
                    {
                        text: 'Select All',
                        action: function () {
                            exampleTable1.rows().select();
                        }
                    },
                    {
                        text: 'Select None',
                        action: function () {
                            exampleTable1.rows().deselect();
                        }
                    },
                    {
                        text: 'Show All',
                        action: function ( e, dt, button, config ) {
                            exampleTable1.rows().deselect();
                            dt.rows({ selected: false }).nodes().to$().css({"display":"table-row"});
                        }
                    },
                    {
                        text: 'Hide Unselected',
                        action: function ( e, dt, button, config ) {
                            dt.rows({ selected: false }).nodes().to$().css({"display":"none"});
                        }
                    }
                    ],
                    "language": {
                        "info": "Initial Rows : _TOTAL_",
                        select: {
                                    rows: {
                                        _: "",
                                        0: "",
                                        1: ""
                                    }
                                }
                        },
                    colReorder: true,
                    paging: false,
                    select: {
                        style: 'multi'
                    }, 
                    rowReorder: true,
                    //keys: true,
                    'columns': [{
                            'data': 'Name'
                        },
                        {
                            'data': 'Index',
                            "render": function(data, type, row, meta){
                                if(type === 'display'){
                                    data = '<a target="_blank" rel="noopener noreferrer" href="https://algoexplorer.io/asset/' + data + '">' + data + '</a>';
                                }
                    
                                return data;
                                }
                        },
                        {
                            'data': 'Tinyman Price'
                        },
                        {
                            'data': '% in Circulation',
                            render: function(data, type, row, meta) {
                                return type === 'display' ?
                                    '<progress value="' + data + '" max="100"></progress>' :
                                    data;
                            }
                        },
                        {
                            'data': 'Transactions Counter'
                        },
                        {
                            'data': 'Created at Round'
                        }
                    ]
                });  
         
            }
        });             

    });