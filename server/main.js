const express = require('express')
const app = express()
const cors = require('cors');
const PORT = 3001
const saveInfo = require('./save-information.post');
const loginToGezer = require('./login-to-gezer.post');

app.use(express.json());             // for application/json
app.use(express.urlencoded());

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
app.use(cors())
app.post('/info', saveInfo);
app.post('/login-gezer', loginToGezer)

