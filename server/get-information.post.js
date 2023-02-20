const axios = require('axios');

module.exports = async (req, res) => {
    try {
        const response = await axios.get('https://bgu4u22.bgu.ac.il/apex/f?p=104');
        const cookies =  response.headers['set-cookie'].map(i => {
            const values = i.split(';')[0].split('=')
            return {key: values[0], value: values[1]};
        })
        res.json(cookies);
    } catch (e) {
        console.log('not foind');
    }
}