import express, { json } from 'express';
import dotenv from 'dotenv';

import goalRoutes from './routes/goalRoutes.js';

const app = express();

dotenv.config();

app.use('/api/goals', goalRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
