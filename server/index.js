const express = require('express');
const app = express();
const port = 5000;
const hostname = "localhost"
require('dotenv').config();
const axios = require('axios')
const cors = require('cors')
const bodyParser = require('body-parser')
const crypto = require('crypto')

app.use(cors())
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())




const ts = new Date().getTime();

//precisa ser nessa ordem, não esquece :TS, PRIVATEKEY,PUBLICKEY
console.log(ts)
const privateKey = process.env.PRIVATE_KEY
const publicKey = process.env.PUBLIC_KEY


const hash = crypto.createHash('md5').update(ts+privateKey+publicKey).digest('hex')


app.listen(port, hostname, () => {

    console.log(`O server está rodando em ${hostname} ${port}`)
})


app.post('/', async(req, res) => {
    const{character} = req.body
    const info = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${character}&ts=${ts}&apikey=${publicKey}&hash=${hash}`)
    res.send(info.data)
})

app.post('/characterinfo', async(req, res) => {
    const {id} = req.body
    const infoId = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?id=${id}&ts=${ts}&apikey=${publicKey}&hash=${hash}`)
    res.send(infoId.data)
})
