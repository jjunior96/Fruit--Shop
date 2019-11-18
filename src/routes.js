import Router from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';

import UserController from './controllers/UserController';
import ProductController from './controllers/ProductController';

const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/users', UserController.store);

routes.get('/products', ProductController.index);
routes.post('/products', upload.single('image'), ProductController.store);

export default routes;
