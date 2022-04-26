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

        var newstitle0 = 'loading';
        var newslink0 = 'loading';
        var newspubDate0 = 'loading';
        var newstitle1 = 'loading';
        var newslink1 = 'loading';
        var newspubDate1 = 'loading';
        var newstitle2 = 'loading';
        var newslink2 = 'loading';
        var newspubDate2 = 'loading';
        var newstitle3 = 'loading';
        var newslink3 = 'loading';
        var newspubDate3 = 'loading';
        var newstitle4 = 'loading';
        var newslink4 = 'loading';
        var newspubDate4 = 'loading';
        var newstitle5 = 'loading';
        var newslink5 = 'loading';
        var newspubDate5 = 'loading';
        var newstitle6 = 'loading';
        var newslink6 = 'loading';
        var newspubDate6 = 'loading';
        var newstitle7 = 'loading';
        var newslink7 = 'loading';
        var newspubDate7 = 'loading';
        var newstitle8 = 'loading';
        var newslink8 = 'loading';
        var newspubDate8 = 'loading';
        var newstitle9 = 'loading';
        var newslink9 = 'loading';
        var newspubDate9 = 'loading';
        
        var feedURL = "https://news.google.com/rss/search?q=algorand&hl=en-US&gl=US&ceid=US:en";
        
        $.ajax({
        type: 'GET',
        url: "https://api.rss2json.com/v1/api.json?rss_url=" + feedURL,
        dataType: 'jsonp',
        success: async function(result) {
            sleep(1200); //very interesting and simple strategy
            newstitle0 = result.items[0].title;
            newspubDate0 = result.items[0].pubDate;
            newslink0 = result.items[0].link;
            newstitle1 = result.items[1].title;
            newspubDate1 = result.items[1].pubDate;
            newslink1 = result.items[1].link;
            newstitle2 = result.items[2].title;
            newspubDate2 = result.items[2].pubDate;
            newslink2 = result.items[2].link;
            newstitle3 = result.items[3].title;
            newspubDate3 = result.items[3].pubDate;
            newslink3 = result.items[3].link;
            newstitle4 = result.items[4].title;
            newspubDate4 = result.items[4].pubDate;
            newslink4 = result.items[4].link;
            newstitle5 = result.items[5].title;
            newspubDate5 = result.items[5].pubDate;
            newslink5 = result.items[5].link;
            newstitle6 = result.items[6].title;
            newspubDate6 = result.items[6].pubDate;
            newslink6 = result.items[6].link;
            newstitle7 = result.items[7].title;
            newspubDate7 = result.items[7].pubDate;
            newslink7 = result.items[7].link;
            newstitle8 = result.items[8].title;
            newspubDate8 = result.items[8].pubDate;
            newslink8 = result.items[8].link;
            newstitle9 = result.items[9].title;
            newspubDate9 = result.items[9].pubDate;
            newslink9 = result.items[9].link;

        }
        });


        /*var feedURL2 = "https://www.reddit.com/r/algorand.json?jsonp=?";

        $.ajax({
            type: 'GET',
            url: feedURL2,
            dataType: 'jsonp',
            success: async function(result) {
                sleep(1200); //potential strategy here
                console.log(result.data.children[0].data.ups);
    
            }
            });
            

        var feedURL3 = "https://www.reddit.com/r/algorand/comments/u9rocj/for_those_wondering_if_the_pr_is_working.json?jsonp=?";

        $.ajax({
            type: 'GET',
            url: feedURL3,
            dataType: 'jsonp',
            success: async function(result) {
                sleep(1200); //potential strategy here
                console.log(result[0].data.children[0].data.ups);
    
            }
            });*/
            
        //this is some spicy tech right here

        var algochartsapi = 'https://algocharts.net/apiv2/?asset_in=';

        var asatokenarray = ['397111682', '353409462', '430838314', '226265212'];

        var asset0 = '&asset_out=0';
        
        var url00 = algochartsapi + asatokenarray[0] + asset0;
        var url01 = algochartsapi + asatokenarray[1] + asset0;
        var url02 = algochartsapi + asatokenarray[2] + asset0;
        var url03 = algochartsapi + asatokenarray[3] + asset0;

        const a = [url00, url01, url02, url03];

        var tinymanprice = ['loading', 'loading', 'loading', 'loading'];

        for (const element of a) { // You can use `let` instead of `const` if you like
            //console.log(element);
            getJSON(element, async function(err, data42069) {
                if (err !== null) {
                    return $.getJSON(element);
                } else {
    
                    tinymanprice[0, 1, 2, 3] = data42069.data[0].toFixed(6);        
                    console.log(tinymanprice[0, 1, 2, 3]);                                                    
                                     
                }
    
            });  
        }

        var algoexplorerapi = 'https://indexer.algoexplorerapi.io/v2/assets/';
        
        var urlalgoexplorer00 = algoexplorerapi + asatokenarray[0];
        var urlalgoexplorer01 = algoexplorerapi + asatokenarray[1];
        var urlalgoexplorer02 = algoexplorerapi + asatokenarray[2];
        var urlalgoexplorer03 = algoexplorerapi + asatokenarray[3];

        const b = [urlalgoexplorer00, urlalgoexplorer01, urlalgoexplorer02, urlalgoexplorer03];

        var algoexplorersupply = ['loading', 'loading', 'loading', 'loading'];
        var algoexplorercreatedatround = ['loading', 'loading', 'loading', 'loading'];
        var algoexplorercreationtxid = ['loading', 'loading', 'loading', 'loading'];

        for (const element of b) { // You can use `let` instead of `const` if you like
            //console.log(element);
            getJSON(element, async function(err, data42070) {
                if (err !== null) {
                    return $.getJSON(element);
                } else {
    
                    algoexplorersupply[0, 1, 2, 3] = data42070.asset.params['circulating-supply'];      
                    algoexplorercreatedatround[0, 1, 2, 3] = data42070.asset['created-at-round'];    
                    algoexplorercreationtxid[0, 1, 2, 3] = data42070.asset['creation-txid'];  
                    console.log(algoexplorersupply[0, 1, 2, 3]);          
                    console.log(algoexplorercreatedatround[0, 1, 2, 3]);          
                    console.log(algoexplorercreationtxid[0, 1, 2, 3]);                                          
                                     
                }
    
            });  
        }

        /*var feedURL4 = "https://ecosystem.algorand.com/api/project/voteCount?id=cl0hemd829k5j0biu20r7kky3";

        $.ajax({
            type: 'GET',
            url: feedURL4,
            responseType:'application/json',
            success: async function(result) {
                sleep(1200); //potential strategy here
                console.log(result);
    
            }
            });*/
            

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
                                                'Index': index0,
                                                'Tinyman Price' : tinymanprice0,
                                                '% in Circulation': percCirc0,
                                                'Transactions Counter': txcnt0,
                                                'Created at Round': crtdAtRound0
                                            },
                                            //put any in between here following 0's format
                                            {
                                                'Name': data40.asset.params['name'],
                                                'Index': data40.asset['index'],
                                                'Tinyman Price' : tinymanprice40,
                                                '% in Circulation': ((data40.asset.params['circulating-supply'] / data40.asset.params['total']) * 100).toFixed(6),
                                                'Transactions Counter': data40.asset['asset-tx-counter'],
                                                'Created at Round': data40.asset['created-at-round']
                                            }
                                        ];
                        
                                        var jsObj1 = [
                                            {
                                                'Name': name0,                                                
                                                'Index': index0,
                                                'Unit Name': unitName0,
                                                'Default Frozen': defaFroz0
                                            },
                                            {
                                                'Name': data40.asset.params['name'],
                                                'Index': data40.asset['index'],
                                                'Unit Name': data40.asset.params['unit-name'],                                                
                                                'Default Frozen': data40.asset.params['default-frozen']
                                            }
                                        ];
                        
                                        var jsObj2 = [
                                            {
                                                'Name': name0,         
                                                'Index': index0,             
                                                'Circulating Supply': circSupply0,
                                                'Total': total0,
                                                'Decimals': decimals0,
                                                'Creation TX': creatTxId0,
                                            },
                                            {
                                                'Name': data40.asset.params['name'],      
                                                'Index': data40.asset['index'],                
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

                                        var jsObj4 = [
                                            {
                                                'News Title': newstitle0,   
                                                'News Publish Date': newspubDate0,      
                                                'News Link': newslink0
                                            },
                                            {
                                                'News Title': newstitle1,   
                                                'News Publish Date': newspubDate1,      
                                                'News Link': newslink1
                                            },
                                            {
                                                'News Title': newstitle2,   
                                                'News Publish Date': newspubDate2,      
                                                'News Link': newslink2
                                            },
                                            {
                                                'News Title': newstitle3,   
                                                'News Publish Date': newspubDate3,      
                                                'News Link': newslink3
                                            },
                                            {
                                                'News Title': newstitle4,   
                                                'News Publish Date': newspubDate4,      
                                                'News Link': newslink4
                                            },
                                            {
                                                'News Title': newstitle5,   
                                                'News Publish Date': newspubDate5,      
                                                'News Link': newslink5
                                            },
                                            {
                                                'News Title': newstitle6,   
                                                'News Publish Date': newspubDate6,      
                                                'News Link': newslink6
                                            },
                                            {
                                                'News Title': newstitle7,   
                                                'News Publish Date': newspubDate7,      
                                                'News Link': newslink7
                                            },
                                            {
                                                'News Title': newstitle8,   
                                                'News Publish Date': newspubDate8,      
                                                'News Link': newslink8
                                            },
                                            {
                                                'News Title': newstitle9,   
                                                'News Publish Date': newspubDate9,      
                                                'News Link': newslink9
                                            }

                                        ];                        
                        
                                        //modified array is accessible here
                        
                                        var exampleTable1 = $('#example1')
                                            .DataTable({
                                                data: jsObj0,
                                                stateSave: true,
                                                dom: 'Bfrtip',
                                                buttons: [
                                                'copy', 'csv', 'excel', 'pdf', 'print', 
                                                {
                                                    extend: 'colvis',
                                                    text: 'Column Visibility'
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
                                                    text: 'Show All Rows',
                                                    action: function ( e, dt, button, config ) {
                                                        exampleTable1.rows().deselect();
                                                        dt.rows({ selected: false }).nodes().to$().css({"display":"table-row"});
                                                    }
                                                },
                                                {
                                                    text: 'Hide Unselected Rows',
                                                    action: function ( e, dt, button, config ) {
                                                        dt.rows({ selected: false }).nodes().to$().css({"display":"none"});
                                                    }
                                                },
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

                                            var exampleTable2 = $('#example2')
                                            .DataTable({
                                                data: jsObj1,
                                                stateSave: true,
                                                dom: 'Bfrtip',
                                                buttons: [
                                                'copy', 'csv', 'excel', 'pdf', 'print', 
                                                {
                                                    extend: 'colvis',
                                                    text: 'Column Visibility'
                                                },
                                                {
                                                    text: 'Select All',
                                                    action: function () {
                                                        exampleTable2.rows().select();
                                                    }
                                                },
                                                {
                                                    text: 'Select None',
                                                    action: function () {
                                                        exampleTable2.rows().deselect();
                                                    }
                                                },
                                                {
                                                    text: 'Show All Rows',
                                                    action: function ( e, dt, button, config ) {
                                                        exampleTable2.rows().deselect();
                                                        dt.rows({ selected: false }).nodes().to$().css({"display":"table-row"});
                                                    }
                                                },
                                                {
                                                    text: 'Hide Unselected Rows',
                                                    action: function ( e, dt, button, config ) {
                                                        dt.rows({ selected: false }).nodes().to$().css({"display":"none"});
                                                    }
                                                },
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
                                                        'data': 'Unit Name'
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
                                                dom: 'Bfrtip',
                                                buttons: [
                                                'copy', 'csv', 'excel', 'pdf', 'print', 
                                                {
                                                    extend: 'colvis',
                                                    text: 'Column Visibility'
                                                },
                                                {
                                                    text: 'Select All',
                                                    action: function () {
                                                        exampleTable3.rows().select();
                                                    }
                                                },
                                                {
                                                    text: 'Select None',
                                                    action: function () {
                                                        exampleTable3.rows().deselect();
                                                    }
                                                },
                                                {
                                                    text: 'Show All Rows',
                                                    action: function ( e, dt, button, config ) {
                                                        exampleTable3.rows().deselect();
                                                        dt.rows({ selected: false }).nodes().to$().css({"display":"table-row"});
                                                    }
                                                },
                                                {
                                                    text: 'Hide Unselected Rows',
                                                    action: function ( e, dt, button, config ) {
                                                        dt.rows({ selected: false }).nodes().to$().css({"display":"none"});
                                                    }
                                                },
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
                                                dom: 'Bfrtip',
                                                buttons: [
                                                'copy', 'csv', 'excel', 'pdf', 'print', 
                                                {
                                                    extend: 'colvis',
                                                    text: 'Column Visibility'
                                                },
                                                {
                                                    text: 'Select All',
                                                    action: function () {
                                                        exampleTable4.rows().select();
                                                    }
                                                },
                                                {
                                                    text: 'Select None',
                                                    action: function () {
                                                        exampleTable4.rows().deselect();
                                                    }
                                                },
                                                {
                                                    text: 'Show All Rows',
                                                    action: function ( e, dt, button, config ) {
                                                        exampleTable4.rows().deselect();
                                                        dt.rows({ selected: false }).nodes().to$().css({"display":"table-row"});
                                                    }
                                                },
                                                {
                                                    text: 'Hide Unselected Rows',
                                                    action: function ( e, dt, button, config ) {
                                                        dt.rows({ selected: false }).nodes().to$().css({"display":"none"});
                                                    }
                                                },
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
                                                //keys: true,
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

                                            var exampleTable5 = $('#example5')
                                            .DataTable({
                                                data: jsObj4,
                                                stateSave: true,
                                                dom: 'Bfrtip',
                                                buttons: [
                                                'copy', 'csv', 'excel', 'pdf', 'print', 
                                                {
                                                    extend: 'colvis',
                                                    text: 'Column Visibility'
                                                },
                                                {
                                                    text: 'Select All',
                                                    action: function () {
                                                        exampleTable5.rows().select();
                                                    }
                                                },
                                                {
                                                    text: 'Select None',
                                                    action: function () {
                                                        exampleTable5.rows().deselect();
                                                    }
                                                },
                                                {
                                                    text: 'Show All Rows',
                                                    action: function ( e, dt, button, config ) {
                                                        exampleTable5.rows().deselect();
                                                        dt.rows({ selected: false }).nodes().to$().css({"display":"table-row"});
                                                    }
                                                },
                                                {
                                                    text: 'Hide Unselected Rows',
                                                    action: function ( e, dt, button, config ) {
                                                        dt.rows({ selected: false }).nodes().to$().css({"display":"none"});
                                                    }
                                                },
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
                                                "order": [[ 1, "desc" ]],
                                                paging: false,
                                                select: {
                                                    style: 'multi'
                                                }, 
                                                //keys: true,
                                                'columns': [{
                                                        'data': 'News Title'
                                                    },
                                                    {
                                                        'data': 'News Publish Date'
                                                    },
                                                    {
                                                        'data': 'News Link',
                                                        "render": function(data, type, row, meta){
                                                            if(type === 'display'){
                                                                data = '<a target="_blank" rel="noopener noreferrer" href="' + data + '">' + data + '</a>';
                                                            }
                                                
                                                            return data;
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
        
        $.extend($.fn.dataTable.defaults, {
            // Display
            dom: '<"top"f><"data-table"rt<"bottom"Blip>>', // https://datatables.net/examples/basic_init/dom.html
            lengthMenu: [ // https://datatables.net/examples/advanced_init/length_menu.html
              [10, 25, 50, -1],
              [10, 25, 50, "All"],
            ],
            language: {
              search: '_INPUT_',
              searchPlaceholder: 'Search', // https://datatables.net/reference/option/language.searchPlaceholder
              info: '_START_-_END_ of _TOTAL_', // https://datatables.net/examples/basic_init/language.html
              lengthMenu: 'Rows per page _MENU_',
              infoEmpty: '0 of _MAX_',
              infoFiltered: '',
              paginate: {
                first: '<svg class="dataTables-svg" viewBox="0 0 24 24"><path d="M18.41 16.59L13.82 12l4.59-4.59L6l-6 6 6 6zM6 6h2v12H6z"/></svg>',
                previous: '<svg class="dataTables-svg" viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.4141z"/></svg>',
                next: '<svg class="dataTables-svg" viewBox="0 0 24 24"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/></svg>',
                last: '<svg class="dataTables-svg" viewBox="0 0 24 24"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM6h2v12h-2z"/></svg>'
              },
              decimal: ',',
              thousands: '.',
              zeroRecords: 'No results found'
            },
            buttons: {
              buttons: [
                {
                  extend: 'copy',
                  text: '<svg class="dataTables-svg" viewBox="0 0 24 24"><path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"/></svg>',
                  className: 'btn-icon',
                  attr: { title: 'Copy table data to clipboard', 'data-toggle': 'tooltip' }
                },
                {
                  extend: 'print',
                  text: '<svg class="dataTables-svg" viewBox="0 0 24 24"><path d="M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z"/></svg>',
                  className: 'btn-icon',
                  attr: { title: 'Print full table', 'data-toggle': 'tooltip' }
                },
                {
                  extend: 'csv',
                  text: '<svg class="dataTables-svg" viewBox="0 0 24 24"><path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2M18 20H6V4H13V9H18V20M10 19L12 15H9V10H15V15L13 19H10"/></svg>',
                  className: 'btn-icon',
                  attr: { title: 'Export to CSV', 'data-toggle': 'tooltip' }
                },
                {
                  text: '<svg class="dataTables-svg" viewBox="0 0 24 24"><path d="M5,3H7V5H5V10A2,2 0 0,1 3,12A2,2 0 0,1 5,14V19H7V21H5C3.93,20.73 3,20.1 3,19V15A2,2 0 0,0 1,13H0V11H1A2,2 0 0,0 3,9V5A2,2 0 0,1 5,3M19,3A2,2 0 0,1 21,5V9A2,2 0 0,0 23,11H24V13H23A2,2 0 0,0 21,15V19A2,2 0 0,1 19,21H17V19H19V14A2,2 0 0,1 21,12A2,2 0 0,1 19,10V5H17V3H19M12,15A1,1 0 0,1 13,16A1,1 0 0,1 12,17A1,1 0 0,1 11,16A1,1 0 0,1 12,15M8,15A1,1 0 0,1 9,16A1,1 0 0,1 8,17A1,1 0 0,1 7,16A1,1 0 0,1 8,15M16,15A1,1 0 0,1 17,16A1,1 0 0,1 16,17A1,1 0 0,1 15,16A1,1 0 0,1 16,15Z"/></svg>',
                  action: function (e, dt, button, config) {
                    let data = dt.buttons.exportData();
                    $.fn.dataTable.fileSave(
                      new Blob([JSON.stringify(data)]),
                      'Data ExportJSON.json'
                    );
                  },
                  className: 'btn-icon',
                  attr: { title: 'Export to JSON', 'data-toggle': 'tooltip' }
                },
                {
                  extend: 'excel',
                  text: '<svg class="dataTables-svg" viewBox="0 0 24 24"><path d="M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20M12.9 14.5L15.8 19H14L12 15.6L10 19H8.2L11.1 14.5L8.2 10H10L12 13.4L14 10H15.8L12.9 14.5Z"/></svg>',
                  className: 'btn-icon',
                  attr: { title: 'Export to Excel', 'data-toggle': 'tooltip' }
                },
                {
                  extend: 'pdf',
                  download: 'open',
                  text: '<svg class="dataTables-svg" viewBox="0 0 24 24"><path d="M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M10.92,12.31C10.68,11.54 10.15,9.08 11.55,9.04C12.95,9 12.03,12.16 12.03,12.16C12.42,13.65 14.05,14.72 14.05,14.72C14.55,14.57 17.4,14.24 17,15.72C16.57,17.2 13.5,15.81 13.5,15.81C11.55,15.95 10.09,16.47 10.09,16.47C8.96,18.58 7.64,19.5 7.1,18.61C6.43,17.5 9.23,16.07 9.23,16.07C10.68,13.72 10.9,12.35 10.92,12.31M11.57,13.15C11.17,14.45 10.37,15.84 10.37,15.84C11.22,15.5 13.08,15.11 13.08,15.11C11.94,14.11 11.59,13.16 11.57,13.15M14.71,15.32C14.71,15.32 16.46,15.97 16.5,15.71C16.57,15.44 15.17,15.2 14.71,15.32M9.05,16.81C8.28,17.11 7.54,18.39 7.72,18.39C7.9,18.4 8.63,17.79 9.05,16.81M11.57,11.26C11.57,11.21 12,9.58 11.57,9.53C11.27,9.5 11.56,11.22 11.57,11.26Z"/></svg>',
                  className: 'btn-icon',
                  attr: { title: 'Export to PDF', 'data-toggle': 'tooltip' }
                }
              ],
              dom: {
                container: { className: 'dt-buttons d-none d-md-flex flex-wrap' },
                buttonContainer: {},
                button: { className: 'btn' }
              }
            },
            // Data display
            colReorder: true,
            fixedHeader: true,
            ordering: true,
            paging: true,
            pageLength: 10,
            pagingType: 'full', // https://datatables.net/reference/option/pagingType
            responsive: true,
            searching: true,
            select: {
              style: 'multi+shift', // https://datatables.net/reference/option/select.style
              className: 'table-active' // https://datatables.net/reference/option/select.className
            },
            stateSave: true,
          })
        
                                     
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

        function sleep(milliseconds) {
            const date = Date.now();
            let currentDate = null;
            do {
                currentDate = Date.now();
            } while (currentDate - date < milliseconds);
        }


    });