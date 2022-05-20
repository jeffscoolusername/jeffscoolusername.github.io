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

    var url0 = algoexplorerapi + '397111682';var url1 = algoexplorerapi + '353409462';var url2 = algoexplorerapi + '430838314';
    var url3 = algoexplorerapi + '226265212';var url4 = algoexplorerapi + '555540865';var url5 = algoexplorerapi + '426526699';
    var url6 = algoexplorerapi + '393495312';var url7 = algoexplorerapi + '305992851';var url8 = algoexplorerapi + '453816186';
    var url9 = algoexplorerapi + '457205263';var url10 = algoexplorerapi + '523683256';var url11 = algoexplorerapi + '447852812';
    var url12 = algoexplorerapi + '445905873';var url13 = algoexplorerapi + '310014962';var url14 = algoexplorerapi + '463554836';
    var url15 = algoexplorerapi + '227358511';var url16 = algoexplorerapi + '604643747';var url17 = algoexplorerapi + '446220964';
    var url18 = algoexplorerapi + '409604194';var url19 = algoexplorerapi + '466716175';var url20 = algoexplorerapi + '542132831';
    var url21 = algoexplorerapi + '397629052';var url22 = algoexplorerapi + '163650';var url23 = algoexplorerapi + '393537671';
    var url24 = algoexplorerapi + '540605589';var url25 = algoexplorerapi + '233939122';var url26 = algoexplorerapi + '470335962';
    var url27 = algoexplorerapi + '382781470';var url28 = algoexplorerapi + '469835031';var url29 = algoexplorerapi + '615093377';
    var url30 = algoexplorerapi + '473180477';var url31 = algoexplorerapi + '478549868';var url32 = algoexplorerapi + '401752010';
    var url33 = algoexplorerapi + '251014570';var url34 = algoexplorerapi + '342889824';var url35 = algoexplorerapi + '510337930';
    var url36 = algoexplorerapi + '498684064';var url37 = algoexplorerapi + '137020565';var url38 = algoexplorerapi + '402495345';
    var url39 = algoexplorerapi + '388592191';var url40 = algoexplorerapi + '297995609';var url41 = algoexplorerapi + '585221469';
    var url42 = algoexplorerapi + '571576867';var url43 = algoexplorerapi + '281003266';var url44 = algoexplorerapi + '435335235';
    var url45 = algoexplorerapi + '511491168';var url46 = algoexplorerapi + '230946361';var url47 = algoexplorerapi + '319473667';
    var url48 = algoexplorerapi + '601894079';var url49 = algoexplorerapi + '470842789';var url50 = algoexplorerapi + '391379500';
    var url51 = algoexplorerapi + '591601798';var url52 = algoexplorerapi + '393155456';

    var unitname0 = 'loading';
    var index0 = 'loading';
    var createdatround0 = 'loading';
    var name0 = 'loading';
    var txcounter0 = 'loading';
    var supply0 = 'loading';
    var total0 = 'loading';
    var circulation0 = 'loading';    

    var unitname1 = 'loading';
    var index1 = 'loading';
    var createdatround1 = 'loading';
    var name1 = 'loading';
    var txcounter1 = 'loading';
    var supply1 = 'loading';
    var total1 = 'loading';
    var circulation1 = 'loading';    

    var unitname2 = 'loading';
    var index2 = 'loading';
    var createdatround2 = 'loading';
    var name2 = 'loading';
    var txcounter2 = 'loading';
    var supply2 = 'loading';
    var total2 = 'loading';
    var circulation2 = 'loading';       

    var counter = 0;
   
    getJSON(url0, async function(err, data0) { 
        if (err !== null) {
            return $.getJSON(url0); 
        } else {
        unitname0 = data0.asset.params['unit-name'];
        index0 = data0.asset['index'];
        createdatround0 = data0.asset['created-at-round'];
        name0 = data0.asset.params['name'];
        txcounter0 = data0.asset['asset-tx-counter'];
        supply0 = data0.asset.params['circulating-supply'];
        total0 = data0.asset.params['total'];
        circulation0 =((data0.asset.params['circulating-supply']/data0.asset.params['total'])*100).toFixed(6);
        counter++;
        }      
    });
    getJSON(url1, async function(err, data1) { 
        if (err !== null) {
            return $.getJSON(url1); 
        } else {
        unitname1 = data1.asset.params['unit-name'];
        index1 = data1.asset['index'];
        createdatround1 = data1.asset['created-at-round'];
        name1 = data1.asset.params['name'];
        txcounter1 = data1.asset['asset-tx-counter'];
        supply1 = data1.asset.params['circulating-supply'];
        total1 = data1.asset.params['total'];
        circulation1 =((data1.asset.params['circulating-supply']/data1.asset.params['total'])*100).toFixed(6);
        counter++;
        }      
    });
    getJSON(url2, async function(err, data2) { 
        if (err !== null) {
            return $.getJSON(url2); 
        } else {
        unitname2 = data2.asset.params['unit-name'];
        index2 = data2.asset['index'];
        createdatround2 = data2.asset['created-at-round'];
        name2 = data2.asset.params['name'];
        txcounter2 = data2.asset['asset-tx-counter'];
        supply2 = data2.asset.params['circulating-supply'];
        total2 = data2.asset.params['total'];
        circulation2 =((data2.asset.params['circulating-supply']/data2.asset.params['total'])*100).toFixed(6);
        counter++;
        }      
    });

    /*window.setInterval( function(){
        if (counter == 3) {
            return $.getJSON(url3); 
        }
      },10)*/
    getJSON(url3, function(err, data3) { 

        window.setInterval( function(){
            if (counter == 3) {
        //console.log(counter);

    var jsObj = [
      {'Element':'0', 'Unit Name': unitname0, 'ID': index0, 'Created at Round': createdatround0,      
      'Name': name0, 'Transactions Counter': txcounter0, 'Circulating Supply': supply0,
      'Total Supply': total0, '% in Circulation': circulation0 + '%'},
      {'Element':'1', 'Unit Name': unitname1, 'ID': index1, 'Created at Round': createdatround1,      
      'Name': name1, 'Transactions Counter': txcounter1, 'Circulating Supply': supply1,
      'Total Supply': total1, '% in Circulation': circulation1 + '%'},
      {'Element':'2', 'Unit Name': unitname2, 'ID': index2, 'Created at Round': createdatround2,      
      'Name': name2, 'Transactions Counter': txcounter2, 'Circulating Supply': supply2,
      'Total Supply': total2, '% in Circulation': circulation2 + '%'},
      {'Element':'3', 'Unit Name': data3.asset.params['unit-name'], 'ID': data3.asset['index'], 'Created at Round': data3.asset['created-at-round'], 
      'Name': data3.asset.params['name'], 'Transactions Counter': data3.asset['asset-tx-counter'], 'Circulating Supply': data3.asset.params['circulating-supply'],
      'Total Supply': data3.asset.params['total'], '% in Circulation': ((data3.asset.params['circulating-supply']/data3.asset.params['total'])*100).toFixed(6) + '%'}];            
      
      //modified array is accessible here

    var exampleTable = $('#example')
        .DataTable({
            data: jsObj,
            colReorder: true,
            paging: false,
            keys: true,
            //fixedHeader: true,
            'columns': [
                { 'data': 'Unit Name' },
                { 'data': 'ID' },
                { 'data': 'Created at Round' },
                { 'data': 'Name' },
                { 'data': 'Transactions Counter' },
                { 'data': 'Circulating Supply' },
                { 'data': 'Total Supply' },
                { 'data': '% in Circulation' }
            ]
        }); 
        return;
    }
  },10)

    });

});