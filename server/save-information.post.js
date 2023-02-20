const fs = require('fs');


module.exports = async (req, res) => {
    const { information } = req.body;
    fs.appendFile('data.json', JSON.stringify(information) + '\n', err => {
                    if(err){
                        throw err;
                    }
                    res.end('Data saved');
                });
    res.status(200);
}
