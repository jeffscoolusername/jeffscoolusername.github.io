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
                
        var circSupply0 = 'loading';
        var creator0 = 'loading';
        var creatRnd0 = 'loading';
        var creatTxId0 = 'loading';
        var crntRound0 = 'loading';
        var crtdAtRound0 = 'loading';
        var decimals0 = 'loading';
        var defaFroz0 = 'loading';
        var descript0 = 'loading;'
        var freeze0 = 'loading';
        var index0 = 'loading';     
        var manager0 = 'loading';   
        var name0 = 'loading';
        var percCirc0 = 'loading';
        var reserve0 = 'loading';
        var rndsSinceCreat0 = 'loading';
        var total0 = 'loading';
        var txcnt0 = 'loading';
        var unitName0 = 'loading';    
        var url0 = 'loading';
        var verifrep0 = 'loading';  
        var verifscore0 = 'loading';     
        
        getJSON(url0, async function(err, data0) {
            if (err !== null) {
                return $.getJSON(url0);
            } else {

                circSupply0 = data0.asset.params['circulating-supply'];
                creator0 = data0.asset.params['creator'];
                creatRnd0 = data0.asset['created-at-round'];
                creatTxId0 = data0.asset['creation-txid'];
                crtdAtRound0 = data0.asset['created-at-round'];
                decimals0 = data0.asset.params['decimals'];
                defaFroz0 = data0.asset.params['default-frozen'];
                descript0 = data0.asset.verification['description'];
                freeze0 = data0.asset.params['freeze'];
                index0 = data0.asset['index'];
                manager0 = freeze0 = data0.asset.params['manager'];
                name0 = data0.asset.params['name'];
                percCirc0 = ((data0.asset.params['circulating-supply'] / data0.asset.params['total']) * 100).toFixed(6);
                reserve0 = freeze0 = data0.asset.params['reserve'];
                total0 = data0.asset.params['total'];
                txcnt0 = data0.asset['asset-tx-counter']; 
                unitName0 = data0.asset.params['unit-name'];    
                url0 = data0.asset.params['url'];
                verifrep0 = data0.asset.verification['reputation'];
                verifscore0 = data0.asset.verification['score'];   
                                 
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
                        '% in Circulation': percCirc0,
                        'Transactions Counter': txcnt0,
                        'Verification Score': verifscore0,
                        'Verification Reputation': verifrep0,
                        'Created at Round': creatRnd0
                    },
                    //put any in between here following 0's format
                    {
                        'Name': data40.asset.params['name'],
                        '% in Circulation': ((data40.asset.params['circulating-supply'] / data40.asset.params['total']) * 100).toFixed(6),
                        'Transactions Counter': data40.asset['asset-tx-counter'],
                        'Verification Score': data40.asset.verification['score'],
                        'Verification Reputation': data40.asset.verification['reputation'],
                        'Created at Round': data40.asset['created-at-round'],
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
                        'Name': data40.asset.params['name'],
                        'Creation TX': data40.asset['creation-txid'],
                        'Creator': data40.asset.params['creator'],
                        'Manager': data40.asset.params['manager'],
                        'Reserve': data40.asset.params['reserve'],
                        'Freeze': data40.asset.params['freeze']
                    }
                ];

                var jsObj2 = [
                    {
                        'Name': name0,
                        'Unit Name': unitName0,
                        'Index': index0,
                        'Description': descript0,
                        'URL': url0,
                        'Default Frozen': defaFroz0
                    },
                    {
                        'Name': data40.asset.params['name'],
                        'Unit Name': data40.asset.params['unit-name'],
                        'Index': data40.asset['index'],
                        'Description': data40.asset.verification['description'],
                        'URL': data40.asset.params['url'],
                        'Default Frozen': data40.asset.params['default-frozen']
                    }
                ];

                var jsObj3 = [
                    {
                        'Name': name0,                      
                        'Circulating Supply': circSupply0,
                        'Total': total0,
                        'Decimals': decimals0
                    },
                    {
                        'Name': data40.asset.params['name'],                      
                        'Circulating Supply': data40.asset.params['circulating-supply'],
                        'Total': data40.asset.params['total'],
                        'Decimals': data40.asset.params['decimals']
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
                        'columns': [{
                                'data': 'Name'
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