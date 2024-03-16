const express = require ('express');

const app = express();
const port = 3333;
const router = require('./routes/index');

app.use(express.json());

app.use(router);

app.listen(3333, ()=>{
    console.log('server is running');
});