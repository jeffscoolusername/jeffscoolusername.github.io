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
        var algoexplorerSOLOTESTapi = 'https://indexer.algoexplorerapi.io/v2/assets/';
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

        var algoexplorerSOLOTESTcreatedatround0 = 0;
        var algoexplorerSOLOTESTcreationtxid0 = 0;
        var algoexplorerSOLOTESTdecimals0 = 0;
        var algoexplorerSOLOTESTdefaultfrozen0 = 0;
        var algoexplorerSOLOTESTindex0 = 0;
        var algoexplorerSOLOTESTname0 = 0;
        var algoexplorerSOLOTESTcirculatingsupply0 = 0;
        var algoexplorerSOLOTESTpercentcirculation0 = 0;
        var algoexplorerSOLOTESTtotal0 = 0;
        var algoexplorerSOLOTESTassettxcounter0 = 0;
        var algoexplorerSOLOTESTassetunitname0 = 0;

        var algoexplorerSOLOTESTcreatedatround1 = 0;
        var algoexplorerSOLOTESTcreationtxid1 = 0;
        var algoexplorerSOLOTESTdecimals1 = 0;
        var algoexplorerSOLOTESTdefaultfrozen1 = 0;
        var algoexplorerSOLOTESTindex1 = 0;
        var algoexplorerSOLOTESTname1 = 0;
        var algoexplorerSOLOTESTcirculatingsupply1 = 0;
        var algoexplorerSOLOTESTpercentcirculation1 = 0;
        var algoexplorerSOLOTESTtotal1 = 0;
        var algoexplorerSOLOTESTassettxcounter1 = 0;
        var algoexplorerSOLOTESTassetunitname1 = 0;

        var algoexplorerSOLOTESTcreatedatround2 = 0;
        var algoexplorerSOLOTESTcreationtxid2 = 0;
        var algoexplorerSOLOTESTdecimals2 = 0;
        var algoexplorerSOLOTESTdefaultfrozen2 = 0;
        var algoexplorerSOLOTESTindex2 = 0;
        var algoexplorerSOLOTESTname2 = 0;
        var algoexplorerSOLOTESTcirculatingsupply2 = 0;
        var algoexplorerSOLOTESTpercentcirculation2 = 0;
        var algoexplorerSOLOTESTtotal2 = 0;
        var algoexplorerSOLOTESTassettxcounter2 = 0;
        var algoexplorerSOLOTESTassetunitname2 = 0;
        
        var algoexplorerSOLOTESTcreatedatround3 = 0;
        var algoexplorerSOLOTESTcreationtxid3 = 0;
        var algoexplorerSOLOTESTdecimals3 = 0;
        var algoexplorerSOLOTESTdefaultfrozen3 = 0;
        var algoexplorerSOLOTESTindex3 = 0;
        var algoexplorerSOLOTESTname3 = 0;
        var algoexplorerSOLOTESTcirculatingsupply3 = 0;
        var algoexplorerSOLOTESTpercentcirculation3 = 0;
        var algoexplorerSOLOTESTtotal3 = 0;
        var algoexplorerSOLOTESTassettxcounter3 = 0;
        var algoexplorerSOLOTESTassetunitname3 = 0;

        let jsObj0SOLOTEST = [
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

        for (const element of b) { // You can use `let` instead of `const` if you like
            //console.log(element);
            getJSON(element, async function(err, data42071SOLOTEST) {
                if (err !== null) {
                    return $.getJSON(element);
                } else {

                    if (url00 === element) {
                        
                        (async function () {
                            try {
                              const ajaxCallOne = await fetch(
                                "https://my-json-server.typicode.com/apexcharts/apexcharts.js/yearly"
                              );
                              data1 = await ajaxCallOne.json();
                              console.log(data1, data2);
                            } catch (e) {
                              console.log(e);
                            }
                          })();                         
                    }
                    if (url01 === element) {
                        tinymanwoof421 = data42071SOLOTEST.data;    
                    }
                    if (url02 === element) {
                        tinymanwoof422 = data42071SOLOTEST.data;    
                    }
                    if (url03 === element) {
                        tinymanwoof423 = data42071SOLOTEST.data;    
                    }                    
                    
                    if (urlalgoexplorer00 === element) {
                        algoexplorercreatedatround0 = data42071SOLOTEST.asset['created-at-round'];    
                        algoexplorercreationtxid0 = data42071SOLOTEST.asset['creation-txid'];  
                        algoexplorerdecimals0 = data42071SOLOTEST.asset.params['decimals'];
                        algoexplorerdefaultfrozen0 = data42071SOLOTEST.asset.params['default-frozen'];
                        algoexplorerindex0 = data42071SOLOTEST.asset['index'];
                        algoexplorername0 = data42071SOLOTEST.asset.params['name'];
                        algoexplorercirculatingsupply0 = data42071SOLOTEST.asset.params['circulating-supply'];
                        algoexplorerpercentcirculation0 = ((data42071SOLOTEST.asset.params['circulating-supply'] / data42071SOLOTEST.asset.params['total']) * 100).toFixed(6);
                        algoexplorertotal0 = data42071SOLOTEST.asset.params['total'];
                        algoexplorerassettxcounter0 = data42071SOLOTEST.asset['asset-tx-counter']; 
                        algoexplorerassetunitname0 = data42071SOLOTEST.asset.params['unit-name'];  
                        }
                    if (urlalgoexplorer01 === element) {
                        algoexplorercreatedatround1 = data42071SOLOTEST.asset['created-at-round'];    
                        algoexplorercreationtxid1 = data42071SOLOTEST.asset['creation-txid'];  
                        algoexplorerdecimals1 = data42071SOLOTEST.asset.params['decimals'];
                        algoexplorerdefaultfrozen1 = data42071SOLOTEST.asset.params['default-frozen'];
                        algoexplorerindex1 = data42071SOLOTEST.asset['index'];
                        algoexplorername1 = data42071SOLOTEST.asset.params['name'];
                        algoexplorercirculatingsupply1 = data42071SOLOTEST.asset.params['circulating-supply'];
                        algoexplorerpercentcirculation1 = ((data42071SOLOTEST.asset.params['circulating-supply'] / data42071SOLOTEST.asset.params['total']) * 100).toFixed(6);
                        algoexplorertotal1 = data42071SOLOTEST.asset.params['total'];
                        algoexplorerassettxcounter1 = data42071SOLOTEST.asset['asset-tx-counter']; 
                        algoexplorerassetunitname1 = data42071SOLOTEST.asset.params['unit-name'];  
                        }
                    if (urlalgoexplorer02 === element) {  
                        algoexplorercreatedatround2 = data42071SOLOTEST.asset['created-at-round'];    
                        algoexplorercreationtxid2 = data42071SOLOTEST.asset['creation-txid'];  
                        algoexplorerdecimals2 = data42071SOLOTEST.asset.params['decimals'];
                        algoexplorerdefaultfrozen2 = data42071SOLOTEST.asset.params['default-frozen'];
                        algoexplorerindex2 = data42071SOLOTEST.asset['index'];
                        algoexplorername2 = data42071SOLOTEST.asset.params['name'];
                        algoexplorercirculatingsupply2 = data42071SOLOTEST.asset.params['circulating-supply'];
                        algoexplorerpercentcirculation2 = ((data42071SOLOTEST.asset.params['circulating-supply'] / data42071SOLOTEST.asset.params['total']) * 100).toFixed(6);
                        algoexplorertotal2 = data42071SOLOTEST.asset.params['total'];
                        algoexplorerassettxcounter2 = data42071SOLOTEST.asset['asset-tx-counter']; 
                        algoexplorerassetunitname2 = data42071SOLOTEST.asset.params['unit-name'];  
                        }
                    if (urlalgoexplorer03 === element) {  
                        algoexplorercreatedatround3 = data42071SOLOTEST.asset['created-at-round'];    
                        algoexplorercreationtxid3 = data42071SOLOTEST.asset['creation-txid'];  
                        algoexplorerdecimals3 = data42071SOLOTEST.asset.params['decimals'];
                        algoexplorerdefaultfrozen3 = data42071SOLOTEST.asset.params['default-frozen'];
                        algoexplorerindex3 = data42071SOLOTEST.asset['index'];
                        algoexplorername3 = data42071SOLOTEST.asset.params['name'];
                        algoexplorercirculatingsupply3 = data42071SOLOTEST.asset.params['circulating-supply'];
                        algoexplorerpercentcirculation3 = ((data42071SOLOTEST.asset.params['circulating-supply'] / data42071SOLOTEST.asset.params['total']) * 100).toFixed(6);
                        algoexplorertotal3 = data42071SOLOTEST.asset.params['total'];
                        algoexplorerassettxcounter3 = data42071SOLOTEST.asset['asset-tx-counter']; 
                        algoexplorerassetunitname3 = data42071SOLOTEST.asset.params['unit-name'];  
                        }                

                }
    
            });  
        }             
        
        
        var exampleTable1SOLOTEST = $('#example1SOLOTEST')
        .DataTable({
            data: jsObj0SOLOTEST,
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
                    exampleTable1SOLOTEST.rows().select();
                }
            },
            {
                text: 'Select None',
                action: function () {
                    exampleTable1SOLOTEST.rows().deselect();
                }
            },
            {
                text: 'Show All',
                action: function ( e, dt, button, config ) {
                    exampleTable1SOLOTEST.rows().deselect();
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

    });