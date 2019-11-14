import Router from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  res.send("Deu certo");
});

export default routes;