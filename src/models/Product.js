import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    image: String,
    name: String,
    price: Number,
    amount: Number,
    category: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

ProductSchema.virtual('image_url').get(function() {
  return `http://localhost:3000/files/${this.image}`;
});

export default mongoose.model('Product', ProductSchema);
