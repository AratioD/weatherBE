var Px = require('px'),
    fs = require('fs');

const apiUrl = "https://www.stat.fi/ajk/julkistamiskalenteri/juka_json.json"

fs.readFile('apiUrl', 'utf8', function (err, data) {
    px = new Px(data);
});

