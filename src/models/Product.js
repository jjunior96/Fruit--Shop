import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  image: String,
  name: String,
  price: Number,
  amount: Number,
  category: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

export default mongoose.model('Product', ProductSchema);
