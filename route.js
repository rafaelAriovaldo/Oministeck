const express = require('express');
const route = express.Router();

route.post('/users/', (request, response) => {
    const body = request.body;
    console.log(body);

    return response.json({
        evento: 'semana Oministeck 11.0',
        aluno: 'Rafael',
    });

});
module.exports = route;