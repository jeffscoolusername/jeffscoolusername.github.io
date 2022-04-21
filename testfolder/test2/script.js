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

        //Hush
        jQuery.event.special.touchstart = {
            setup: function( _, ns, handle ) {
                this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
            }
        };
        jQuery.event.special.touchmove = {
            setup: function( _, ns, handle ) {
                this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
            }
        };
        jQuery.event.special.wheel = {
            setup: function( _, ns, handle ){
                this.addEventListener("wheel", handle, { passive: true });
            }
        };
        jQuery.event.special.mousewheel = {
            setup: function( _, ns, handle ){
                this.addEventListener("mousewheel", handle, { passive: true });
            }
        };
        window.alert = function() {};

        var algoexplorerapi = 'https://indexer.algoexplorerapi.io/v2/assets/';
        var algochartsapi = 'https://algocharts.net/apiv2/?asset_in=';
        var coingeckoapi = 'https://api.coingecko.com/api/v3/coins/';

        var url0 = algoexplorerapi + '397111682';
        var urlprice0 = algochartsapi + '397111682' + '&asset_out=0';
        var urlcgprice0 = coingeckoapi + 'algorand';
        var urlcgprice1 = coingeckoapi + 'bitcoin';
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
        var urlprice40 = algochartsapi + '297995609' + '&asset_out=0';
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
        var crtdAtRound0 = 'loading';
        var creatTxId0 = 'loading';        
        var decimals0 = 'loading';
        var defaFroz0 = 'loading';
        var index0 = 'loading';     
        var name0 = 'loading';
        var percCirc0 = 'loading';        
        var total0 = 'loading';
        var txcnt0 = 'loading';
        var unitName0 = 'loading';    

        var namecg0 = 'loading';
        var namecg1 = 'loading';
        var coingeckoprice0 = 'loading';
        var coingeckoprice1 = 'loading';
        var coingeckopricechange24h0 = 'loading';
        var coingeckopricechange24h1 = 'loading';
        var coingeckopricechange7d0 = 'loading';
        var coingeckopricechange7d1 = 'loading';
        var coingeckopricechange30d0 = 'loading';
        var coingeckopricechange30d1 = 'loading';
        var coingeckopricechange1y0 = 'loading';
        var coingeckopricechange1y1 = 'loading';

        var tinymanprice0 = 'loading';
        var tinymanprice40 = 'loading';               

        getJSON(url0, async function(err, data0) {
            if (err !== null) {
                return $.getJSON(url0);
            } else {

                circSupply0 = data0.asset.params['circulating-supply'];
                crtdAtRound0 = data0.asset['created-at-round'];
                creatTxId0 = data0.asset['creation-txid'];
                decimals0 = data0.asset.params['decimals'];
                defaFroz0 = data0.asset.params['default-frozen'];
                index0 = data0.asset['index'];
                name0 = data0.asset.params['name'];
                percCirc0 = ((data0.asset.params['circulating-supply'] / data0.asset.params['total']) * 100).toFixed(6);
                total0 = data0.asset.params['total'];
                txcnt0 = data0.asset['asset-tx-counter']; 
                unitName0 = data0.asset.params['unit-name'];         
                getJSON(urlcgprice0, async function(err, data0cgp) {
                    if (err !== null) {
                        return $.getJSON(urlcgprice0);
                    } else {
        
                        namecg0 = data0cgp.name;   
                        coingeckoprice0 = data0cgp.market_data.current_price['usd'];     
                        coingeckopricechange24h0 = data0cgp.market_data.price_change_percentage_24h;            
                        coingeckopricechange7d0 = data0cgp.market_data.price_change_percentage_7d;    
                        coingeckopricechange30d0 = data0cgp.market_data.price_change_percentage_30d;  
                        coingeckopricechange1y0 = data0cgp.market_data.price_change_percentage_1y;     
                        getJSON(urlprice40, async function(err, data40p) {
                            if (err !== null) {
                                return $.getJSON(urlprice40);
                            } else {
                
                                tinymanprice40 = data40p.data[0].toFixed(6);                                                            
                                                 
                            }
                
                        });                                             
                                            
                    }
        
                });  
                getJSON(urlprice0, async function(err, data01p) {
                    if (err !== null) {
                        return $.getJSON(urlprice0);
                    } else {
        
                        tinymanprice0 = data01p.data[0].toFixed(6);       
                        
                        getJSON(urlcgprice1, async function(err, data01cgp) {
                            if (err !== null) {
                                return $.getJSON(urlcgprice1);
                            } else {
                
                                namecg1 = data01cgp.name;   
                                coingeckoprice1 = (data01cgp.market_data.current_price['usd'] / coingeckoprice0);      
                                coingeckopricechange24h1 = data01cgp.market_data.price_change_percentage_24h - coingeckopricechange24h0;   
                                coingeckopricechange7d1 = data01cgp.market_data.price_change_percentage_7d - coingeckopricechange7d0;   
                                coingeckopricechange30d1 = data01cgp.market_data.price_change_percentage_30d - coingeckopricechange30d0;   
                                coingeckopricechange1y1 = data01cgp.market_data.price_change_percentage_1y - coingeckopricechange1y0;       
                                getJSON(url40, function(err, data40) {
                        
                                    if (err !== null) {
                                        return $.getJSON(url40);
                                    } else {
                        
                                        //console.log(counter);
                        
                                        var jsObj0 = [
                                            {
                                                'Name': name0,
                                                'Tinyman Price' : tinymanprice0,
                                                '% in Circulation': percCirc0,
                                                'Transactions Counter': txcnt0,
                                                'Created at Round': crtdAtRound0
                                            },
                                            //put any in between here following 0's format
                                            {
                                                'Name': data40.asset.params['name'],
                                                'Tinyman Price' : tinymanprice40,
                                                '% in Circulation': ((data40.asset.params['circulating-supply'] / data40.asset.params['total']) * 100).toFixed(6),
                                                'Transactions Counter': data40.asset['asset-tx-counter'],
                                                'Created at Round': data40.asset['created-at-round']
                                            }
                                        ];
                        
                                        var jsObj1 = [
                                            {
                                                'Name': name0,
                                                'Unit Name': unitName0,
                                                'Index': index0,
                                                'Default Frozen': defaFroz0
                                            },
                                            {
                                                'Name': data40.asset.params['name'],
                                                'Unit Name': data40.asset.params['unit-name'],
                                                'Index': data40.asset['index'],
                                                'Default Frozen': data40.asset.params['default-frozen']
                                            }
                                        ];
                        
                                        var jsObj2 = [
                                            {
                                                'Name': name0,                      
                                                'Circulating Supply': circSupply0,
                                                'Total': total0,
                                                'Decimals': decimals0,
                                                'Creation TX': creatTxId0,
                                            },
                                            {
                                                'Name': data40.asset.params['name'],                      
                                                'Circulating Supply': data40.asset.params['circulating-supply'],
                                                'Total': data40.asset.params['total'],
                                                'Decimals': data40.asset.params['decimals'],
                                                'Creation TX': data40.asset['creation-txid']
                                            }
                                        ];
                        
                                        var jsObj3 = [
                                            {
                                                'Name': namecg1,                      
                                                'Algo Price': coingeckoprice1,
                                                '24h Change': coingeckopricechange24h1,
                                                '7d Change': coingeckopricechange7d1,
                                                '30d Change': coingeckopricechange30d1,
                                                '1y Change': coingeckopricechange1y1
                                                //'Algo Price' : (coingeckprice40/coingeckoprice40)
                                                // ^ for subsequent pieces of the array
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
                        
                                            var exampleTable2 = $('#example2')
                                            .DataTable({
                                                data: jsObj1,
                                                stateSave: true,
                                                colReorder: true,
                                                paging: true,
                                                keys: true,
                                                'columns': [{
                                                        'data': 'Name'
                                                    },
                                                    {
                                                        'data': 'Unit Name'
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
                                                        'data': 'Default Frozen'
                                                    }
                                                ]
                                            });
                        
                                            var exampleTable3 = $('#example3')
                                            .DataTable({
                                                data: jsObj2,
                                                stateSave: true,
                                                colReorder: true,
                                                paging: true,
                                                keys: true,
                                                'columns': [{
                                                        'data': 'Name'
                                                    },
                                                    {
                                                        'data': 'Circulating Supply'
                                                    },
                                                    {
                                                        'data': 'Total'
                                                    },
                                                    {
                                                        'data': 'Decimals'
                                                    },
                                                    {
                                                        'data': 'Creation TX',
                                                        "render": function(data, type, row, meta){
                                                            if(type === 'display'){
                                                                data = '<a target="_blank" rel="noopener noreferrer" href="https://algoexplorer.io/tx/' + data + '">' + data + '</a>';
                                                            }
                                                
                                                            return data;
                                                         }
                                                    }
                                                ]
                                            });
                        
                                            var exampleTable4 = $('#example4')
                                            .DataTable({
                                                data: jsObj3,
                                                stateSave: true,
                                                colReorder: true,
                                                paging: true,
                                                keys: true,
                                                'columns': [{
                                                        'data': 'Name'
                                                    },
                                                    {
                                                        'data': 'Algo Price'
                                                    },
                                                    {
                                                        'data': '24h Change',
                                                        render: function(data, type) {
                                                            var number = $.fn.dataTable.render.number( ',', '.', 2). display(data);
                                         
                                                            if (type === 'display') {
                                                                let color = 'black';
                                                                if (data < 0) {
                                                                    color = 'red';
                                                                }
                                                                else if (data >= 0) {
                                                                    color = 'green';
                                                                }
                                         
                                                                return '<span style="color:' + color + '">' + number + '</span>';
                                                            }
                                                             
                                                            return number;
                                                        }
                                                    },
                                                    {
                                                        'data': '7d Change',
                                                        render: function(data, type) {
                                                            var number = $.fn.dataTable.render.number( ',', '.', 2). display(data);
                                         
                                                            if (type === 'display') {
                                                                let color = 'black';
                                                                if (data < 0) {
                                                                    color = 'red';
                                                                }
                                                                else if (data >= 0) {
                                                                    color = 'green';
                                                                }
                                         
                                                                return '<span style="color:' + color + '">' + number + '</span>';
                                                            }
                                                             
                                                            return number;
                                                        }
                                                    },
                                                    {
                                                        'data': '30d Change',
                                                        render: function(data, type) {
                                                            var number = $.fn.dataTable.render.number( ',', '.', 2). display(data);
                                         
                                                            if (type === 'display') {
                                                                let color = 'black';
                                                                if (data < 0) {
                                                                    color = 'red';
                                                                }
                                                                else if (data >= 0) {
                                                                    color = 'green';
                                                                }
                                         
                                                                return '<span style="color:' + color + '">' + number + '</span>';
                                                            }
                                                             
                                                            return number;
                                                        }
                                                    },
                                                    {
                                                        'data': '1y Change',
                                                        render: function(data, type) {
                                                            var number = $.fn.dataTable.render.number( ',', '.', 2). display(data);
                                         
                                                            if (type === 'display') {
                                                                let color = 'black';
                                                                if (data < 0) {
                                                                    color = 'red';
                                                                }
                                                                else if (data >= 0) {
                                                                    color = 'green';
                                                                }
                                         
                                                                return '<span style="color:' + color + '">' + number + '</span>';
                                                            }
                                                             
                                                            return number;
                                                        }
                                                    }
                                                ]
                                            });
                                    }
                        
                        
                                }); //ends here                                                       
                                                    
                            }
                
                        });  
                                                                         
                    }
        
                });  
                                 
            }
        });               
        
                                     
        if (location.hash) {
            $('a[href=\'' + location.hash + '\']').tab('show');
          }
          var activeTab = localStorage.getItem('activeTab');
          if (activeTab) {
            $('a[href="' + activeTab + '"]').tab('show');
          }
          
          $('body').on('click', 'a[data-toggle=\'tab\']', function (e) {
            e.preventDefault()
            var tab_name = this.getAttribute('href')
            if (history.pushState) {
              history.pushState(null, null, tab_name)
            }
            else {
              location.hash = tab_name
            }
            localStorage.setItem('activeTab', tab_name)
          
            $(this).tab('show');
            return false;
          });
          $(window).on('popstate', function () {
            var anchor = location.hash ||
              $('a[data-toggle=\'tab\']').first().attr('href');
            $('a[href=\'' + anchor + '\']').tab('show');
          });
        
        //unused below

        /*function sleep(milliseconds) {
            const date = Date.now();
            let currentDate = null;
            do {
                currentDate = Date.now();
            } while (currentDate - date < milliseconds);
        }*/


    });