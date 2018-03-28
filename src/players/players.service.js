const fs = require('fs');
let data = [];

function loadData() {
    var content = fs.readFileSync("src/data/players.js", "utf-8");
    data = JSON.parse(content);
}

function getAllPlayers(userName, password) {
    console.log('DAO:: getAllPlayers');
    loadData();
    return Promise.resolve(data);
}

module.exports = {
    getAllPlayers
} 