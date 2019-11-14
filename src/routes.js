import Router from 'express';

const routes = new Router();

const users = [{ name: 'Junior', email: 'junior@email.com' }];

function checkUserExists(req, res, next) {
  const { email } = req.body;
  const userExists = users.find(user => user.email === email);

  if (userExists) {
    return res.status(400).json({ error: 'Usuario ja existe' });
  }

  return next();
}

routes.get('/users', (req, res) => {
  return res.json(users);
});

routes.post('/users', checkUserExists, (req, res) => {
  const { name, email } = req.body;

  const user = {
    name,
    email,
  };

  users.push(user);

  return res.json(user);
});

export default routes;
