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

var myTable = document.getElementById('example');

  getJSON('https://indexer.algoexplorerapi.io/v2/assets/226265212?include-all=true',
    function(err, data) {
        if (err !== null) {
        } else {                
          myTable.rows[1].cells[4].innerHTML = data.asset['asset-tx-counter'];
        }
    });          

  getJSON('https://indexer.algoexplorerapi.io/v2/assets/393537671?include-all=true',
    function(err, data) {
        if (err !== null) {
        } else {                
          myTable.rows[2].cells[4].innerHTML = data.asset['asset-tx-counter'];
        }
    });

    getJSON('https://indexer.algoexplorerapi.io/v2/assets/511484048?include-all=true',
    function(err, data) {
        if (err !== null) {
        } else {                
          myTable.rows[3].cells[4].innerHTML = data.asset['asset-tx-counter'];
        }
    });