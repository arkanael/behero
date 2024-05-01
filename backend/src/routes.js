const express = require('express');
const OngsController = require('./controllers/OngControllers');
const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();

routes.get('/', (request, response) =>{
    return response.send('Hello World')
});

routes.post('/ongs', OngsController.create);
routes.get('/ongs', OngsController.get);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.get);

module.exports = routes;