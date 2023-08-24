import express from 'express';
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;  // This will work for Render as well

import { get } from 'axios';
import cors from 'cors';
import { urlencoded, json } from 'body-parser';
import { createHash } from 'crypto';

app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());

const ts = new Date().getTime();
const privateKey = process.env.PRIVATE_KEY;
const publicKey = process.env.PUBLIC_KEY;
const hash = createHash('md5').update(ts + privateKey + publicKey).digest('hex');

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});

app.post('/', async (req, res) => {
    const { character } = req.body;
    const info = await get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${character}&ts=${ts}&apikey=${publicKey}&hash=${hash}`);
    res.send(info.data);
});

app.post('/characterinfo', async (req, res) => {
    const { id } = req.body;
    const infoId = await get(`https://gateway.marvel.com:443/v1/public/characters?id=${id}&ts=${ts}&apikey=${publicKey}&hash=${hash}`);
    res.send(infoId.data);
});
