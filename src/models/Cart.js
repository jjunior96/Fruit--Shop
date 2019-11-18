import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
  products: String,
  total: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

export default mongoose.model('Cart', CartSchema);
