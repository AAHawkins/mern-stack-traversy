// @desc      Register new user
// @route     POST /api/users
// @access    Public
export const registerUser = (req, res) => {
  res.json({ message: 'Register user' });
};

// @desc      Authenticate a user
// @route     POST /api/users/login
// @access    Public
export const loginUser = (req, res) => {
  res.json({ message: 'Login user' });
};

// @desc      Get user data
// @route     GET /api/users/me
// @access    Public
export const getMe = (req, res) => {
  res.json({ message: 'Get user data' });
};