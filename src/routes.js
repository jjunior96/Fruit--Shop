import Router from 'express';

import UserController from './controllers/UserController';
import ProductController from './controllers/ProductController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/products', ProductController.store);

export default routes;
