const express = require('express');
const app = express();
app.get('/', (reqest, response) => {
    return response.send('hello world')

})


app.listen(3333);