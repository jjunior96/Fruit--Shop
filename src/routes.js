import Router from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';

import UserController from './controllers/UserController';
import ProductController from './controllers/ProductController';

import ProfileController from './controllers/ProfileController';

import CartController from './controllers/CartController';

const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/users', UserController.store);

routes.get('/products', ProductController.index);
routes.post('/products', upload.single('image'), ProductController.store);

routes.get('/profile', ProfileController.show);

routes.post('/products/:id/cart', CartController.store);

export default routes;
