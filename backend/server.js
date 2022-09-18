import express, { json } from 'express';
import dotenv from 'dotenv';
import 'colors';

import goalRoutes from './routes/goalRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';
import { connectDB } from './config/db.js';

const app = express();

dotenv.config();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', goalRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`.magenta.underline);
});
