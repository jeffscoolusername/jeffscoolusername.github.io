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
    var url35 = algoexplorerapi + '251014570';
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
    var url46 = algoexplorerapi + '511491168';
    var url47 = algoexplorerapi + '319473667';
    var url48 = algoexplorerapi + '601894079';
    var url49 = algoexplorerapi + '470842789';
    var url50 = algoexplorerapi + '391379500';
    var url51 = algoexplorerapi + '591601798';
    var url52 = algoexplorerapi + '393155456';
   
            getJSON(url0,
          function(err, data0) {                  
            getJSON(url1,
          function(err, data1) {    
            getJSON(url2,
          function(err, data2) {    
            getJSON(url3,
          function(err, data3) {    
            getJSON(url4,
          function(err, data4) {    
            getJSON(url5,
          function(err, data5) { 
            getJSON(url6,
          function(err, data6) {
            getJSON(url7,
          function(err, data7) { 
            getJSON(url8,
          function(err, data8) { 
            getJSON(url9,
          function(err, data9) { 
            getJSON(url10,
          function(err, data10) { 
            getJSON(url11,
          function(err, data11) { 
            getJSON(url12,
          function(err, data12) { 
            getJSON(url13,
          function(err, data13) { 
            getJSON(url14,
          function(err, data14) { 
            getJSON(url15,
          function(err, data15) { 
            getJSON(url16,
          function(err, data16) { 
            getJSON(url17,
          function(err, data17) { 
            getJSON(url18,
          function(err, data18) { 
            getJSON(url19,
          function(err, data19) { 
            getJSON(url20,
          function(err, data20) { 
            getJSON(url21,
          function(err, data21) { 
            getJSON(url22,
          function(err, data22) { 
            getJSON(url23,
          function(err, data23) { 
            getJSON(url24,
          function(err, data24) { 
            getJSON(url25,
          function(err, data25) { 
            getJSON(url26,
          function(err, data26) { 
            getJSON(url27,
          function(err, data27) { 
            getJSON(url28,
          function(err, data28) { 
            getJSON(url29,
          function(err, data29) { 
            getJSON(url30,
          function(err, data30) { 
            getJSON(url31,
          function(err, data31) { 
            getJSON(url32,
          function(err, data32) { 
            getJSON(url33,
          function(err, data33) { 
            getJSON(url34,
          function(err, data34) { 
            getJSON(url35,
          function(err, data35) { 
            getJSON(url36,
          function(err, data36) { 
            getJSON(url37,
          function(err, data37) { 
            getJSON(url38,
          function(err, data38) { 
            getJSON(url39,
          function(err, data39) { 
            getJSON(url40,
          function(err, data40) { 
            getJSON(url41,
          function(err, data41) { 
            getJSON(url42,
          function(err, data42) { 
            getJSON(url43,
          function(err, data43) { 
            getJSON(url44,
          function(err, data44) { 
            getJSON(url45,
          function(err, data45) { 
            getJSON(url46,
          function(err, data46) { 
            getJSON(url47,
          function(err, data47) { 
            getJSON(url48,
          function(err, data48) { 
            getJSON(url49,
          function(err, data49) { 
            getJSON(url50,
          function(err, data50) { 
            getJSON(url51,
          function(err, data51) { 
            getJSON(url52,
          function(err, data52) { 

    var jsObj = [
      {'Element':'0', 'Unit_Name': 'AVO1', 'ID': '397111682', 'Created_at_Round': data0.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data0.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'1', 'Unit_Name': 'AVO2', 'ID': '353409462', 'Created_at_Round': data1.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data1.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'2', 'Unit_Name': 'AVO3', 'ID': '430838314', 'Created_at_Round': data2.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data2.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'3', 'Unit_Name': 'AVO4', 'ID': '226265212', 'Created_at_Round': data3.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data3.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'4', 'Unit_Name': 'AVO5', 'ID': '555540865', 'Created_at_Round': data4.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data4.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'5', 'Unit_Name': 'AVO6', 'ID': '426526699', 'Created_at_Round': data5.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data5.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'6', 'Unit_Name': 'AVO7', 'ID': '393495312', 'Created_at_Round': data6.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data6.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'7', 'Unit_Name': 'AVO8', 'ID': '305992851', 'Created_at_Round': data7.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data7.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'8', 'Unit_Name': 'AVO9', 'ID': '453816186', 'Created_at_Round': data8.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data8.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'9', 'Unit_Name': 'AVO10', 'ID': '457205263', 'Created_at_Round': data9.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data9.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'10', 'Unit_Name': 'AVO11', 'ID': '523683256', 'Created_at_Round': data10.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data10.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'11', 'Unit_Name': 'AVO12', 'ID': '447852812', 'Created_at_Round': data11.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data11.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'12', 'Unit_Name': 'AVO13', 'ID': '445905873', 'Created_at_Round': data12.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data12.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'13', 'Unit_Name': 'AVO14', 'ID': '310014962', 'Created_at_Round': data13.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data13.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'14', 'Unit_Name': 'AVO15', 'ID': '463554836', 'Created_at_Round': data14.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data14.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'15', 'Unit_Name': 'AVO16', 'ID': '227358511', 'Created_at_Round': data15.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data15.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'16', 'Unit_Name': 'AVO17', 'ID': '604643747', 'Created_at_Round': data16.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data16.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'17', 'Unit_Name': 'AVO18', 'ID': '446220964', 'Created_at_Round': data17.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data17.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'18', 'Unit_Name': 'AVO19', 'ID': '409604194', 'Created_at_Round': data18.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data18.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'19', 'Unit_Name': 'AVO20', 'ID': '466716175', 'Created_at_Round': data19.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data19.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'20', 'Unit_Name': 'AVO21', 'ID': '542132831', 'Created_at_Round': data20.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data20.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'21', 'Unit_Name': 'AVO22', 'ID': '397629052', 'Created_at_Round': data21.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data21.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'22', 'Unit_Name': 'AVO23', 'ID': '163650', 'Created_at_Round': data22.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data22.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'23', 'Unit_Name': 'AVO24', 'ID': '393537671', 'Created_at_Round': data23.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data23.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'24', 'Unit_Name': 'AVO25', 'ID': '540605589', 'Created_at_Round': data24.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data24.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'25', 'Unit_Name': 'AVO26', 'ID': '233939122', 'Created_at_Round': data25.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data25.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'26', 'Unit_Name': 'AVO27', 'ID': '470335962', 'Created_at_Round': data26.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data26.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'27', 'Unit_Name': 'AVO28', 'ID': '382781470', 'Created_at_Round': data27.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data27.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'28', 'Unit_Name': 'AVO29', 'ID': '469835031', 'Created_at_Round': data28.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data28.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'29', 'Unit_Name': 'AVO30', 'ID': '615093377', 'Created_at_Round': data29.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data29.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'30', 'Unit_Name': 'AVO31', 'ID': '473180477', 'Created_at_Round': data30.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data30.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'31', 'Unit_Name': 'AVO32', 'ID': '478549868', 'Created_at_Round': data31.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data31.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'32', 'Unit_Name': 'AVO33', 'ID': '401752010', 'Created_at_Round': data32.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data32.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'33', 'Unit_Name': 'AVO34', 'ID': '251014570', 'Created_at_Round': data33.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data33.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'34', 'Unit_Name': 'AVO35', 'ID': '342889824', 'Created_at_Round': data34.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data34.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'35', 'Unit_Name': 'AVO36', 'ID': '251014570', 'Created_at_Round': data35.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data35.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'36', 'Unit_Name': 'AVO37', 'ID': '498684064', 'Created_at_Round': data36.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data36.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'37', 'Unit_Name': 'AVO38', 'ID': '137020565', 'Created_at_Round': data37.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data37.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'38', 'Unit_Name': 'AVO39', 'ID': '402495345', 'Created_at_Round': data38.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data38.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'39', 'Unit_Name': 'AVO40', 'ID': '388592191', 'Created_at_Round': data39.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data39.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'40', 'Unit_Name': 'AVO41', 'ID': '297995609', 'Created_at_Round': data40.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data40.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'41', 'Unit_Name': 'AVO42', 'ID': '585221469', 'Created_at_Round': data41.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data41.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'42', 'Unit_Name': 'AVO43', 'ID': '571576867', 'Created_at_Round': data42.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data42.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'43', 'Unit_Name': 'AVO44', 'ID': '281003266', 'Created_at_Round': data43.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data43.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'44', 'Unit_Name': 'AVO45', 'ID': '435335235', 'Created_at_Round': data44.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data44.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'45', 'Unit_Name': 'AVO46', 'ID': '511491168', 'Created_at_Round': data45.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data45.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'46', 'Unit_Name': 'AVO47', 'ID': '511491168', 'Created_at_Round': data46.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data46.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'47', 'Unit_Name': 'AVO48', 'ID': '319473667', 'Created_at_Round': data47.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'ALGO AVOCADO', 'TX_Counter': data47.asset['asset-tx-counter'],'Work History': 'TBD', 
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve',
      'Other Links': 'TinyChart'},
      {'Element':'48', 'Unit_Name': 'ACORN', 'ID': '601894079', 'Created_at_Round': data48.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'AlgoNuts', 'TX_Counter': data48.asset['asset-tx-counter'], 'Work History': 'TBD',
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve', 
      'Other Links': 'Discord, Email, TinyChart, Twitter'},
      {'Element':'49', 'Unit_Name': 'ACRES', 'ID': '470842789', 'Created_at_Round': data49.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': '80Acres', 'TX_Counter': data49.asset['asset-tx-counter'], 'Work History': 'TBD',
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve', 
      'Other Links': 'Email, Phone, TinyChart'},
      {'Element':'50', 'Unit_Name': 'ADVENTUR', 'ID': '391379500', 'Created_at_Round': data50.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'Adventure Coin', 'TX_Counter': data50.asset['asset-tx-counter'], 'Work History': 'TBD',
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve', 
      'Other Links': 'Reddit, TinyChart, Twitter'},
      {'Element':'51', 'Unit_Name': 'AFD', 'ID': '591601798', 'Created_at_Round': data51.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'Algorand Faucet Drops', 'TX_Counter': data51.asset['asset-tx-counter'], 'Work History': 'TBD',
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'Yes', 'Roadmap': 'TBD', 'Wallets': 'Creator, Reserve', 'Other Links': 'Discord, TinyChart, Twitter'},
      {'Element':'52', 'Unit_Name': 'AGNR', 'ID': '393155456', 'Created_at_Round': data52.asset['created-at-round'], 'Algo Verified': 'TBD', 'Name': 'Algoneer', 'TX_Counter': data52.asset['asset-tx-counter'], 'Work History': 'Team (1,2)',
      'Algo Grant': 'TBD', 'Company': 'TBD', 'Paper': 'TBD', 'Roadmap': 'TBD', 'Wallets': 'Creator, Manager, Reserve', 
      'Other Links': 'Discord, Ecosystem, GitHub, Reddit, TinyChart'}];            
            
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
                { 'data': 'Algo Verified' },
                { 'data': 'Name' },
                { 'data': 'TX_Counter' },
                { 'data': 'Work History' },
                { 'data': 'Algo Grant' },
                { 'data': 'Company' },
                { 'data': 'Paper' },
                { 'data': 'Roadmap' },
                { 'data': 'Wallets' },
                { 'data': 'Other Links' },
            ]
        }); 
      }); }); }); }); }); }); }); }); }); }); 
      }); }); }); }); }); }); }); }); }); }); 
      }); }); }); }); }); }); }); }); }); }); 
      }); }); }); }); }); }); }); }); }); }); 
      }); }); }); }); }); }); }); }); }); }); 
      }); });   
    }) })