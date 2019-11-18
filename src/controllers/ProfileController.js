import Product from '../models/Product';

module.exports = {
  async show(req, res) {
    const { user_id } = req.headers;

    const products = await Product.find({ user: user_id });

    return res.json(products);
  },
};
