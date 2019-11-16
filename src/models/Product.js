import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  image: String,
  name: String,
  price: Number,
  amount: Number,
});

export default mongoose.model('Product', ProductSchema);
