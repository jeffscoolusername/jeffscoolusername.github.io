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

        var coingeckoapi = 'https://api.coingecko.com/api/v3/coins/';
        var algochartsapi = 'https://algocharts.net/api/?asset_in=';
        var algoexplorerapi = 'https://indexer.algoexplorerapi.io/v2/assets/';

        var url0 = algoexplorerapi + '397111682';
        var urlprice0 = algochartsapi + '397111682' + '&asset_out=0';
        var urlcgprice0 = coingeckoapi + 'algorand';
        var urlcgprice1 = coingeckoapi + 'bitcoin';
        var url40 = algoexplorerapi + '297995609';
        var urlprice40 = algochartsapi + '297995609' + '&asset_out=0';
                
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

        var coingeckoname0 = 'loading';
        var coingeckoprice0 = 'loading';
        var coingeckopricechange24h0 = 'loading';
        var coingeckopricechange7d0 = 'loading';
        var coingeckopricechange30d0 = 'loading';
        var coingeckopricechange1y0 = 'loading';
        var coingeckoname1 = 'loading';
        var coingeckoprice1 = 'loading';
        var coingeckopricechange24h1 = 'loading';
        var coingeckopricechange7d1 = 'loading';
        var coingeckopricechange30d1 = 'loading';
        var coingeckopricechange1y1 = 'loading';
        var coingeckoname2 = 'loading';
        var coingeckoprice2 = 'loading';
        var coingeckopricechange24h2 = 'loading';
        var coingeckopricechange7d2 = 'loading';
        var coingeckopricechange30d2 = 'loading';
        var coingeckopricechange1y2 = 'loading';
        var coingeckoname3 = 'loading';
        var coingeckoprice3 = 'loading';
        var coingeckopricechange24h3 = 'loading';
        var coingeckopricechange7d3 = 'loading';
        var coingeckopricechange30d3 = 'loading';
        var coingeckopricechange1y3 = 'loading';


        var tinymanprice0 = 'loading';
        var tinymanprice40 = 'loading';          
        
        var feedURL = "https://news.google.com/rss/search?q=algorand&hl=en-US&gl=US&ceid=US:en";

        var newstitlearray = ['loading', 'loading', 'loading', 'loading', 'loading', 'loading', 'loading', 'loading', 'loading', 'loading'];
        var newspubdatarray = ['loading', 'loading', 'loading', 'loading', 'loading', 'loading', 'loading', 'loading', 'loading', 'loading'];
        var newslinkarray = ['loading', 'loading', 'loading', 'loading', 'loading', 'loading', 'loading', 'loading', 'loading', 'loading'];              

        var asatokenarray = ['397111682', '353409462', '430838314', '226265212'];       

        var asset0 = '&asset_out=0';        

        var url00 = algochartsapi + asatokenarray[0] + asset0;
        var url01 = algochartsapi + asatokenarray[1] + asset0;
        var url02 = algochartsapi + asatokenarray[2] + asset0;
        var url03 = algochartsapi + asatokenarray[3] + asset0;

        var tinymanprice = ['loading', 'loading', 'loading', 'loading'];        
        
        var urlalgoexplorer00 = algoexplorerapi + asatokenarray[0];
        var urlalgoexplorer01 = algoexplorerapi + asatokenarray[1];
        var urlalgoexplorer02 = algoexplorerapi + asatokenarray[2];
        var urlalgoexplorer03 = algoexplorerapi + asatokenarray[3];

        const b = [url00, url01, url02, url03, urlalgoexplorer00, urlalgoexplorer01, urlalgoexplorer02, urlalgoexplorer03];

        var algoexplorersupply = ['loading', 'loading', 'loading', 'loading'];
        var algoexplorercreatedatround = ['loading', 'loading', 'loading', 'loading'];
        var algoexplorercreationtxid = ['loading', 'loading', 'loading', 'loading'];
        var algoexplorerdecimals = ['loading', 'loading', 'loading', 'loading'];
        var algoexplorerdefaultfrozen = ['loading', 'loading', 'loading', 'loading'];
        var algoexplorerindex = ['loading', 'loading', 'loading', 'loading'];
        var algoexplorername = ['loading', 'loading', 'loading', 'loading'];
        var algoexplorerpercentcirculation = ['loading', 'loading', 'loading', 'loading'];
        var algoexplorertotal = ['loading', 'loading', 'loading', 'loading'];
        var algoexplorerassettxcounter = ['loading', 'loading', 'loading', 'loading'];
        var algoexplorerassetunitname = ['loading', 'loading', 'loading', 'loading'];

        var blockchainarray = ['algorand', 'bitcoin', 'cardano', 'solana'];

        var urlcoingecko00 = coingeckoapi + blockchainarray[0];
        var urlcoingecko01 = coingeckoapi + blockchainarray[1];
        var urlcoingecko02 = coingeckoapi + blockchainarray[2];
        var urlcoingecko03 = coingeckoapi + blockchainarray[3];
        
        const c = [urlcoingecko00, urlcoingecko01, urlcoingecko02, urlcoingecko03];

        var coingeckoname = ['loading', 'loading', 'loading', 'loading'];

        var tinymanwoof420 = 420;
        var tinymanwoof421 = 421;
        var tinymanwoof422 = 422;
        var tinymanwoof423 = 423;

        var tinymanarray = [tinymanwoof420, tinymanwoof421]

        var algoexplorersupply0 = 0;
        var algoexplorercreatedatround0 = 0;
        var algoexplorercreationtxid0 = 0;
        var algoexplorerdecimals0 = 0;
        var algoexplorerdefaultfrozen0 = 0;
        var algoexplorerindex0 = 0;
        var algoexplorername0 = 0;
        var algoexplorerpercentcirculation0 = 0;
        var algoexplorertotal0 = 0;
        var algoexplorerassettxcounter0 = 0;
        var algoexplorerassetunitname0 = 0;
        
        var algoexplorersupply1 = 0;
        var algoexplorercreatedatround1 = 0;
        var algoexplorercreationtxid1 = 0;
        var algoexplorerdecimals1 = 0;
        var algoexplorerdefaultfrozen1 = 0;
        var algoexplorerindex1 = 0;
        var algoexplorername1 = 0;
        var algoexplorerpercentcirculation1 = 0;
        var algoexplorertotal1 = 0;
        var algoexplorerassettxcounter1 = 0;
        var algoexplorerassetunitname1 = 0;
        var algoexplorersupply2 = 0;
        var algoexplorercreatedatround2 = 0;
        var algoexplorercreationtxid2 = 0;
        var algoexplorerdecimals2 = 0;
        var algoexplorerdefaultfrozen2 = 0;
        var algoexplorerindex2 = 0;
        var algoexplorername2 = 0;
        var algoexplorerpercentcirculation2 = 0;
        var algoexplorertotal2 = 0;
        var algoexplorerassettxcounter2 = 0;
        var algoexplorerassetunitname2 = 0;
        var algoexplorersupply3 = 0;
        var algoexplorercreatedatround3 = 0;
        var algoexplorercreationtxid3 = 0;
        var algoexplorerdecimals3 = 0;
        var algoexplorerdefaultfrozen3 = 0;
        var algoexplorerindex3 = 0;
        var algoexplorername3 = 0;
        var algoexplorerpercentcirculation3 = 0;
        var algoexplorertotal3 = 0;
        var algoexplorerassettxcounter3 = 0;
        var algoexplorerassetunitname3 = 0;


        $.ajax({
            type: 'GET',
            url: "https://api.rss2json.com/v1/api.json?rss_url=" + feedURL,
            dataType: 'jsonp',
            success: async function(result) {
                
                newstitlearray[0] = result.items[0].title;
                newspubdatarray[0] = result.items[0].pubDate;
                newslinkarray[0] = result.items[0].link;
                newstitlearray[1] = result.items[1].title;
                newspubdatarray[1] = result.items[1].pubDate;
                newslinkarray[1] = result.items[1].link;
                newstitlearray[2] = result.items[2].title;
                newspubdatarray[2] = result.items[2].pubDate;
                newslinkarray[2] = result.items[2].link;
                newstitlearray[3] = result.items[3].title;
                newspubdatarray[3] = result.items[3].pubDate;
                newslinkarray[3] = result.items[3].link;
                newstitlearray[4] = result.items[4].title;
                newspubdatarray[4] = result.items[4].pubDate;
                newslinkarray[4] = result.items[4].link;
                newstitlearray[5] = result.items[5].title;
                newspubdatarray[5] = result.items[5].pubDate;
                newslinkarray[5] = result.items[5].link;
                newstitlearray[6] = result.items[6].title;
                newspubdatarray[6] = result.items[6].pubDate;
                newslinkarray[6] = result.items[6].link;
                newstitlearray[7] = result.items[7].title;
                newspubdatarray[7] = result.items[7].pubDate;
                newslinkarray[7] = result.items[7].link;
                newstitlearray[8] = result.items[8].title;
                newspubdatarray[8] = result.items[8].pubDate;
                newslinkarray[8] = result.items[8].link;
                newstitlearray[9] = result.items[9].title;
                newspubdatarray[9] = result.items[9].pubDate;
                newslinkarray[9] = result.items[9].link;
    
            }
            }); 

        for (const element of b) { // You can use `let` instead of `const` if you like
            //console.log(element);
            getJSON(element, async function(err, data42070) {
                if (err !== null) {
                    return $.getJSON(element);
                } else {

                    if([url00,url01,url02,url03].includes(element)) {
                        if (url00 === element) {
                            tinymanwoof420 = data42070.data/*.toFixed(6)*/;    
                        }
                        if (url01 === element) {
                            tinymanwoof421 = data42070.data;    
                        }
                        if (url02 === element) {
                            tinymanwoof422 = data42070.data;    
                        }
                        if (url03 === element) {
                            tinymanwoof423 = data42070.data;    
                        }
                    }
                    else{}
                    
                    if([urlalgoexplorer00,urlalgoexplorer01,urlalgoexplorer02,urlalgoexplorer03].includes(element)) {
                        if (urlalgoexplorer00 === element)
                        {
                        algoexplorersupply0 = data42070.asset.params['circulating-supply'];      
                        algoexplorercreatedatround0 = data42070.asset['created-at-round'];    
                        algoexplorercreationtxid0 = data42070.asset['creation-txid'];  
                        algoexplorerdecimals0 = data42070.asset.params['decimals'];
                        algoexplorerdefaultfrozen0 = data42070.asset.params['default-frozen'];
                        algoexplorerindex0 = data42070.asset['index'];
                        algoexplorername0 = data42070.asset.params['name'];
                        algoexplorerpercentcirculation0 = ((data42070.asset.params['circulating-supply'] / data42070.asset.params['total']) * 10).toFixed(6);
                        algoexplorertotal0 = data42070.asset.params['total'];
                        algoexplorerassettxcounter0 = data42070.asset['asset-tx-counter']; 
                        algoexplorerassetunitname0 = data42070.asset.params['unit-name'];  
                        }
                        if (urlalgoexplorer01 === element)
                        {
                        algoexplorersupply1 = data42070.asset.params['circulating-supply'];      
                        algoexplorercreatedatround1 = data42070.asset['created-at-round'];    
                        algoexplorercreationtxid1 = data42070.asset['creation-txid'];  
                        algoexplorerdecimals1 = data42070.asset.params['decimals'];
                        algoexplorerdefaultfrozen1 = data42070.asset.params['default-frozen'];
                        algoexplorerindex1 = data42070.asset['index'];
                        algoexplorername1 = data42070.asset.params['name'];
                        algoexplorerpercentcirculation1 = ((data42070.asset.params['circulating-supply'] / data42070.asset.params['total']) * 11).toFixed(6);
                        algoexplorertotal1 = data42070.asset.params['total'];
                        algoexplorerassettxcounter1 = data42070.asset['asset-tx-counter']; 
                        algoexplorerassetunitname1 = data42070.asset.params['unit-name'];  
                        }
                        if (urlalgoexplorer02 === element)
                        {
                        algoexplorersupply2 = data42070.asset.params['circulating-supply'];      
                        algoexplorercreatedatround2 = data42070.asset['created-at-round'];    
                        algoexplorercreationtxid2 = data42070.asset['creation-txid'];  
                        algoexplorerdecimals2 = data42070.asset.params['decimals'];
                        algoexplorerdefaultfrozen2 = data42070.asset.params['default-frozen'];
                        algoexplorerindex2 = data42070.asset['index'];
                        algoexplorername2 = data42070.asset.params['name'];
                        algoexplorerpercentcirculation2 = ((data42070.asset.params['circulating-supply'] / data42070.asset.params['total']) * 12).toFixed(6);
                        algoexplorertotal2 = data42070.asset.params['total'];
                        algoexplorerassettxcounter2 = data42070.asset['asset-tx-counter']; 
                        algoexplorerassetunitname2 = data42070.asset.params['unit-name'];  
                        }
                        if (urlalgoexplorer03 === element)
                        {
                        algoexplorersupply3 = data42070.asset.params['circulating-supply'];      
                        algoexplorercreatedatround3 = data42070.asset['created-at-round'];    
                        algoexplorercreationtxid3 = data42070.asset['creation-txid'];  
                        algoexplorerdecimals3 = data42070.asset.params['decimals'];
                        algoexplorerdefaultfrozen3 = data42070.asset.params['default-frozen'];
                        algoexplorerindex3 = data42070.asset['index'];
                        algoexplorername3 = data42070.asset.params['name'];
                        algoexplorerpercentcirculation3 = ((data42070.asset.params['circulating-supply'] / data42070.asset.params['total']) * 13).toFixed(6);
                        algoexplorertotal3 = data42070.asset.params['total'];
                        algoexplorerassettxcounter3 = data42070.asset['asset-tx-counter']; 
                        algoexplorerassetunitname3 = data42070.asset.params['unit-name'];  
                        }
                    }
                    else{}

                }
    
            });  
        };   

        for (const element of c) { // You can use `let` instead of `const` if you like
            //console.log(element);
            getJSON(element, async function(err, data42071) {
                if (err !== null) {
                    return $.getJSON(element);
                } else {
                    if (urlcoingecko00 === element) {
                        coingeckoname0 = data42071.name;   
                        coingeckoprice0 = data42071.market_data.current_price['usd'];     
                        coingeckopricechange24h0 = data42071.market_data.price_change_percentage_24h;            
                        coingeckopricechange7d0 = data42071.market_data.price_change_percentage_7d;    
                        coingeckopricechange30d0 = data42071.market_data.price_change_percentage_30d;  
                        coingeckopricechange1y0 = data42071.market_data.price_change_percentage_1y;   
                    }
                    if (urlcoingecko01 === element) {
                        coingeckoname1 = data42071.name;   
                        coingeckoprice1 = data42071.market_data.current_price['usd'];     
                        coingeckopricechange24h1 = data42071.market_data.price_change_percentage_24h;            
                        coingeckopricechange7d1 = data42071.market_data.price_change_percentage_7d;    
                        coingeckopricechange30d1 = data42071.market_data.price_change_percentage_30d;  
                        coingeckopricechange1y1 = data42071.market_data.price_change_percentage_1y;   
                    }
                    if (urlcoingecko02 === element) {
                        coingeckoname2 = data42071.name;   
                        coingeckoprice2 = data42071.market_data.current_price['usd'];     
                        coingeckopricechange24h2 = data42071.market_data.price_change_percentage_24h;            
                        coingeckopricechange7d2 = data42071.market_data.price_change_percentage_7d;    
                        coingeckopricechange30d2 = data42071.market_data.price_change_percentage_30d;  
                        coingeckopricechange1y2 = data42071.market_data.price_change_percentage_1y;   
                    }
                    if (urlcoingecko03 === element) {
                        coingeckoname3 = data42071.name;   
                        coingeckoprice3 = data42071.market_data.current_price['usd'];     
                        coingeckopricechange24h3 = data42071.market_data.price_change_percentage_24h;            
                        coingeckopricechange7d3 = data42071.market_data.price_change_percentage_7d;    
                        coingeckopricechange30d3 = data42071.market_data.price_change_percentage_30d;  
                        coingeckopricechange1y3 = data42071.market_data.price_change_percentage_1y;   
                    }

    
                    //coingeckoname[0, 1, 2, 3] = data42071.name;         
                    //console.log(coingeckoname[0, 1, 2, 3]);                                                    
                                        
                }
    
            });  
        };                         

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
                
                                tinymanprice40 = data40p.data/*[0].toFixed(6)*/;                                                            
                                                 
                            }
                
                        });                                             
                                            
                    }
        
                });  
                getJSON(urlprice0, async function(err, data01p) {
                    if (err !== null) {
                        return $.getJSON(urlprice0);
                    } else {
        
                        tinymanprice0 = data01p.data/*[0].toFixed(6)*/;       
                        
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
                                                'Name': algoexplorername0,
                                                'Index': algoexplorerindex0,
                                                'Tinyman Price' : tinymanwoof420,
                                                '% in Circulation': algoexplorerpercentcirculation0,
                                                'Transactions Counter': algoexplorerassettxcounter0,
                                                'Created at Round': algoexplorercreatedatround0
                                            },
                                            //put any in between here following 0's format
                                            {
                                                'Name': algoexplorername1,
                                                'Index': algoexplorerindex1,
                                                'Tinyman Price' : tinymanwoof421,
                                                '% in Circulation': algoexplorerpercentcirculation1,
                                                'Transactions Counter': algoexplorerassettxcounter1,
                                                'Created at Round': algoexplorercreatedatround1
                                            }
                                        ];

                                        /*var jsObj0 = [
                                            {
                                                'Name': algoexplorername[0],
                                                'Index': algoexplorerindex[0],
                                                'Tinyman Price' : tinymanprice[0],
                                                '% in Circulation': algoexplorerpercentcirculation[0],
                                                'Transactions Counter': algoexplorerassettxcounter[0],
                                                'Created at Round': algoexplorercreatedatround[0]
                                            },
                                            //put any in between here following 0's format
                                            {
                                                'Name': algoexplorername[1],
                                                'Index': algoexplorerindex[1],
                                                'Tinyman Price' : tinymanprice[1],
                                                '% in Circulation': algoexplorerpercentcirculation[1],
                                                'Transactions Counter': algoexplorerassettxcounter[1],
                                                'Created at Round': algoexplorercreatedatround[1]
                                            }
                                        ];*/
                        
                                        var jsObj1 = [
                                            {
                                                'Name': algoexplorername0,                                                
                                                'Index': algoexplorerindex0,
                                                'Unit Name': algoexplorerassetunitname0,
                                                'Default Frozen': algoexplorerdefaultfrozen0
                                            },
                                            {
                                                'Name': algoexplorername1,
                                                'Index': algoexplorerindex1,
                                                'Unit Name': algoexplorerassetunitname1,                                                
                                                'Default Frozen': algoexplorerdefaultfrozen1
                                            }
                                        ];
                        
                                        var jsObj2 = [
                                            {
                                                'Name': algoexplorername0,         
                                                'Index': algoexplorerindex0,             
                                                'Circulating Supply': algoexplorerpercentcirculation0,
                                                'Total': algoexplorertotal0,
                                                'Decimals': algoexplorerdecimals0,
                                                'Creation TX': algoexplorercreationtxid0,
                                            },
                                            {
                                                'Name': algoexplorername1,      
                                                'Index': algoexplorerindex1,                
                                                'Circulating Supply': algoexplorerpercentcirculation1,
                                                'Total': algoexplorertotal1,
                                                'Decimals': algoexplorerdecimals1,
                                                'Creation TX': algoexplorercreationtxid1
                                            }
                                        ];
                        
                                        var jsObj3 = [
                                            {
                                                'Name': coingeckoname0,                      
                                                'Algo Price': coingeckoprice0,
                                                '24h Change': coingeckopricechange24h0,
                                                '7d Change': coingeckopricechange7d0,
                                                '30d Change': coingeckopricechange30d0,
                                                '1y Change': coingeckopricechange1y0
                                                //'Algo Price' : (coingeckprice40/coingeckoprice40)
                                                // ^ for subsequent pieces of the array
                                            },
                                            {
                                                'Name': coingeckoname1,                      
                                                'Algo Price': coingeckoprice1,
                                                '24h Change': coingeckopricechange24h1,
                                                '7d Change': coingeckopricechange7d1,
                                                '30d Change': coingeckopricechange30d1,
                                                '1y Change': coingeckopricechange1y1
                                                //'Algo Price' : (coingeckprice40/coingeckoprice40)
                                                // ^ for subsequent pieces of the array
                                            },
                                            {
                                                'Name': coingeckoname2,                      
                                                'Algo Price': coingeckoprice2,
                                                '24h Change': coingeckopricechange24h2,
                                                '7d Change': coingeckopricechange7d2,
                                                '30d Change': coingeckopricechange30d2,
                                                '1y Change': coingeckopricechange1y2
                                                //'Algo Price' : (coingeckprice40/coingeckoprice40)
                                                // ^ for subsequent pieces of the array
                                            },
                                            {
                                                'Name': coingeckoname3,                      
                                                'Algo Price': coingeckoprice3,
                                                '24h Change': coingeckopricechange24h3,
                                                '7d Change': coingeckopricechange7d3,
                                                '30d Change': coingeckopricechange30d3,
                                                '1y Change': coingeckopricechange1y3
                                                //'Algo Price' : (coingeckprice40/coingeckoprice40)
                                                // ^ for subsequent pieces of the array
                                            }

                                        ];

                                        var jsObj4 = [
                                            {
                                                'News Title': newstitlearray[0],   
                                                'News Publish Date': newspubdatarray[0],      
                                                'News Link': newslinkarray[0]
                                            },
                                            {
                                                'News Title': newstitlearray[1],   
                                                'News Publish Date': newspubdatarray[1],      
                                                'News Link': newslinkarray[1]
                                            },
                                            {
                                                'News Title': newstitlearray[2],   
                                                'News Publish Date': newspubdatarray[2],      
                                                'News Link': newslinkarray[2]
                                            },
                                            {
                                                'News Title': newstitlearray[3],   
                                                'News Publish Date': newspubdatarray[3],      
                                                'News Link': newslinkarray[3]
                                            },
                                            {
                                                'News Title': newstitlearray[4],   
                                                'News Publish Date': newspubdatarray[4],      
                                                'News Link': newslinkarray[4]
                                            },
                                            {
                                                'News Title': newstitlearray[5],   
                                                'News Publish Date': newspubdatarray[5],      
                                                'News Link': newslinkarray[5]
                                            },
                                            {
                                                'News Title': newstitlearray[6],   
                                                'News Publish Date': newspubdatarray[6],      
                                                'News Link': newslinkarray[6]
                                            },
                                            {
                                                'News Title': newstitlearray[7],   
                                                'News Publish Date': newspubdatarray[7],      
                                                'News Link': newslinkarray[7]
                                            },
                                            {
                                                'News Title': newstitlearray[8],   
                                                'News Publish Date': newspubdatarray[8],      
                                                'News Link': newslinkarray[8]
                                            },
                                            {
                                                'News Title': newstitlearray[9],   
                                                'News Publish Date': newspubdatarray[9],      
                                                'News Link': newslinkarray[9]
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

        function sleep(milliseconds) {
            const date = Date.now();
            let currentDate = null;
            do {
                currentDate = Date.now();
            } while (currentDate - date < milliseconds);
        }


    });