const express = require('express');
const OngsController = require('./controllers/OngControllers');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/', (request, response) =>{
    return response.send('ok')
});

routes.post('/sessions', SessionController.create);

routes.get('/profile', ProfileController.get);

routes.post('/ongs', OngsController.create);
routes.get('/ongs', OngsController.get);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.get);

module.exports = routes;