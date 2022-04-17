$(document)
.ready(function() {

    //Get request for the Algorand API
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

    //Wall of variables - Todo: Make this more efficient
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
   
    var tonybaloney0 = 'loading';var tonybaloney1 = 'loading';var tonybaloney2 = 'loading';var tonybaloney3 = 'loading';
    var tonybaloney4 = 'loading';var tonybaloney5 = 'loading';var tonybaloney6 = 'loading';var tonybaloney7 = 'loading';
    var tonybaloney8 = 'loading';var tonybaloney9 = 'loading';var tonybaloney10 = 'loading';var tonybaloney11 = 'loading';
    var tonybaloney12 = 'loading';var tonybaloney13 = 'loading';var tonybaloney14 = 'loading';var tonybaloney15 = 'loading';
    var tonybaloney16 = 'loading';var tonybaloney17 = 'loading';var tonybaloney18 = 'loading';var tonybaloney19 = 'loading';
    var tonybaloney20 = 'loading';var tonybaloney21 = 'loading';var tonybaloney22 = 'loading';var tonybaloney23 = 'loading';
    var tonybaloney24 = 'loading';var tonybaloney25 = 'loading';var tonybaloney26 = 'loading';var tonybaloney27 = 'loading';
    var tonybaloney28 = 'loading';var tonybaloney29 = 'loading';var tonybaloney30 = 'loading';var tonybaloney31 = 'loading';
    var tonybaloney32 = 'loading';var tonybaloney33 = 'loading';var tonybaloney34 = 'loading';var tonybaloney35 = 'loading';
    var tonybaloney36 = 'loading';var tonybaloney37 = 'loading';var tonybaloney38 = 'loading';var tonybaloney39 = 'loading';
    var tonybaloney40 = 'loading';var tonybaloney41 = 'loading';var tonybaloney42 = 'loading';var tonybaloney43 = 'loading';
    var tonybaloney44 = 'loading';var tonybaloney45 = 'loading';var tonybaloney46 = 'loading';var tonybaloney47 = 'loading';
    var tonybaloney48 = 'loading';var tonybaloney49 = 'loading';var tonybaloney50 = 'loading';var tonybaloney51 = 'loading';
    var tonybaloney52 = 'loading';var tonybaloney53 = 'loading';var tonybaloney54 = 'loading';var tonybaloney55 = 'loading';
    var tonybaloney56 = 'loading';var tonybaloney57 = 'loading';var tonybaloney58 = 'loading';var tonybaloney59 = 'loading';
    var tonybaloney60 = 'loading';var tonybaloney61 = 'loading';var tonybaloney62 = 'loading';var tonybaloney63 = 'loading';
    var tonybaloney64 = 'loading';var tonybaloney65 = 'loading';var tonybaloney66 = 'loading';var tonybaloney67 = 'loading';
    var tonybaloney68 = 'loading';var tonybaloney69 = 'loading';var tonybaloney70 = 'loading';var tonybaloney71 = 'loading';
    var tonybaloney72 = 'loading';var tonybaloney73 = 'loading';var tonybaloney74 = 'loading';var tonybaloney75 = 'loading';
    var tonybaloney76 = 'loading';var tonybaloney77 = 'loading';var tonybaloney78 = 'loading';var tonybaloney79 = 'loading';


    //Wall of API calls - Todo: Make this more efficient
    getJSON(url0,async function(err, data0){
    tonybaloney0 = data0.asset.params['unit-name'];tonybaloney1 = data0.asset['index'];tonybaloney2 = data0.asset['created-at-round'];
    tonybaloney3 = data0.asset.params['name'];tonybaloney4 = data0.asset['asset-tx-counter'];tonybaloney5 = data0.asset.params['circulating-supply'];
    tonybaloney6 = data0.asset.params['total'];tonybaloney7 = (data0.asset.params['circulating-supply']/data0.asset.params['total']).toFixed(2);})                
    getJSON(url1,async function(err, data1){
    tonybaloney8 = data1.asset.params['unit-name'];tonybaloney9 = data1.asset['index'];tonybaloney10 = data1.asset['created-at-round'];
    tonybaloney11 = data1.asset.params['name'];tonybaloney12 = data1.asset['asset-tx-counter'];tonybaloney13 = data1.asset.params['circulating-supply'];
    tonybaloney14 = data1.asset.params['total'];tonybaloney15 = (data1.asset.params['circulating-supply']/data1.asset.params['total']).toFixed(2);})            
    getJSON(url2,async function(err, data2){
    tonybaloney16 = data2.asset.params['unit-name'];tonybaloney17 = data2.asset['index'];tonybaloney18 = data2.asset['created-at-round'];
    tonybaloney19 = data2.asset.params['name'];tonybaloney20 = data2.asset['asset-tx-counter'];tonybaloney21 = data2.asset.params['circulating-supply'];
    tonybaloney22 = data2.asset.params['total'];tonybaloney23 = (data2.asset.params['circulating-supply']/data2.asset.params['total']).toFixed(2);})                
    getJSON(url3,async function(err, data3) {
    tonybaloney24 = data3.asset.params['unit-name'];tonybaloney25 = data3.asset['index'];tonybaloney26 = data3.asset['created-at-round'];
    tonybaloney27 = data3.asset.params['name'];tonybaloney28 = data3.asset['asset-tx-counter'];tonybaloney29 = data3.asset.params['circulating-supply'];
    tonybaloney30 = data3.asset.params['total'];tonybaloney31 = (data3.asset.params['circulating-supply']/data3.asset.params['total']).toFixed(2);})                      
    getJSON(url4,async function(err, data4) {
    tonybaloney32 = data4.asset.params['unit-name'];tonybaloney33 = data4.asset['index'];tonybaloney34 = data4.asset['created-at-round'];
    tonybaloney35 = data4.asset.params['name'];tonybaloney36 = data4.asset['asset-tx-counter'];tonybaloney37 = data4.asset.params['circulating-supply'];
    tonybaloney38 = data4.asset.params['total'];tonybaloney39 = (data4.asset.params['circulating-supply']/data4.asset.params['total']).toFixed(2);})  
    getJSON(url5,async function(err, data5) {
    tonybaloney40 = data5.asset.params['unit-name'];tonybaloney41 = data5.asset['index'];tonybaloney42 = data5.asset['created-at-round'];
    tonybaloney43 = data5.asset.params['name'];tonybaloney44 = data5.asset['asset-tx-counter'];tonybaloney45 = data5.asset.params['circulating-supply'];
    tonybaloney46 = data5.asset.params['total'];tonybaloney47 = (data5.asset.params['circulating-supply']/data5.asset.params['total']).toFixed(2);})          
    getJSON(url6,async function(err, data6) {
    tonybaloney48 = data6.asset.params['unit-name'];tonybaloney49 = data6.asset['index'];tonybaloney50 = data6.asset['created-at-round'];
    tonybaloney51 = data6.asset.params['name'];tonybaloney52 = data6.asset['asset-tx-counter'];tonybaloney53 = data6.asset.params['circulating-supply'];
    tonybaloney54 = data6.asset.params['total'];tonybaloney55 = (data6.asset.params['circulating-supply']/data6.asset.params['total']).toFixed(2);})   
    getJSON(url7,async function(err, data7) {
    tonybaloney56 = data7.asset.params['unit-name'];tonybaloney57 = data7.asset['index'];tonybaloney58 = data7.asset['created-at-round'];
    tonybaloney59 = data7.asset.params['name'];tonybaloney60 = data7.asset['asset-tx-counter'];tonybaloney61 = data7.asset.params['circulating-supply'];
    tonybaloney62 = data7.asset.params['total'];tonybaloney63 = (data7.asset.params['circulating-supply']/data7.asset.params['total']).toFixed(2);})
    getJSON(url8,async function(err, data8) {
    tonybaloney64 = data8.asset.params['unit-name'];tonybaloney65 = data8.asset['index'];tonybaloney66 = data8.asset['created-at-round'];
    tonybaloney67 = data8.asset.params['name'];tonybaloney60 = data8.asset['asset-tx-counter'];tonybaloney69 = data8.asset.params['circulating-supply'];
    tonybaloney70 = data8.asset.params['total'];tonybaloney71 = (data8.asset.params['circulating-supply']/data8.asset.params['total']).toFixed(2);})
    getJSON(url9,async function(err, data9) {
    tonybaloney72 = data9.asset.params['unit-name'];tonybaloney73 = data9.asset['index'];tonybaloney74 = data9.asset['created-at-round'];
    tonybaloney75 = data9.asset.params['name'];tonybaloney76 = data9.asset['asset-tx-counter'];tonybaloney77 = data9.asset.params['circulating-supply'];
    tonybaloney78 = data9.asset.params['total'];tonybaloney79 = (data9.asset.params['circulating-supply']/data9.asset.params['total']).toFixed(2);})
        
        
        
        getJSON(url10,async function(err, data10) {getJSON(url11,async function(err, data11) {getJSON(url12,
    async function(err, data12) {getJSON(url13,async function(err, data13) {getJSON(url14,async function(err, data14) {getJSON(url15,async function(err, data15) {getJSON(url16,
    async function(err, data16) {getJSON(url17,async function(err, data17) {getJSON(url18,async function(err, data18) {getJSON(url19,async function(err, data19) {getJSON(url20,
    async function(err, data20) {getJSON(url21,async function(err, data21) {getJSON(url22,async function(err, data22) {getJSON(url23,async function(err, data23) {getJSON(url24,
    async function(err, data24) {getJSON(url25,async function(err, data25) {getJSON(url26,async function(err, data26) {getJSON(url27,async function(err, data27) {getJSON(url28,
    async function(err, data28) {getJSON(url29,async function(err, data29) {getJSON(url30,async function(err, data30) {getJSON(url31,async function(err, data31) {getJSON(url32,
    async function(err, data32) {getJSON(url33,async function(err, data33) {getJSON(url34,async function(err, data34) {getJSON(url35,async function(err, data35) {getJSON(url36,
    async function(err, data36) {getJSON(url37,async function(err, data37) {getJSON(url38,async function(err, data38) {getJSON(url39,async function(err, data39) {getJSON(url40,
    async function(err, data40) {getJSON(url41,async function(err, data41) {getJSON(url42,async function(err, data42) {getJSON(url43,async function(err, data43) {getJSON(url44,
    async function(err, data44) {getJSON(url45,async function(err, data45) {getJSON(url46,async function(err, data46) {getJSON(url47,async function(err, data47) {getJSON(url48,
    async function(err, data48) {getJSON(url49,async function(err, data49) {getJSON(url50,async function(err, data50) {getJSON(url51,async function(err, data51) {getJSON(url52,
    async function(err, data52) { 


    // The array
    var jsObj = [
      {'Element':'0', 'Unit Name': tonybaloney0, 'ID': tonybaloney1, 'Created at Round': tonybaloney2,      
      'Name': tonybaloney3, 'Transactions Counter': tonybaloney4, 'Circulating Supply': tonybaloney5,
      'Total Supply': tonybaloney6, '% in Circulation': tonybaloney7 + '%'},
      {'Element':'1', 'Unit Name': tonybaloney8, 'ID': tonybaloney9, 'Created at Round':tonybaloney10, 
      'Name': tonybaloney11, 'Transactions Counter': tonybaloney12, 'Circulating Supply': tonybaloney13,
      'Total Supply': tonybaloney14, '% in Circulation': tonybaloney15 + '%'},
      {'Element':'2', 'Unit Name': tonybaloney16, 'ID': tonybaloney17, 'Created at Round': tonybaloney18, 
      'Name': tonybaloney19, 'Transactions Counter':tonybaloney20, 'Circulating Supply': tonybaloney21,
      'Total Supply': tonybaloney22, '% in Circulation': tonybaloney23 + '%'},
      {'Element':'3', 'Unit Name': tonybaloney24, 'ID': tonybaloney25, 'Created at Round': tonybaloney26,
      'Name': tonybaloney27, 'Transactions Counter': tonybaloney28, 'Circulating Supply': tonybaloney29,
      'Total Supply': tonybaloney30, '% in Circulation': tonybaloney31 + '%'},
      {'Element':'4', 'Unit Name': tonybaloney32, 'ID': tonybaloney33, 'Created at Round': tonybaloney34, 
      'Name': tonybaloney35, 'Transactions Counter': tonybaloney36, 'Circulating Supply': tonybaloney37,
      'Total Supply': tonybaloney38, '% in Circulation': tonybaloney39 + '%'},
      {'Element':'5', 'Unit Name': tonybaloney40, 'ID': tonybaloney41, 'Created at Round': tonybaloney42, 
      'Name': tonybaloney43, 'Transactions Counter': tonybaloney44, 'Circulating Supply': tonybaloney45,
      'Total Supply': tonybaloney46, '% in Circulation': tonybaloney47 + '%'},
      {'Element':'6', 'Unit Name': tonybaloney48, 'ID': tonybaloney49, 'Created at Round': tonybaloney50, 
      'Name': tonybaloney51, 'Transactions Counter': tonybaloney52, 'Circulating Supply': tonybaloney53,
      'Total Supply': tonybaloney54, '% in Circulation': tonybaloney55 + '%'},
      {'Element':'7', 'Unit Name':tonybaloney56, 'ID': tonybaloney57, 'Created at Round': tonybaloney58, 
      'Name': tonybaloney59, 'Transactions Counter': tonybaloney60, 'Circulating Supply': tonybaloney61,
      'Total Supply': tonybaloney62, '% in Circulation': tonybaloney63 + '%'},
      {'Element':'8', 'Unit Name': tonybaloney64, 'ID': tonybaloney65, 'Created at Round': tonybaloney66, 
      'Name': tonybaloney67, 'Transactions Counter': tonybaloney68, 'Circulating Supply': tonybaloney69,
      'Total Supply': tonybaloney70, '% in Circulation': tonybaloney71 + '%'},
      {'Element':'9', 'Unit Name': tonybaloney72, 'ID': tonybaloney73, 'Created at Round': tonybaloney74, 
      'Name': tonybaloney75, 'Transactions Counter': tonybaloney76, 'Circulating Supply': tonybaloney77,
      'Total Supply': tonybaloney78, '% in Circulation': tonybaloney79 + '%'},
      {'Element':'10', 'Unit Name': data10.asset.params['unit-name'], 'ID': data10.asset['index'], 'Created at Round': data10.asset['created-at-round'], 
      'Name': data10.asset.params['name'], 'Transactions Counter': data10.asset['asset-tx-counter'], 'Circulating Supply': data10.asset.params['circulating-supply'],
      'Total Supply': data10.asset.params['total'], '% in Circulation': (data10.asset.params['circulating-supply']/data10.asset.params['total']).toFixed(2) + '%'},
      {'Element':'11', 'Unit Name': data11.asset.params['unit-name'], 'ID': data11.asset['index'], 'Created at Round': data11.asset['created-at-round'], 
      'Name': data11.asset.params['name'], 'Transactions Counter': data11.asset['asset-tx-counter'], 'Circulating Supply': data11.asset.params['circulating-supply'],
      'Total Supply': data11.asset.params['total'], '% in Circulation': (data11.asset.params['circulating-supply']/data11.asset.params['total']).toFixed(2) + '%'},
      {'Element':'12', 'Unit Name': data12.asset.params['unit-name'], 'ID': data12.asset['index'], 'Created at Round': data12.asset['created-at-round'], 
      'Name': data12.asset.params['name'], 'Transactions Counter': data12.asset['asset-tx-counter'], 'Circulating Supply': data12.asset.params['circulating-supply'],
      'Total Supply': data12.asset.params['total'], '% in Circulation': (data12.asset.params['circulating-supply']/data12.asset.params['total']).toFixed(2) + '%'},
      {'Element':'13', 'Unit Name': data13.asset.params['unit-name'], 'ID': data13.asset['index'], 'Created at Round': data13.asset['created-at-round'], 
      'Name': data13.asset.params['name'], 'Transactions Counter': data13.asset['asset-tx-counter'], 'Circulating Supply': data13.asset.params['circulating-supply'],
      'Total Supply': data13.asset.params['total'], '% in Circulation': (data13.asset.params['circulating-supply']/data13.asset.params['total']).toFixed(2) + '%'},
      {'Element':'14', 'Unit Name': data14.asset.params['unit-name'], 'ID': data14.asset['index'], 'Created at Round': data14.asset['created-at-round'], 
      'Name': data14.asset.params['name'], 'Transactions Counter': data14.asset['asset-tx-counter'], 'Circulating Supply': data14.asset.params['circulating-supply'],
      'Total Supply': data14.asset.params['total'], '% in Circulation': (data14.asset.params['circulating-supply']/data14.asset.params['total']).toFixed(2) + '%'},
      {'Element':'15', 'Unit Name': data15.asset.params['unit-name'], 'ID': data15.asset['index'], 'Created at Round': data15.asset['created-at-round'], 
      'Name': data15.asset.params['name'], 'Transactions Counter': data15.asset['asset-tx-counter'], 'Circulating Supply': data15.asset.params['circulating-supply'],
      'Total Supply': data15.asset.params['total'], '% in Circulation': (data15.asset.params['circulating-supply']/data15.asset.params['total']).toFixed(2) + '%'},
      {'Element':'16', 'Unit Name': data16.asset.params['unit-name'], 'ID': data16.asset['index'], 'Created at Round': data16.asset['created-at-round'], 
      'Name': data16.asset.params['name'], 'Transactions Counter': data16.asset['asset-tx-counter'],'Circulating Supply': data16.asset.params['circulating-supply'],
      'Total Supply': data16.asset.params['total'], '% in Circulation': (data16.asset.params['circulating-supply']/data16.asset.params['total']).toFixed(2) + '%'},
      {'Element':'17', 'Unit Name': data17.asset.params['unit-name'], 'ID': data17.asset['index'], 'Created at Round': data17.asset['created-at-round'], 
      'Name': data17.asset.params['name'], 'Transactions Counter': data17.asset['asset-tx-counter'],'Circulating Supply': data17.asset.params['circulating-supply'],
      'Total Supply': data17.asset.params['total'], '% in Circulation': (data17.asset.params['circulating-supply']/data17.asset.params['total']).toFixed(2) + '%'},
      {'Element':'18', 'Unit Name': data18.asset.params['unit-name'], 'ID': data18.asset['index'], 'Created at Round': data18.asset['created-at-round'], 
      'Name': data18.asset.params['name'], 'Transactions Counter': data18.asset['asset-tx-counter'],'Circulating Supply': data18.asset.params['circulating-supply'],
      'Total Supply': data18.asset.params['total'], '% in Circulation': (data18.asset.params['circulating-supply']/data18.asset.params['total']).toFixed(2) + '%'},
      {'Element':'19', 'Unit Name': data19.asset.params['unit-name'], 'ID': data19.asset['index'], 'Created at Round': data19.asset['created-at-round'], 
      'Name': data19.asset.params['name'], 'Transactions Counter': data19.asset['asset-tx-counter'],'Circulating Supply': data19.asset.params['circulating-supply'],
      'Total Supply': data19.asset.params['total'], '% in Circulation': (data19.asset.params['circulating-supply']/data19.asset.params['total']).toFixed(2) + '%'},
      {'Element':'20', 'Unit Name': data20.asset.params['unit-name'], 'ID': data20.asset['index'], 'Created at Round': data20.asset['created-at-round'], 
      'Name': data20.asset.params['name'], 'Transactions Counter': data20.asset['asset-tx-counter'], 'Circulating Supply': data20.asset.params['circulating-supply'],
      'Total Supply': data20.asset.params['total'], '% in Circulation': (data20.asset.params['circulating-supply']/data20.asset.params['total']).toFixed(2) + '%'},
      {'Element':'21', 'Unit Name': data21.asset.params['unit-name'], 'ID': data21.asset['index'], 'Created at Round': data21.asset['created-at-round'], 
      'Name': data21.asset.params['name'], 'Transactions Counter': data21.asset['asset-tx-counter'], 'Circulating Supply': data21.asset.params['circulating-supply'],
      'Total Supply': data21.asset.params['total'], '% in Circulation': (data21.asset.params['circulating-supply']/data21.asset.params['total']).toFixed(2) + '%'},
      {'Element':'22', 'Unit Name': data22.asset.params['unit-name'], 'ID': data22.asset['index'], 'Created at Round': data22.asset['created-at-round'], 
      'Name': data22.asset.params['name'], 'Transactions Counter': data22.asset['asset-tx-counter'], 'Circulating Supply': data22.asset.params['circulating-supply'],
      'Total Supply': data22.asset.params['total'], '% in Circulation': (data22.asset.params['circulating-supply']/data22.asset.params['total']).toFixed(2) + '%'},
      {'Element':'23', 'Unit Name': data23.asset.params['unit-name'], 'ID': data23.asset['index'], 'Created at Round': data23.asset['created-at-round'], 
      'Name': data23.asset.params['name'], 'Transactions Counter': data23.asset['asset-tx-counter'],'Circulating Supply': data23.asset.params['circulating-supply'],
      'Total Supply': data23.asset.params['total'], '% in Circulation': (data23.asset.params['circulating-supply']/data23.asset.params['total']).toFixed(2) + '%'},
      {'Element':'24', 'Unit Name': data24.asset.params['unit-name'], 'ID': data24.asset['index'], 'Created at Round': data24.asset['created-at-round'], 
      'Name': data24.asset.params['name'], 'Transactions Counter': data24.asset['asset-tx-counter'],'Circulating Supply': data24.asset.params['circulating-supply'],
      'Total Supply': data24.asset.params['total'], '% in Circulation': (data24.asset.params['circulating-supply']/data24.asset.params['total']).toFixed(2) + '%'},
      {'Element':'25', 'Unit Name': data25.asset.params['unit-name'], 'ID': data25.asset['index'], 'Created at Round': data25.asset['created-at-round'], 
      'Name': data25.asset.params['name'], 'Transactions Counter': data25.asset['asset-tx-counter'],'Circulating Supply': data25.asset.params['circulating-supply'],
      'Total Supply': data25.asset.params['total'], '% in Circulation': (data25.asset.params['circulating-supply']/data25.asset.params['total']).toFixed(2) + '%'},
      {'Element':'26', 'Unit Name': data26.asset.params['unit-name'], 'ID': data26.asset['index'], 'Created at Round': data26.asset['created-at-round'], 
      'Name': data26.asset.params['name'], 'Transactions Counter': data26.asset['asset-tx-counter'],'Circulating Supply': data26.asset.params['circulating-supply'],
      'Total Supply': data26.asset.params['total'], '% in Circulation': (data26.asset.params['circulating-supply']/data26.asset.params['total']).toFixed(2) + '%'},
      {'Element':'27', 'Unit Name': data27.asset.params['unit-name'], 'ID': data27.asset['index'], 'Created at Round': data27.asset['created-at-round'], 
      'Name': data27.asset.params['name'], 'Transactions Counter': data27.asset['asset-tx-counter'],'Circulating Supply': data27.asset.params['circulating-supply'],
      'Total Supply': data27.asset.params['total'], '% in Circulation': (data27.asset.params['circulating-supply']/data27.asset.params['total']).toFixed(2) + '%'},
      {'Element':'28', 'Unit Name': data28.asset.params['unit-name'], 'ID': data28.asset['index'], 'Created at Round': data28.asset['created-at-round'], 
      'Name': data28.asset.params['name'], 'Transactions Counter': data28.asset['asset-tx-counter'],'Circulating Supply': data28.asset.params['circulating-supply'],
      'Total Supply': data28.asset.params['total'], '% in Circulation': (data28.asset.params['circulating-supply']/data28.asset.params['total']).toFixed(2) + '%'},
      {'Element':'29', 'Unit Name': data29.asset.params['unit-name'], 'ID': data29.asset['index'], 'Created at Round': data29.asset['created-at-round'], 
      'Name': data29.asset.params['name'], 'Transactions Counter': data29.asset['asset-tx-counter'],'Circulating Supply': data29.asset.params['circulating-supply'],
      'Total Supply': data29.asset.params['total'], '% in Circulation': (data29.asset.params['circulating-supply']/data29.asset.params['total']).toFixed(2) + '%'},
      {'Element':'30', 'Unit Name': data30.asset.params['unit-name'], 'ID': data30.asset['index'], 'Created at Round': data30.asset['created-at-round'], 
      'Name': data30.asset.params['name'], 'Transactions Counter': data30.asset['asset-tx-counter'],'Circulating Supply': data30.asset.params['circulating-supply'],
      'Total Supply': data30.asset.params['total'], '% in Circulation': (data30.asset.params['circulating-supply']/data30.asset.params['total']).toFixed(2) + '%'},
      {'Element':'31', 'Unit Name': data31.asset.params['unit-name'], 'ID': data31.asset['index'], 'Created at Round': data31.asset['created-at-round'], 
      'Name': data31.asset.params['name'], 'Transactions Counter': data31.asset['asset-tx-counter'],'Circulating Supply': data31.asset.params['circulating-supply'],
      'Total Supply': data31.asset.params['total'], '% in Circulation': (data31.asset.params['circulating-supply']/data31.asset.params['total']).toFixed(2) + '%'},
      {'Element':'32', 'Unit Name': data32.asset.params['unit-name'], 'ID': data32.asset['index'], 'Created at Round': data32.asset['created-at-round'], 
      'Name': data32.asset.params['name'], 'Transactions Counter': data32.asset['asset-tx-counter'],'Circulating Supply': data32.asset.params['circulating-supply'],
      'Total Supply': data32.asset.params['total'], '% in Circulation': (data32.asset.params['circulating-supply']/data32.asset.params['total']).toFixed(2) + '%'},
      {'Element':'33', 'Unit Name': data33.asset.params['unit-name'], 'ID': data33.asset['index'], 'Created at Round': data33.asset['created-at-round'], 
      'Name': data33.asset.params['name'], 'Transactions Counter': data33.asset['asset-tx-counter'],'Circulating Supply': data33.asset.params['circulating-supply'],
      'Total Supply': data33.asset.params['total'], '% in Circulation': (data33.asset.params['circulating-supply']/data33.asset.params['total']).toFixed(2) + '%'},
      {'Element':'34', 'Unit Name': data34.asset.params['unit-name'], 'ID': data34.asset['index'], 'Created at Round': data34.asset['created-at-round'], 
      'Name': data34.asset.params['name'], 'Transactions Counter': data34.asset['asset-tx-counter'],'Circulating Supply': data34.asset.params['circulating-supply'],
      'Total Supply': data34.asset.params['total'], '% in Circulation': (data34.asset.params['circulating-supply']/data34.asset.params['total']).toFixed(2) + '%'},
      {'Element':'35', 'Unit Name': data35.asset.params['unit-name'], 'ID': data35.asset['index'], 'Created at Round': data35.asset['created-at-round'], 
      'Name': data35.asset.params['name'], 'Transactions Counter': data35.asset['asset-tx-counter'],'Circulating Supply': data35.asset.params['circulating-supply'],
      'Total Supply': data35.asset.params['total'], '% in Circulation': (data35.asset.params['circulating-supply']/data35.asset.params['total']).toFixed(2) + '%'},
      {'Element':'36', 'Unit Name': data36.asset.params['unit-name'], 'ID': data36.asset['index'], 'Created at Round': data36.asset['created-at-round'], 
      'Name': data36.asset.params['name'], 'Transactions Counter': data36.asset['asset-tx-counter'],'Circulating Supply': data36.asset.params['circulating-supply'],
      'Total Supply': data36.asset.params['total'], '% in Circulation': (data36.asset.params['circulating-supply']/data36.asset.params['total']).toFixed(2) + '%'},
      {'Element':'37', 'Unit Name': data37.asset.params['unit-name'], 'ID': data37.asset['index'], 'Created at Round': data37.asset['created-at-round'], 
      'Name': data37.asset.params['name'], 'Transactions Counter': data37.asset['asset-tx-counter'],'Circulating Supply': data37.asset.params['circulating-supply'],
      'Total Supply': data37.asset.params['total'], '% in Circulation': (data37.asset.params['circulating-supply']/data37.asset.params['total']).toFixed(2) + '%'},
      {'Element':'38', 'Unit Name': data38.asset.params['unit-name'], 'ID': data38.asset['index'], 'Created at Round': data38.asset['created-at-round'], 
      'Name': data38.asset.params['name'], 'Transactions Counter': data38.asset['asset-tx-counter'],'Circulating Supply': data38.asset.params['circulating-supply'],
      'Total Supply': data38.asset.params['total'], '% in Circulation': (data38.asset.params['circulating-supply']/data38.asset.params['total']).toFixed(2) + '%'},
      {'Element':'39', 'Unit Name': data39.asset.params['unit-name'], 'ID': data39.asset['index'], 'Created at Round': data39.asset['created-at-round'], 
      'Name': data39.asset.params['name'], 'Transactions Counter': data39.asset['asset-tx-counter'],'Circulating Supply': data39.asset.params['circulating-supply'],
      'Total Supply': data39.asset.params['total'], '% in Circulation': (data39.asset.params['circulating-supply']/data39.asset.params['total']).toFixed(2) + '%'},
      {'Element':'40', 'Unit Name': data40.asset.params['unit-name'], 'ID': data40.asset['index'], 'Created at Round': data40.asset['created-at-round'], 
      'Name': data40.asset.params['name'], 'Transactions Counter': data40.asset['asset-tx-counter'],'Circulating Supply': data40.asset.params['circulating-supply'],
      'Total Supply': data40.asset.params['total'], '% in Circulation': (data40.asset.params['circulating-supply']/data40.asset.params['total']).toFixed(2) + '%'},
      {'Element':'41', 'Unit Name': data41.asset.params['unit-name'], 'ID': data41.asset['index'], 'Created at Round': data41.asset['created-at-round'], 
      'Name': data41.asset.params['name'], 'Transactions Counter': data41.asset['asset-tx-counter'],'Circulating Supply': data41.asset.params['circulating-supply'],
      'Total Supply': data41.asset.params['total'], '% in Circulation': (data41.asset.params['circulating-supply']/data41.asset.params['total']).toFixed(2) + '%'},
      {'Element':'42', 'Unit Name': data42.asset.params['unit-name'], 'ID': data42.asset['index'], 'Created at Round': data42.asset['created-at-round'], 
      'Name': data42.asset.params['name'], 'Transactions Counter': data42.asset['asset-tx-counter'],'Circulating Supply': data42.asset.params['circulating-supply'],
      'Total Supply': data42.asset.params['total'], '% in Circulation': (data42.asset.params['circulating-supply']/data42.asset.params['total']).toFixed(2) + '%'},
      {'Element':'43', 'Unit Name': data43.asset.params['unit-name'], 'ID': data43.asset['index'], 'Created at Round': data43.asset['created-at-round'], 
      'Name': data43.asset.params['name'], 'Transactions Counter': data43.asset['asset-tx-counter'],'Circulating Supply': data43.asset.params['circulating-supply'],
      'Total Supply': data43.asset.params['total'], '% in Circulation': (data43.asset.params['circulating-supply']/data43.asset.params['total']).toFixed(2) + '%'},
      {'Element':'44', 'Unit Name': data44.asset.params['unit-name'], 'ID': data44.asset['index'], 'Created at Round': data44.asset['created-at-round'], 
      'Name': data44.asset.params['name'], 'Transactions Counter': data44.asset['asset-tx-counter'],'Circulating Supply': data44.asset.params['circulating-supply'],
      'Total Supply': data44.asset.params['total'], '% in Circulation': (data44.asset.params['circulating-supply']/data44.asset.params['total']).toFixed(2) + '%'},
      {'Element':'45', 'Unit Name': data45.asset.params['unit-name'], 'ID': data45.asset['index'], 'Created at Round': data45.asset['created-at-round'], 
      'Name': data45.asset.params['name'], 'Transactions Counter': data45.asset['asset-tx-counter'],'Circulating Supply': data45.asset.params['circulating-supply'],
      'Total Supply': data45.asset.params['total'], '% in Circulation': (data45.asset.params['circulating-supply']/data45.asset.params['total']).toFixed(2) + '%'},
      {'Element':'46', 'Unit Name': data46.asset.params['unit-name'], 'ID': data46.asset['index'], 'Created at Round': data46.asset['created-at-round'], 
      'Name': data46.asset.params['name'], 'Transactions Counter': data46.asset['asset-tx-counter'],'Circulating Supply': data46.asset.params['circulating-supply'],
      'Total Supply': data46.asset.params['total'], '% in Circulation': (data46.asset.params['circulating-supply']/data46.asset.params['total']).toFixed(2) + '%'},
      {'Element':'47', 'Unit Name': data47.asset.params['unit-name'], 'ID': data47.asset['index'], 'Created at Round': data47.asset['created-at-round'], 
      'Name': data47.asset.params['name'], 'Transactions Counter': data47.asset['asset-tx-counter'],'Circulating Supply': data47.asset.params['circulating-supply'],
      'Total Supply': data47.asset.params['total'], '% in Circulation': (data47.asset.params['circulating-supply']/data47.asset.params['total']).toFixed(2) + '%'},
      {'Element':'48', 'Unit Name': data48.asset.params['unit-name'], 'ID': data48.asset['index'], 'Created at Round': data48.asset['created-at-round'], 
      'Name': data48.asset.params['name'], 'Transactions Counter': data48.asset['asset-tx-counter'],'Circulating Supply': data48.asset.params['circulating-supply'],
      'Total Supply': data48.asset.params['total'], '% in Circulation': (data48.asset.params['circulating-supply']/data48.asset.params['total']).toFixed(2) + '%'},
      {'Element':'49', 'Unit Name': data49.asset.params['unit-name'], 'ID': data49.asset['index'], 'Created at Round': data49.asset['created-at-round'], 
      'Name': data49.asset.params['name'], 'Transactions Counter': data49.asset['asset-tx-counter'],'Circulating Supply': data49.asset.params['circulating-supply'],
      'Total Supply': data49.asset.params['total'], '% in Circulation': (data49.asset.params['circulating-supply']/data49.asset.params['total']).toFixed(2) + '%'},
      {'Element':'50', 'Unit Name': data50.asset.params['unit-name'], 'ID': data50.asset['index'], 'Created at Round': data50.asset['created-at-round'], 
      'Name': data50.asset.params['name'], 'Transactions Counter': data50.asset['asset-tx-counter'],'Circulating Supply': data50.asset.params['circulating-supply'],
      'Total Supply': data50.asset.params['total'], '% in Circulation': (data50.asset.params['circulating-supply']/data50.asset.params['total']).toFixed(2) + '%'},
      {'Element':'51', 'Unit Name': data51.asset.params['unit-name'], 'ID': data51.asset['index'], 'Created at Round': data51.asset['created-at-round'], 
      'Name': data51.asset.params['name'], 'Transactions Counter': data51.asset['asset-tx-counter'],'Circulating Supply': data51.asset.params['circulating-supply'],
      'Total Supply': data51.asset.params['total'], '% in Circulation': (data51.asset.params['circulating-supply']/data51.asset.params['total']).toFixed(2) + '%'},
      {'Element':'52', 'Unit Name': data52.asset.params['unit-name'], 'ID': data52.asset['index'], 'Created at Round': data52.asset['created-at-round'], 
      'Name': data52.asset.params['name'], 'Transactions Counter': data52.asset['asset-tx-counter'],'Circulating Supply': data52.asset.params['circulating-supply'],
      'Total Supply': data52.asset.params['total'], '% in Circulation': (data52.asset.params['circulating-supply']/data52.asset.params['total']).toFixed(2) + '%'}];            
            
    //The table
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

      }); }); }); }); }); }); }); }); }); }); 
      }); }); }); }); }); }); }); }); }); }); 
      }); }); }); }); }); }); }); }); }); }); 
      }); }); }); }); }); }); }); }); }); }); 
      }); }); 
         
    }) })