import Router from 'express';

const routes = new Router();

const users = [{ name: 'Junior', email: 'junior@email.com' }];

routes.get('/users', (req, res) => {
  return res.json(users);
});

export default routes;
