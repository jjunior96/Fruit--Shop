import Product from '../models/Product';

module.exports = {
  async store(req, res) {
    const { filename } = req.file;
    const { name, price, amount } = req.body;
    const { user_id } = req.headers;

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
