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

        window.alert = function() {};

        var algoexplorerapi = 'https://indexer.algoexplorerapi.io/v2/assets/';

        var url0 = algoexplorerapi + '397111682';
        var url1 = algoexplorerapi + '353409462';
        var url2 = algoexplorerapi + '430838314';
        var url3 = algoexplorerapi + '226265212';
        var url4 = algoexplorerapi + '555540865';
        var url5 = algoexplorerapi + '426526699';
        var url6 = algoexplorerapi + '393495312';
        var url7 = algoexplorerapi + '305992851';
        var url8 = algoexplorerapi + '453816186';
        var url9 = algoexplorerapi + '457205263';
        var url10 = algoexplorerapi + '523683256';
        var url11 = algoexplorerapi + '447852812';
        var url12 = algoexplorerapi + '445905873';
        var url13 = algoexplorerapi + '310014962';
        var url14 = algoexplorerapi + '463554836';
        var url15 = algoexplorerapi + '227358511';
        var url16 = algoexplorerapi + '604643747';
        var url17 = algoexplorerapi + '446220964';
        var url18 = algoexplorerapi + '409604194';
        var url19 = algoexplorerapi + '466716175';
        var url20 = algoexplorerapi + '542132831';
        var url21 = algoexplorerapi + '397629052';
        var url22 = algoexplorerapi + '163650';
        var url23 = algoexplorerapi + '393537671';
        var url24 = algoexplorerapi + '540605589';
        var url25 = algoexplorerapi + '233939122';
        var url26 = algoexplorerapi + '470335962';
        var url27 = algoexplorerapi + '382781470';
        var url28 = algoexplorerapi + '469835031';
        var url29 = algoexplorerapi + '615093377';
        var url30 = algoexplorerapi + '473180477';
        var url31 = algoexplorerapi + '478549868';
        var url32 = algoexplorerapi + '401752010';
        var url33 = algoexplorerapi + '251014570';
        var url34 = algoexplorerapi + '342889824';
        var url35 = algoexplorerapi + '510337930';
        var url36 = algoexplorerapi + '498684064';
        var url37 = algoexplorerapi + '137020565';
        var url38 = algoexplorerapi + '402495345';
        var url39 = algoexplorerapi + '388592191';
        var url40 = algoexplorerapi + '297995609';
        var url41 = algoexplorerapi + '585221469';
        var url42 = algoexplorerapi + '571576867';
        var url43 = algoexplorerapi + '281003266';
        var url44 = algoexplorerapi + '435335235';
        var url45 = algoexplorerapi + '511491168';
        var url46 = algoexplorerapi + '230946361';
        var url47 = algoexplorerapi + '319473667';
        var url48 = algoexplorerapi + '601894079';
        var url49 = algoexplorerapi + '470842789';
        var url50 = algoexplorerapi + '391379500';
        var url51 = algoexplorerapi + '591601798';
        var url52 = algoexplorerapi + '393155456';
        
        var percCirc0 = 'loading';
        var circSupply0 = 'loading';
        var creator0 = 'loading';
        var creatRnd0 = 'loading';
        var creatTxId0 = 'loading';
        var crntRound0 = 'loading';
        var crtdAtRound0 = 'loading';
        var decimals0 = 'loading';
        var freeze0 = 'loading';
        var frozen0 = 'loading';
        var indexNum0 = 'loading';     
        var manager0 = 'loading';   
        var name0 = 'loading';
        var reserve0 = 'loading';
        var rndsSinceCreat0 = 'loading';
        var supply0 = 'loading';
        var total0 = 'loading';
        var txcnt0 = 'loading';
        var unitName0 = 'loading';    
        var verifrep0 = 'loading';  
        var verifscore0 = 'loading';     
        
        getJSON(url0, async function(err, data0) {
            if (err !== null) {
                return $.getJSON(url0);
            } else {
                unitName0 = data0.asset.params['unit-name'];
                indexNum0 = data0.asset['index'];
                createdatround0 = data0.asset['created-at-round'];
                name0 = data0.asset.params['name'];
                txcounter0 = data0.asset['asset-tx-counter'];
                supply0 = data0.asset.params['circulating-supply'];
                total0 = data0.asset.params['total'];
                circulation0 = ((data0.asset.params['circulating-supply'] / data0.asset.params['total']) * 100).toFixed(6);
            }
        });       

        getJSON(url40, function(err, data40) {

            if (err !== null) {
                return $.getJSON(url40);
            } else {

                //console.log(counter);

                var jsObj0 = [
                    {
                        'Name': name0,
                        '% in Circulation': circulation0 + '%',
                        'Transactions Counter': txcnt0,
                        'Verification Score': verifscore0,
                        'Verification Reputation': verifrep0,
                        'Frozen': frozen0
                    },
                    {
                        'Name': name1,
                        '% in Circulation': circulation1 + '%',
                        'Transactions Counter': txcounter1,
                        'Verification Score': verifscore1,
                        'Verification Reputation': verifrep1,
                        'Frozen': frozen1
                    }
                ];

                var jsObj1 = [
                    {
                        'Name': name0,
                        'Creation TX': creatTxId0,
                        'Creator': creator0,
                        'Manager': manager0,
                        'Reserve': reserve0,
                        'Freeze': freeze0
                    },
                    {
                        'Name': name1,
                        'Creation TX': creatTxId1,
                        'Creator': creator1,
                        'Manager': manager1,
                        'Reserve': reserve1,
                        'Freeze': freeze1
                    }
                ];

                var jsObj2 = [
                    {
                        'Name': name0,
                        'Rounds since Creation': rndsSinceCreat0,
                        'Created at Round': crtdAtRound0,
                        'Current Round': crntRound0,
                        'Circulating Supply': circSupply0,
                        'Supply': supply0,
                        'Decimals': decimals0
                    },
                    {

                    }
                ];

                //modified array is accessible here

                var exampleTable1 = $('#example1')
                    .DataTable({
                        data: jsObj0,
                        stateSave: true,
                        colReorder: true,
                        paging: true,
                        keys: true,
                        //fixedHeader: true,
                        'columns': [{
                                'data': 'Unit Name'
                            },
                            {
                                'data': 'ID'
                            },
                            {
                                'data': 'Created at Round'
                            },
                            {
                                'data': 'Name'
                            },
                            {
                                'data': 'Transactions Counter'
                            },
                            {
                                'data': 'Circulating Supply'
                            },
                            {
                                'data': 'Total Supply'
                            },
                            {
                                'data': '% in Circulation'
                            }
                        ]
                    });

                    var exampleTable2 = $('#example2')
                    .DataTable({
                        data: jsObj1,
                        stateSave: true,
                        colReorder: true,
                        paging: true,
                        keys: true,
                        //fixedHeader: true,
                        'columns': [{
                                'data': 'Unit Name'
                            },
                            {
                                'data': 'ID'
                            },
                            {
                                'data': 'Created at Round'
                            },
                            {
                                'data': 'Name'
                            },
                            {
                                'data': 'Transactions Counter'
                            },
                            {
                                'data': 'Circulating Supply'
                            },
                            {
                                'data': 'Total Supply'
                            },
                            {
                                'data': '% in Circulation'
                            }
                        ]
                    });
            }


        }); //30 ends here

        //table stuff ends here

        function sleep(milliseconds) {
            const date = Date.now();
            let currentDate = null;
            do {
                currentDate = Date.now();
            } while (currentDate - date < milliseconds);
        }


    });