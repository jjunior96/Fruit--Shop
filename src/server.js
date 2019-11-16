import express from 'express';
import mongoose from 'mongoose';

import routes from './routes';

const app = express();

mongoose.connect(
  'mongodb+srv://semana:semana@cluster0-0laro.mongodb.net/fruit-shop?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(express.json());
app.use(routes);

app.listen(3000);
