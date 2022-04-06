const express = require('express');
const app = express();
app.get('/users/:id', (request, response) => {
    const params = request.query;
    console.log(params);

    return response.json({
        evento: 'semana Oministeck 11.0',
        aluno: 'Rafael',
    });

});


app.listen(3333);