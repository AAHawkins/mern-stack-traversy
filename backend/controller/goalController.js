import asyncHandler from 'express-async-handler';

// @desc      Get goals
// @route     GET /api/goals
// @access    Private
export const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Getting goals' });
});

// @desc      Create new goal
// @route     POST /api/goals
// @access    Private
export const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please enter some text');
  }
  res.status(201).json({ message: 'Create goal' });
});

// @desc      Update goal
// @route     PUT /api/goals/:id
// @access    Private
export const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc      Delete goal
// @route     DELETE /api/goals/:id
// @access    Private
export const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});
