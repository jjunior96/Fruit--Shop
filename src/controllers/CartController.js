import Cart from '../models/Cart';

module.exports = {
  async store(req, res) {
    const { user_id } = req.headers;
    const { product_id } = req.params;
    // const { total } = req.body;

    const cart = await Cart.create({
      user: user_id,
      product: product_id,
      // total,
    });

    return res.json(cart);
  },
};
