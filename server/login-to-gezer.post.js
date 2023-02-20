const axios = require("axios");
const FormData = require('form-data');

module.exports = async (req, res) => {
    const params = req.body;
    const form = new FormData();
    form.append('username', params.username);
    form.append('pass', params.password);
    form.append('id', params.id);
    form.append('isheb', 0);
    form.append('ok', 1);
    const config = {
        method: 'post',
        url: 'https://gezer1.bgu.ac.il/meser/main.php',
        headers : {
            "Content-Type":"text/html",
        },
        data: form,
    }
    const res1 = await axios(config);
    if (res1.data.includes('error')) res.status(401).end('Details are wrong');
    else {
        const cookies = res1.headers['set-cookie'][0].split(';')[0];
        const reffer = "https://gezer1.bgu.ac.il/meser/main.php";
        const form2 = new FormData();
        form2.append('isheb', 0);
        const grades = await axios.post('https://gezer1.bgu.ac.il/meser/crslist.php', form2, {headers: { Cookie: cookies, Referer: reffer}});
        res.status(200).json(grades.data);
    }
}