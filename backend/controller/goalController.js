export const getGoals = (req, res) => {
  res.status(200).json({ message: 'Getting goals' });
};

export const createGoal = (req, res) => {
  res.status(201).json({ message: 'Create goal' });
};

export const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

export const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};
