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
        var url35 = algoexplorerapi + '510337930';
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
        var url46 = algoexplorerapi + '230946361';
        var url47 = algoexplorerapi + '319473667';
        var url48 = algoexplorerapi + '601894079';
        var url49 = algoexplorerapi + '470842789';
        var url50 = algoexplorerapi + '391379500';
        var url51 = algoexplorerapi + '591601798';
        var url52 = algoexplorerapi + '393155456';

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

        var unitname10 = 'loading';
        var index10 = 'loading';
        var createdatround10 = 'loading';
        var name10 = 'loading';
        var txcounter10 = 'loading';
        var supply10 = 'loading';
        var total10 = 'loading';
        var circulation10 = 'loading';

        var unitname11 = 'loading';
        var index11 = 'loading';
        var createdatround11 = 'loading';
        var name11 = 'loading';
        var txcounter11 = 'loading';
        var supply11 = 'loading';
        var total11 = 'loading';
        var circulation11 = 'loading';

        var unitname12 = 'loading';
        var index12 = 'loading';
        var createdatround12 = 'loading';
        var name12 = 'loading';
        var txcounter12 = 'loading';
        var supply12 = 'loading';
        var total12 = 'loading';
        var circulation12 = 'loading';

        var unitname13 = 'loading';
        var index13 = 'loading';
        var createdatround13 = 'loading';
        var name13 = 'loading';
        var txcounter13 = 'loading';
        var supply13 = 'loading';
        var total13 = 'loading';
        var circulation13 = 'loading';

        var unitname14 = 'loading';
        var index14 = 'loading';
        var createdatround14 = 'loading';
        var name14 = 'loading';
        var txcounter14 = 'loading';
        var supply14 = 'loading';
        var total14 = 'loading';
        var circulation14 = 'loading';

        var unitname15 = 'loading';
        var index15 = 'loading';
        var createdatround15 = 'loading';
        var name15 = 'loading';
        var txcounter15 = 'loading';
        var supply15 = 'loading';
        var total15 = 'loading';
        var circulation15 = 'loading';

        var unitname16 = 'loading';
        var index16 = 'loading';
        var createdatround16 = 'loading';
        var name16 = 'loading';
        var txcounter16 = 'loading';
        var supply16 = 'loading';
        var total16 = 'loading';
        var circulation16 = 'loading';

        var unitname17 = 'loading';
        var index17 = 'loading';
        var createdatround17 = 'loading';
        var name17 = 'loading';
        var txcounter17 = 'loading';
        var supply17 = 'loading';
        var total17 = 'loading';
        var circulation17 = 'loading';

        var unitname18 = 'loading';
        var index18 = 'loading';
        var createdatround18 = 'loading';
        var name18 = 'loading';
        var txcounter18 = 'loading';
        var supply18 = 'loading';
        var total18 = 'loading';
        var circulation18 = 'loading';

        var unitname19 = 'loading';
        var index19 = 'loading';
        var createdatround19 = 'loading';
        var name19 = 'loading';
        var txcounter19 = 'loading';
        var supply19 = 'loading';
        var total19 = 'loading';
        var circulation19 = 'loading';

        var unitname20 = 'loading';
        var index20 = 'loading';
        var createdatround20 = 'loading';
        var name20 = 'loading';
        var txcounter20 = 'loading';
        var supply20 = 'loading';
        var total20 = 'loading';
        var circulation20 = 'loading';

        var unitname21 = 'loading';
        var index21 = 'loading';
        var createdatround21 = 'loading';
        var name21 = 'loading';
        var txcounter21 = 'loading';
        var supply21 = 'loading';
        var total21 = 'loading';
        var circulation21 = 'loading';

        var unitname22 = 'loading';
        var index22 = 'loading';
        var createdatround22 = 'loading';
        var name22 = 'loading';
        var txcounter22 = 'loading';
        var supply22 = 'loading';
        var total22 = 'loading';
        var circulation22 = 'loading';

        var unitname23 = 'loading';
        var index23 = 'loading';
        var createdatround23 = 'loading';
        var name23 = 'loading';
        var txcounter23 = 'loading';
        var supply23 = 'loading';
        var total23 = 'loading';
        var circulation23 = 'loading';

        var unitname24 = 'loading';
        var index24 = 'loading';
        var createdatround24 = 'loading';
        var name24 = 'loading';
        var txcounter24 = 'loading';
        var supply24 = 'loading';
        var total24 = 'loading';
        var circulation24 = 'loading';

        var unitname25 = 'loading';
        var index25 = 'loading';
        var createdatround25 = 'loading';
        var name25 = 'loading';
        var txcounter25 = 'loading';
        var supply25 = 'loading';
        var total25 = 'loading';
        var circulation25 = 'loading';

        var unitname26 = 'loading';
        var index26 = 'loading';
        var createdatround26 = 'loading';
        var name26 = 'loading';
        var txcounter26 = 'loading';
        var supply26 = 'loading';
        var total26 = 'loading';
        var circulation26 = 'loading';

        var unitname27 = 'loading';
        var index27 = 'loading';
        var createdatround27 = 'loading';
        var name27 = 'loading';
        var txcounter27 = 'loading';
        var supply27 = 'loading';
        var total27 = 'loading';
        var circulation27 = 'loading';

        var unitname28 = 'loading';
        var index28 = 'loading';
        var createdatround28 = 'loading';
        var name28 = 'loading';
        var txcounter28 = 'loading';
        var supply28 = 'loading';
        var total28 = 'loading';
        var circulation28 = 'loading';

        var unitname29 = 'loading';
        var index29 = 'loading';
        var createdatround29 = 'loading';
        var name29 = 'loading';
        var txcounter29 = 'loading';
        var supply29 = 'loading';
        var total29 = 'loading';
        var circulation29 = 'loading';

        var unitname30 = 'loading';
        var index30 = 'loading';
        var createdatround30 = 'loading';
        var name30 = 'loading';
        var txcounter30 = 'loading';
        var supply30 = 'loading';
        var total30 = 'loading';
        var circulation30 = 'loading';

        var unitname31 = 'loading';
        var index31 = 'loading';
        var createdatround31 = 'loading';
        var name31 = 'loading';
        var txcounter31 = 'loading';
        var supply31 = 'loading';
        var total31 = 'loading';
        var circulation31 = 'loading';

        var unitname32 = 'loading';
        var index32 = 'loading';
        var createdatround32 = 'loading';
        var name32 = 'loading';
        var txcounter32 = 'loading';
        var supply32 = 'loading';
        var total32 = 'loading';
        var circulation32 = 'loading';

        var unitname33 = 'loading';
        var index33 = 'loading';
        var createdatround33 = 'loading';
        var name33 = 'loading';
        var txcounter33 = 'loading';
        var supply33 = 'loading';
        var total33 = 'loading';
        var circulation33 = 'loading';

        var unitname34 = 'loading';
        var index34 = 'loading';
        var createdatround34 = 'loading';
        var name34 = 'loading';
        var txcounter34 = 'loading';
        var supply34 = 'loading';
        var total34 = 'loading';
        var circulation34 = 'loading';

        var unitname35 = 'loading';
        var index35 = 'loading';
        var createdatround35 = 'loading';
        var name35 = 'loading';
        var txcounter35 = 'loading';
        var supply35 = 'loading';
        var total35 = 'loading';
        var circulation35 = 'loading';

        var unitname36 = 'loading';
        var index36 = 'loading';
        var createdatround36 = 'loading';
        var name36 = 'loading';
        var txcounter36 = 'loading';
        var supply36 = 'loading';
        var total36 = 'loading';
        var circulation36 = 'loading';

        var unitname37 = 'loading';
        var index37 = 'loading';
        var createdatround37 = 'loading';
        var name37 = 'loading';
        var txcounter37 = 'loading';
        var supply37 = 'loading';
        var total37 = 'loading';
        var circulation37 = 'loading';

        var unitname38 = 'loading';
        var index38 = 'loading';
        var createdatround38 = 'loading';
        var name38 = 'loading';
        var txcounter38 = 'loading';
        var supply38 = 'loading';
        var total38 = 'loading';
        var circulation38 = 'loading';

        var unitname39 = 'loading';
        var index39 = 'loading';
        var createdatround39 = 'loading';
        var name39 = 'loading';
        var txcounter39 = 'loading';
        var supply39 = 'loading';
        var total39 = 'loading';
        var circulation39 = 'loading';

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
                circulation1 = ((data1.asset.params['circulating-supply'] / data1.asset.params['total']) * 100).toFixed(6);
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
                        circulation2 = ((data2.asset.params['circulating-supply'] / data2.asset.params['total']) * 100).toFixed(6);
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
                                circulation9 = ((data9.asset.params['circulating-supply'] / data9.asset.params['total']) * 100).toFixed(6);
                                getJSON(url13, async function(err, data13) {
                                    if (err !== null) {
                                        return $.getJSON(url13);
                                    } else {
                                        unitname13 = data13.asset.params['unit-name'];
                                        index13 = data13.asset['index'];
                                        createdatround13 = data13.asset['created-at-round'];
                                        name13 = data13.asset.params['name'];
                                        txcounter13 = data13.asset['asset-tx-counter'];
                                        supply13 = data13.asset.params['circulating-supply'];
                                        total13 = data13.asset.params['total'];
                                        circulation13 = ((data13.asset.params['circulating-supply'] / data13.asset.params['total']) * 100).toFixed(6);
                                    }
                                });
                            }
                        });
                    }
                });
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
                circulation3 = ((data3.asset.params['circulating-supply'] / data3.asset.params['total']) * 100).toFixed(6);
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
                        circulation4 = ((data4.asset.params['circulating-supply'] / data4.asset.params['total']) * 100).toFixed(6);
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
                                circulation0 = ((data0.asset.params['circulating-supply'] / data0.asset.params['total']) * 100).toFixed(6);
                                getJSON(url39, async function(err, data39) {
                                    if (err !== null) {
                                        return $.getJSON(url39);
                                    } else {
                                        unitname39 = data39.asset.params['unit-name'];
                                        index39 = data39.asset['index'];
                                        createdatround39 = data39.asset['created-at-round'];
                                        name39 = data39.asset.params['name'];
                                        txcounter39 = data39.asset['asset-tx-counter'];
                                        supply39 = data39.asset.params['circulating-supply'];
                                        total39 = data39.asset.params['total'];
                                        circulation39 = ((data39.asset.params['circulating-supply'] / data39.asset.params['total']) * 100).toFixed(6);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });

        getJSON(url35, async function(err, data35) {
            if (err !== null) {
                return $.getJSON(url35);
            } else {
                unitname35 = data35.asset.params['unit-name'];
                index35 = data35.asset['index'];
                createdatround35 = data35.asset['created-at-round'];
                name35 = data35.asset.params['name'];
                txcounter35 = data35.asset['asset-tx-counter'];
                supply35 = data35.asset.params['circulating-supply'];
                total35 = data35.asset.params['total'];
                circulation35 = ((data35.asset.params['circulating-supply'] / data35.asset.params['total']) * 100).toFixed(6);
                getJSON(url36, async function(err, data36) {
                    if (err !== null) {
                        return $.getJSON(url36);
                    } else {
                        unitname36 = data36.asset.params['unit-name'];
                        index36 = data36.asset['index'];
                        createdatround36 = data36.asset['created-at-round'];
                        name36 = data36.asset.params['name'];
                        txcounter36 = data36.asset['asset-tx-counter'];
                        supply36 = data36.asset.params['circulating-supply'];
                        total36 = data36.asset.params['total'];
                        circulation36 = ((data36.asset.params['circulating-supply'] / data36.asset.params['total']) * 100).toFixed(6);
                        getJSON(url34, async function(err, data34) {
                            if (err !== null) {
                                return $.getJSON(url34);
                            } else {
                                unitname34 = data34.asset.params['unit-name'];
                                index34 = data34.asset['index'];
                                createdatround34 = data34.asset['created-at-round'];
                                name34 = data34.asset.params['name'];
                                txcounter34 = data34.asset['asset-tx-counter'];
                                supply34 = data34.asset.params['circulating-supply'];
                                total34 = data34.asset.params['total'];
                                circulation34 = ((data34.asset.params['circulating-supply'] / data34.asset.params['total']) * 100).toFixed(6);
                                getJSON(url33, async function(err, data33) {
                                    if (err !== null) {
                                        return $.getJSON(url33);
                                    } else {
                                        unitname33 = data33.asset.params['unit-name'];
                                        index33 = data33.asset['index'];
                                        createdatround33 = data33.asset['created-at-round'];
                                        name33 = data33.asset.params['name'];
                                        txcounter33 = data33.asset['asset-tx-counter'];
                                        supply33 = data33.asset.params['circulating-supply'];
                                        total33 = data33.asset.params['total'];
                                        circulation33 = ((data33.asset.params['circulating-supply'] / data33.asset.params['total']) * 100).toFixed(6);
                                        getJSON(url12, async function(err, data12) {
                                            if (err !== null) {
                                                return $.getJSON(url12);
                                            } else {
                                                unitname12 = data12.asset.params['unit-name'];
                                                index12 = data12.asset['index'];
                                                createdatround12 = data12.asset['created-at-round'];
                                                name12 = data12.asset.params['name'];
                                                txcounter12 = data12.asset['asset-tx-counter'];
                                                supply12 = data12.asset.params['circulating-supply'];
                                                total12 = data12.asset.params['total'];
                                                circulation12 = ((data12.asset.params['circulating-supply'] / data12.asset.params['total']) * 100).toFixed(6);
                                                getJSON(url22, async function(err, data22) {
                                                    if (err !== null) {
                                                        return $.getJSON(url22);
                                                    } else {
                                                        unitname22 = data22.asset.params['unit-name'];
                                                        index22 = data22.asset['index'];
                                                        createdatround22 = data22.asset['created-at-round'];
                                                        name22 = data22.asset.params['name'];
                                                        txcounter22 = data22.asset['asset-tx-counter'];
                                                        supply22 = data22.asset.params['circulating-supply'];
                                                        total22 = data22.asset.params['total'];
                                                        circulation22 = ((data22.asset.params['circulating-supply'] / data22.asset.params['total']) * 100).toFixed(6);
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
                                                                circulation5 = ((data5.asset.params['circulating-supply'] / data5.asset.params['total']) * 100).toFixed(6);
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
                                                                        circulation6 = ((data6.asset.params['circulating-supply'] / data6.asset.params['total']) * 100).toFixed(6);
                                                                        getJSON(url40, function(err, data40) {

                                                                            if (err !== null) {
                                                                                return $.getJSON(url40);
                                                                            } else {

                                                                                //
                                                                                //console.log(counter);
                                                                                var jsObj0 = [{
                                                                                    'Unit Name': unitname0,
                                                                                    'ID': index0,
                                                                                    'Created at Round': createdatround0,
                                                                                    'Name': name0,
                                                                                    'Transactions Counter': txcounter0,
                                                                                    'Circulating Supply': supply0,
                                                                                    'Total Supply': total0,
                                                                                    '% in Circulation': circulation0 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname1,
                                                                                    'ID': index1,
                                                                                    'Created at Round': createdatround1,
                                                                                    'Name': name1,
                                                                                    'Transactions Counter': txcounter1,
                                                                                    'Circulating Supply': supply1,
                                                                                    'Total Supply': total1,
                                                                                    '% in Circulation': circulation1 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname2,
                                                                                    'ID': index2,
                                                                                    'Created at Round': createdatround2,
                                                                                    'Name': name2,
                                                                                    'Transactions Counter': txcounter2,
                                                                                    'Circulating Supply': supply2,
                                                                                    'Total Supply': total2,
                                                                                    '% in Circulation': circulation2 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname3,
                                                                                    'ID': index3,
                                                                                    'Created at Round': createdatround3,
                                                                                    'Name': name3,
                                                                                    'Transactions Counter': txcounter3,
                                                                                    'Circulating Supply': supply3,
                                                                                    'Total Supply': total3,
                                                                                    '% in Circulation': circulation3 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname4,
                                                                                    'ID': index4,
                                                                                    'Created at Round': createdatround4,
                                                                                    'Name': name4,
                                                                                    'Transactions Counter': txcounter4,
                                                                                    'Circulating Supply': supply4,
                                                                                    'Total Supply': total4,
                                                                                    '% in Circulation': circulation4 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname5,
                                                                                    'ID': index5,
                                                                                    'Created at Round': createdatround5,
                                                                                    'Name': name5,
                                                                                    'Transactions Counter': txcounter5,
                                                                                    'Circulating Supply': supply5,
                                                                                    'Total Supply': total5,
                                                                                    '% in Circulation': circulation5 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname6,
                                                                                    'ID': index6,
                                                                                    'Created at Round': createdatround6,
                                                                                    'Name': name6,
                                                                                    'Transactions Counter': txcounter6,
                                                                                    'Circulating Supply': supply6,
                                                                                    'Total Supply': total6,
                                                                                    '% in Circulation': circulation6 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname7,
                                                                                    'ID': index7,
                                                                                    'Created at Round': createdatround7,
                                                                                    'Name': name7,
                                                                                    'Transactions Counter': txcounter7,
                                                                                    'Circulating Supply': supply7,
                                                                                    'Total Supply': total7,
                                                                                    '% in Circulation': circulation7 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname8,
                                                                                    'ID': index8,
                                                                                    'Created at Round': createdatround8,
                                                                                    'Name': name8,
                                                                                    'Transactions Counter': txcounter8,
                                                                                    'Circulating Supply': supply8,
                                                                                    'Total Supply': total8,
                                                                                    '% in Circulation': circulation8 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname9,
                                                                                    'ID': index9,
                                                                                    'Created at Round': createdatround9,
                                                                                    'Name': name9,
                                                                                    'Transactions Counter': txcounter9,
                                                                                    'Circulating Supply': supply9,
                                                                                    'Total Supply': total9,
                                                                                    '% in Circulation': circulation9 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname10,
                                                                                    'ID': index10,
                                                                                    'Created at Round': createdatround10,
                                                                                    'Name': name10,
                                                                                    'Transactions Counter': txcounter10,
                                                                                    'Circulating Supply': supply10,
                                                                                    'Total Supply': total10,
                                                                                    '% in Circulation': circulation10 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname11,
                                                                                    'ID': index11,
                                                                                    'Created at Round': createdatround11,
                                                                                    'Name': name11,
                                                                                    'Transactions Counter': txcounter11,
                                                                                    'Circulating Supply': supply11,
                                                                                    'Total Supply': total11,
                                                                                    '% in Circulation': circulation11 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname12,
                                                                                    'ID': index12,
                                                                                    'Created at Round': createdatround12,
                                                                                    'Name': name12,
                                                                                    'Transactions Counter': txcounter12,
                                                                                    'Circulating Supply': supply12,
                                                                                    'Total Supply': total12,
                                                                                    '% in Circulation': circulation12 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname13,
                                                                                    'ID': index13,
                                                                                    'Created at Round': createdatround13,
                                                                                    'Name': name13,
                                                                                    'Transactions Counter': txcounter13,
                                                                                    'Circulating Supply': supply13,
                                                                                    'Total Supply': total13,
                                                                                    '% in Circulation': circulation13 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname14,
                                                                                    'ID': index14,
                                                                                    'Created at Round': createdatround14,
                                                                                    'Name': name14,
                                                                                    'Transactions Counter': txcounter14,
                                                                                    'Circulating Supply': supply14,
                                                                                    'Total Supply': total14,
                                                                                    '% in Circulation': circulation14 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname15,
                                                                                    'ID': index15,
                                                                                    'Created at Round': createdatround15,
                                                                                    'Name': name15,
                                                                                    'Transactions Counter': txcounter15,
                                                                                    'Circulating Supply': supply15,
                                                                                    'Total Supply': total15,
                                                                                    '% in Circulation': circulation15 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname16,
                                                                                    'ID': index16,
                                                                                    'Created at Round': createdatround16,
                                                                                    'Name': name16,
                                                                                    'Transactions Counter': txcounter16,
                                                                                    'Circulating Supply': supply16,
                                                                                    'Total Supply': total16,
                                                                                    '% in Circulation': circulation16 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname17,
                                                                                    'ID': index17,
                                                                                    'Created at Round': createdatround17,
                                                                                    'Name': name17,
                                                                                    'Transactions Counter': txcounter17,
                                                                                    'Circulating Supply': supply17,
                                                                                    'Total Supply': total17,
                                                                                    '% in Circulation': circulation17 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname18,
                                                                                    'ID': index18,
                                                                                    'Created at Round': createdatround18,
                                                                                    'Name': name18,
                                                                                    'Transactions Counter': txcounter18,
                                                                                    'Circulating Supply': supply18,
                                                                                    'Total Supply': total18,
                                                                                    '% in Circulation': circulation18 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname19,
                                                                                    'ID': index19,
                                                                                    'Created at Round': createdatround19,
                                                                                    'Name': name19,
                                                                                    'Transactions Counter': txcounter19,
                                                                                    'Circulating Supply': supply19,
                                                                                    'Total Supply': total19,
                                                                                    '% in Circulation': circulation19 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname20,
                                                                                    'ID': index20,
                                                                                    'Created at Round': createdatround20,
                                                                                    'Name': name20,
                                                                                    'Transactions Counter': txcounter20,
                                                                                    'Circulating Supply': supply20,
                                                                                    'Total Supply': total20,
                                                                                    '% in Circulation': circulation20 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname21,
                                                                                    'ID': index21,
                                                                                    'Created at Round': createdatround21,
                                                                                    'Name': name21,
                                                                                    'Transactions Counter': txcounter21,
                                                                                    'Circulating Supply': supply21,
                                                                                    'Total Supply': total21,
                                                                                    '% in Circulation': circulation21 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname22,
                                                                                    'ID': index22,
                                                                                    'Created at Round': createdatround22,
                                                                                    'Name': name22,
                                                                                    'Transactions Counter': txcounter22,
                                                                                    'Circulating Supply': supply22,
                                                                                    'Total Supply': total22,
                                                                                    '% in Circulation': circulation22 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname23,
                                                                                    'ID': index23,
                                                                                    'Created at Round': createdatround23,
                                                                                    'Name': name23,
                                                                                    'Transactions Counter': txcounter23,
                                                                                    'Circulating Supply': supply23,
                                                                                    'Total Supply': total23,
                                                                                    '% in Circulation': circulation23 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname24,
                                                                                    'ID': index24,
                                                                                    'Created at Round': createdatround24,
                                                                                    'Name': name24,
                                                                                    'Transactions Counter': txcounter24,
                                                                                    'Circulating Supply': supply24,
                                                                                    'Total Supply': total24,
                                                                                    '% in Circulation': circulation24 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname25,
                                                                                    'ID': index25,
                                                                                    'Created at Round': createdatround25,
                                                                                    'Name': name25,
                                                                                    'Transactions Counter': txcounter25,
                                                                                    'Circulating Supply': supply25,
                                                                                    'Total Supply': total25,
                                                                                    '% in Circulation': circulation25 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname26,
                                                                                    'ID': index26,
                                                                                    'Created at Round': createdatround26,
                                                                                    'Name': name26,
                                                                                    'Transactions Counter': txcounter26,
                                                                                    'Circulating Supply': supply26,
                                                                                    'Total Supply': total26,
                                                                                    '% in Circulation': circulation26 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname27,
                                                                                    'ID': index27,
                                                                                    'Created at Round': createdatround27,
                                                                                    'Name': name27,
                                                                                    'Transactions Counter': txcounter27,
                                                                                    'Circulating Supply': supply27,
                                                                                    'Total Supply': total27,
                                                                                    '% in Circulation': circulation27 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname28,
                                                                                    'ID': index28,
                                                                                    'Created at Round': createdatround28,
                                                                                    'Name': name28,
                                                                                    'Transactions Counter': txcounter28,
                                                                                    'Circulating Supply': supply28,
                                                                                    'Total Supply': total28,
                                                                                    '% in Circulation': circulation28 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname29,
                                                                                    'ID': index29,
                                                                                    'Created at Round': createdatround29,
                                                                                    'Name': name29,
                                                                                    'Transactions Counter': txcounter29,
                                                                                    'Circulating Supply': supply29,
                                                                                    'Total Supply': total29,
                                                                                    '% in Circulation': circulation29 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname30,
                                                                                    'ID': index30,
                                                                                    'Created at Round': createdatround30,
                                                                                    'Name': name30,
                                                                                    'Transactions Counter': txcounter30,
                                                                                    'Circulating Supply': supply30,
                                                                                    'Total Supply': total30,
                                                                                    '% in Circulation': circulation30 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname31,
                                                                                    'ID': index31,
                                                                                    'Created at Round': createdatround31,
                                                                                    'Name': name31,
                                                                                    'Transactions Counter': txcounter31,
                                                                                    'Circulating Supply': supply31,
                                                                                    'Total Supply': total31,
                                                                                    '% in Circulation': circulation31 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname32,
                                                                                    'ID': index32,
                                                                                    'Created at Round': createdatround32,
                                                                                    'Name': name32,
                                                                                    'Transactions Counter': txcounter32,
                                                                                    'Circulating Supply': supply32,
                                                                                    'Total Supply': total32,
                                                                                    '% in Circulation': circulation32 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname33,
                                                                                    'ID': index33,
                                                                                    'Created at Round': createdatround33,
                                                                                    'Name': name33,
                                                                                    'Transactions Counter': txcounter33,
                                                                                    'Circulating Supply': supply33,
                                                                                    'Total Supply': total33,
                                                                                    '% in Circulation': circulation33 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname34,
                                                                                    'ID': index34,
                                                                                    'Created at Round': createdatround34,
                                                                                    'Name': name34,
                                                                                    'Transactions Counter': txcounter34,
                                                                                    'Circulating Supply': supply34,
                                                                                    'Total Supply': total34,
                                                                                    '% in Circulation': circulation34 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname35,
                                                                                    'ID': index35,
                                                                                    'Created at Round': createdatround35,
                                                                                    'Name': name35,
                                                                                    'Transactions Counter': txcounter35,
                                                                                    'Circulating Supply': supply35,
                                                                                    'Total Supply': total35,
                                                                                    '% in Circulation': circulation35 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname36,
                                                                                    'ID': index36,
                                                                                    'Created at Round': createdatround36,
                                                                                    'Name': name36,
                                                                                    'Transactions Counter': txcounter36,
                                                                                    'Circulating Supply': supply36,
                                                                                    'Total Supply': total36,
                                                                                    '% in Circulation': circulation36 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname37,
                                                                                    'ID': index37,
                                                                                    'Created at Round': createdatround37,
                                                                                    'Name': name37,
                                                                                    'Transactions Counter': txcounter37,
                                                                                    'Circulating Supply': supply37,
                                                                                    'Total Supply': total37,
                                                                                    '% in Circulation': circulation37 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname38,
                                                                                    'ID': index38,
                                                                                    'Created at Round': createdatround38,
                                                                                    'Name': name38,
                                                                                    'Transactions Counter': txcounter38,
                                                                                    'Circulating Supply': supply38,
                                                                                    'Total Supply': total38,
                                                                                    '% in Circulation': circulation38 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': unitname39,
                                                                                    'ID': index39,
                                                                                    'Created at Round': createdatround39,
                                                                                    'Name': name39,
                                                                                    'Transactions Counter': txcounter39,
                                                                                    'Circulating Supply': supply39,
                                                                                    'Total Supply': total39,
                                                                                    '% in Circulation': circulation39 + '%'
                                                                                },
                                                                                {
                                                                                    'Unit Name': data40.asset.params['unit-name'],
                                                                                    'ID': data40.asset['index'],
                                                                                    'Created at Round': data40.asset['created-at-round'],
                                                                                    'Name': data40.asset.params['name'],
                                                                                    'Transactions Counter': data40.asset['asset-tx-counter'],
                                                                                    'Circulating Supply': data40.asset.params['circulating-supply'],
                                                                                    'Total Supply': data40.asset.params['total'],
                                                                                    '% in Circulation': ((data40.asset.params['circulating-supply'] / data40.asset.params['total']) * 100).toFixed(6) + '%'
                                                                                }
                                                                            ];

                                                                                var jsObj1 = [{
                                                                                        'Unit Name': unitname0,
                                                                                        'ID': index0,
                                                                                        'Created at Round': createdatround0,
                                                                                        'Name': name0,
                                                                                        'Transactions Counter': txcounter0,
                                                                                        'Circulating Supply': supply0,
                                                                                        'Total Supply': total0,
                                                                                        '% in Circulation': circulation0 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname1,
                                                                                        'ID': index1,
                                                                                        'Created at Round': createdatround1,
                                                                                        'Name': name1,
                                                                                        'Transactions Counter': txcounter1,
                                                                                        'Circulating Supply': supply1,
                                                                                        'Total Supply': total1,
                                                                                        '% in Circulation': circulation1 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname2,
                                                                                        'ID': index2,
                                                                                        'Created at Round': createdatround2,
                                                                                        'Name': name2,
                                                                                        'Transactions Counter': txcounter2,
                                                                                        'Circulating Supply': supply2,
                                                                                        'Total Supply': total2,
                                                                                        '% in Circulation': circulation2 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname3,
                                                                                        'ID': index3,
                                                                                        'Created at Round': createdatround3,
                                                                                        'Name': name3,
                                                                                        'Transactions Counter': txcounter3,
                                                                                        'Circulating Supply': supply3,
                                                                                        'Total Supply': total3,
                                                                                        '% in Circulation': circulation3 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname4,
                                                                                        'ID': index4,
                                                                                        'Created at Round': createdatround4,
                                                                                        'Name': name4,
                                                                                        'Transactions Counter': txcounter4,
                                                                                        'Circulating Supply': supply4,
                                                                                        'Total Supply': total4,
                                                                                        '% in Circulation': circulation4 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname5,
                                                                                        'ID': index5,
                                                                                        'Created at Round': createdatround5,
                                                                                        'Name': name5,
                                                                                        'Transactions Counter': txcounter5,
                                                                                        'Circulating Supply': supply5,
                                                                                        'Total Supply': total5,
                                                                                        '% in Circulation': circulation5 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname6,
                                                                                        'ID': index6,
                                                                                        'Created at Round': createdatround6,
                                                                                        'Name': name6,
                                                                                        'Transactions Counter': txcounter6,
                                                                                        'Circulating Supply': supply6,
                                                                                        'Total Supply': total6,
                                                                                        '% in Circulation': circulation6 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname7,
                                                                                        'ID': index7,
                                                                                        'Created at Round': createdatround7,
                                                                                        'Name': name7,
                                                                                        'Transactions Counter': txcounter7,
                                                                                        'Circulating Supply': supply7,
                                                                                        'Total Supply': total7,
                                                                                        '% in Circulation': circulation7 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname8,
                                                                                        'ID': index8,
                                                                                        'Created at Round': createdatround8,
                                                                                        'Name': name8,
                                                                                        'Transactions Counter': txcounter8,
                                                                                        'Circulating Supply': supply8,
                                                                                        'Total Supply': total8,
                                                                                        '% in Circulation': circulation8 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname9,
                                                                                        'ID': index9,
                                                                                        'Created at Round': createdatround9,
                                                                                        'Name': name9,
                                                                                        'Transactions Counter': txcounter9,
                                                                                        'Circulating Supply': supply9,
                                                                                        'Total Supply': total9,
                                                                                        '% in Circulation': circulation9 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname10,
                                                                                        'ID': index10,
                                                                                        'Created at Round': createdatround10,
                                                                                        'Name': name10,
                                                                                        'Transactions Counter': txcounter10,
                                                                                        'Circulating Supply': supply10,
                                                                                        'Total Supply': total10,
                                                                                        '% in Circulation': circulation10 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname11,
                                                                                        'ID': index11,
                                                                                        'Created at Round': createdatround11,
                                                                                        'Name': name11,
                                                                                        'Transactions Counter': txcounter11,
                                                                                        'Circulating Supply': supply11,
                                                                                        'Total Supply': total11,
                                                                                        '% in Circulation': circulation11 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname12,
                                                                                        'ID': index12,
                                                                                        'Created at Round': createdatround12,
                                                                                        'Name': name12,
                                                                                        'Transactions Counter': txcounter12,
                                                                                        'Circulating Supply': supply12,
                                                                                        'Total Supply': total12,
                                                                                        '% in Circulation': circulation12 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname13,
                                                                                        'ID': index13,
                                                                                        'Created at Round': createdatround13,
                                                                                        'Name': name13,
                                                                                        'Transactions Counter': txcounter13,
                                                                                        'Circulating Supply': supply13,
                                                                                        'Total Supply': total13,
                                                                                        '% in Circulation': circulation13 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname14,
                                                                                        'ID': index14,
                                                                                        'Created at Round': createdatround14,
                                                                                        'Name': name14,
                                                                                        'Transactions Counter': txcounter14,
                                                                                        'Circulating Supply': supply14,
                                                                                        'Total Supply': total14,
                                                                                        '% in Circulation': circulation14 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname15,
                                                                                        'ID': index15,
                                                                                        'Created at Round': createdatround15,
                                                                                        'Name': name15,
                                                                                        'Transactions Counter': txcounter15,
                                                                                        'Circulating Supply': supply15,
                                                                                        'Total Supply': total15,
                                                                                        '% in Circulation': circulation15 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname16,
                                                                                        'ID': index16,
                                                                                        'Created at Round': createdatround16,
                                                                                        'Name': name16,
                                                                                        'Transactions Counter': txcounter16,
                                                                                        'Circulating Supply': supply16,
                                                                                        'Total Supply': total16,
                                                                                        '% in Circulation': circulation16 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname17,
                                                                                        'ID': index17,
                                                                                        'Created at Round': createdatround17,
                                                                                        'Name': name17,
                                                                                        'Transactions Counter': txcounter17,
                                                                                        'Circulating Supply': supply17,
                                                                                        'Total Supply': total17,
                                                                                        '% in Circulation': circulation17 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname18,
                                                                                        'ID': index18,
                                                                                        'Created at Round': createdatround18,
                                                                                        'Name': name18,
                                                                                        'Transactions Counter': txcounter18,
                                                                                        'Circulating Supply': supply18,
                                                                                        'Total Supply': total18,
                                                                                        '% in Circulation': circulation18 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname19,
                                                                                        'ID': index19,
                                                                                        'Created at Round': createdatround19,
                                                                                        'Name': name19,
                                                                                        'Transactions Counter': txcounter19,
                                                                                        'Circulating Supply': supply19,
                                                                                        'Total Supply': total19,
                                                                                        '% in Circulation': circulation19 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname20,
                                                                                        'ID': index20,
                                                                                        'Created at Round': createdatround20,
                                                                                        'Name': name20,
                                                                                        'Transactions Counter': txcounter20,
                                                                                        'Circulating Supply': supply20,
                                                                                        'Total Supply': total20,
                                                                                        '% in Circulation': circulation20 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname21,
                                                                                        'ID': index21,
                                                                                        'Created at Round': createdatround21,
                                                                                        'Name': name21,
                                                                                        'Transactions Counter': txcounter21,
                                                                                        'Circulating Supply': supply21,
                                                                                        'Total Supply': total21,
                                                                                        '% in Circulation': circulation21 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname22,
                                                                                        'ID': index22,
                                                                                        'Created at Round': createdatround22,
                                                                                        'Name': name22,
                                                                                        'Transactions Counter': txcounter22,
                                                                                        'Circulating Supply': supply22,
                                                                                        'Total Supply': total22,
                                                                                        '% in Circulation': circulation22 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname23,
                                                                                        'ID': index23,
                                                                                        'Created at Round': createdatround23,
                                                                                        'Name': name23,
                                                                                        'Transactions Counter': txcounter23,
                                                                                        'Circulating Supply': supply23,
                                                                                        'Total Supply': total23,
                                                                                        '% in Circulation': circulation23 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname24,
                                                                                        'ID': index24,
                                                                                        'Created at Round': createdatround24,
                                                                                        'Name': name24,
                                                                                        'Transactions Counter': txcounter24,
                                                                                        'Circulating Supply': supply24,
                                                                                        'Total Supply': total24,
                                                                                        '% in Circulation': circulation24 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname25,
                                                                                        'ID': index25,
                                                                                        'Created at Round': createdatround25,
                                                                                        'Name': name25,
                                                                                        'Transactions Counter': txcounter25,
                                                                                        'Circulating Supply': supply25,
                                                                                        'Total Supply': total25,
                                                                                        '% in Circulation': circulation25 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname26,
                                                                                        'ID': index26,
                                                                                        'Created at Round': createdatround26,
                                                                                        'Name': name26,
                                                                                        'Transactions Counter': txcounter26,
                                                                                        'Circulating Supply': supply26,
                                                                                        'Total Supply': total26,
                                                                                        '% in Circulation': circulation26 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname27,
                                                                                        'ID': index27,
                                                                                        'Created at Round': createdatround27,
                                                                                        'Name': name27,
                                                                                        'Transactions Counter': txcounter27,
                                                                                        'Circulating Supply': supply27,
                                                                                        'Total Supply': total27,
                                                                                        '% in Circulation': circulation27 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname28,
                                                                                        'ID': index28,
                                                                                        'Created at Round': createdatround28,
                                                                                        'Name': name28,
                                                                                        'Transactions Counter': txcounter28,
                                                                                        'Circulating Supply': supply28,
                                                                                        'Total Supply': total28,
                                                                                        '% in Circulation': circulation28 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname29,
                                                                                        'ID': index29,
                                                                                        'Created at Round': createdatround29,
                                                                                        'Name': name29,
                                                                                        'Transactions Counter': txcounter29,
                                                                                        'Circulating Supply': supply29,
                                                                                        'Total Supply': total29,
                                                                                        '% in Circulation': circulation29 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname30,
                                                                                        'ID': index30,
                                                                                        'Created at Round': createdatround30,
                                                                                        'Name': name30,
                                                                                        'Transactions Counter': txcounter30,
                                                                                        'Circulating Supply': supply30,
                                                                                        'Total Supply': total30,
                                                                                        '% in Circulation': circulation30 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname31,
                                                                                        'ID': index31,
                                                                                        'Created at Round': createdatround31,
                                                                                        'Name': name31,
                                                                                        'Transactions Counter': txcounter31,
                                                                                        'Circulating Supply': supply31,
                                                                                        'Total Supply': total31,
                                                                                        '% in Circulation': circulation31 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname32,
                                                                                        'ID': index32,
                                                                                        'Created at Round': createdatround32,
                                                                                        'Name': name32,
                                                                                        'Transactions Counter': txcounter32,
                                                                                        'Circulating Supply': supply32,
                                                                                        'Total Supply': total32,
                                                                                        '% in Circulation': circulation32 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname33,
                                                                                        'ID': index33,
                                                                                        'Created at Round': createdatround33,
                                                                                        'Name': name33,
                                                                                        'Transactions Counter': txcounter33,
                                                                                        'Circulating Supply': supply33,
                                                                                        'Total Supply': total33,
                                                                                        '% in Circulation': circulation33 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname34,
                                                                                        'ID': index34,
                                                                                        'Created at Round': createdatround34,
                                                                                        'Name': name34,
                                                                                        'Transactions Counter': txcounter34,
                                                                                        'Circulating Supply': supply34,
                                                                                        'Total Supply': total34,
                                                                                        '% in Circulation': circulation34 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname35,
                                                                                        'ID': index35,
                                                                                        'Created at Round': createdatround35,
                                                                                        'Name': name35,
                                                                                        'Transactions Counter': txcounter35,
                                                                                        'Circulating Supply': supply35,
                                                                                        'Total Supply': total35,
                                                                                        '% in Circulation': circulation35 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname36,
                                                                                        'ID': index36,
                                                                                        'Created at Round': createdatround36,
                                                                                        'Name': name36,
                                                                                        'Transactions Counter': txcounter36,
                                                                                        'Circulating Supply': supply36,
                                                                                        'Total Supply': total36,
                                                                                        '% in Circulation': circulation36 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname37,
                                                                                        'ID': index37,
                                                                                        'Created at Round': createdatround37,
                                                                                        'Name': name37,
                                                                                        'Transactions Counter': txcounter37,
                                                                                        'Circulating Supply': supply37,
                                                                                        'Total Supply': total37,
                                                                                        '% in Circulation': circulation37 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname38,
                                                                                        'ID': index38,
                                                                                        'Created at Round': createdatround38,
                                                                                        'Name': name38,
                                                                                        'Transactions Counter': txcounter38,
                                                                                        'Circulating Supply': supply38,
                                                                                        'Total Supply': total38,
                                                                                        '% in Circulation': circulation38 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': unitname39,
                                                                                        'ID': index39,
                                                                                        'Created at Round': createdatround39,
                                                                                        'Name': name39,
                                                                                        'Transactions Counter': txcounter39,
                                                                                        'Circulating Supply': supply39,
                                                                                        'Total Supply': total39,
                                                                                        '% in Circulation': circulation39 + '%'
                                                                                    },
                                                                                    {
                                                                                        'Unit Name': data40.asset.params['unit-name'],
                                                                                        'ID': data40.asset['index'],
                                                                                        'Created at Round': data40.asset['created-at-round'],
                                                                                        'Name': data40.asset.params['name'],
                                                                                        'Transactions Counter': data40.asset['asset-tx-counter'],
                                                                                        'Circulating Supply': data40.asset.params['circulating-supply'],
                                                                                        'Total Supply': data40.asset.params['total'],
                                                                                        '% in Circulation': ((data40.asset.params['circulating-supply'] / data40.asset.params['total']) * 100).toFixed(6) + '%'
                                                                                    }
                                                                                ];

                                                                                //modified array is accessible here

                                                                                var exampleTable1 = $('#example1')
                                                                                    .DataTable({
                                                                                        data: jsObj0,
                                                                                        stateSave: true,
                                                                                        colReorder: true,
                                                                                        paging: true,
                                                                                        keys: true,
                                                                                        //fixedHeader: true,
                                                                                        'columns': [{
                                                                                                'data': 'Unit Name'
                                                                                            },
                                                                                            {
                                                                                                'data': 'ID'
                                                                                            },
                                                                                            {
                                                                                                'data': 'Created at Round'
                                                                                            },
                                                                                            {
                                                                                                'data': 'Name'
                                                                                            },
                                                                                            {
                                                                                                'data': 'Transactions Counter'
                                                                                            },
                                                                                            {
                                                                                                'data': 'Circulating Supply'
                                                                                            },
                                                                                            {
                                                                                                'data': 'Total Supply'
                                                                                            },
                                                                                            {
                                                                                                'data': '% in Circulation'
                                                                                            }
                                                                                        ]
                                                                                    });
                                                                                    var exampleTable2 = $('#example2')
                                                                                    .DataTable({
                                                                                        data: jsObj1,
                                                                                        stateSave: true,
                                                                                        colReorder: true,
                                                                                        paging: true,
                                                                                        keys: true,
                                                                                        //fixedHeader: true,
                                                                                        'columns': [{
                                                                                                'data': 'Unit Name'
                                                                                            },
                                                                                            {
                                                                                                'data': 'ID'
                                                                                            },
                                                                                            {
                                                                                                'data': 'Created at Round'
                                                                                            },
                                                                                            {
                                                                                                'data': 'Name'
                                                                                            },
                                                                                            {
                                                                                                'data': 'Transactions Counter'
                                                                                            },
                                                                                            {
                                                                                                'data': 'Circulating Supply'
                                                                                            },
                                                                                            {
                                                                                                'data': 'Total Supply'
                                                                                            },
                                                                                            {
                                                                                                'data': '% in Circulation'
                                                                                            }
                                                                                        ]
                                                                                    });
                                                                            }


                                                                        }); //30 ends here
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

        getJSON(url10, async function(err, data10) {
            if (err !== null) {
                return $.getJSON(url10);
            } else {
                unitname10 = data10.asset.params['unit-name'];
                index10 = data10.asset['index'];
                createdatround10 = data10.asset['created-at-round'];
                name10 = data10.asset.params['name'];
                txcounter10 = data10.asset['asset-tx-counter'];
                supply10 = data10.asset.params['circulating-supply'];
                total10 = data10.asset.params['total'];
                circulation10 = ((data10.asset.params['circulating-supply'] / data10.asset.params['total']) * 100).toFixed(6);
                getJSON(url11, async function(err, data11) {
                    if (err !== null) {
                        return $.getJSON(url11);
                    } else {
                        unitname11 = data11.asset.params['unit-name'];
                        index11 = data11.asset['index'];
                        createdatround11 = data11.asset['created-at-round'];
                        name11 = data11.asset.params['name'];
                        txcounter11 = data11.asset['asset-tx-counter'];
                        supply11 = data11.asset.params['circulating-supply'];
                        total11 = data11.asset.params['total'];
                        circulation11 = ((data11.asset.params['circulating-supply'] / data11.asset.params['total']) * 100).toFixed(6);
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
                                circulation8 = ((data8.asset.params['circulating-supply'] / data8.asset.params['total']) * 100).toFixed(6);
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
                                        circulation7 = ((data7.asset.params['circulating-supply'] / data7.asset.params['total']) * 100).toFixed(6);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });

        getJSON(url16, async function(err, data16) {
            if (err !== null) {
                return $.getJSON(url16);
            } else {
                unitname16 = data16.asset.params['unit-name'];
                index16 = data16.asset['index'];
                createdatround16 = data16.asset['created-at-round'];
                name16 = data16.asset.params['name'];
                txcounter16 = data16.asset['asset-tx-counter'];
                supply16 = data16.asset.params['circulating-supply'];
                total16 = data16.asset.params['total'];
                circulation16 = ((data16.asset.params['circulating-supply'] / data16.asset.params['total']) * 100).toFixed(6);
                getJSON(url17, async function(err, data17) {
                    if (err !== null) {
                        return $.getJSON(url17);
                    } else {
                        unitname17 = data17.asset.params['unit-name'];
                        index17 = data17.asset['index'];
                        createdatround17 = data17.asset['created-at-round'];
                        name17 = data17.asset.params['name'];
                        txcounter17 = data17.asset['asset-tx-counter'];
                        supply17 = data17.asset.params['circulating-supply'];
                        total17 = data17.asset.params['total'];
                        circulation17 = ((data17.asset.params['circulating-supply'] / data17.asset.params['total']) * 100).toFixed(6);
                        getJSON(url15, async function(err, data15) {
                            if (err !== null) {
                                return $.getJSON(url15);
                            } else {
                                unitname15 = data15.asset.params['unit-name'];
                                index15 = data15.asset['index'];
                                createdatround15 = data15.asset['created-at-round'];
                                name15 = data15.asset.params['name'];
                                txcounter15 = data15.asset['asset-tx-counter'];
                                supply15 = data15.asset.params['circulating-supply'];
                                total15 = data15.asset.params['total'];
                                circulation15 = ((data15.asset.params['circulating-supply'] / data15.asset.params['total']) * 100).toFixed(6);
                                getJSON(url25, async function(err, data25) {
                                    if (err !== null) {
                                        return $.getJSON(url25);
                                    } else {
                                        unitname25 = data25.asset.params['unit-name'];
                                        index25 = data25.asset['index'];
                                        createdatround25 = data25.asset['created-at-round'];
                                        name25 = data25.asset.params['name'];
                                        txcounter25 = data25.asset['asset-tx-counter'];
                                        supply25 = data25.asset.params['circulating-supply'];
                                        total25 = data25.asset.params['total'];
                                        circulation25 = ((data25.asset.params['circulating-supply'] / data25.asset.params['total']) * 100).toFixed(6);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
        getJSON(url18, async function(err, data18) {
            if (err !== null) {
                return $.getJSON(url18);
            } else {
                unitname18 = data18.asset.params['unit-name'];
                index18 = data18.asset['index'];
                createdatround18 = data18.asset['created-at-round'];
                name18 = data18.asset.params['name'];
                txcounter18 = data18.asset['asset-tx-counter'];
                supply18 = data18.asset.params['circulating-supply'];
                total18 = data18.asset.params['total'];
                circulation18 = ((data18.asset.params['circulating-supply'] / data18.asset.params['total']) * 100).toFixed(6);
                getJSON(url19, async function(err, data19) {
                    if (err !== null) {
                        return $.getJSON(url19);
                    } else {
                        unitname19 = data19.asset.params['unit-name'];
                        index19 = data19.asset['index'];
                        createdatround19 = data19.asset['created-at-round'];
                        name19 = data19.asset.params['name'];
                        txcounter19 = data19.asset['asset-tx-counter'];
                        supply19 = data19.asset.params['circulating-supply'];
                        total19 = data19.asset.params['total'];
                        circulation19 = ((data19.asset.params['circulating-supply'] / data19.asset.params['total']) * 100).toFixed(6);
                        getJSON(url14, async function(err, data14) {
                            if (err !== null) {
                                return $.getJSON(url14);
                            } else {
                                unitname14 = data14.asset.params['unit-name'];
                                index14 = data14.asset['index'];
                                createdatround14 = data14.asset['created-at-round'];
                                name14 = data14.asset.params['name'];
                                txcounter14 = data14.asset['asset-tx-counter'];
                                supply14 = data14.asset.params['circulating-supply'];
                                total14 = data14.asset.params['total'];
                                circulation14 = ((data14.asset.params['circulating-supply'] / data14.asset.params['total']) * 100).toFixed(6);
                                getJSON(url26, async function(err, data26) {
                                    if (err !== null) {
                                        return $.getJSON(url26);
                                    } else {
                                        unitname26 = data26.asset.params['unit-name'];
                                        index26 = data26.asset['index'];
                                        createdatround26 = data26.asset['created-at-round'];
                                        name26 = data26.asset.params['name'];
                                        txcounter26 = data26.asset['asset-tx-counter'];
                                        supply26 = data26.asset.params['circulating-supply'];
                                        total26 = data26.asset.params['total'];
                                        circulation26 = ((data26.asset.params['circulating-supply'] / data26.asset.params['total']) * 100).toFixed(6);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });

        getJSON(url23, async function(err, data23) {
            if (err !== null) {
                return $.getJSON(url23);
            } else {
                unitname23 = data23.asset.params['unit-name'];
                index23 = data23.asset['index'];
                createdatround23 = data23.asset['created-at-round'];
                name23 = data23.asset.params['name'];
                txcounter23 = data23.asset['asset-tx-counter'];
                supply23 = data23.asset.params['circulating-supply'];
                total23 = data23.asset.params['total'];
                circulation23 = ((data23.asset.params['circulating-supply'] / data23.asset.params['total']) * 100).toFixed(6);
                getJSON(url24, async function(err, data24) {
                    if (err !== null) {
                        return $.getJSON(url24);
                    } else {
                        unitname24 = data24.asset.params['unit-name'];
                        index24 = data24.asset['index'];
                        createdatround24 = data24.asset['created-at-round'];
                        name24 = data24.asset.params['name'];
                        txcounter24 = data24.asset['asset-tx-counter'];
                        supply24 = data24.asset.params['circulating-supply'];
                        total24 = data24.asset.params['total'];
                        circulation24 = ((data24.asset.params['circulating-supply'] / data24.asset.params['total']) * 100).toFixed(6);
                        getJSON(url21, async function(err, data21) {
                            if (err !== null) {
                                return $.getJSON(url21);
                            } else {
                                unitname21 = data21.asset.params['unit-name'];
                                index21 = data21.asset['index'];
                                createdatround21 = data21.asset['created-at-round'];
                                name21 = data21.asset.params['name'];
                                txcounter21 = data21.asset['asset-tx-counter'];
                                supply21 = data21.asset.params['circulating-supply'];
                                total21 = data21.asset.params['total'];
                                circulation21 = ((data21.asset.params['circulating-supply'] / data21.asset.params['total']) * 100).toFixed(6);
                                getJSON(url20, async function(err, data20) {
                                    if (err !== null) {
                                        return $.getJSON(url20);
                                    } else {
                                        unitname20 = data20.asset.params['unit-name'];
                                        index20 = data20.asset['index'];
                                        createdatround20 = data20.asset['created-at-round'];
                                        name20 = data20.asset.params['name'];
                                        txcounter20 = data20.asset['asset-tx-counter'];
                                        supply20 = data20.asset.params['circulating-supply'];
                                        total20 = data20.asset.params['total'];
                                        circulation20 = ((data20.asset.params['circulating-supply'] / data20.asset.params['total']) * 100).toFixed(6);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });

        getJSON(url29, async function(err, data29) {
            if (err !== null) {
                return $.getJSON(url29);
            } else {
                unitname29 = data29.asset.params['unit-name'];
                index29 = data29.asset['index'];
                createdatround29 = data29.asset['created-at-round'];
                name29 = data29.asset.params['name'];
                txcounter29 = data29.asset['asset-tx-counter'];
                supply29 = data29.asset.params['circulating-supply'];
                total29 = data29.asset.params['total'];
                circulation29 = ((data29.asset.params['circulating-supply'] / data29.asset.params['total']) * 100).toFixed(6);
                getJSON(url30, async function(err, data30) {
                    if (err !== null) {
                        return $.getJSON(url30);
                    } else {
                        unitname30 = data30.asset.params['unit-name'];
                        index30 = data30.asset['index'];
                        createdatround30 = data30.asset['created-at-round'];
                        name30 = data30.asset.params['name'];
                        txcounter30 = data30.asset['asset-tx-counter'];
                        supply30 = data30.asset.params['circulating-supply'];
                        total30 = data30.asset.params['total'];
                        circulation30 = ((data30.asset.params['circulating-supply'] / data30.asset.params['total']) * 100).toFixed(6);
                        getJSON(url28, async function(err, data28) {
                            if (err !== null) {
                                return $.getJSON(url28);
                            } else {
                                unitname28 = data28.asset.params['unit-name'];
                                index28 = data28.asset['index'];
                                createdatround28 = data28.asset['created-at-round'];
                                name28 = data28.asset.params['name'];
                                txcounter28 = data28.asset['asset-tx-counter'];
                                supply28 = data28.asset.params['circulating-supply'];
                                total28 = data28.asset.params['total'];
                                circulation28 = ((data28.asset.params['circulating-supply'] / data28.asset.params['total']) * 100).toFixed(6);
                                getJSON(url37, async function(err, data37) {
                                    if (err !== null) {
                                        return $.getJSON(url37);
                                    } else {
                                        unitname37 = data37.asset.params['unit-name'];
                                        index37 = data37.asset['index'];
                                        createdatround37 = data37.asset['created-at-round'];
                                        name37 = data37.asset.params['name'];
                                        txcounter37 = data37.asset['asset-tx-counter'];
                                        supply37 = data37.asset.params['circulating-supply'];
                                        total37 = data37.asset.params['total'];
                                        circulation37 = ((data37.asset.params['circulating-supply'] / data37.asset.params['total']) * 100).toFixed(6);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });

        getJSON(url31, async function(err, data31) {
            if (err !== null) {
                return $.getJSON(url31);
            } else {
                unitname31 = data31.asset.params['unit-name'];
                index31 = data31.asset['index'];
                createdatround31 = data31.asset['created-at-round'];
                name31 = data31.asset.params['name'];
                txcounter31 = data31.asset['asset-tx-counter'];
                supply31 = data31.asset.params['circulating-supply'];
                total31 = data31.asset.params['total'];
                circulation31 = ((data31.asset.params['circulating-supply'] / data31.asset.params['total']) * 100).toFixed(6);
                getJSON(url32, async function(err, data32) {
                    if (err !== null) {
                        return $.getJSON(url32);
                    } else {
                        unitname32 = data32.asset.params['unit-name'];
                        index32 = data32.asset['index'];
                        createdatround32 = data32.asset['created-at-round'];
                        name32 = data32.asset.params['name'];
                        txcounter32 = data32.asset['asset-tx-counter'];
                        supply32 = data32.asset.params['circulating-supply'];
                        total32 = data32.asset.params['total'];
                        circulation32 = ((data32.asset.params['circulating-supply'] / data32.asset.params['total']) * 100).toFixed(6);
                        getJSON(url27, async function(err, data27) {
                            if (err !== null) {
                                return $.getJSON(url27);
                            } else {
                                unitname27 = data27.asset.params['unit-name'];
                                index27 = data27.asset['index'];
                                createdatround27 = data27.asset['created-at-round'];
                                name27 = data27.asset.params['name'];
                                txcounter27 = data27.asset['asset-tx-counter'];
                                supply27 = data27.asset.params['circulating-supply'];
                                total27 = data27.asset.params['total'];
                                circulation27 = ((data27.asset.params['circulating-supply'] / data27.asset.params['total']) * 100).toFixed(6);
                                getJSON(url38, async function(err, data38) {
                                    if (err !== null) {
                                        return $.getJSON(url38);
                                    } else {
                                        unitname38 = data38.asset.params['unit-name'];
                                        index38 = data38.asset['index'];
                                        createdatround38 = data38.asset['created-at-round'];
                                        name38 = data38.asset.params['name'];
                                        txcounter38 = data38.asset['asset-tx-counter'];
                                        supply38 = data38.asset.params['circulating-supply'];
                                        total38 = data38.asset.params['total'];
                                        circulation38 = ((data38.asset.params['circulating-supply'] / data38.asset.params['total']) * 100).toFixed(6);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });

        /*window.setInterval( function(){
            if (counter == 3) {
                return $.getJSON(url3); 
            }
          },10)*/

        function sleep(milliseconds) {
            const date = Date.now();
            let currentDate = null;
            do {
                currentDate = Date.now();
            } while (currentDate - date < milliseconds);
        }


    });