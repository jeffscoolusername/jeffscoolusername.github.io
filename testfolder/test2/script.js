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
    var tonybaloney80 = 'loading';var tonybaloney81 = 'loading';var tonybaloney82 = 'loading';var tonybaloney83 = 'loading';
    var tonybaloney84 = 'loading';var tonybaloney85 = 'loading';var tonybaloney86 = 'loading';var tonybaloney87 = 'loading';
    var tonybaloney88 = 'loading';var tonybaloney89 = 'loading';var tonybaloney90 = 'loading';var tonybaloney91 = 'loading';
    var tonybaloney92 = 'loading';var tonybaloney93 = 'loading';var tonybaloney94 = 'loading';var tonybaloney95 = 'loading';
    var tonybaloney96 = 'loading';var tonybaloney97 = 'loading';var tonybaloney98 = 'loading';var tonybaloney99 = 'loading';
    var tonybaloney100 = 'loading';var tonybaloney101 = 'loading';var tonybaloney102 = 'loading';var tonybaloney103 = 'loading';
    var tonybaloney104 = 'loading';var tonybaloney105 = 'loading';var tonybaloney106 = 'loading';var tonybaloney107 = 'loading';
    var tonybaloney108 = 'loading';var tonybaloney109 = 'loading';var tonybaloney110 = 'loading';var tonybaloney111 = 'loading';
    var tonybaloney112 = 'loading';var tonybaloney113 = 'loading';var tonybaloney114 = 'loading';var tonybaloney115 = 'loading';
    var tonybaloney116 = 'loading';var tonybaloney117 = 'loading';var tonybaloney118 = 'loading';var tonybaloney119 = 'loading';
    var tonybaloney120 = 'loading';var tonybaloney121 = 'loading';var tonybaloney122 = 'loading';var tonybaloney123 = 'loading';
    var tonybaloney124 = 'loading';var tonybaloney125 = 'loading';var tonybaloney126 = 'loading';var tonybaloney127 = 'loading';
    var tonybaloney128 = 'loading';var tonybaloney129 = 'loading';var tonybaloney130 = 'loading';var tonybaloney131 = 'loading';
    var tonybaloney132 = 'loading';var tonybaloney133 = 'loading';var tonybaloney134 = 'loading';var tonybaloney135 = 'loading';
    var tonybaloney136 = 'loading';var tonybaloney137 = 'loading';var tonybaloney138 = 'loading';var tonybaloney139 = 'loading';
    var tonybaloney140 = 'loading';var tonybaloney141 = 'loading';var tonybaloney142 = 'loading';var tonybaloney143 = 'loading';
    var tonybaloney144 = 'loading';var tonybaloney145 = 'loading';var tonybaloney146 = 'loading';var tonybaloney147 = 'loading';
    var tonybaloney148 = 'loading';var tonybaloney149 = 'loading';var tonybaloney150 = 'loading';var tonybaloney151 = 'loading';
    var tonybaloney152 = 'loading';var tonybaloney153 = 'loading';var tonybaloney154 = 'loading';var tonybaloney155 = 'loading';
    var tonybaloney156 = 'loading';var tonybaloney157 = 'loading';var tonybaloney158 = 'loading';var tonybaloney159 = 'loading';
    var tonybaloney160 = 'loading';var tonybaloney161 = 'loading';var tonybaloney162 = 'loading';var tonybaloney163 = 'loading';
    var tonybaloney164 = 'loading';var tonybaloney165 = 'loading';var tonybaloney166 = 'loading';var tonybaloney167 = 'loading';
    var tonybaloney168 = 'loading';var tonybaloney169 = 'loading';var tonybaloney170 = 'loading';var tonybaloney171 = 'loading';
    var tonybaloney172 = 'loading';var tonybaloney173 = 'loading';var tonybaloney174 = 'loading';var tonybaloney175 = 'loading';
    var tonybaloney176 = 'loading';var tonybaloney177 = 'loading';var tonybaloney178 = 'loading';var tonybaloney179 = 'loading';
    var tonybaloney180 = 'loading';var tonybaloney181 = 'loading';var tonybaloney182 = 'loading';var tonybaloney183 = 'loading';
    var tonybaloney184 = 'loading';var tonybaloney185 = 'loading';var tonybaloney186 = 'loading';var tonybaloney187 = 'loading';
    var tonybaloney188 = 'loading';var tonybaloney189 = 'loading';var tonybaloney190 = 'loading';var tonybaloney191 = 'loading';
    var tonybaloney192 = 'loading';var tonybaloney193 = 'loading';var tonybaloney194 = 'loading';var tonybaloney195 = 'loading';
    var tonybaloney196 = 'loading';var tonybaloney197 = 'loading';var tonybaloney198 = 'loading';var tonybaloney199 = 'loading';
    var tonybaloney200 = 'loading';var tonybaloney201 = 'loading';var tonybaloney202 = 'loading';var tonybaloney203 = 'loading';
    var tonybaloney204 = 'loading';var tonybaloney205 = 'loading';var tonybaloney206 = 'loading';var tonybaloney207 = 'loading';


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
    getJSON(url10,async function(err, data10) {
    tonybaloney80 = data10.asset.params['unit-name'];tonybaloney81 = data10.asset['index'];tonybaloney82 = data10.asset['created-at-round'];
    tonybaloney83 = data10.asset.params['name'];tonybaloney84 = data10.asset['asset-tx-counter'];tonybaloney85 = data10.asset.params['circulating-supply'];
    tonybaloney86 = data10.asset.params['total'];tonybaloney87 = (data10.asset.params['circulating-supply']/data10.asset.params['total']).toFixed(2);})
    getJSON(url11,async function(err, data11) {        
    tonybaloney88 = data11.asset.params['unit-name'];tonybaloney89 = data11.asset['index'];tonybaloney90 = data11.asset['created-at-round'];
    tonybaloney91 = data11.asset.params['name'];tonybaloney92 = data11.asset['asset-tx-counter'];tonybaloney93 = data11.asset.params['circulating-supply'];
    tonybaloney94 = data11.asset.params['total'];tonybaloney95 = (data11.asset.params['circulating-supply']/data11.asset.params['total']).toFixed(2);})
    getJSON(url12,async function(err, data12) {
    tonybaloney96 = data12.asset.params['unit-name'];tonybaloney97 = data12.asset['index'];tonybaloney98 = data12.asset['created-at-round'];
    tonybaloney99 = data12.asset.params['name'];tonybaloney100 = data12.asset['asset-tx-counter'];tonybaloney101 = data12.asset.params['circulating-supply'];
    tonybaloney102 = data12.asset.params['total'];tonybaloney103 = (data12.asset.params['circulating-supply']/data12.asset.params['total']).toFixed(2);})
    getJSON(url13,async function(err, data13) {
    tonybaloney104 = data13.asset.params['unit-name'];tonybaloney105 = data13.asset['index'];tonybaloney106 = data13.asset['created-at-round'];
    tonybaloney107 = data13.asset.params['name'];tonybaloney108 = data13.asset['asset-tx-counter'];tonybaloney109 = data13.asset.params['circulating-supply'];
    tonybaloney110 = data13.asset.params['total'];tonybaloney111 = (data13.asset.params['circulating-supply']/data13.asset.params['total']).toFixed(2);})
    getJSON(url14,async function(err, data14) {
    tonybaloney112 = data14.asset.params['unit-name'];tonybaloney113 = data14.asset['index'];tonybaloney114 = data14.asset['created-at-round'];
    tonybaloney115 = data14.asset.params['name'];tonybaloney116 = data14.asset['asset-tx-counter'];tonybaloney117 = data14.asset.params['circulating-supply'];
    tonybaloney118 = data14.asset.params['total'];tonybaloney119 = (data14.asset.params['circulating-supply']/data14.asset.params['total']).toFixed(2);})
    getJSON(url15,async function(err, data15) {
    tonybaloney120 = data15.asset.params['unit-name'];tonybaloney121 = data15.asset['index'];tonybaloney122 = data15.asset['created-at-round'];
    tonybaloney123 = data15.asset.params['name'];tonybaloney124 = data15.asset['asset-tx-counter'];tonybaloney125 = data15.asset.params['circulating-supply'];
    tonybaloney126 = data15.asset.params['total'];tonybaloney127 = (data15.asset.params['circulating-supply']/data15.asset.params['total']).toFixed(2);})
    getJSON(url16,async function(err, data16) {
    tonybaloney128 = data16.asset.params['unit-name'];tonybaloney129 = data16.asset['index'];tonybaloney130 = data16.asset['created-at-round'];
    tonybaloney131 = data16.asset.params['name'];tonybaloney132 = data16.asset['asset-tx-counter'];tonybaloney133 = data16.asset.params['circulating-supply'];
    tonybaloney134 = data16.asset.params['total'];tonybaloney135 = (data16.asset.params['circulating-supply']/data16.asset.params['total']).toFixed(2);})
    getJSON(url17,async function(err, data17) {
    tonybaloney136 = data17.asset.params['unit-name'];tonybaloney137 = data17.asset['index'];tonybaloney138 = data17.asset['created-at-round'];
    tonybaloney139 = data17.asset.params['name'];tonybaloney140 = data17.asset['asset-tx-counter'];tonybaloney141 = data17.asset.params['circulating-supply'];
    tonybaloney142 = data17.asset.params['total'];tonybaloney143 = (data17.asset.params['circulating-supply']/data17.asset.params['total']).toFixed(2);})
    getJSON(url18,async function(err, data18) {
    tonybaloney144 = data18.asset.params['unit-name'];tonybaloney145 = data18.asset['index'];tonybaloney146 = data18.asset['created-at-round'];
    tonybaloney147 = data18.asset.params['name'];tonybaloney148 = data18.asset['asset-tx-counter'];tonybaloney149 = data18.asset.params['circulating-supply'];
    tonybaloney150 = data18.asset.params['total'];tonybaloney151 = (data18.asset.params['circulating-supply']/data18.asset.params['total']).toFixed(2);})
    getJSON(url19,async function(err, data19) {
    tonybaloney152 = data19.asset.params['unit-name'];tonybaloney153 = data19.asset['index'];tonybaloney154 = data19.asset['created-at-round'];
    tonybaloney155 = data19.asset.params['name'];tonybaloney156 = data19.asset['asset-tx-counter'];tonybaloney157 = data19.asset.params['circulating-supply'];
    tonybaloney158 = data19.asset.params['total'];tonybaloney159 = (data19.asset.params['circulating-supply']/data19.asset.params['total']).toFixed(2);})
    getJSON(url20,async function(err, data20) {
    tonybaloney160 = data20.asset.params['unit-name'];tonybaloney161 = data20.asset['index'];tonybaloney162 = data20.asset['created-at-round'];
    tonybaloney163 = data20.asset.params['name'];tonybaloney164 = data20.asset['asset-tx-counter'];tonybaloney165 = data20.asset.params['circulating-supply'];
    tonybaloney166 = data20.asset.params['total'];tonybaloney167 = (data20.asset.params['circulating-supply']/data20.asset.params['total']).toFixed(2);})
    getJSON(url21,async function(err, data21) {
    tonybaloney168 = data21.asset.params['unit-name'];tonybaloney169 = data21.asset['index'];tonybaloney170 = data21.asset['created-at-round'];
    tonybaloney171 = data21.asset.params['name'];tonybaloney172 = data21.asset['asset-tx-counter'];tonybaloney173 = data21.asset.params['circulating-supply'];
    tonybaloney174 = data21.asset.params['total'];tonybaloney175 = (data21.asset.params['circulating-supply']/data21.asset.params['total']).toFixed(2);})
    getJSON(url22,async function(err, data22) {
    tonybaloney176 = data22.asset.params['unit-name'];tonybaloney177 = data22.asset['index'];tonybaloney178 = data22.asset['created-at-round'];
    tonybaloney179 = data22.asset.params['name'];tonybaloney180 = data22.asset['asset-tx-counter'];tonybaloney181 = data22.asset.params['circulating-supply'];
    tonybaloney182 = data22.asset.params['total'];tonybaloney183 = (data22.asset.params['circulating-supply']/data22.asset.params['total']).toFixed(2);})
    getJSON(url23,async function(err, data23) {
    tonybaloney184 = data23.asset.params['unit-name'];tonybaloney185 = data23.asset['index'];tonybaloney186 = data23.asset['created-at-round'];
    tonybaloney187 = data23.asset.params['name'];tonybaloney188 = data23.asset['asset-tx-counter'];tonybaloney189 = data23.asset.params['circulating-supply'];
    tonybaloney190 = data23.asset.params['total'];tonybaloney191 = (data23.asset.params['circulating-supply']/data23.asset.params['total']).toFixed(2);})
    getJSON(url24,async function(err, data24) {
    tonybaloney192 = data24.asset.params['unit-name'];tonybaloney193 = data24.asset['index'];tonybaloney194 = data24.asset['created-at-round'];
    tonybaloney195 = data24.asset.params['name'];tonybaloney196 = data24.asset['asset-tx-counter'];tonybaloney197 = data24.asset.params['circulating-supply'];
    tonybaloney198 = data24.asset.params['total'];tonybaloney199 = (data24.asset.params['circulating-supply']/data24.asset.params['total']).toFixed(2);})
    getJSON(url25,async function(err, data25) {
    tonybaloney200 = data25.asset.params['unit-name'];tonybaloney201 = data25.asset['index'];tonybaloney202 = data25.asset['created-at-round'];
    tonybaloney203 = data25.asset.params['name'];tonybaloney204 = data25.asset['asset-tx-counter'];tonybaloney205 = data25.asset.params['circulating-supply'];
    tonybaloney206 = data25.asset.params['total'];tonybaloney207 = (data25.asset.params['circulating-supply']/data25.asset.params['total']).toFixed(2);})
        
        
        
        getJSON(url26,async function(err, data26) {getJSON(url27,async function(err, data27) {getJSON(url28,
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
      {'Element':'10', 'Unit Name': tonybaloney80, 'ID': tonybaloney81, 'Created at Round': tonybaloney82, 
      'Name': tonybaloney83, 'Transactions Counter': tonybaloney84, 'Circulating Supply': tonybaloney85,
      'Total Supply':tonybaloney86, '% in Circulation': tonybaloney87 + '%'},
      {'Element':'11', 'Unit Name': tonybaloney88, 'ID': tonybaloney89, 'Created at Round': tonybaloney90, 
      'Name': tonybaloney91, 'Transactions Counter': tonybaloney92, 'Circulating Supply': tonybaloney93,
      'Total Supply': tonybaloney94, '% in Circulation': tonybaloney95 + '%'},
      {'Element':'12', 'Unit Name': tonybaloney96, 'ID': tonybaloney97, 'Created at Round': tonybaloney98, 
      'Name': tonybaloney99, 'Transactions Counter': tonybaloney100, 'Circulating Supply': tonybaloney101,
      'Total Supply': tonybaloney102, '% in Circulation': tonybaloney103 + '%'},
      {'Element':'13', 'Unit Name': tonybaloney104, 'ID': tonybaloney105, 'Created at Round': tonybaloney106, 
      'Name': tonybaloney107, 'Transactions Counter': tonybaloney108, 'Circulating Supply': tonybaloney109,
      'Total Supply': tonybaloney110, '% in Circulation': tonybaloney111 + '%'},
      {'Element':'14', 'Unit Name': tonybaloney112, 'ID': tonybaloney113, 'Created at Round': tonybaloney114, 
      'Name': tonybaloney115, 'Transactions Counter': tonybaloney116, 'Circulating Supply': tonybaloney117,
      'Total Supply': tonybaloney118, '% in Circulation': tonybaloney119 + '%'},
      {'Element':'15', 'Unit Name': tonybaloney120, 'ID': tonybaloney121, 'Created at Round': tonybaloney122, 
      'Name': tonybaloney123, 'Transactions Counter': tonybaloney124, 'Circulating Supply': tonybaloney125,
      'Total Supply': tonybaloney126, '% in Circulation': tonybaloney127 + '%'},
      {'Element':'16', 'Unit Name': tonybaloney128, 'ID': tonybaloney129, 'Created at Round': tonybaloney130, 
      'Name': tonybaloney131, 'Transactions Counter': tonybaloney132,'Circulating Supply': tonybaloney133,
      'Total Supply': tonybaloney134, '% in Circulation': tonybaloney135 + '%'},
      {'Element':'17', 'Unit Name': tonybaloney136, 'ID': tonybaloney137, 'Created at Round': tonybaloney138, 
      'Name': tonybaloney139, 'Transactions Counter': tonybaloney140,'Circulating Supply': tonybaloney141,
      'Total Supply': tonybaloney142, '% in Circulation': tonybaloney143 + '%'},
      {'Element':'18', 'Unit Name': tonybaloney144, 'ID': tonybaloney145, 'Created at Round': tonybaloney146, 
      'Name': tonybaloney147, 'Transactions Counter': tonybaloney148,'Circulating Supply': tonybaloney149,
      'Total Supply': tonybaloney150, '% in Circulation': tonybaloney151 + '%'},
      {'Element':'19', 'Unit Name': tonybaloney152, 'ID': tonybaloney152, 'Created at Round': tonybaloney153, 
      'Name': tonybaloney154, 'Transactions Counter': tonybaloney155,'Circulating Supply': tonybaloney156,
      'Total Supply': tonybaloney157, '% in Circulation': tonybaloney158 + '%'},
      {'Element':'20', 'Unit Name': tonybaloney159, 'ID': tonybaloney160, 'Created at Round': tonybaloney161, 
      'Name': tonybaloney162, 'Transactions Counter': tonybaloney163, 'Circulating Supply': tonybaloney164,
      'Total Supply': tonybaloney165, '% in Circulation': tonybaloney166 + '%'},
      {'Element':'21', 'Unit Name': tonybaloney167, 'ID': tonybaloney168, 'Created at Round': tonybaloney169, 
      'Name': tonybaloney170, 'Transactions Counter': tonybaloney171, 'Circulating Supply': tonybaloney172,
      'Total Supply': tonybaloney173, '% in Circulation': tonybaloney174 + '%'},
      {'Element':'22', 'Unit Name': tonybaloney175, 'ID': tonybaloney176, 'Created at Round': tonybaloney177, 
      'Name': tonybaloney178, 'Transactions Counter': tonybaloney179, 'Circulating Supply': tonybaloney180,
      'Total Supply': tonybaloney181, '% in Circulation': tonybaloney182 + '%'},
      {'Element':'23', 'Unit Name': tonybaloney183, 'ID': tonybaloney184, 'Created at Round': tonybaloney185, 
      'Name': tonybaloney186, 'Transactions Counter': tonybaloney187,'Circulating Supply': tonybaloney188,
      'Total Supply': tonybaloney189, '% in Circulation': tonybaloney190 + '%'},
      {'Element':'24', 'Unit Name': tonybaloney191, 'ID': tonybaloney192, 'Created at Round': tonybaloney193, 
      'Name': tonybaloney194, 'Transactions Counter': tonybaloney195,'Circulating Supply': tonybaloney196,
      'Total Supply': tonybaloney197, '% in Circulation': tonybaloney198 + '%'},
      {'Element':'25', 'Unit Name': tonybaloney199, 'ID': tonybaloney200, 'Created at Round': tonybaloney201, 
      'Name': tonybaloney202, 'Transactions Counter': tonybaloney203,'Circulating Supply': tonybaloney204,
      'Total Supply': tonybaloney205, '% in Circulation': tonybaloney206 + '%'},
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
      }); }); }); }); }); });
         
    }) })