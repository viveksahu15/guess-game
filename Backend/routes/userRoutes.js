const express = require('express');
const router = express.Router();

const User = require('../models/User');
const History = require('../models/History');

// Get all users (sorted by points)
router.get('/', async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  res.json(users);
});

// Add a new user
router.post('/add', async (req, res) => {
  const user = new User({ name: req.body.name });
  await user.save();
  res.json(user);
});

// Claim random points
router.post('/claim/:id', async (req, res) => {
  const points = Math.floor(Math.random() * 10) + 1;
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).send('User not found');

  user.totalPoints += points;
  await user.save();

  const history = new History({ userId: user._id, pointsClaimed: points });
  await history.save();

  res.json({ user, points });
});

// Get history for a user
router.get('/history/:id', async (req, res) => {
  const history = await History.find({ userId: req.params.id }).sort({ timestamp: -1 });
  res.json(history);
});

module.exports = router; // ✅ THIS MUST EXIST!
