import Users from '../models/User';

function checkUserExists(req, res, next) {
  const { email } = req.body;
  const userExists = Users.find(user => user.email === email);

  if (userExists) {
    return res.status(400).json({ error: 'Usuario ja existe' });
  }

  return next();
}

function store(req, res) {
  const { name, email } = req.body;

  const user = Users.find(usr => usr.email === email);

  user.name = name;

  return res.json(user);
}
