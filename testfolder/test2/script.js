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
    var url33 = algoexplorerapi + '251014570';var url34 = algoexplorerapi + '342889824';var url35 = algoexplorerapi + '251014570';
    var url36 = algoexplorerapi + '498684064';var url37 = algoexplorerapi + '137020565';var url38 = algoexplorerapi + '402495345';
    var url39 = algoexplorerapi + '388592191';var url40 = algoexplorerapi + '297995609';var url41 = algoexplorerapi + '585221469';
    var url42 = algoexplorerapi + '571576867';var url43 = algoexplorerapi + '281003266';var url44 = algoexplorerapi + '435335235';
    var url45 = algoexplorerapi + '511491168';var url46 = algoexplorerapi + '511491168';var url47 = algoexplorerapi + '319473667';
    var url48 = algoexplorerapi + '601894079';var url49 = algoexplorerapi + '470842789';var url50 = algoexplorerapi + '391379500';
    var url51 = algoexplorerapi + '591601798';var url52 = algoexplorerapi + '393155456';
   
      getJSON(url0,
    function(err, data0) {getJSON(url1,function(err, data1) {getJSON(url2,function(err, data2) {getJSON(url3,function(err, data3) {getJSON(url4,
    function(err, data4) {getJSON(url5,function(err, data5) {getJSON(url6,function(err, data6) {getJSON(url7,function(err, data7) {getJSON(url8,
    function(err, data8) {getJSON(url9,function(err, data9) {getJSON(url10,function(err, data10) {getJSON(url11,function(err, data11) {getJSON(url12,
    function(err, data12) {getJSON(url13,function(err, data13) {getJSON(url14,function(err, data14) {getJSON(url15,function(err, data15) {getJSON(url16,
    function(err, data16) {getJSON(url17,function(err, data17) {getJSON(url18,function(err, data18) {getJSON(url19,function(err, data19) {getJSON(url20,
    function(err, data20) {getJSON(url21,function(err, data21) {getJSON(url22,function(err, data22) {getJSON(url23,function(err, data23) {getJSON(url24,
    function(err, data24) {getJSON(url25,function(err, data25) {getJSON(url26,function(err, data26) {getJSON(url27,function(err, data27) {getJSON(url28,
    function(err, data28) {getJSON(url29,function(err, data29) {getJSON(url30,function(err, data30) {getJSON(url31,function(err, data31) {getJSON(url32,
    function(err, data32) {getJSON(url33,function(err, data33) {getJSON(url34,function(err, data34) {getJSON(url35,function(err, data35) {getJSON(url36,
    function(err, data36) {getJSON(url37,function(err, data37) {getJSON(url38,function(err, data38) {getJSON(url39,function(err, data39) {getJSON(url40,
    function(err, data40) {getJSON(url41,function(err, data41) {getJSON(url42,function(err, data42) {getJSON(url43,function(err, data43) {getJSON(url44,
    function(err, data44) {getJSON(url45,function(err, data45) {getJSON(url46,function(err, data46) {getJSON(url47,function(err, data47) {getJSON(url48,
    function(err, data48) {getJSON(url49,function(err, data49) {getJSON(url50,function(err, data50) {getJSON(url51,function(err, data51) {getJSON(url52,
    function(err, data52) { 

    var jsObj = [
      {'Element':'0', 'Unit_Name': data0.asset.params['unit-name'], 'ID': data0.asset['index'], 'Created_at_Round': data0.asset['created-at-round'],      
      'Name': data0.asset.params['name'], 'TX_Counter': data0.asset['asset-tx-counter'], 'Circulating_Supply': data0.asset.params['circulating-supply']},
      {'Element':'1', 'Unit_Name': data1.asset.params['unit-name'], 'ID': data1.asset['index'], 'Created_at_Round': data1.asset['created-at-round'], 
      'Name': data1.asset.params['name'], 'TX_Counter': data1.asset['asset-tx-counter'], 'Circulating_Supply': data1.asset.params['circulating-supply']},
      {'Element':'2', 'Unit_Name': data2.asset.params['unit-name'], 'ID': data2.asset['index'], 'Created_at_Round': data2.asset['created-at-round'], 
      'Name': data2.asset.params['name'], 'TX_Counter': data2.asset['asset-tx-counter'], 'Circulating_Supply': data2.asset.params['circulating-supply']},
      {'Element':'3', 'Unit_Name': data3.asset.params['unit-name'], 'ID': data3.asset['index'], 'Created_at_Round': data3.asset['created-at-round'],
      'Name': data3.asset.params['name'], 'TX_Counter': data3.asset['asset-tx-counter'], 'Circulating_Supply': data3.asset.params['circulating-supply']},
      {'Element':'4', 'Unit_Name': data4.asset.params['unit-name'], 'ID': data4.asset['index'], 'Created_at_Round': data4.asset['created-at-round'], 
      'Name': data4.asset.params['name'], 'TX_Counter': data4.asset['asset-tx-counter'], 'Circulating_Supply': data4.asset.params['circulating-supply']},
      {'Element':'5', 'Unit_Name': data5.asset.params['unit-name'], 'ID': data5.asset['index'], 'Created_at_Round': data5.asset['created-at-round'], 
      'Name': data5.asset.params['name'], 'TX_Counter': data5.asset['asset-tx-counter'], 'Circulating_Supply': data5.asset.params['circulating-supply']},
      {'Element':'6', 'Unit_Name': data6.asset.params['unit-name'], 'ID': data6.asset['index'], 'Created_at_Round': data6.asset['created-at-round'], 
      'Name': data6.asset.params['name'], 'TX_Counter': data6.asset['asset-tx-counter'], 'Circulating_Supply': data6.asset.params['circulating-supply']},
      {'Element':'7', 'Unit_Name': data7.asset.params['unit-name'], 'ID': data7.asset['index'], 'Created_at_Round': data7.asset['created-at-round'], 
      'Name': data7.asset.params['name'], 'TX_Counter': data7.asset['asset-tx-counter'], 'Circulating_Supply': data7.asset.params['circulating-supply']},
      {'Element':'8', 'Unit_Name': data8.asset.params['unit-name'], 'ID': data8.asset['index'], 'Created_at_Round': data8.asset['created-at-round'], 
      'Name': data8.asset.params['name'], 'TX_Counter': data8.asset['asset-tx-counter'], 'Circulating_Supply': data8.asset.params['circulating-supply']},
      {'Element':'9', 'Unit_Name': data9.asset.params['unit-name'], 'ID': data9.asset['index'], 'Created_at_Round': data9.asset['created-at-round'], 
      'Name': data9.asset.params['name'], 'TX_Counter': data9.asset['asset-tx-counter'], 'Circulating_Supply': data9.asset.params['circulating-supply']},
      {'Element':'10', 'Unit_Name': data10.asset.params['unit-name'], 'ID': data10.asset['index'], 'Created_at_Round': data10.asset['created-at-round'], 
      'Name': data10.asset.params['name'], 'TX_Counter': data10.asset['asset-tx-counter'], 'Circulating_Supply': data10.asset.params['circulating-supply']},
      {'Element':'11', 'Unit_Name': data11.asset.params['unit-name'], 'ID': data11.asset['index'], 'Created_at_Round': data11.asset['created-at-round'], 
      'Name': data11.asset.params['name'], 'TX_Counter': data11.asset['asset-tx-counter'], 'Circulating_Supply': data11.asset.params['circulating-supply']},
      {'Element':'12', 'Unit_Name': data12.asset.params['unit-name'], 'ID': data12.asset['index'], 'Created_at_Round': data12.asset['created-at-round'], 
      'Name': data12.asset.params['name'], 'TX_Counter': data12.asset['asset-tx-counter'], 'Circulating_Supply': data12.asset.params['circulating-supply']},
      {'Element':'13', 'Unit_Name': data13.asset.params['unit-name'], 'ID': data13.asset['index'], 'Created_at_Round': data13.asset['created-at-round'], 
      'Name': data13.asset.params['name'], 'TX_Counter': data13.asset['asset-tx-counter'], 'Circulating_Supply': data13.asset.params['circulating-supply']},
      {'Element':'14', 'Unit_Name': data14.asset.params['unit-name'], 'ID': data14.asset['index'], 'Created_at_Round': data14.asset['created-at-round'], 
      'Name': data14.asset.params['name'], 'TX_Counter': data14.asset['asset-tx-counter'], 'Circulating_Supply': data14.asset.params['circulating-supply']},
      {'Element':'15', 'Unit_Name': data15.asset.params['unit-name'], 'ID': data15.asset['index'], 'Created_at_Round': data15.asset['created-at-round'], 
      'Name': data15.asset.params['name'], 'TX_Counter': data15.asset['asset-tx-counter'], 'Circulating_Supply': data15.asset.params['circulating-supply']},
      {'Element':'16', 'Unit_Name': data16.asset.params['unit-name'], 'ID': data16.asset['index'], 'Created_at_Round': data16.asset['created-at-round'], 
      'Name': data16.asset.params['name'], 'TX_Counter': data16.asset['asset-tx-counter'],'Circulating_Supply': data16.asset.params['circulating-supply']},
      {'Element':'17', 'Unit_Name': data17.asset.params['unit-name'], 'ID': data17.asset['index'], 'Created_at_Round': data17.asset['created-at-round'], 
      'Name': data17.asset.params['name'], 'TX_Counter': data17.asset['asset-tx-counter'],'Circulating_Supply': data17.asset.params['circulating-supply']},
      {'Element':'18', 'Unit_Name': data18.asset.params['unit-name'], 'ID': data18.asset['index'], 'Created_at_Round': data18.asset['created-at-round'], 
      'Name': data18.asset.params['name'], 'TX_Counter': data18.asset['asset-tx-counter'],'Circulating_Supply': data18.asset.params['circulating-supply']},
      {'Element':'19', 'Unit_Name': data19.asset.params['unit-name'], 'ID': data19.asset['index'], 'Created_at_Round': data19.asset['created-at-round'], 
      'Name': data19.asset.params['name'], 'TX_Counter': data19.asset['asset-tx-counter'],'Circulating_Supply': data19.asset.params['circulating-supply']},
      {'Element':'20', 'Unit_Name': data20.asset.params['unit-name'], 'ID': data20.asset['index'], 'Created_at_Round': data20.asset['created-at-round'], 
      'Name': data20.asset.params['name'], 'TX_Counter': data20.asset['asset-tx-counter'], 'Circulating_Supply': data20.asset.params['circulating-supply']},
      {'Element':'21', 'Unit_Name': data21.asset.params['unit-name'], 'ID': data21.asset['index'], 'Created_at_Round': data21.asset['created-at-round'], 
      'Name': data21.asset.params['name'], 'TX_Counter': data21.asset['asset-tx-counter'], 'Circulating_Supply': data21.asset.params['circulating-supply']},
      {'Element':'22', 'Unit_Name': data22.asset.params['unit-name'], 'ID': data22.asset['index'], 'Created_at_Round': data22.asset['created-at-round'], 
      'Name': data22.asset.params['name'], 'TX_Counter': data22.asset['asset-tx-counter'], 'Circulating_Supply': data22.asset.params['circulating-supply']},
      {'Element':'23', 'Unit_Name': data23.asset.params['unit-name'], 'ID': data23.asset['index'], 'Created_at_Round': data23.asset['created-at-round'], 
      'Name': data23.asset.params['name'], 'TX_Counter': data23.asset['asset-tx-counter'],'Circulating_Supply': data23.asset.params['circulating-supply']},
      {'Element':'24', 'Unit_Name': data24.asset.params['unit-name'], 'ID': data24.asset['index'], 'Created_at_Round': data24.asset['created-at-round'], 
      'Name': data24.asset.params['name'], 'TX_Counter': data24.asset['asset-tx-counter'],'Circulating_Supply': data24.asset.params['circulating-supply']},
      {'Element':'25', 'Unit_Name': data25.asset.params['unit-name'], 'ID': data25.asset['index'], 'Created_at_Round': data25.asset['created-at-round'], 
      'Name': data25.asset.params['name'], 'TX_Counter': data25.asset['asset-tx-counter'],'Circulating_Supply': data25.asset.params['circulating-supply']},
      {'Element':'26', 'Unit_Name': data26.asset.params['unit-name'], 'ID': data26.asset['index'], 'Created_at_Round': data26.asset['created-at-round'], 
      'Name': data26.asset.params['name'], 'TX_Counter': data26.asset['asset-tx-counter'],'Circulating_Supply': data26.asset.params['circulating-supply']},
      {'Element':'27', 'Unit_Name': data27.asset.params['unit-name'], 'ID': data27.asset['index'], 'Created_at_Round': data27.asset['created-at-round'], 
      'Name': data27.asset.params['name'], 'TX_Counter': data27.asset['asset-tx-counter'],'Circulating_Supply': data27.asset.params['circulating-supply']},
      {'Element':'28', 'Unit_Name': data28.asset.params['unit-name'], 'ID': data28.asset['index'], 'Created_at_Round': data28.asset['created-at-round'], 
      'Name': data28.asset.params['name'], 'TX_Counter': data28.asset['asset-tx-counter'],'Circulating_Supply': data28.asset.params['circulating-supply']},
      {'Element':'29', 'Unit_Name': data29.asset.params['unit-name'], 'ID': data29.asset['index'], 'Created_at_Round': data29.asset['created-at-round'], 
      'Name': data29.asset.params['name'], 'TX_Counter': data29.asset['asset-tx-counter'],'Circulating_Supply': data29.asset.params['circulating-supply']},
      {'Element':'30', 'Unit_Name': data30.asset.params['unit-name'], 'ID': data30.asset['index'], 'Created_at_Round': data30.asset['created-at-round'], 
      'Name': data30.asset.params['name'], 'TX_Counter': data30.asset['asset-tx-counter'],'Circulating_Supply': data30.asset.params['circulating-supply']},
      {'Element':'31', 'Unit_Name': data31.asset.params['unit-name'], 'ID': data31.asset['index'], 'Created_at_Round': data31.asset['created-at-round'], 
      'Name': data31.asset.params['name'], 'TX_Counter': data31.asset['asset-tx-counter'],'Circulating_Supply': data31.asset.params['circulating-supply']},
      {'Element':'32', 'Unit_Name': data32.asset.params['unit-name'], 'ID': data32.asset['index'], 'Created_at_Round': data32.asset['created-at-round'], 
      'Name': data32.asset.params['name'], 'TX_Counter': data32.asset['asset-tx-counter'],'Circulating_Supply': data32.asset.params['circulating-supply']},
      {'Element':'33', 'Unit_Name': data33.asset.params['unit-name'], 'ID': data33.asset['index'], 'Created_at_Round': data33.asset['created-at-round'], 
      'Name': data33.asset.params['name'], 'TX_Counter': data33.asset['asset-tx-counter'],'Circulating_Supply': data33.asset.params['circulating-supply']},
      {'Element':'34', 'Unit_Name': data34.asset.params['unit-name'], 'ID': data34.asset['index'], 'Created_at_Round': data34.asset['created-at-round'], 
      'Name': data34.asset.params['name'], 'TX_Counter': data34.asset['asset-tx-counter'],'Circulating_Supply': data34.asset.params['circulating-supply']},
      {'Element':'35', 'Unit_Name': data35.asset.params['unit-name'], 'ID': data35.asset['index'], 'Created_at_Round': data35.asset['created-at-round'], 
      'Name': data35.asset.params['name'], 'TX_Counter': data35.asset['asset-tx-counter'],'Circulating_Supply': data35.asset.params['circulating-supply']},
      {'Element':'36', 'Unit_Name': data36.asset.params['unit-name'], 'ID': data36.asset['index'], 'Created_at_Round': data36.asset['created-at-round'], 
      'Name': data36.asset.params['name'], 'TX_Counter': data36.asset['asset-tx-counter'],'Circulating_Supply': data36.asset.params['circulating-supply']},
      {'Element':'37', 'Unit_Name': data37.asset.params['unit-name'], 'ID': data37.asset['index'], 'Created_at_Round': data37.asset['created-at-round'], 
      'Name': data37.asset.params['name'], 'TX_Counter': data37.asset['asset-tx-counter'],'Circulating_Supply': data37.asset.params['circulating-supply']},
      {'Element':'38', 'Unit_Name': data38.asset.params['unit-name'], 'ID': data38.asset['index'], 'Created_at_Round': data38.asset['created-at-round'], 
      'Name': data38.asset.params['name'], 'TX_Counter': data38.asset['asset-tx-counter'],'Circulating_Supply': data38.asset.params['circulating-supply']},
      {'Element':'39', 'Unit_Name': data39.asset.params['unit-name'], 'ID': data39.asset['index'], 'Created_at_Round': data39.asset['created-at-round'], 
      'Name': data39.asset.params['name'], 'TX_Counter': data39.asset['asset-tx-counter'],'Circulating_Supply': data39.asset.params['circulating-supply']},
      {'Element':'40', 'Unit_Name': data40.asset.params['unit-name'], 'ID': data40.asset['index'], 'Created_at_Round': data40.asset['created-at-round'], 
      'Name': data40.asset.params['name'], 'TX_Counter': data40.asset['asset-tx-counter'],'Circulating_Supply': data40.asset.params['circulating-supply']},
      {'Element':'41', 'Unit_Name': data41.asset.params['unit-name'], 'ID': data41.asset['index'], 'Created_at_Round': data41.asset['created-at-round'], 
      'Name': data41.asset.params['name'], 'TX_Counter': data41.asset['asset-tx-counter'],'Circulating_Supply': data41.asset.params['circulating-supply']},
      {'Element':'42', 'Unit_Name': data42.asset.params['unit-name'], 'ID': data42.asset['index'], 'Created_at_Round': data42.asset['created-at-round'], 
      'Name': data42.asset.params['name'], 'TX_Counter': data42.asset['asset-tx-counter'],'Circulating_Supply': data42.asset.params['circulating-supply']},
      {'Element':'43', 'Unit_Name': data43.asset.params['unit-name'], 'ID': data43.asset['index'], 'Created_at_Round': data43.asset['created-at-round'], 
      'Name': data43.asset.params['name'], 'TX_Counter': data43.asset['asset-tx-counter'],'Circulating_Supply': data43.asset.params['circulating-supply']},
      {'Element':'44', 'Unit_Name': data44.asset.params['unit-name'], 'ID': data44.asset['index'], 'Created_at_Round': data44.asset['created-at-round'], 
      'Name': data44.asset.params['name'], 'TX_Counter': data44.asset['asset-tx-counter'],'Circulating_Supply': data44.asset.params['circulating-supply']},
      {'Element':'45', 'Unit_Name': data45.asset.params['unit-name'], 'ID': data45.asset['index'], 'Created_at_Round': data45.asset['created-at-round'], 
      'Name': data45.asset.params['name'], 'TX_Counter': data45.asset['asset-tx-counter'],'Circulating_Supply': data45.asset.params['circulating-supply']},
      {'Element':'46', 'Unit_Name': data46.asset.params['unit-name'], 'ID': data46.asset['index'], 'Created_at_Round': data46.asset['created-at-round'], 
      'Name': data46.asset.params['name'], 'TX_Counter': data46.asset['asset-tx-counter'],'Circulating_Supply': data46.asset.params['circulating-supply']},
      {'Element':'47', 'Unit_Name': data47.asset.params['unit-name'], 'ID': data47.asset['index'], 'Created_at_Round': data47.asset['created-at-round'], 
      'Name': data47.asset.params['name'], 'TX_Counter': data47.asset['asset-tx-counter'],'Circulating_Supply': data47.asset.params['circulating-supply']},
      {'Element':'48', 'Unit_Name': data48.asset.params['unit-name'], 'ID': data48.asset['index'], 'Created_at_Round': data48.asset['created-at-round'], 
      'Name': data48.asset.params['name'], 'TX_Counter': data48.asset['asset-tx-counter'],'Circulating_Supply': data48.asset.params['circulating-supply']},
      {'Element':'49', 'Unit_Name': data49.asset.params['unit-name'], 'ID': data49.asset['index'], 'Created_at_Round': data49.asset['created-at-round'], 
      'Name': data49.asset.params['name'], 'TX_Counter': data49.asset['asset-tx-counter'],'Circulating_Supply': data49.asset.params['circulating-supply']},
      {'Element':'50', 'Unit_Name': data50.asset.params['unit-name'], 'ID': data50.asset['index'], 'Created_at_Round': data50.asset['created-at-round'], 
      'Name': data50.asset.params['name'], 'TX_Counter': data50.asset['asset-tx-counter'],'Circulating_Supply': data50.asset.params['circulating-supply']},
      {'Element':'51', 'Unit_Name': data51.asset.params['unit-name'], 'ID': data51.asset['index'], 'Created_at_Round': data51.asset['created-at-round'], 
      'Name': data51.asset.params['name'], 'TX_Counter': data51.asset['asset-tx-counter'],'Circulating_Supply': data51.asset.params['circulating-supply']},
      {'Element':'52', 'Unit_Name': data52.asset.params['unit-name'], 'ID': data52.asset['index'], 'Created_at_Round': data52.asset['created-at-round'], 
      'Name': data52.asset.params['name'], 'TX_Counter': data52.asset['asset-tx-counter'],'Circulating_Supply': data52.asset.params['circulating-supply']}];            
            
    var exampleTable = $('#example')
        .DataTable({
            data: jsObj,
            colReorder: true,
            paging: false,
            keys: true,
            fixedHeader: true,
            'columns': [
                { 'data': 'Unit_Name' },
                { 'data': 'ID' },
                { 'data': 'Created_at_Round' },
                { 'data': 'Name' },
                { 'data': 'TX_Counter' },
                { 'data': 'Circulating_Supply' }
            ]
        }); 
      }); }); }); }); }); }); }); }); }); }); 
      }); }); }); }); }); }); }); }); }); }); 
      }); }); }); }); }); }); }); }); }); }); 
      }); }); }); }); }); }); }); }); }); }); 
      }); }); }); }); }); }); }); }); }); }); 
      }); });   
    }) })