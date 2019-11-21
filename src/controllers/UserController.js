import User from '../models/User';

module.exports = {
  async index(req, res) {
    const { user } = req.query;

    const owner = await User.find({ user });

    return res.json(owner);
  },

  async store(req, res) {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        email,
        password,
      });
    }

    return res.json(user);
  },
};
