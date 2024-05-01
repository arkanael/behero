const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) =>{
    return response.send('Hello World')
});

routes.post('/ongs', (request, response) =>{
    const data = request.body;
    console.log(data);
    return response.json({});
});

module.exports = routes;