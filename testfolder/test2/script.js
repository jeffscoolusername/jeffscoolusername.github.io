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
    var api = 'https://indexer.algoexplorerapi.io/v2/assets/';
    var loading = 'loading';

    var url0 = api + '397111682';var url1 = api + '353409462';var url2 = api + '430838314';var url3 = api + '226265212';var url4 = api + '555540865';
    var url5 = api + '426526699';var url6 = api + '393495312';var url7 = api + '305992851';var url8 = api + '453816186';var url9 = api + '457205263';
    var url10 = api + '523683256';var url11 = api + '447852812';var url12 = api + '445905873';var url13 = api + '310014962';var url14 = api + '463554836';
    var url15 = api + '227358511';var url16 = api + '604643747';var url17 = api + '446220964';var url18 = api + '409604194';var url19 = api + '466716175';
    var url20 = api + '542132831';var url21 = api + '397629052';var url22 = api + '163650';var url23 = api + '393537671';var url24 = api + '540605589';
    var url25 = api + '233939122';var url26 = api + '470335962';var url27 = api + '382781470';var url28 = api + '469835031';var url29 = api + '615093377';
    var url30 = api + '473180477';var url31 = api + '478549868';var url32 = api + '401752010';var url33 = api + '251014570';var url34 = api + '342889824';
    var url35 = api + '251014570';var url36 = api + '498684064';var url37 = api + '137020565';var url38 = api + '402495345';var url39 = api + '388592191';
    var url40 = api + '297995609';var url41 = api + '585221469';var url42 = api + '571576867';var url43 = api + '281003266';var url44 = api + '435335235';
    var url45 = api + '511491168';var url46 = api + '511491168';var url47 = api + '319473667';var url48 = api + '601894079';var url49 = api + '470842789';
    var url50 = api + '391379500';var url51 = api + '591601798';var url52 = api + '393155456';
   
    var tb0,tb1,tb2,tb3,tb4,tb5,tb6,tb7,tb8,tb9,tb10,tb11,tb12,tb13,tb14,tb15,tb16,tb17,tb18,tb19,tb20,tb21,tb22,tb23,tb24,tb25,tb26,tb27,tb28,tb29,tb30,tb31, 
    tb32,tb33,tb34,tb35,tb36,tb37,tb38,tb39,tb40,tb41,tb42,tb43,tb44,tb45,tb46,tb47,tb48,tb49,tb50,tb51,tb52,tb53,tb54,tb55,tb56,tb57,tb58,tb59,tb60,tb61,tb62, 
    tb63,tb64,tb65,tb66,tb67,tb68,tb69,tb70,tb71,tb72,tb73,tb74,tb75,tb76,tb77,tb78,tb79,tb80,tb81,tb82,tb83,tb84,tb85,tb86,tb87,tb88,tb89,tb90,tb91,tb92,tb93,
    tb94,tb95,tb96,tb97,tb98,tb99,tb100,tb101,tb102,tb103,tb104,tb105,tb106,tb107,tb108,tb109,tb110,tb111,tb112,tb113,tb114,tb115,tb116,tb117,tb118,tb119,tb120,
    tb121,tb122,tb123,tb124,tb125,tb126,tb127,tb128,tb129,tb130,tb131,tb132,tb133,tb134,tb135,tb136,tb137,tb138,tb139,tb140,tb141,tb142,tb143,tb144,tb145,tb146,
    tb147,tb148,tb149,tb150,tb151,tb152,tb153,tb154,tb155,tb156,tb157,tb158,tb159,tb160,tb161,tb162,tb163,tb164,tb165,tb166,tb167,tb168,tb169,tb170,tb171 = loading;

    var tb172 = loading;var tb173 = loading;var tb174 = loading;var tb175 = loading;
    var tb176 = loading;var tb177 = loading;var tb178 = loading;var tb179 = loading;
    var tb180 = loading;var tb181 = loading;var tb182 = loading;var tb183 = loading;
    var tb184 = loading;var tb185 = loading;var tb186 = loading;var tb187 = loading;
    var tb188 = loading;var tb189 = loading;var tb190 = loading;var tb191 = loading;
    var tb192 = loading;var tb193 = loading;var tb194 = loading;var tb195 = loading;
    var tb196 = loading;var tb197 = loading;var tb198 = loading;var tb199 = loading;
    var tb200 = loading;var tb201 = loading;var tb202 = loading;var tb203 = loading;
    var tb204 = loading;var tb205 = loading;var tb206 = loading;var tb207 = loading;
    var tb208 = loading;var tb209 = loading;var tb210 = loading;var tb211 = loading;
    var tb212 = loading;var tb213 = loading;var tb214 = loading;var tb215 = loading;
    var tb216 = loading;var tb217 = loading;var tb218 = loading;var tb219 = loading;
    var tb220 = loading;var tb221 = loading;var tb222 = loading;var tb223 = loading;
    var tb224 = loading;var tb225 = loading;var tb226 = loading;var tb227 = loading;
    var tb228 = loading;var tb229 = loading;var tb230 = loading;var tb231 = loading;
    var tb232 = loading;var tb233 = loading;var tb234 = loading;var tb235 = loading;
    var tb236 = loading;var tb237 = loading;var tb238 = loading;var tb239 = loading;
    var tb240 = loading;var tb241 = loading;var tb242 = loading;var tb243 = loading;
    var tb244 = loading;var tb245 = loading;var tb246 = loading;var tb247 = loading;
    var tb248 = loading;var tb249 = loading;var tb250 = loading;var tb251 = loading;
    var tb252 = loading;var tb253 = loading;var tb254 = loading;var tb255 = loading;

    //Wall of API calls - Todo: Make this more efficient
    getJSON(url0,async function(err, data0){tb0 = data0.asset.params['unit-name'];tb1 = data0.asset['index'];tb2 = data0.asset['created-at-round'];
    tb3 = data0.asset.params['name'];tb4 = data0.asset['asset-tx-counter'];tb5 = data0.asset.params['circulating-supply'];tb6 = data0.asset.params['total'];
    tb7 = (data0.asset.params['circulating-supply']/data0.asset.params['total']).toFixed(2);})                
    getJSON(url1,async function(err, data1){tb8 = data1.asset.params['unit-name'];tb9 = data1.asset['index'];tb10 = data1.asset['created-at-round'];
    tb11 = data1.asset.params['name'];tb12 = data1.asset['asset-tx-counter'];tb13 = data1.asset.params['circulating-supply'];tb14 = data1.asset.params['total'];
    tb15 = (data1.asset.params['circulating-supply']/data1.asset.params['total']).toFixed(2);})            
    getJSON(url2,async function(err, data2){tb16 = data2.asset.params['unit-name'];tb17 = data2.asset['index'];tb18 = data2.asset['created-at-round'];
    tb19 = data2.asset.params['name'];tb20 = data2.asset['asset-tx-counter'];tb21 = data2.asset.params['circulating-supply'];tb22 = data2.asset.params['total'];
    tb23 = (data2.asset.params['circulating-supply']/data2.asset.params['total']).toFixed(2);})                
    getJSON(url3,async function(err, data3) {
    tb24 = data3.asset.params['unit-name'];tb25 = data3.asset['index'];tb26 = data3.asset['created-at-round'];
    tb27 = data3.asset.params['name'];tb28 = data3.asset['asset-tx-counter'];tb29 = data3.asset.params['circulating-supply'];
    tb30 = data3.asset.params['total'];tb31 = (data3.asset.params['circulating-supply']/data3.asset.params['total']).toFixed(2);})                      
    getJSON(url4,async function(err, data4) {
    tb32 = data4.asset.params['unit-name'];tb33 = data4.asset['index'];tb34 = data4.asset['created-at-round'];
    tb35 = data4.asset.params['name'];tb36 = data4.asset['asset-tx-counter'];tb37 = data4.asset.params['circulating-supply'];
    tb38 = data4.asset.params['total'];tb39 = (data4.asset.params['circulating-supply']/data4.asset.params['total']).toFixed(2);})  
    getJSON(url5,async function(err, data5) {
    tb40 = data5.asset.params['unit-name'];tb41 = data5.asset['index'];tb42 = data5.asset['created-at-round'];
    tb43 = data5.asset.params['name'];tb44 = data5.asset['asset-tx-counter'];tb45 = data5.asset.params['circulating-supply'];
    tb46 = data5.asset.params['total'];tb47 = (data5.asset.params['circulating-supply']/data5.asset.params['total']).toFixed(2);})          
    getJSON(url6,async function(err, data6) {
    tb48 = data6.asset.params['unit-name'];tb49 = data6.asset['index'];tb50 = data6.asset['created-at-round'];
    tb51 = data6.asset.params['name'];tb52 = data6.asset['asset-tx-counter'];tb53 = data6.asset.params['circulating-supply'];
    tb54 = data6.asset.params['total'];tb55 = (data6.asset.params['circulating-supply']/data6.asset.params['total']).toFixed(2);})   
    getJSON(url7,async function(err, data7) {
    tb56 = data7.asset.params['unit-name'];tb57 = data7.asset['index'];tb58 = data7.asset['created-at-round'];
    tb59 = data7.asset.params['name'];tb60 = data7.asset['asset-tx-counter'];tb61 = data7.asset.params['circulating-supply'];
    tb62 = data7.asset.params['total'];tb63 = (data7.asset.params['circulating-supply']/data7.asset.params['total']).toFixed(2);})
    getJSON(url8,async function(err, data8) {
    tb64 = data8.asset.params['unit-name'];tb65 = data8.asset['index'];tb66 = data8.asset['created-at-round'];
    tb67 = data8.asset.params['name'];tb68 = data8.asset['asset-tx-counter'];tb69 = data8.asset.params['circulating-supply'];
    tb70 = data8.asset.params['total'];tb71 = (data8.asset.params['circulating-supply']/data8.asset.params['total']).toFixed(2);})
    getJSON(url9,async function(err, data9) {
    tb72 = data9.asset.params['unit-name'];tb73 = data9.asset['index'];tb74 = data9.asset['created-at-round'];
    tb75 = data9.asset.params['name'];tb76 = data9.asset['asset-tx-counter'];tb77 = data9.asset.params['circulating-supply'];
    tb78 = data9.asset.params['total'];tb79 = (data9.asset.params['circulating-supply']/data9.asset.params['total']).toFixed(2);})
    getJSON(url10,async function(err, data10) {
    tb80 = data10.asset.params['unit-name'];tb81 = data10.asset['index'];tb82 = data10.asset['created-at-round'];
    tb83 = data10.asset.params['name'];tb84 = data10.asset['asset-tx-counter'];tb85 = data10.asset.params['circulating-supply'];
    tb86 = data10.asset.params['total'];tb87 = (data10.asset.params['circulating-supply']/data10.asset.params['total']).toFixed(2);})
    getJSON(url11,async function(err, data11) {        
    tb88 = data11.asset.params['unit-name'];tb89 = data11.asset['index'];tb90 = data11.asset['created-at-round'];
    tb91 = data11.asset.params['name'];tb92 = data11.asset['asset-tx-counter'];tb93 = data11.asset.params['circulating-supply'];
    tb94 = data11.asset.params['total'];tb95 = (data11.asset.params['circulating-supply']/data11.asset.params['total']).toFixed(2);})
    getJSON(url12,async function(err, data12) {
    tb96 = data12.asset.params['unit-name'];tb97 = data12.asset['index'];tb98 = data12.asset['created-at-round'];
    tb99 = data12.asset.params['name'];tb100 = data12.asset['asset-tx-counter'];tb101 = data12.asset.params['circulating-supply'];
    tb102 = data12.asset.params['total'];tb103 = (data12.asset.params['circulating-supply']/data12.asset.params['total']).toFixed(2);})
    getJSON(url13,async function(err, data13) {
    tb104 = data13.asset.params['unit-name'];tb105 = data13.asset['index'];tb106 = data13.asset['created-at-round'];
    tb107 = data13.asset.params['name'];tb108 = data13.asset['asset-tx-counter'];tb109 = data13.asset.params['circulating-supply'];
    tb110 = data13.asset.params['total'];tb111 = (data13.asset.params['circulating-supply']/data13.asset.params['total']).toFixed(2);})
    getJSON(url14,async function(err, data14) {
    tb112 = data14.asset.params['unit-name'];tb113 = data14.asset['index'];tb114 = data14.asset['created-at-round'];
    tb115 = data14.asset.params['name'];tb116 = data14.asset['asset-tx-counter'];tb117 = data14.asset.params['circulating-supply'];
    tb118 = data14.asset.params['total'];tb119 = (data14.asset.params['circulating-supply']/data14.asset.params['total']).toFixed(2);})
    getJSON(url15,async function(err, data15) {
    tb120 = data15.asset.params['unit-name'];tb121 = data15.asset['index'];tb122 = data15.asset['created-at-round'];
    tb123 = data15.asset.params['name'];tb124 = data15.asset['asset-tx-counter'];tb125 = data15.asset.params['circulating-supply'];
    tb126 = data15.asset.params['total'];tb127 = (data15.asset.params['circulating-supply']/data15.asset.params['total']).toFixed(2);})
    getJSON(url16,async function(err, data16) {
    tb128 = data16.asset.params['unit-name'];tb129 = data16.asset['index'];tb130 = data16.asset['created-at-round'];
    tb131 = data16.asset.params['name'];tb132 = data16.asset['asset-tx-counter'];tb133 = data16.asset.params['circulating-supply'];
    tb134 = data16.asset.params['total'];tb135 = (data16.asset.params['circulating-supply']/data16.asset.params['total']).toFixed(2);})
    getJSON(url17,async function(err, data17) {
    tb136 = data17.asset.params['unit-name'];tb137 = data17.asset['index'];tb138 = data17.asset['created-at-round'];
    tb139 = data17.asset.params['name'];tb140 = data17.asset['asset-tx-counter'];tb141 = data17.asset.params['circulating-supply'];
    tb142 = data17.asset.params['total'];tb143 = (data17.asset.params['circulating-supply']/data17.asset.params['total']).toFixed(2);})
    getJSON(url18,async function(err, data18) {
    tb144 = data18.asset.params['unit-name'];tb145 = data18.asset['index'];tb146 = data18.asset['created-at-round'];
    tb147 = data18.asset.params['name'];tb148 = data18.asset['asset-tx-counter'];tb149 = data18.asset.params['circulating-supply'];
    tb150 = data18.asset.params['total'];tb151 = (data18.asset.params['circulating-supply']/data18.asset.params['total']).toFixed(2);})
    getJSON(url19,async function(err, data19) {
    tb152 = data19.asset.params['unit-name'];tb153 = data19.asset['index'];tb154 = data19.asset['created-at-round'];
    tb155 = data19.asset.params['name'];tb156 = data19.asset['asset-tx-counter'];tb157 = data19.asset.params['circulating-supply'];
    tb158 = data19.asset.params['total'];tb159 = (data19.asset.params['circulating-supply']/data19.asset.params['total']).toFixed(2);})
    getJSON(url20,async function(err, data20) {
    tb160 = data20.asset.params['unit-name'];tb161 = data20.asset['index'];tb162 = data20.asset['created-at-round'];
    tb163 = data20.asset.params['name'];tb164 = data20.asset['asset-tx-counter'];tb165 = data20.asset.params['circulating-supply'];
    tb166 = data20.asset.params['total'];tb167 = (data20.asset.params['circulating-supply']/data20.asset.params['total']).toFixed(2);})
    getJSON(url21,async function(err, data21) {
    tb168 = data21.asset.params['unit-name'];tb169 = data21.asset['index'];tb170 = data21.asset['created-at-round'];
    tb171 = data21.asset.params['name'];tb172 = data21.asset['asset-tx-counter'];tb173 = data21.asset.params['circulating-supply'];
    tb174 = data21.asset.params['total'];tb175 = (data21.asset.params['circulating-supply']/data21.asset.params['total']).toFixed(2);})
    getJSON(url22,async function(err, data22) {
    tb176 = data22.asset.params['unit-name'];tb177 = data22.asset['index'];tb178 = data22.asset['created-at-round'];
    tb179 = data22.asset.params['name'];tb180 = data22.asset['asset-tx-counter'];tb181 = data22.asset.params['circulating-supply'];
    tb182 = data22.asset.params['total'];tb183 = (data22.asset.params['circulating-supply']/data22.asset.params['total']).toFixed(2);})
    getJSON(url23,async function(err, data23) {
    tb184 = data23.asset.params['unit-name'];tb185 = data23.asset['index'];tb186 = data23.asset['created-at-round'];
    tb187 = data23.asset.params['name'];tb188 = data23.asset['asset-tx-counter'];tb189 = data23.asset.params['circulating-supply'];
    tb190 = data23.asset.params['total'];tb191 = (data23.asset.params['circulating-supply']/data23.asset.params['total']).toFixed(2);})
    getJSON(url24,async function(err, data24) {
    tb192 = data24.asset.params['unit-name'];tb193 = data24.asset['index'];tb194 = data24.asset['created-at-round'];
    tb195 = data24.asset.params['name'];tb196 = data24.asset['asset-tx-counter'];tb197 = data24.asset.params['circulating-supply'];
    tb198 = data24.asset.params['total'];tb199 = (data24.asset.params['circulating-supply']/data24.asset.params['total']).toFixed(2);})
    getJSON(url25,async function(err, data25) {
    tb200 = data25.asset.params['unit-name'];tb201 = data25.asset['index'];tb202 = data25.asset['created-at-round'];
    tb203 = data25.asset.params['name'];tb204 = data25.asset['asset-tx-counter'];tb205 = data25.asset.params['circulating-supply'];
    tb206 = data25.asset.params['total'];tb207 = (data25.asset.params['circulating-supply']/data25.asset.params['total']).toFixed(2);})
    getJSON(url26,async function(err, data26) {
    tb208 = data26.asset.params['unit-name'];tb209 = data26.asset['index'];tb210 = data26.asset['created-at-round'];
    tb211 = data26.asset.params['name'];tb212 = data26.asset['asset-tx-counter'];tb213 = data26.asset.params['circulating-supply'];
    tb214 = data26.asset.params['total'];tb215 = (data26.asset.params['circulating-supply']/data26.asset.params['total']).toFixed(2);})
    getJSON(url27,async function(err, data27) {
    tb216 = data27.asset.params['unit-name'];tb217 = data27.asset['index'];tb218 = data27.asset['created-at-round'];
    tb219 = data27.asset.params['name'];tb220 = data27.asset['asset-tx-counter'];tb221 = data27.asset.params['circulating-supply'];
    tb222 = data27.asset.params['total'];tb223 = (data27.asset.params['circulating-supply']/data27.asset.params['total']).toFixed(2);})
    getJSON(url28,async function(err, data28) {
    tb224 = data28.asset.params['unit-name'];tb225 = data28.asset['index'];tb226 = data28.asset['created-at-round'];
    tb227 = data28.asset.params['name'];tb228 = data28.asset['asset-tx-counter'];tb229 = data28.asset.params['circulating-supply'];
    tb230 = data28.asset.params['total'];tb231 = (data28.asset.params['circulating-supply']/data28.asset.params['total']).toFixed(2);})
    getJSON(url29,async function(err, data29) {
    tb232 = data29.asset.params['unit-name'];tb233 = data29.asset['index'];tb234 = data29.asset['created-at-round'];
    tb235 = data29.asset.params['name'];tb236 = data29.asset['asset-tx-counter'];tb237 = data29.asset.params['circulating-supply'];
    tb238 = data29.asset.params['total'];tb239 = (data29.asset.params['circulating-supply']/data29.asset.params['total']).toFixed(2);})
    getJSON(url30,async function(err, data30) {
    tb240 = data30.asset.params['unit-name'];tb241 = data30.asset['index'];tb242 = data30.asset['created-at-round'];
    tb243 = data30.asset.params['name'];tb244 = data30.asset['asset-tx-counter'];tb245 = data30.asset.params['circulating-supply'];
    tb246 = data30.asset.params['total'];tb247 = (data30.asset.params['circulating-supply']/data30.asset.params['total']).toFixed(2);})
    getJSON(url31,async function(err, data31) {
    tb248 = data31.asset.params['unit-name'];tb249 = data31.asset['index'];tb250 = data31.asset['created-at-round'];
    tb251 = data31.asset.params['name'];tb252 = data31.asset['asset-tx-counter'];tb253 = data31.asset.params['circulating-supply'];
    tb254 = data31.asset.params['total'];tb255 = (data31.asset.params['circulating-supply']/data31.asset.params['total']).toFixed(2);})
    
        
        getJSON(url32,
    async function(err, data32) {getJSON(url33,async function(err, data33) {getJSON(url34,async function(err, data34) {getJSON(url35,async function(err, data35) {getJSON(url36,
    async function(err, data36) {getJSON(url37,async function(err, data37) {getJSON(url38,async function(err, data38) {getJSON(url39,async function(err, data39) {getJSON(url40,
    async function(err, data40) {getJSON(url41,async function(err, data41) {getJSON(url42,async function(err, data42) {getJSON(url43,async function(err, data43) {getJSON(url44,
    async function(err, data44) {getJSON(url45,async function(err, data45) {getJSON(url46,async function(err, data46) {getJSON(url47,async function(err, data47) {getJSON(url48,
    async function(err, data48) {getJSON(url49,async function(err, data49) {getJSON(url50,async function(err, data50) {getJSON(url51,async function(err, data51) {getJSON(url52,
    async function(err, data52) { 


    // The array
    var jsObj = [
      {'Element':'0','Unit Name': tb0,'ID': tb1,'Created at Round': tb2,'Name': tb3,'Transactions Counter': tb4,'Circulating Supply': tb5,
      'Total Supply': tb6,'% in Circulation': tb7 + '%'},
      {'Element':'1','Unit Name': tb8,'ID': tb9,'Created at Round': tb10,'Name': tb11,'Transactions Counter': tb12,'Circulating Supply': tb13,
      'Total Supply': tb14,'% in Circulation': tb15 + '%'},
      {'Element':'2','Unit Name': tb16,'ID': tb17,'Created at Round': tb18,'Name': tb19,'Transactions Counter': tb20,'Circulating Supply': tb21,
      'Total Supply': tb22,'% in Circulation': tb23 + '%'},
      {'Element':'3','Unit Name': tb24,'ID': tb25,'Created at Round': tb26,'Name': tb27,'Transactions Counter': tb28,'Circulating Supply': tb29,
      'Total Supply': tb30,'% in Circulation': tb31 + '%'},
      {'Element':'4', 'Unit Name': tb32,'ID': tb33, 'Created at Round': tb34,'Name': tb35,'Transactions Counter': tb36,'Circulating Supply': tb37,
      'Total Supply': tb38, '% in Circulation': tb39 + '%'},
      {'Element':'5', 'Unit Name': tb40, 'ID': tb41, 'Created at Round': tb42, 
      'Name': tb43, 'Transactions Counter': tb44, 'Circulating Supply': tb45,
      'Total Supply': tb46, '% in Circulation': tb47 + '%'},
      {'Element':'6', 'Unit Name': tb48, 'ID': tb49, 'Created at Round': tb50, 
      'Name': tb51, 'Transactions Counter': tb52, 'Circulating Supply': tb53,
      'Total Supply': tb54, '% in Circulation': tb55 + '%'},
      {'Element':'7', 'Unit Name':tb56, 'ID': tb57, 'Created at Round': tb58, 
      'Name': tb59, 'Transactions Counter': tb60, 'Circulating Supply': tb61,
      'Total Supply': tb62, '% in Circulation': tb63 + '%'},
      {'Element':'8', 'Unit Name': tb64, 'ID': tb65, 'Created at Round': tb66, 
      'Name': tb67, 'Transactions Counter': tb68, 'Circulating Supply': tb69,
      'Total Supply': tb70, '% in Circulation': tb71 + '%'},
      {'Element':'9', 'Unit Name': tb72, 'ID': tb73, 'Created at Round': tb74, 
      'Name': tb75, 'Transactions Counter': tb76, 'Circulating Supply': tb77,
      'Total Supply': tb78, '% in Circulation': tb79 + '%'},
      {'Element':'10', 'Unit Name': tb80, 'ID': tb81, 'Created at Round': tb82, 
      'Name': tb83, 'Transactions Counter': tb84, 'Circulating Supply': tb85,
      'Total Supply':tb86, '% in Circulation': tb87 + '%'},
      {'Element':'11', 'Unit Name': tb88, 'ID': tb89, 'Created at Round': tb90, 
      'Name': tb91, 'Transactions Counter': tb92, 'Circulating Supply': tb93,
      'Total Supply': tb94, '% in Circulation': tb95 + '%'},
      {'Element':'12', 'Unit Name': tb96, 'ID': tb97, 'Created at Round': tb98, 
      'Name': tb99, 'Transactions Counter': tb100, 'Circulating Supply': tb101,
      'Total Supply': tb102, '% in Circulation': tb103 + '%'},
      {'Element':'13', 'Unit Name': tb104, 'ID': tb105, 'Created at Round': tb106, 
      'Name': tb107, 'Transactions Counter': tb108, 'Circulating Supply': tb109,
      'Total Supply': tb110, '% in Circulation': tb111 + '%'},
      {'Element':'14', 'Unit Name': tb112, 'ID': tb113, 'Created at Round': tb114, 
      'Name': tb115, 'Transactions Counter': tb116, 'Circulating Supply': tb117,
      'Total Supply': tb118, '% in Circulation': tb119 + '%'},
      {'Element':'15', 'Unit Name': tb120, 'ID': tb121, 'Created at Round': tb122, 
      'Name': tb123, 'Transactions Counter': tb124, 'Circulating Supply': tb125,
      'Total Supply': tb126, '% in Circulation': tb127 + '%'},
      {'Element':'16', 'Unit Name': tb128, 'ID': tb129, 'Created at Round': tb130, 
      'Name': tb131, 'Transactions Counter': tb132,'Circulating Supply': tb133,
      'Total Supply': tb134, '% in Circulation': tb135 + '%'},
      {'Element':'17', 'Unit Name': tb136, 'ID': tb137, 'Created at Round': tb138, 
      'Name': tb139, 'Transactions Counter': tb140,'Circulating Supply': tb141,
      'Total Supply': tb142, '% in Circulation': tb143 + '%'},
      {'Element':'18', 'Unit Name': tb144, 'ID': tb145, 'Created at Round': tb146, 
      'Name': tb147, 'Transactions Counter': tb148,'Circulating Supply': tb149,
      'Total Supply': tb150, '% in Circulation': tb151 + '%'},
      {'Element':'19', 'Unit Name': tb152, 'ID': tb153, 'Created at Round': tb154, 
      'Name': tb155, 'Transactions Counter': tb156,'Circulating Supply': tb157,
      'Total Supply': tb158, '% in Circulation': tb159 + '%'},
      {'Element':'20', 'Unit Name': tb160, 'ID': tb161, 'Created at Round': tb162, 
      'Name': tb163, 'Transactions Counter': tb164, 'Circulating Supply': tb165,
      'Total Supply': tb166, '% in Circulation': tb167 + '%'},
      {'Element':'21', 'Unit Name': tb168, 'ID': tb169, 'Created at Round': tb170, 
      'Name': tb171, 'Transactions Counter': tb172, 'Circulating Supply': tb173,
      'Total Supply': tb174, '% in Circulation': tb175 + '%'},
      {'Element':'22', 'Unit Name': tb176, 'ID': tb177, 'Created at Round': tb178, 
      'Name': tb179, 'Transactions Counter': tb180, 'Circulating Supply': tb181,
      'Total Supply': tb182, '% in Circulation': tb183 + '%'},
      {'Element':'23', 'Unit Name': tb184, 'ID': tb185, 'Created at Round': tb186, 
      'Name': tb187, 'Transactions Counter': tb188,'Circulating Supply': tb189,
      'Total Supply': tb190, '% in Circulation': tb191 + '%'},
      {'Element':'24', 'Unit Name': tb192, 'ID': tb193, 'Created at Round': tb194, 
      'Name': tb195, 'Transactions Counter': tb196,'Circulating Supply': tb197,
      'Total Supply': tb198, '% in Circulation': tb199 + '%'},
      {'Element':'25', 'Unit Name': tb200, 'ID': tb201, 'Created at Round': tb202, 
      'Name': tb203, 'Transactions Counter': tb204,'Circulating Supply': tb205,
      'Total Supply': tb206, '% in Circulation': tb207 + '%'},
      {'Element':'26', 'Unit Name': tb208, 'ID': tb209, 'Created at Round': tb210, 
      'Name': tb211, 'Transactions Counter': tb212,'Circulating Supply': tb213,
      'Total Supply': tb214, '% in Circulation': tb215 + '%'},
      {'Element':'27', 'Unit Name': tb216, 'ID': tb217, 'Created at Round': tb218, 
      'Name': tb219, 'Transactions Counter': tb220,'Circulating Supply': tb221,
      'Total Supply': tb222, '% in Circulation': tb223 + '%'},
      {'Element':'28', 'Unit Name': tb224, 'ID': tb225, 'Created at Round': tb226, 
      'Name': tb227, 'Transactions Counter': tb228,'Circulating Supply': tb229,
      'Total Supply': tb230, '% in Circulation': tb231 + '%'},
      {'Element':'29', 'Unit Name': tb232, 'ID': tb233, 'Created at Round': tb234, 
      'Name': tb235, 'Transactions Counter': tb236,'Circulating Supply': tb237,
      'Total Supply': tb238, '% in Circulation': tb239 + '%'},
      {'Element':'30', 'Unit Name': tb240, 'ID': tb241, 'Created at Round': tb242, 
      'Name': tb243, 'Transactions Counter': tb244,'Circulating Supply': tb245,
      'Total Supply': tb246, '% in Circulation': tb247 + '%'},
      {'Element':'31', 'Unit Name': tb248, 'ID': tb249, 'Created at Round': tb250, 
      'Name': tb251, 'Transactions Counter': tb252,'Circulating Supply': tb253,
      'Total Supply': tb254, '% in Circulation': tb255 + '%'},
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
         
    }) })