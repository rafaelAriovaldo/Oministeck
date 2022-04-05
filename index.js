const express = require('express');
const app = express();
app.get('/', (reqest, response) => {
    return response.json({
        evento: 'semana Oministeck 11.0',
        aluno: 'Rafael',
    });

})


app.listen(3333);