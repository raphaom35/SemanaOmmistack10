const {Router} =require('express')
const DevContoler =require('./controllers/DevController')
const SearchController =require('./controllers/SearchController')

const routes =Router();

routes.get('/devs',DevContoler.index)
routes.post('/devs',DevContoler.store)
routes.get('/search',SearchController.index)

module.exports = routes;