const service = require('./players.service');
const token = require('./../authentication/token');

exports.index = (req, res) => {
    console.log('Players:: controller:: index');
  
    service.getAllPlayers()
        .then(
            players => {
                const result = { result: players, length: players.length };
                res.status(200).json(result);
                res.end();
            }
        ).catch(
            err => {
                res.status(500);
                res.end('Error occured from server side.');
            }
        );
}
