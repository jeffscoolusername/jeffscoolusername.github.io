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
        var algowalletexplorerapi = 'https://api.algoexplorer.io/v1/account/';
        var algowalletamountexplorerapi = 'https://api.algoexplorer.io/v2/accounts/';

        var url0 = algoexplorerapi + '397111682';
        var url1 = algoexplorerapi + '511484048';
        var url2 = algoexplorerapi + '27165954';
        var url3 = algoexplorerapi + '478549868';
        var url4 = algoexplorerapi + '470842789';
        var url5 = algoexplorerapi + '31566704';
        var url6 = algoexplorerapi + '237913743';
        var url7 = algoexplorerapi + '307329013';
        var url8 = algoexplorerapi + '257805044';

        var coingeckoname0 = '';
        var coingeckoprice0 = '';
        var coingeckousdprice0 = '';
        var coingeckopricechange24h0 = '';
        var coingeckopricechange7d0 = '';
        var coingeckopricechange30d0 = '';
        var coingeckopricechange1y0 = '';
        var coingeckoname1 = '';
        var coingeckoprice1 = '';
        var coingeckopricechange24h1 = '';
        var coingeckopricechange7d1 = '';
        var coingeckopricechange30d1 = '';
        var coingeckopricechange1y1 = '';
        var coingeckoname2 = '';
        var coingeckoprice2 = '';
        var coingeckopricechange24h2 = '';
        var coingeckopricechange7d2 = '';
        var coingeckopricechange30d2 = '';
        var coingeckopricechange1y2 = '';
        var coingeckoname3 = '';
        var coingeckoprice3 = '';
        var coingeckopricechange24h3 = '';
        var coingeckopricechange7d3 = '';
        var coingeckopricechange30d3 = '';
        var coingeckopricechange1y3 = '';

        const a = ["https://api.rss2json.com/v1/api.json?rss_url=https://news.google.com/rss/search?q=algorand&hl=en-US&gl=US&ceid=US:en"];

        var newstitle0 = 0;
        var newspubdat0 = 0;
        var newslink0 = 0;
        var newstitle1 = 0;
        var newspubdat1 = 0;
        var newslink1 = 0;
        var newstitle2 = 0;
        var newspubdat2 = 0;
        var newslink2 = 0;
        var newstitle3 = 0;
        var newspubdat3 = 0;
        var newslink3 = 0;
        var newstitle4 = 0;
        var newspubdat4 = 0;
        var newslink4 = 0;
        var newstitle5 = 0;
        var newspubdat5 = 0;
        var newslink5 = 0;
        var newstitle6 = 0;
        var newspubdat6 = 0;
        var newslink6 = 0;
        var newstitle7 = 0;
        var newspubdat7 = 0;
        var newslink7 = 0;
        var newstitle8 = 0;
        var newspubdat8 = 0;
        var newslink8 = 0;
        var newstitle9 = 0;
        var newspubdat9 = 0;
        var newslink9 = 0;            

        var asatokenarray = ['397111682', '353409462', '430838314', '226265212'];       
        var unusedasatokenarray = ['237913743', '307329013', '257805044', '276461096', '306034694', '287504952', '310079703', '284090786'];
        var asatokenwalletarray = ['SP745JJR4KPRQEXJZHVIEN736LYTL2T2DFMG3OIIFJBV66K73PHNMDCZVM', 'SSV6SKTMN3IOJO6SWUAT5ERZOBC5K44CQPOH5O7NSXJLGFGU73WUQ7DPGA', 
        'BY6UJNZ2MD3AZC2K2KQJW7W7OWPGGIBNOSZGFZQ6L426BTGO5G2FOI6VPI', 'I6OCQ7C2KVDVT6ARZAG5JNWBJLVVF6PLEBTCJP7CCK3DKTLSNUFXDMWTCQ'];    

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
        var urlalgoexplorerunused01 = algoexplorerapi + unusedasatokenarray[1];
        var urlalgoexplorerunused02 = algoexplorerapi + unusedasatokenarray[2];
        var urlalgoexplorerunused03 = algoexplorerapi + unusedasatokenarray[3];
        var urlalgoexplorerunused04 = algoexplorerapi + unusedasatokenarray[4];
        var urlalgoexplorerunused05 = algoexplorerapi + unusedasatokenarray[5];
        var urlalgoexplorerunused06 = algoexplorerapi + unusedasatokenarray[6];
        var urlalgoexplorerunused07 = algoexplorerapi + unusedasatokenarray[7];

        var walletmodifier0 = '/transactions/latest/10';   
        //var walletamountmodifier0 = 'assets/31566704';   //not necessasry

        var urlalgowalletexplorer00 = algowalletexplorerapi + asatokenwalletarray[0] + walletmodifier0; //binance
        var urlalgowalletexplorer01 = algowalletexplorerapi + asatokenwalletarray[1] + walletmodifier0; //algostake
        var urlalgowalletexplorer02 = algowalletexplorerapi + asatokenwalletarray[2] + walletmodifier0;
        var urlalgowalletexplorer03 = algowalletexplorerapi + asatokenwalletarray[3] + walletmodifier0;

        var urlalgowalletamountexplorer00 = algowalletamountexplorerapi + asatokenwalletarray[0]; //binance
        var urlalgowalletamountexplorer01 = algowalletamountexplorerapi + asatokenwalletarray[1]; //algostake
        var urlalgowalletamountexplorer02 = algowalletamountexplorerapi + asatokenwalletarray[2];
        var urlalgowalletamountexplorer03 = algowalletamountexplorerapi + asatokenwalletarray[3];

        const b = [url00, url01, url02, url03, urlalgoexplorer00, urlalgoexplorer01, urlalgoexplorer02, urlalgoexplorer03, urlalgowalletexplorer00, 
            urlalgowalletexplorer01, urlalgowalletexplorer02, urlalgowalletexplorer03, urlalgowalletamountexplorer00, urlalgowalletamountexplorer01,
            urlalgowalletamountexplorer02, urlalgowalletamountexplorer03];

        var blockchainarray = ['algorand', 'bitcoin', 'cardano', 'solana'];

        var urlcoingecko00 = coingeckoapi + blockchainarray[0];
        var urlcoingecko01 = coingeckoapi + blockchainarray[1];
        var urlcoingecko02 = coingeckoapi + blockchainarray[2];
        var urlcoingecko03 = coingeckoapi + blockchainarray[3];
        
        const c = [urlcoingecko00, urlcoingecko01, urlcoingecko02, urlcoingecko03];

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

        var algoexplorerwalletamount0_0 = 0;
        var algoexplorerwalletround0_0 = 0;  
        var algoexplorerwallettype0_0 = 0;      
        var algoexplorerwalletTXID0_0 = 0; 

        var algoexplorerwalletamount0_1 = 0;  
        var algoexplorerwalletround0_1 = 0;  
        var algoexplorerwallettype0_1 = 0;      
        var algoexplorerwalletTXID0_1 = 0; 

        var algoexplorerwalletamount0_2 = 0;  
        var algoexplorerwalletround0_2 = 0;  
        var algoexplorerwallettype0_2 = 0;      
        var algoexplorerwalletTXID0_2 = 0; 

        var algoexplorerwalletamount0_3 = 0;  
        var algoexplorerwalletround0_3 = 0;  
        var algoexplorerwallettype0_3 = 0;      
        var algoexplorerwalletTXID0_3 = 0; 

        var algoexplorerwalletamount0_4 = 0;  
        var algoexplorerwalletround0_4 = 0;  
        var algoexplorerwallettype0_4 = 0;      
        var algoexplorerwalletTXID0_4 = 0; 

        var algoexplorerwalletamount0_5 = 0;  
        var algoexplorerwalletround0_5 = 0;  
        var algoexplorerwallettype0_5 = 0;      
        var algoexplorerwalletTXID0_5 = 0; 

        var algoexplorerwalletamount0_6 = 0;  
        var algoexplorerwalletround0_6 = 0;  
        var algoexplorerwallettype0_6 = 0;      
        var algoexplorerwalletTXID0_6 = 0; 

        var algoexplorerwalletamount0_7 = 0;  
        var algoexplorerwalletround0_7 = 0;  
        var algoexplorerwallettype0_7 = 0;      
        var algoexplorerwalletTXID0_7 = 0; 

        var algoexplorerwalletamount0_8 = 0;  
        var algoexplorerwalletround0_8 = 0;  
        var algoexplorerwallettype0_8 = 0;      
        var algoexplorerwalletTXID0_8 = 0; 

        var algoexplorerwalletamount0_9 = 0;  
        var algoexplorerwalletround0_9 = 0;  
        var algoexplorerwallettype0_9 = 0;      
        var algoexplorerwalletTXID0_9 = 0; 

        var algoexplorerwalletamount1_0 = 0;
        var algoexplorerwalletround1_0 = 0;  
        var algoexplorerwallettype1_0 = 0;      
        var algoexplorerwalletTXID1_0 = 0; 
        var algoexplorerwalletamount1_1 = 0;
        var algoexplorerwalletround1_1 = 0;  
        var algoexplorerwallettype1_1 = 0;      
        var algoexplorerwalletTXID1_1 = 0; 
        var algoexplorerwalletamount1_2 = 0;
        var algoexplorerwalletround1_2 = 0;  
        var algoexplorerwallettype1_2 = 0;      
        var algoexplorerwalletTXID1_2 = 0; 
        var algoexplorerwalletamount1_3 = 0;
        var algoexplorerwalletround1_3 = 0;  
        var algoexplorerwallettype1_3 = 0;      
        var algoexplorerwalletTXID1_3 = 0; 
        var algoexplorerwalletamount1_4 = 0;
        var algoexplorerwalletround1_4 = 0;  
        var algoexplorerwallettype1_4 = 0;      
        var algoexplorerwalletTXID1_4 = 0; 
        var algoexplorerwalletamount1_5 = 0;
        var algoexplorerwalletround1_5 = 0;  
        var algoexplorerwallettype1_5 = 0;      
        var algoexplorerwalletTXID1_5 = 0; 
        var algoexplorerwalletamount1_6 = 0;
        var algoexplorerwalletround1_6 = 0;  
        var algoexplorerwallettype1_6 = 0;      
        var algoexplorerwalletTXID1_6 = 0; 
        var algoexplorerwalletamount1_7 = 0;
        var algoexplorerwalletround1_7 = 0;  
        var algoexplorerwallettype1_7 = 0;      
        var algoexplorerwalletTXID1_7 = 0; 
        var algoexplorerwalletamount1_8 = 0;
        var algoexplorerwalletround1_8 = 0;  
        var algoexplorerwallettype1_8 = 0;      
        var algoexplorerwalletTXID1_8 = 0; 
        var algoexplorerwalletamount1_9 = 0;
        var algoexplorerwalletround1_9 = 0;  
        var algoexplorerwallettype1_9 = 0;      
        var algoexplorerwalletTXID1_9 = 0; 

        var algoexplorerwalletamount2_0 = 0;
        var algoexplorerwalletround2_0 = 0;  
        var algoexplorerwallettype2_0 = 0;      
        var algoexplorerwalletTXID2_0 = 0; 
        var algoexplorerwalletamount2_1 = 0;
        var algoexplorerwalletround2_1 = 0;  
        var algoexplorerwallettype2_1 = 0;      
        var algoexplorerwalletTXID2_1 = 0; 
        var algoexplorerwalletamount2_2 = 0;
        var algoexplorerwalletround2_2 = 0;  
        var algoexplorerwallettype2_2 = 0;      
        var algoexplorerwalletTXID2_2 = 0; 
        var algoexplorerwalletamount2_3 = 0;
        var algoexplorerwalletround2_3 = 0;  
        var algoexplorerwallettype2_3 = 0;      
        var algoexplorerwalletTXID2_3 = 0; 
        var algoexplorerwalletamount2_4 = 0;
        var algoexplorerwalletround2_4 = 0;  
        var algoexplorerwallettype2_4 = 0;      
        var algoexplorerwalletTXID2_4 = 0; 
        var algoexplorerwalletamount2_5 = 0;
        var algoexplorerwalletround2_5 = 0;  
        var algoexplorerwallettype2_5 = 0;      
        var algoexplorerwalletTXID2_5 = 0; 
        var algoexplorerwalletamount2_6 = 0;
        var algoexplorerwalletround2_6 = 0;  
        var algoexplorerwallettype2_6 = 0;      
        var algoexplorerwalletTXID2_6 = 0; 
        var algoexplorerwalletamount2_7 = 0;
        var algoexplorerwalletround2_7 = 0;  
        var algoexplorerwallettype2_7 = 0;      
        var algoexplorerwalletTXID2_7 = 0; 
        var algoexplorerwalletamount2_8 = 0;
        var algoexplorerwalletround2_8 = 0;  
        var algoexplorerwallettype2_8 = 0;      
        var algoexplorerwalletTXID2_8 = 0; 
        var algoexplorerwalletamount2_9 = 0;
        var algoexplorerwalletround2_9 = 0;  
        var algoexplorerwallettype2_9 = 0;      
        var algoexplorerwalletTXID2_9 = 0; 

        var algoexplorerwalletfrom0 = 0;
        var algoexplorerwalletamount0 = 0;  
        var algoexplorerwalletround0 = 0;  
        var algoexplorerwallettype0 = 0;      
        var algoexplorerwalletTXID0 = 0; 

        var algoexplorerwalletfrom1 = 0;
        var algoexplorerwalletamount1 = 0;  
        var algoexplorerwalletround1 = 0;  
        var algoexplorerwallettype1 = 0;      
        var algoexplorerwalletTXID1= 0; 

        var algoexplorerwalletfrom2 = 0;
        var algoexplorerwalletamount2 = 0;  
        var algoexplorerwalletround2 = 0;  
        var algoexplorerwallettype2 = 0;      
        var algoexplorerwalletTXID2= 0; 

        var algoexplorerwalletfrom3 = 0;
        var algoexplorerwalletamount3 = 0;  
        var algoexplorerwalletround3 = 0;  
        var algoexplorerwallettype3 = 0;      
        var algoexplorerwalletTXID3= 0; 

        var algoexplorerwalletamountinside0 = 0;  

        for (const element of a) { // You can use `let` instead of `const` if you like
            //console.log(element);
            getJSON(element, async function(err, data42070) {
                if (err !== null) {
                    return $.getJSON(element);
                } else {
                    
                    newstitle0 = data42070.items[0].title;
                    newspubdat0 = data42070.items[0].pubDate;
                    newslink0 = data42070.items[0].link;
                    newstitle1 = data42070.items[1].title;
                    newspubdat1 = data42070.items[1].pubDate;
                    newslink1 = data42070.items[1].link;
                    newstitle2 = data42070.items[2].title;
                    newspubdat2 = data42070.items[2].pubDate;
                    newslink2 = data42070.items[2].link;
                    newstitle3 = data42070.items[3].title;
                    newspubdat3 = data42070.items[3].pubDate;
                    newslink3 = data42070.items[3].link;
                    newstitle4 = data42070.items[4].title;
                    newspubdat4 = data42070.items[4].pubDate;
                    newslink4 = data42070.items[4].link;
                    newstitle5 = data42070.items[5].title;
                    newspubdat5 = data42070.items[5].pubDate;
                    newslink5 = data42070.items[5].link;
                    newstitle6 = data42070.items[6].title;
                    newspubdat6 = data42070.items[6].pubDate;
                    newslink6 = data42070.items[6].link;
                    newstitle7 = data42070.items[7].title;
                    newspubdat7 = data42070.items[7].pubDate;
                    newslink7 = data42070.items[7].link;
                    newstitle8 = data42070.items[8].title;
                    newspubdat8 = data42070.items[8].pubDate;
                    newslink8 = data42070.items[8].link;
                    newstitle9 = data42070.items[9].title;
                    newspubdat9 = data42070.items[9].pubDate;
                    newslink9 = data42070.items[9].link;                                              
                                        
                }
    
            });  
        };  

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

                    if (urlalgowalletexplorer00 === element)
                        {                
                            algoexplorerwalletfrom0 = "Binance";   
                            
                            algoexplorerwalletamount0_0 = (data42071[0].amount / 1000000); 
                            algoexplorerwalletround0_0 = data42071[0].round; 
                            algoexplorerwallettype0_0 = data42071[0].type;      
                            algoexplorerwalletTXID0_0 = data42071[0].txid;        

                            algoexplorerwalletamount0_1 = (data42071[1].amount / 1000000); 
                            algoexplorerwalletround0_1 = data42071[1].round; 
                            algoexplorerwallettype0_1 = data42071[1].type;      
                            algoexplorerwalletTXID0_1 = data42071[1].txid;        
                            algoexplorerwalletamount0_2 = (data42071[2].amount / 1000000); 
                            algoexplorerwalletround0_2 = data42071[2].round; 
                            algoexplorerwallettype0_2 = data42071[2].type;      
                            algoexplorerwalletTXID0_2 = data42071[2].txid;        
                            algoexplorerwalletamount0_3 = (data42071[3].amount / 1000000); 
                            algoexplorerwalletround0_3 = data42071[3].round; 
                            algoexplorerwallettype0_3 = data42071[3].type;      
                            algoexplorerwalletTXID0_3 = data42071[3].txid;        
                            algoexplorerwalletamount0_4 = (data42071[4].amount / 1000000); 
                            algoexplorerwalletround0_4 = data42071[4].round; 
                            algoexplorerwallettype0_4 = data42071[4].type;      
                            algoexplorerwalletTXID0_4 = data42071[4].txid;        
                            algoexplorerwalletamount0_5 = (data42071[5].amount / 1000000); 
                            algoexplorerwalletround0_5 = data42071[5].round; 
                            algoexplorerwallettype0_5 = data42071[5].type;      
                            algoexplorerwalletTXID0_5 = data42071[5].txid;        
                            algoexplorerwalletamount0_6 = (data42071[6].amount / 1000000); 
                            algoexplorerwalletround0_6 = data42071[6].round; 
                            algoexplorerwallettype0_6 = data42071[6].type;      
                            algoexplorerwalletTXID0_6 = data42071[6].txid;        
                            algoexplorerwalletamount0_7 = (data42071[7].amount / 1000000); 
                            algoexplorerwalletround0_7 = data42071[7].round; 
                            algoexplorerwallettype0_7 = data42071[7].type;      
                            algoexplorerwalletTXID0_7 = data42071[7].txid;        
                            algoexplorerwalletamount0_8 = (data42071[8].amount / 1000000); 
                            algoexplorerwalletround0_8 = data42071[8].round; 
                            algoexplorerwallettype0_8 = data42071[8].type;      
                            algoexplorerwalletTXID0_8 = data42071[8].txid;        
                            algoexplorerwalletamount0_9 = (data42071[9].amount / 1000000); 
                            algoexplorerwalletround0_9 = data42071[9].round; 
                            algoexplorerwallettype0_9 = data42071[9].type;      
                            algoexplorerwalletTXID0_9 = data42071[9].txid;        




                        }
                    if (urlalgowalletexplorer01 === element)
                        {
                            //console.log(data42071);
                            algoexplorerwalletfrom1 = "AlgoStake - Creator, Manager, Reserve";   
                            algoexplorerwalletamount1_0 = (data42071[0].amount / 1000000); 
                            algoexplorerwalletround1_0 = data42071[0].round; 
                            algoexplorerwallettype1_0 = data42071[0].type;      
                            algoexplorerwalletTXID1_0 = data42071[0].txid;     
                            
                            algoexplorerwalletamount1_1 = (data42071[1].amount / 1000000); 
                            algoexplorerwalletround1_1 = data42071[1].round; 
                            algoexplorerwallettype1_1 = data42071[1].type;      
                            algoexplorerwalletTXID1_1 = data42071[1].txid;     
                            algoexplorerwalletamount1_2 = (data42071[2].amount / 1000000); 
                            algoexplorerwalletround1_2 = data42071[2].round; 
                            algoexplorerwallettype1_2 = data42071[2].type;      
                            algoexplorerwalletTXID1_2 = data42071[2].txid;     
                            algoexplorerwalletamount1_3 = (data42071[3].amount / 1000000); 
                            algoexplorerwalletround1_3 = data42071[3].round; 
                            algoexplorerwallettype1_3 = data42071[3].type;      
                            algoexplorerwalletTXID1_3 = data42071[3].txid;     
                            algoexplorerwalletamount1_4 = (data42071[4].amount / 1000000); 
                            algoexplorerwalletround1_4 = data42071[4].round; 
                            algoexplorerwallettype1_4 = data42071[4].type;      
                            algoexplorerwalletTXID1_4 = data42071[4].txid;     
                            algoexplorerwalletamount1_5 = (data42071[5].amount / 1000000); 
                            algoexplorerwalletround1_5 = data42071[5].round; 
                            algoexplorerwallettype1_5 = data42071[5].type;      
                            algoexplorerwalletTXID1_5 = data42071[5].txid;     
                            algoexplorerwalletamount1_6 = (data42071[6].amount / 1000000); 
                            algoexplorerwalletround1_6 = data42071[6].round; 
                            algoexplorerwallettype1_6 = data42071[6].type;      
                            algoexplorerwalletTXID1_6 = data42071[6].txid;     
                            algoexplorerwalletamount1_7 = (data42071[7].amount / 1000000); 
                            algoexplorerwalletround1_7 = data42071[7].round; 
                            algoexplorerwallettype1_7 = data42071[7].type;      
                            algoexplorerwalletTXID1_7 = data42071[7].txid;     
                            algoexplorerwalletamount1_8 = (data42071[8].amount / 1000000); 
                            algoexplorerwalletround1_8 = data42071[8].round; 
                            algoexplorerwallettype1_8 = data42071[8].type;      
                            algoexplorerwalletTXID1_8 = data42071[8].txid;     
                            algoexplorerwalletamount1_9 = (data42071[9].amount / 1000000); 
                            algoexplorerwalletround1_9 = data42071[9].round; 
                            algoexplorerwallettype1_9 = data42071[9].type;      
                            algoexplorerwalletTXID1_9 = data42071[9].txid;     
 
                        }
                    if (urlalgowalletexplorer02 === element)
                        {  
                            algoexplorerwalletfrom2 = "PlanetWatch - Creator, Manager, Reserve";   
                            algoexplorerwalletamount2_0 = (data42071[0].amount / 1000000); 
                            algoexplorerwalletround2_0 = data42071[0].round; 
                            algoexplorerwallettype2_0 = data42071[0].type;      
                            algoexplorerwalletTXID2_0 = data42071[0].txid; 

                            algoexplorerwalletamount2_1 = (data42071[1].amount / 1000000); 
                            algoexplorerwalletround2_1 = data42071[1].round; 
                            algoexplorerwallettype2_1 = data42071[1].type;      
                            algoexplorerwalletTXID2_1 = data42071[1].txid; 

                            algoexplorerwalletamount2_2 = (data42071[2].amount / 1000000); 
                            algoexplorerwalletround2_2 = data42071[2].round; 
                            algoexplorerwallettype2_2 = data42071[2].type;      
                            algoexplorerwalletTXID2_2 = data42071[2].txid; 
                            algoexplorerwalletamount2_3 = (data42071[3].amount / 1000000); 
                            algoexplorerwalletround2_3 = data42071[3].round; 
                            algoexplorerwallettype2_3 = data42071[3].type;      
                            algoexplorerwalletTXID2_3 = data42071[3].txid; 
                            algoexplorerwalletamount2_4 = (data42071[4].amount / 1000000); 
                            algoexplorerwalletround2_4 = data42071[4].round; 
                            algoexplorerwallettype2_4 = data42071[4].type;      
                            algoexplorerwalletTXID2_4 = data42071[4].txid; 
                            algoexplorerwalletamount2_5 = (data42071[5].amount / 1000000); 
                            algoexplorerwalletround2_5 = data42071[5].round; 
                            algoexplorerwallettype2_5 = data42071[5].type;      
                            algoexplorerwalletTXID2_5 = data42071[5].txid; 
                            algoexplorerwalletamount2_6 = (data42071[6].amount / 1000000); 
                            algoexplorerwalletround2_6 = data42071[6].round; 
                            algoexplorerwallettype2_6 = data42071[6].type;      
                            algoexplorerwalletTXID2_6 = data42071[6].txid; 
                            algoexplorerwalletamount2_7 = (data42071[7].amount / 1000000); 
                            algoexplorerwalletround2_7 = data42071[7].round; 
                            algoexplorerwallettype2_7 = data42071[7].type;      
                            algoexplorerwalletTXID2_7 = data42071[7].txid; 
                            algoexplorerwalletamount2_8 = (data42071[8].amount / 1000000); 
                            algoexplorerwalletround2_8 = data42071[8].round; 
                            algoexplorerwallettype2_8 = data42071[8].type;      
                            algoexplorerwalletTXID2_8 = data42071[8].txid; 
                            algoexplorerwalletamount2_9 = (data42071[9].amount / 1000000); 
                            algoexplorerwalletround2_9 = data42071[9].round; 
                            algoexplorerwallettype2_9 = data42071[9].type;      
                            algoexplorerwalletTXID2_9 = data42071[9].txid; 
 
                        }
                    if (urlalgowalletexplorer03 === element)
                        {  
                            algoexplorerwalletfrom3 = "BirdBot - Creator, Manager, Reserve";   
                            algoexplorerwalletamount3 = (data42071[0].amount / 1000000);   
                            algoexplorerwalletround3 = data42071[0].round; 
                            algoexplorerwallettype3 = data42071[0].type;      
                            algoexplorerwalletTXID3 = data42071[0].txid;   
                        }

                    if (urlalgowalletamountexplorer00 === element)
                    {                
                        //algoexplorerwalletfrom0 = "Binance";   
                        algoexplorerwalletamountinside0 = (data42071.amount / 1000000);   
                        //asatokenwalletarray[0] will be used later for identification                        
                    }
                    if (urlalgowalletamountexplorer01 === element)
                    {                
                        //algoexplorerwalletfrom1 = "Etc";   
                        algoexplorerwalletamountinside1 = (data42071.amount / 1000000); 
                        //asatokenwalletarray[1] will be used later for identification                         
                    }
                    if (urlalgowalletamountexplorer02 === element)
                    {                
                        //algoexplorerwalletfrom0 = "Etc";   
                        algoexplorerwalletamountinside2 = (data42071.amount / 1000000);   
                        //asatokenwalletarray[2] will be used later for identification                        
                    }
                    if (urlalgowalletamountexplorer03 === element)
                    {                
                        //algoexplorerwalletfrom0 = "Etc";   
                        algoexplorerwalletamountinside3 = (data42071.amount / 1000000);  
                        //asatokenwalletarray[3] will be used later for identification                        
                    }

                }
    
            });  
        };   

        for (const element of c) { // You can use `let` instead of `const` if you like
            //console.log(element);
            getJSON(element, async function(err, data42072) {
                if (err !== null) {
                    return $.getJSON(element);
                } else {
                    if (urlcoingecko00 === element) {
                        coingeckoname0 = 'United States Dollar';   
                        coingeckoprice0 = data42072.market_data.current_price['usd'];     
                        coingeckousdprice0 = (1 / data42072.market_data.current_price['usd']);
                        coingeckopricechange24h0 = data42072.market_data.price_change_percentage_24h*(-1);            
                        coingeckopricechange7d0 = data42072.market_data.price_change_percentage_7d*(-1);    
                        coingeckopricechange30d0 = data42072.market_data.price_change_percentage_30d*(-1);  
                        coingeckopricechange1y0 = data42072.market_data.price_change_percentage_1y*(-1);   
                    }
                    if (urlcoingecko01 === element) {
                        coingeckoname1 = data42072.name;   
                        coingeckoprice1 = (data42072.market_data.current_price['usd'] / coingeckoprice0);     
                        coingeckopricechange24h1 = data42072.market_data.price_change_percentage_24h - coingeckopricechange24h0;            
                        coingeckopricechange7d1 = data42072.market_data.price_change_percentage_7d - coingeckopricechange7d0;    
                        coingeckopricechange30d1 = data42072.market_data.price_change_percentage_30d - coingeckopricechange30d0;  
                        coingeckopricechange1y1 = data42072.market_data.price_change_percentage_1y - coingeckopricechange1y0;   
                    }
                    if (urlcoingecko02 === element) {
                        coingeckoname2 = data42072.name;   
                        coingeckoprice2 = (data42072.market_data.current_price['usd'] / coingeckoprice0);     
                        coingeckopricechange24h2 = data42072.market_data.price_change_percentage_24h - coingeckopricechange24h0;            
                        coingeckopricechange7d2 = data42072.market_data.price_change_percentage_7d - coingeckopricechange7d0;    
                        coingeckopricechange30d2 = data42072.market_data.price_change_percentage_30d - coingeckopricechange30d0; 
                        coingeckopricechange1y2 = data42072.market_data.price_change_percentage_1y - coingeckopricechange1y0;   
                    }
                    if (urlcoingecko03 === element) {
                        coingeckoname3 = data42072.name;   
                        coingeckoprice3 = (data42072.market_data.current_price['usd'] / coingeckoprice0);     
                        coingeckopricechange24h3 = data42072.market_data.price_change_percentage_24h - coingeckopricechange24h0;            
                        coingeckopricechange7d3 = data42072.market_data.price_change_percentage_7d - coingeckopricechange7d0;     
                        coingeckopricechange30d3 = data42072.market_data.price_change_percentage_30d - coingeckopricechange30d0; 
                        coingeckopricechange1y3 = data42072.market_data.price_change_percentage_1y - coingeckopricechange1y0;    
                    }
                                                 
                                        
                }
    
            });  
        };        
        
        //i realize this part of the code is programatically absurd but i'm just not quite good enough yet to figure out another solution
        //if you know a better way plz help me here and make this less cringe     
        //ideas: call the below (minus the shell of a getJSON chain) at the end of the above stuff   

        getJSON(urlalgoexplorerunused07, async function(err, dataunused7) {
            if (err !== null) {
                return $.getJSON(urlalgoexplorerunused07);
            } else { 
                getJSON(urlalgoexplorerunused06, async function(err, dataunused6) {
                    if (err !== null) {
                        return $.getJSON(urlalgoexplorerunused06);
                    } else { 
                        getJSON(urlalgoexplorerunused05, async function(err, dataunused5) {
                            if (err !== null) {
                                return $.getJSON(urlalgoexplorerunused05);
                            } else {              
                                getJSON(urlalgoexplorerunused04, async function(err, dataunused4) {
                                    if (err !== null) {
                                        return $.getJSON(urlalgoexplorerunused04);
                                    } else { 
                                        getJSON(urlalgoexplorerunused03, async function(err, dataunused3) {
                                            if (err !== null) {
                                                return $.getJSON(urlalgoexplorerunused03);
                                            } else { 
                                                getJSON(urlalgoexplorerunused02, async function(err, dataunused2) {
                                                    if (err !== null) {
                                                        return $.getJSON(urlalgoexplorerunused02);
                                                    } else { 
                                                        getJSON(urlalgoexplorerunused01, async function(err, dataunused1) {
                                                            if (err !== null) {
                                                                return $.getJSON(urlalgoexplorerunused01);
                                                            } else { 
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

                                                                        /*function drawChart() {

                                                                            var datatable = {"rows": [{"c": [{"v": 0}, {"v": algoexplorerwalletamount0_0}]}, 
                                                                            {"c": [{"v": 1}, {"v": algoexplorerwalletamount0_1}]}, 
                                                                            {"c": [{"v": 2}, {"v": algoexplorerwalletamount0_2}]}, 
                                                                            {"c": [{"v": 3}, {"v": algoexplorerwalletamount0_3}]}, 
                                                                            {"c": [{"v": 4}, {"v": algoexplorerwalletamount0_4}]}, 
                                                                            {"c": [{"v": 5}, {"v": algoexplorerwalletamount0_5}]}, 
                                                                            {"c": [{"v": 6}, {"v": algoexplorerwalletamount0_6}]}, 
                                                                            {"c": [{"v": 7}, {"v": algoexplorerwalletamount0_7}]}, 
                                                                            {"c": [{"v": 8}, {"v": algoexplorerwalletamount0_8}]}, 
                                                                            {"c": [{"v": 9}, {"v": algoexplorerwalletamount0_9}]} ], "cols": [{"type": "number", "label": "Wallet #"}, {"type": "number", "label": "TX Amount"}]}
                                                                            // Create our data table out of JSON data loaded from server.
                                                                            var data = new google.visualization.DataTable(datatable);
                                                                            // Instantiate and draw our chart, passing in some options.
                                                                            var chart = new google.visualization.LineChart(document.getElementById('chart_div2'));
                                                                            
                                                                            chart.draw(data, options);
                                                                            

                                                                            var options = {
                                                                                title: 'Binance Wallet TX Characterization',
                                                                                chartArea: {width: '50%'},
                                                                                animation: {
                                                                                    duration: 1000
                                                                                },
                                                                                hAxis: {
                                                                                title: 'Total Amount',
                                                                                minValue: 0
                                                                                },
                                                                                vAxis: {
                                                                                title: 'TX #'
                                                                                }
                                                                            };

                                                                            $(window).resize(function() {
                                                                                chart.draw(data, options);
                                                                            });


                                                                            };*/

                                                                        function drawVisualization() {
                                                                            // Create and populate the data table.
                                                                            var data = google.visualization.arrayToDataTable([
                                                                                ['Transactions', '1st TX', '2nd TX', '3rd TX', '4th TX', '5th TX', '6th TX', '7th TX', '8th TX', '9th TX', '10th TX'],
                                                                                ['Total Amount', algoexplorerwalletamount0_0, algoexplorerwalletamount0_1, algoexplorerwalletamount0_2, algoexplorerwalletamount0_3, algoexplorerwalletamount0_4, algoexplorerwalletamount0_5, algoexplorerwalletamount0_6, algoexplorerwalletamount0_7, algoexplorerwalletamount0_8, algoexplorerwalletamount0_9]
                                                                            ]);                                                                                
                                                                            
                                                                            // Create and draw the visualization.
                                                                            var chart = new google.visualization.ColumnChart(document.getElementById('visualization'));
                                                                            
                                                                            var options = {
                                                                                title:"Binance Wallet TX Characterization",
                                                                                chartArea: {width: '50%'},
                                                                                hAxis: {
                                                                                    title: "Total Amount",
                                                                                    minValue: 0
                                                                                },
                                                                                animation: {
                                                                                    duration: 1000
                                                                                },
                                                                                vAxis: {                                                                                        
                                                                                    title: 'TX #'
                                                                                }
                                                                            };                                                                                
                                                                            
                                                                            chart.draw(data, options);
                                                                            
                                                                            // you can handle the resizing here - no need to recreate your data and charts from scratch
                                                                            $(window).resize(function() {
                                                                                chart.draw(data, options);
                                                                            });
                                                                        };

                                                                            google.load('visualization', {packages: ['corechart'], callback: drawVisualization});         

                                                                            google.charts.setOnLoadCallback(drawVisualization);
                                                                            //google.charts.setOnLoadCallback(drawChart);
                                                                            google.charts.setOnLoadCallback(drawChart4);
                                                                      
                                                                            function drawChart4() {
                                                                      
                                                                              var data = google.visualization.arrayToDataTable([
                                                                                ['Transaction', 'Amount of Algorand'],
                                                                                ['1',     algoexplorerwalletamount0_0],
                                                                                ['2',      algoexplorerwalletamount0_1],
                                                                                ['3',  algoexplorerwalletamount0_2],
                                                                                ['4', algoexplorerwalletamount0_3],
                                                                                ['5',    algoexplorerwalletamount0_4],
                                                                                ['6',    algoexplorerwalletamount0_5],
                                                                                ['7',    algoexplorerwalletamount0_6],
                                                                                ['8',    algoexplorerwalletamount0_7],
                                                                                ['9',    algoexplorerwalletamount0_8],
                                                                                ['10',    algoexplorerwalletamount0_9]
                                                                              ]);
                                                                      
                                                                              var options222 = {
                                                                                title:"Binance Wallet TX Characterization",
                                                                                chartArea: {width: '50%'},
                                                                                animation: {
                                                                                    duration: 1000
                                                                                },
                                                                                hAxis: {
                                                                                    title: 'Amount',
                                                                                    minValue: 0
                                                                                    },
                                                                                    vAxis: {
                                                                                    title: 'Wallet TX'
                                                                                    }
                                                                              };
                                                                      
                                                                              var chart222 = new google.visualization.PieChart($('#piechart')[0]);
                                                                      
                                                                              chart222.draw(data, options222);

                                                                              $(window).resize(function() {
                                                                                    chart222.draw(data, options222);
                                                                                });
                                                                            };

                                                                            google.charts.load('current', {packages: ['corechart', 'bar']});
                                                                            
                                                                            google.charts.setOnLoadCallback(drawBasic);

                                                                            function drawBasic() {

                                                                                var data = google.visualization.arrayToDataTable([
                                                                                    ['TX #', 'Wallet Amount',],
                                                                                    ['TX #1', algoexplorerwalletamount0_0],
                                                                                    ['TX #2', algoexplorerwalletamount0_1],
                                                                                    ['TX #3', algoexplorerwalletamount0_2],
                                                                                    ['TX #4', algoexplorerwalletamount0_3],
                                                                                    ['TX #5', algoexplorerwalletamount0_4],
                                                                                    ['TX #6', algoexplorerwalletamount0_5],
                                                                                    ['TX #7', algoexplorerwalletamount0_6],
                                                                                    ['TX #8', algoexplorerwalletamount0_7],
                                                                                    ['TX #9', algoexplorerwalletamount0_8],
                                                                                    ['TX #10', algoexplorerwalletamount0_9]
                                                                                ]);

                                                                                var options = {
                                                                                    title: 'Binance Wallet TX Characterization',
                                                                                    chartArea: {width: '50%'},
                                                                                    animation: {
                                                                                        duration: 1000
                                                                                    },
                                                                                    hAxis: {
                                                                                    title: 'Total Amount',
                                                                                    minValue: 0
                                                                                    },
                                                                                    vAxis: {
                                                                                    title: 'TX #'
                                                                                    }
                                                                                };

                                                                                var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

                                                                                chart.draw(data, options);

                                                                                $(window).resize(function() {
                                                                                    chart.draw(data, options);
                                                                                });


                                                                                };
                                                                            
                                                                
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
                                                                            },
                                                                            {
                                                                                'Name': algoexplorername2,                                                
                                                                                'Index': algoexplorerindex2,
                                                                                'Unit Name': algoexplorerassetunitname2,
                                                                                'Default Frozen': algoexplorerdefaultfrozen2
                                                                            },
                                                                            {
                                                                                'Name': algoexplorername3,                                                
                                                                                'Index': algoexplorerindex3,
                                                                                'Unit Name': algoexplorerassetunitname3,
                                                                                'Default Frozen': algoexplorerdefaultfrozen3
                                                                            }
                                                                        ];
                                                                
                                                                        var jsObj2 = [
                                                                            {
                                                                                'Name': algoexplorername0,         
                                                                                'Index': algoexplorerindex0,             
                                                                                'Circulating Supply': algoexplorercirculatingsupply0,
                                                                                'Total': algoexplorertotal0,
                                                                                'Decimals': algoexplorerdecimals0,
                                                                                'Creation TX': algoexplorercreationtxid0
                                                                            },
                                                                            {
                                                                                'Name': algoexplorername1,         
                                                                                'Index': algoexplorerindex1,             
                                                                                'Circulating Supply': algoexplorercirculatingsupply1,
                                                                                'Total': algoexplorertotal1,
                                                                                'Decimals': algoexplorerdecimals1,
                                                                                'Creation TX': algoexplorercreationtxid1
                                                                            },
                                                                            {
                                                                                'Name': algoexplorername2,         
                                                                                'Index': algoexplorerindex2,             
                                                                                'Circulating Supply': algoexplorercirculatingsupply2,
                                                                                'Total': algoexplorertotal2,
                                                                                'Decimals': algoexplorerdecimals2,
                                                                                'Creation TX': algoexplorercreationtxid2
                                                                            },
                                                                            {
                                                                                'Name': algoexplorername3,         
                                                                                'Index': algoexplorerindex3,             
                                                                                'Circulating Supply': algoexplorercirculatingsupply3,
                                                                                'Total': algoexplorertotal3,
                                                                                'Decimals': algoexplorerdecimals3,
                                                                                'Creation TX': algoexplorercreationtxid3
                                                                            }
                                                                        ];
                                                                
                                                                        var jsObj3 = [
                                                                            {
                                                                                'Name': coingeckoname0,                      
                                                                                'Algo Price': coingeckousdprice0,
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
                                                                                'News Title': newstitle0,   
                                                                                'News Publish Date': newspubdat0,      
                                                                                'News Link': newslink0
                                                                            },
                                                                            {
                                                                                'News Title': newstitle1,   
                                                                                'News Publish Date': newspubdat1,      
                                                                                'News Link': newslink1
                                                                            },
                                                                            {
                                                                                'News Title': newstitle2,   
                                                                                'News Publish Date': newspubdat2,      
                                                                                'News Link': newslink2
                                                                            },
                                                                            {
                                                                                'News Title': newstitle3,   
                                                                                'News Publish Date': newspubdat3,      
                                                                                'News Link': newslink3
                                                                            },
                                                                            {
                                                                                'News Title': newstitle4,   
                                                                                'News Publish Date': newspubdat4,      
                                                                                'News Link': newslink4
                                                                            },
                                                                            {
                                                                                'News Title': newstitle5,   
                                                                                'News Publish Date': newspubdat5,      
                                                                                'News Link': newslink5
                                                                            },
                                                                            {
                                                                                'News Title': newstitle6,   
                                                                                'News Publish Date': newspubdat6,      
                                                                                'News Link': newslink6
                                                                            },
                                                                            {
                                                                                'News Title': newstitle7,   
                                                                                'News Publish Date': newspubdat7,      
                                                                                'News Link': newslink7
                                                                            },
                                                                            {
                                                                                'News Title': newstitle8,   
                                                                                'News Publish Date': newspubdat8,      
                                                                                'News Link': newslink8
                                                                            },
                                                                            {
                                                                                'News Title': newstitle9,   
                                                                                'News Publish Date': newspubdat9,      
                                                                                'News Link': newslink9
                                                                            },
                                                                
                                                                        ];          
                                                                
                                                                        var jsObj5 = [
                                                                            {
                                                                                'Wallet From': algoexplorerwalletfrom0,    
                                                                                'Amount': algoexplorerwalletamount0_0,
                                                                                //'Asset ID': algoexplorerwalletassetID0, 
                                                                                'Round': algoexplorerwalletround0_0, 
                                                                                'TX Type': algoexplorerwallettype0_0,
                                                                                'TX ID': algoexplorerwalletTXID0_0                               
                                                                                },
                                                                                {
                                                                                'Wallet From': algoexplorerwalletfrom0,    
                                                                                'Amount': algoexplorerwalletamount0_1,
                                                                                //'Asset ID': algoexplorerwalletassetID1, 
                                                                                'Round': algoexplorerwalletround0_1, 
                                                                                'TX Type': algoexplorerwallettype0_1,
                                                                                'TX ID': algoexplorerwalletTXID0_1                               
                                                                                },
                                                                                {
                                                                                'Wallet From': algoexplorerwalletfrom0,    
                                                                                'Amount': algoexplorerwalletamount0_2,
                                                                                //'Asset ID': algoexplorerwalletassetID2, 
                                                                                'Round': algoexplorerwalletround0_2, 
                                                                                'TX Type': algoexplorerwallettype0_2,
                                                                                'TX ID': algoexplorerwalletTXID0_2                               
                                                                                },
                                                                                {
                                                                                'Wallet From': algoexplorerwalletfrom0,    
                                                                                'Amount': algoexplorerwalletamount0_3,
                                                                                //'Asset ID': algoexplorerwalletassetID3, 
                                                                                'Round': algoexplorerwalletround0_3, 
                                                                                'TX Type': algoexplorerwallettype0_3,
                                                                                'TX ID': algoexplorerwalletTXID0_3                               
                                                                                },
                                                                                {
                                                                                'Wallet From': algoexplorerwalletfrom0,    
                                                                                'Amount': algoexplorerwalletamount0_4,
                                                                                //'Asset ID': algoexplorerwalletassetID4, 
                                                                                'Round': algoexplorerwalletround0_4, 
                                                                                'TX Type': algoexplorerwallettype0_4,
                                                                                'TX ID': algoexplorerwalletTXID0_4                               
                                                                                },
                                                                                {
                                                                                'Wallet From': algoexplorerwalletfrom0,    
                                                                                'Amount': algoexplorerwalletamount0_5,
                                                                                //'Asset ID': algoexplorerwalletassetID5, 
                                                                                'Round': algoexplorerwalletround0_5, 
                                                                                'TX Type': algoexplorerwallettype0_5,
                                                                                'TX ID': algoexplorerwalletTXID0_5                               
                                                                                },
                                                                                {
                                                                                'Wallet From': algoexplorerwalletfrom0,    
                                                                                'Amount': algoexplorerwalletamount0_6,
                                                                                //'Asset ID': algoexplorerwalletassetID6, 
                                                                                'Round': algoexplorerwalletround0_6, 
                                                                                'TX Type': algoexplorerwallettype0_6,
                                                                                'TX ID': algoexplorerwalletTXID0_6                               
                                                                                },
                                                                                {
                                                                                'Wallet From': algoexplorerwalletfrom0,    
                                                                                'Amount': algoexplorerwalletamount0_7,
                                                                                //'Asset ID': algoexplorerwalletassetID7, 
                                                                                'Round': algoexplorerwalletround0_7, 
                                                                                'TX Type': algoexplorerwallettype0_7,
                                                                                'TX ID': algoexplorerwalletTXID0_7                               
                                                                                },
                                                                                {
                                                                                'Wallet From': algoexplorerwalletfrom0,    
                                                                                'Amount': algoexplorerwalletamount0_8,
                                                                                //'Asset ID': algoexplorerwalletassetID8, 
                                                                                'Round': algoexplorerwalletround0_8, 
                                                                                'TX Type': algoexplorerwallettype0_8,
                                                                                'TX ID': algoexplorerwalletTXID0_8                               
                                                                                },
                                                                                {
                                                                                'Wallet From': algoexplorerwalletfrom0,    
                                                                                'Amount': algoexplorerwalletamount0_9,
                                                                                //'Asset ID': algoexplorerwalletassetID9, 
                                                                                'Round': algoexplorerwalletround0_9, 
                                                                                'TX Type': algoexplorerwallettype0_9,
                                                                                'TX ID': algoexplorerwalletTXID0_9                               
                                                                                },
                                                                                
                                                                                {
                                                                                'Wallet From': algoexplorerwalletfrom1,    
                                                                                'Amount': algoexplorerwalletamount1_0,
                                                                                //'Asset ID': algoexplorerwalletassetID0, 
                                                                                'Round': algoexplorerwalletround1_0, 
                                                                                'TX Type': algoexplorerwallettype1_0,
                                                                                'TX ID': algoexplorerwalletTXID1_0                               
                                                                                },
                                                                                {
                                                                                'Wallet From': algoexplorerwalletfrom1,    
                                                                                'Amount': algoexplorerwalletamount1_1,
                                                                                //'Asset ID': algoexplorerwalletassetID1, 
                                                                                'Round': algoexplorerwalletround1_1, 
                                                                                'TX Type': algoexplorerwallettype1_1,
                                                                                'TX ID': algoexplorerwalletTXID1_1                               
                                                                                },
                                                                                {
                                                                                'Wallet From': algoexplorerwalletfrom1,    
                                                                                'Amount': algoexplorerwalletamount1_2,
                                                                                //'Asset ID': algoexplorerwalletassetID2, 
                                                                                'Round': algoexplorerwalletround1_2, 
                                                                                'TX Type': algoexplorerwallettype1_2,
                                                                                'TX ID': algoexplorerwalletTXID1_2                               
                                                                                },
                                                                                {
                                                                                'Wallet From': algoexplorerwalletfrom1,    
                                                                                'Amount': algoexplorerwalletamount1_3,
                                                                                //'Asset ID': algoexplorerwalletassetID3, 
                                                                                'Round': algoexplorerwalletround1_3, 
                                                                                'TX Type': algoexplorerwallettype1_3,
                                                                                'TX ID': algoexplorerwalletTXID1_3                               
                                                                                },
                                                                                {
                                                                                'Wallet From': algoexplorerwalletfrom1,    
                                                                                'Amount': algoexplorerwalletamount1_4,
                                                                                //'Asset ID': algoexplorerwalletassetID4, 
                                                                                'Round': algoexplorerwalletround1_4, 
                                                                                'TX Type': algoexplorerwallettype1_4,
                                                                                'TX ID': algoexplorerwalletTXID1_4                               
                                                                                },
                                                                                {
                                                                                'Wallet From': algoexplorerwalletfrom1,    
                                                                                'Amount': algoexplorerwalletamount1_5,
                                                                                //'Asset ID': algoexplorerwalletassetID5, 
                                                                                'Round': algoexplorerwalletround1_5, 
                                                                                'TX Type': algoexplorerwallettype1_5,
                                                                                'TX ID': algoexplorerwalletTXID1_5                               
                                                                                },
                                                                                {
                                                                                'Wallet From': algoexplorerwalletfrom1,    
                                                                                'Amount': algoexplorerwalletamount1_6,
                                                                                //'Asset ID': algoexplorerwalletassetID6, 
                                                                                'Round': algoexplorerwalletround1_6, 
                                                                                'TX Type': algoexplorerwallettype1_6,
                                                                                'TX ID': algoexplorerwalletTXID1_6                               
                                                                                },
                                                                                {
                                                                                'Wallet From': algoexplorerwalletfrom1,    
                                                                                'Amount': algoexplorerwalletamount1_7,
                                                                                //'Asset ID': algoexplorerwalletassetID7, 
                                                                                'Round': algoexplorerwalletround1_7, 
                                                                                'TX Type': algoexplorerwallettype1_7,
                                                                                'TX ID': algoexplorerwalletTXID1_7                               
                                                                                },
                                                                                {
                                                                                'Wallet From': algoexplorerwalletfrom1,    
                                                                                'Amount': algoexplorerwalletamount1_8,
                                                                                //'Asset ID': algoexplorerwalletassetID8, 
                                                                                'Round': algoexplorerwalletround1_8, 
                                                                                'TX Type': algoexplorerwallettype1_8,
                                                                                'TX ID': algoexplorerwalletTXID1_8                               
                                                                                },
                                                                                {
                                                                                'Wallet From': algoexplorerwalletfrom1,    
                                                                                'Amount': algoexplorerwalletamount1_9,
                                                                                //'Asset ID': algoexplorerwalletassetID9, 
                                                                                'Round': algoexplorerwalletround1_9, 
                                                                                'TX Type': algoexplorerwallettype1_9,
                                                                                'TX ID': algoexplorerwalletTXID1_9                               
                                                                                },
                                                                                    
                                                                            {
                                                                            'Wallet From': algoexplorerwalletfrom2,    
                                                                            'Amount': algoexplorerwalletamount2_0,
                                                                            //'Asset ID': algoexplorerwalletassetID0, 
                                                                            'Round': algoexplorerwalletround2_0, 
                                                                            'TX Type': algoexplorerwallettype2_0,
                                                                            'TX ID': algoexplorerwalletTXID2_0                               
                                                                            },
                                                                            {
                                                                            'Wallet From': algoexplorerwalletfrom2,    
                                                                            'Amount': algoexplorerwalletamount2_1,
                                                                            //'Asset ID': algoexplorerwalletassetID0, 
                                                                            'Round': algoexplorerwalletround2_1, 
                                                                            'TX Type': algoexplorerwallettype2_1,
                                                                            'TX ID': algoexplorerwalletTXID2_1                               
                                                                            },
                                                                            {
                                                                            'Wallet From': algoexplorerwalletfrom2,    
                                                                            'Amount': algoexplorerwalletamount2_2,
                                                                            //'Asset ID': algoexplorerwalletassetID0, 
                                                                            'Round': algoexplorerwalletround2_2, 
                                                                            'TX Type': algoexplorerwallettype2_2,
                                                                            'TX ID': algoexplorerwalletTXID2_2                               
                                                                            },
                                                                            {
                                                                            'Wallet From': algoexplorerwalletfrom2,    
                                                                            'Amount': algoexplorerwalletamount2_3,
                                                                            //'Asset ID': algoexplorerwalletassetID0, 
                                                                            'Round': algoexplorerwalletround2_3, 
                                                                            'TX Type': algoexplorerwallettype2_3,
                                                                            'TX ID': algoexplorerwalletTXID2_3                               
                                                                            },
                                                                            {
                                                                            'Wallet From': algoexplorerwalletfrom2,    
                                                                            'Amount': algoexplorerwalletamount2_4,
                                                                            //'Asset ID': algoexplorerwalletassetID0, 
                                                                            'Round': algoexplorerwalletround2_4, 
                                                                            'TX Type': algoexplorerwallettype2_4,
                                                                            'TX ID': algoexplorerwalletTXID2_4                               
                                                                            },
                                                                            {
                                                                            'Wallet From': algoexplorerwalletfrom2,    
                                                                            'Amount': algoexplorerwalletamount2_5,
                                                                            //'Asset ID': algoexplorerwalletassetID0, 
                                                                            'Round': algoexplorerwalletround2_5, 
                                                                            'TX Type': algoexplorerwallettype2_5,
                                                                            'TX ID': algoexplorerwalletTXID2_5                               
                                                                            },
                                                                            {
                                                                            'Wallet From': algoexplorerwalletfrom2,    
                                                                            'Amount': algoexplorerwalletamount2_6,
                                                                            //'Asset ID': algoexplorerwalletassetID0, 
                                                                            'Round': algoexplorerwalletround2_6, 
                                                                            'TX Type': algoexplorerwallettype2_6,
                                                                            'TX ID': algoexplorerwalletTXID2_6                               
                                                                            },
                                                                            {
                                                                            'Wallet From': algoexplorerwalletfrom2,    
                                                                            'Amount': algoexplorerwalletamount2_7,
                                                                            //'Asset ID': algoexplorerwalletassetID0, 
                                                                            'Round': algoexplorerwalletround2_7, 
                                                                            'TX Type': algoexplorerwallettype2_7,
                                                                            'TX ID': algoexplorerwalletTXID2_7                               
                                                                            },
                                                                            {
                                                                            'Wallet From': algoexplorerwalletfrom2,    
                                                                            'Amount': algoexplorerwalletamount2_8,
                                                                            //'Asset ID': algoexplorerwalletassetID0, 
                                                                            'Round': algoexplorerwalletround2_8, 
                                                                            'TX Type': algoexplorerwallettype2_8,
                                                                            'TX ID': algoexplorerwalletTXID2_8                               
                                                                            },
                                                                            {
                                                                            'Wallet From': algoexplorerwalletfrom2,    
                                                                            'Amount': algoexplorerwalletamount2_9,
                                                                            //'Asset ID': algoexplorerwalletassetID0, 
                                                                            'Round': algoexplorerwalletround2_9, 
                                                                            'TX Type': algoexplorerwallettype2_9,
                                                                            'TX ID': algoexplorerwalletTXID2_9                               
                                                                            },

                                                                            {
                                                                                'Wallet From': algoexplorerwalletfrom3,    
                                                                                'Amount': algoexplorerwalletamount3,
                                                                                //'Asset ID': algoexplorerwalletassetID0, 
                                                                                'Round': algoexplorerwalletround3, 
                                                                                'TX Type': algoexplorerwallettype3,
                                                                                'TX ID': algoexplorerwalletTXID3                               
                                                                            }
                                                                        ];

                                                                        var jsObj6 = [
                                                                            {
                                                                                'Wallet Name': algoexplorerwalletfrom0,    
                                                                                'Amount': algoexplorerwalletamountinside0,
                                                                                'Address': asatokenwalletarray[0]                            
                                                                            },
                                                                            {
                                                                                'Wallet Name': algoexplorerwalletfrom1,    
                                                                                'Amount': algoexplorerwalletamountinside1,
                                                                                'Address': asatokenwalletarray[1]                            
                                                                            },
                                                                            {
                                                                                'Wallet Name': algoexplorerwalletfrom2,    
                                                                                'Amount': algoexplorerwalletamountinside2,
                                                                                'Address': asatokenwalletarray[2]                            
                                                                            },
                                                                            {
                                                                                'Wallet Name': algoexplorerwalletfrom3,    
                                                                                'Amount': algoexplorerwalletamountinside3,
                                                                                'Address': asatokenwalletarray[3]                           
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
                                                                
                                                                        var exampleTable2 = $('#example2')
                                                                        .DataTable({
                                                                            data: jsObj1,
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
                                                                                text: 'Show All',
                                                                                action: function ( e, dt, button, config ) {
                                                                                    exampleTable2.rows().deselect();
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
                                                                                text: 'Show All',
                                                                                action: function ( e, dt, button, config ) {
                                                                                    exampleTable3.rows().deselect();
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
                                                                                text: 'Show All',
                                                                                action: function ( e, dt, button, config ) {
                                                                                    exampleTable4.rows().deselect();
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
                                                                                text: 'Show All',
                                                                                action: function ( e, dt, button, config ) {
                                                                                    exampleTable5.rows().deselect();
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
                                                                            "order": [[ 1, "desc" ]],
                                                                            paging: false,
                                                                            select: {
                                                                                style: 'multi'
                                                                            }, 
                                                                            rowReorder: true,
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
                                                                
                                                                        var exampleTable6 = $('#example6')
                                                                        .DataTable({
                                                                            data: jsObj5,
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
                                                                                    exampleTable6.rows().select();
                                                                                }
                                                                            },
                                                                            {
                                                                                text: 'Select None',
                                                                                action: function () {
                                                                                    exampleTable6.rows().deselect();
                                                                                }
                                                                            },
                                                                            {
                                                                                text: 'Show All',
                                                                                action: function ( e, dt, button, config ) {
                                                                                    exampleTable6.rows().deselect();
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
                                                                            "order": [[ 2, "desc" ]],
                                                                            paging: false,
                                                                            select: {
                                                                                style: 'multi'
                                                                            }, 
                                                                            rowReorder: true,
                                                                            //keys: true,
                                                                            'columns': [
                                                                                
                                                                                {
                                                                                    'data': 'Wallet From'
                                                                                },
                                                                                {
                                                                                    'data': 'Amount'
                                                                                }/*,
                                                                                {
                                                                                    'data': 'Asset ID'
                                                                                }*/,
                                                                                {
                                                                                    'data': 'Round'
                                                                                },
                                                                                {
                                                                                    'data': 'TX Type'
                                                                                },
                                                                                {
                                                                                    'data': 'TX ID',
                                                                                    "render": function(data, type, row, meta){
                                                                                        if(type === 'display'){
                                                                                            data = '<a target="_blank" rel="noopener noreferrer" href="https://algoexplorer.io/tx/' + data + '">' + data + '</a>';
                                                                                        }
                                                                            
                                                                                        return data;
                                                                                        }
                                                                                }                         
                                                                            ]
                                                                        });    

                                                                        var exampleTable7 = $('#example7')
                                                                        .DataTable({
                                                                            data: jsObj6,
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
                                                                                    exampleTable7.rows().select();
                                                                                }
                                                                            },
                                                                            {
                                                                                text: 'Select None',
                                                                                action: function () {
                                                                                    exampleTable7.rows().deselect();
                                                                                }
                                                                            },
                                                                            {
                                                                                text: 'Show All',
                                                                                action: function ( e, dt, button, config ) {
                                                                                    exampleTable7.rows().deselect();
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
                                                                            rowReorder: true,
                                                                            colReorder: true,
                                                                            "order": [[ 1, "desc" ]],
                                                                            paging: false,
                                                                            select: {
                                                                                style: 'multi'
                                                                            }, 
                                                                            rowReorder: true,
                                                                            //keys: true,
                                                                            'columns': [
                                                                                
                                                                                {
                                                                                    'data': 'Wallet Name'
                                                                                },
                                                                                {
                                                                                    'data': 'Amount'
                                                                                },
                                                                                {
                                                                                    'data': 'Address',
                                                                                    "render": function(data, type, row, meta){
                                                                                        if(type === 'display'){
                                                                                            data = '<a target="_blank" rel="noopener noreferrer" href="https://algoexplorer.io/address/' + data + '">' + data + '</a>';
                                                                                        }
                                                                            
                                                                                        return data;
                                                                                        }
                                                                                }                         
                                                                            ]
                                                                        });    
                                                                    }
                                                                });  
                                                            }
                                                        });  
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });     
                
                            }
                        });
        
                    }
                });

            }
        });                 
        
        //construction site code above
        
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

        function sleep(milliseconds) {
            const date = Date.now();
            let currentDate = null;
            do {
                currentDate = Date.now();
            } while (currentDate - date < milliseconds);
        }

    });