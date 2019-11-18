import Product from '../models/Product';
import User from '../models/User';

module.exports = {
  async store(req, res) {
    const { filename } = req.file;
    const { name, price, amount } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User does not exists' });
    }

    const product = await Product.create({
      user: user_id,
      image: filename,
      name,
      price,
      amount,
    });

    return res.json(product);
  },
};
