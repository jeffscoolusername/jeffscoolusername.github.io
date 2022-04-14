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

  getJSON('https://indexer.algoexplorerapi.io/v2/assets/226265212?include-all=true',
    function(err, data) {
        if (err !== null) {
        } else {                
          fetch('testfolder/test2/asatdbackupnolinks.json', {
            method: 'POST',
            body: new URLSearchParams($.param(data.asset['asset-tx-counter']))
          });
        }
    });          

  getJSON('https://indexer.algoexplorerapi.io/v2/assets/393537671?include-all=true',
    function(err, data) {
      if (err !== null) {
      } else {                
        fetch('testfolder/test2/asatdbackupnolinks.json', {
          method: 'POST',
          body: new URLSearchParams($.param(data.asset['asset-tx-counter']))
        });
      }
    });

    getJSON('https://indexer.algoexplorerapi.io/v2/assets/511484048?include-all=true',
    function(err, data) {
      if (err !== null) {
      } else {                
        fetch('testfolder/test2/asatdbackupnolinks.json', {
          method: 'POST',
          body: new URLSearchParams($.param(data.asset['asset-tx-counter']))
        });
      }
    });