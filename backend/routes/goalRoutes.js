import express from 'express';

import {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal
} from '../controller/goalController.js';

const router = express.Router();

router.get('/', getGoals);

router.post('/', createGoal);

router.put('/:id', updateGoal);

router.delete('/:id', deleteGoal);

export default router;
