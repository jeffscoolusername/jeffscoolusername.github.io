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

    var unitname3 = 'loading';
    var index3 = 'loading';
    var createdatround3 = 'loading';
    var name3 = 'loading';
    var txcounter3 = 'loading';
    var supply3 = 'loading';
    var total3 = 'loading';
    var circulation3 = 'loading';   

    var unitname4 = 'loading';
    var index4 = 'loading';
    var createdatround4 = 'loading';
    var name4 = 'loading';
    var txcounter4 = 'loading';
    var supply4 = 'loading';
    var total4 = 'loading';
    var circulation4 = 'loading';   
    
    var unitname5 = 'loading';
    var index5 = 'loading';
    var createdatround5 = 'loading';
    var name5 = 'loading';
    var txcounter5 = 'loading';
    var supply5 = 'loading';
    var total5 = 'loading';
    var circulation5 = 'loading';   

    var unitname6 = 'loading';
    var index6 = 'loading';
    var createdatround6 = 'loading';
    var name6 = 'loading';
    var txcounter6 = 'loading';
    var supply6 = 'loading';
    var total6 = 'loading';
    var circulation6 = 'loading';   

    var unitname7 = 'loading';
    var index7 = 'loading';
    var createdatround7 = 'loading';
    var name7 = 'loading';
    var txcounter7 = 'loading';
    var supply7 = 'loading';
    var total7 = 'loading';
    var circulation7 = 'loading';   

    var unitname8 = 'loading';
    var index8 = 'loading';
    var createdatround8 = 'loading';
    var name8 = 'loading';
    var txcounter8 = 'loading';
    var supply8 = 'loading';
    var total8 = 'loading';
    var circulation8 = 'loading';   

    var unitname9 = 'loading';
    var index9 = 'loading';
    var createdatround9 = 'loading';
    var name9 = 'loading';
    var txcounter9 = 'loading';
    var supply9 = 'loading';
    var total9 = 'loading';
    var circulation9 = 'loading';   

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
    getJSON(url3, async function(err, data3) { 
        if (err !== null) {
            return $.getJSON(url3); 
        } else {
        unitname3 = data3.asset.params['unit-name'];
        index3 = data3.asset['index'];
        createdatround3 = data3.asset['created-at-round'];
        name3 = data3.asset.params['name'];
        txcounter3 = data3.asset['asset-tx-counter'];
        supply3 = data3.asset.params['circulating-supply'];
        total3 = data3.asset.params['total'];
        circulation3 =((data3.asset.params['circulating-supply']/data3.asset.params['total'])*100).toFixed(6);
        counter++;
        }      
    });
    getJSON(url4, async function(err, data4) { 
        if (err !== null) {
            return $.getJSON(url4); 
        } else {
        unitname4 = data4.asset.params['unit-name'];
        index4 = data4.asset['index'];
        createdatround4 = data4.asset['created-at-round'];
        name4 = data4.asset.params['name'];
        txcounter4 = data4.asset['asset-tx-counter'];
        supply4 = data4.asset.params['circulating-supply'];
        total4 = data4.asset.params['total'];
        circulation4 =((data4.asset.params['circulating-supply']/data4.asset.params['total'])*100).toFixed(6);
        counter++;
        }      
    });
    getJSON(url5, async function(err, data5) { 
        if (err !== null) {
            return $.getJSON(url5); 
        } else {
        unitname5 = data5.asset.params['unit-name'];
        index5 = data5.asset['index'];
        createdatround5 = data5.asset['created-at-round'];
        name5 = data5.asset.params['name'];
        txcounter5 = data5.asset['asset-tx-counter'];
        supply5 = data5.asset.params['circulating-supply'];
        total5 = data5.asset.params['total'];
        circulation5 =((data5.asset.params['circulating-supply']/data5.asset.params['total'])*100).toFixed(6);
        counter++;
        }      
    });
    getJSON(url6, async function(err, data6) { 
        if (err !== null) {
            return $.getJSON(url6); 
        } else {
        unitname6 = data6.asset.params['unit-name'];
        index6 = data6.asset['index'];
        createdatround6 = data6.asset['created-at-round'];
        name6 = data6.asset.params['name'];
        txcounter6 = data6.asset['asset-tx-counter'];
        supply6 = data6.asset.params['circulating-supply'];
        total6 = data6.asset.params['total'];
        circulation6 =((data6.asset.params['circulating-supply']/data6.asset.params['total'])*100).toFixed(6);
        counter++;
        }      
    });
    getJSON(url7, async function(err, data7) { 
        if (err !== null) {
            return $.getJSON(url7); 
        } else {
        unitname7 = data7.asset.params['unit-name'];
        index7 = data7.asset['index'];
        createdatround7 = data7.asset['created-at-round'];
        name7 = data7.asset.params['name'];
        txcounter7 = data7.asset['asset-tx-counter'];
        supply7 = data7.asset.params['circulating-supply'];
        total7 = data7.asset.params['total'];
        circulation7 =((data7.asset.params['circulating-supply']/data7.asset.params['total'])*100).toFixed(6);
        counter++;
        }      
    });
    getJSON(url8, async function(err, data8) { 
        if (err !== null) {
            return $.getJSON(url8); 
        } else {
        unitname8 = data8.asset.params['unit-name'];
        index8 = data8.asset['index'];
        createdatround8 = data8.asset['created-at-round'];
        name8 = data8.asset.params['name'];
        txcounter8 = data8.asset['asset-tx-counter'];
        supply8 = data8.asset.params['circulating-supply'];
        total8 = data8.asset.params['total'];
        circulation8 =((data8.asset.params['circulating-supply']/data8.asset.params['total'])*100).toFixed(6);
        counter++;
        }      
    });
    getJSON(url9, async function(err, data9) { 
        if (err !== null) {
            return $.getJSON(url9); 
        } else {
        unitname9 = data9.asset.params['unit-name'];
        index9 = data9.asset['index'];
        createdatround9 = data9.asset['created-at-round'];
        name9 = data9.asset.params['name'];
        txcounter9 = data9.asset['asset-tx-counter'];
        supply9 = data9.asset.params['circulating-supply'];
        total9 = data9.asset.params['total'];
        circulation9 =((data9.asset.params['circulating-supply']/data9.asset.params['total'])*100).toFixed(6);
        counter++;
        }      
    });

    /*window.setInterval( function(){
        if (counter == 3) {
            return $.getJSON(url3); 
        }
      },10)*/
    getJSON(url10, function(err, data10) { 

        window.setInterval( function(){
            if (counter == 10) {
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
      {'Element':'3', 'Unit Name': unitname3, 'ID': index3, 'Created at Round': createdatround3,      
      'Name': name3, 'Transactions Counter': txcounter3, 'Circulating Supply': supply3,
      'Total Supply': total3, '% in Circulation': circulation3 + '%'},
      {'Element':'4', 'Unit Name': unitname4, 'ID': index4, 'Created at Round': createdatround4,      
      'Name': name4, 'Transactions Counter': txcounter4, 'Circulating Supply': supply4,
      'Total Supply': total4, '% in Circulation': circulation4 + '%'},
      {'Element':'5', 'Unit Name': unitname5, 'ID': index5, 'Created at Round': createdatround5,      
      'Name': name5, 'Transactions Counter': txcounter5, 'Circulating Supply': supply5,
      'Total Supply': total5, '% in Circulation': circulation5 + '%'},
      {'Element':'6', 'Unit Name': unitname6, 'ID': index6, 'Created at Round': createdatround6,      
      'Name': name6, 'Transactions Counter': txcounter6, 'Circulating Supply': supply6,
      'Total Supply': total6, '% in Circulation': circulation6 + '%'},
      {'Element':'7', 'Unit Name': unitname7, 'ID': index7, 'Created at Round': createdatround7,      
      'Name': name7, 'Transactions Counter': txcounter7, 'Circulating Supply': supply7,
      'Total Supply': total7, '% in Circulation': circulation7 + '%'},
      {'Element':'8', 'Unit Name': unitname8, 'ID': index8, 'Created at Round': createdatround8,      
      'Name': name8, 'Transactions Counter': txcounter8, 'Circulating Supply': supply8,
      'Total Supply': total8, '% in Circulation': circulation8 + '%'},
      {'Element':'9', 'Unit Name': unitname9, 'ID': index9, 'Created at Round': createdatround9,      
      'Name': name9, 'Transactions Counter': txcounter9, 'Circulating Supply': supply9,
      'Total Supply': total9, '% in Circulation': circulation9 + '%'},
      {'Element':'10', 'Unit Name': data10.asset.params['unit-name'], 'ID': data10.asset['index'], 'Created at Round': data10.asset['created-at-round'], 
      'Name': data10.asset.params['name'], 'Transactions Counter': data10.asset['asset-tx-counter'], 'Circulating Supply': data10.asset.params['circulating-supply'],
      'Total Supply': data10.asset.params['total'], '% in Circulation': ((data10.asset.params['circulating-supply']/data10.asset.params['total'])*100).toFixed(6) + '%'}];            
      
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