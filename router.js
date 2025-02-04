
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import User model

// 1. Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json({
      message: 'Displaying all records',
      users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// 2. Register new user
router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body); // Create a new user document from request body
    await user.save(); // Save user to DB
    res.json({
      message: 'Record Inserted',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error inserting record' });
  }
});

// 3. Fetch user by ID
router.get('/fetch/:num', async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.num });
    if (user) {
      res.json({
        message: 'Record Found',
        user,
      });
    } else {
      res.json({
        message: 'Record not found',
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching record' });
  }
});

// 4. Update user by name
router.put('/update/:num', async (req, res) => {
  try {
    const user = await User.findOne({ name: req.params.num });
    if (user) {
      await User.updateOne({ name: req.params.num }, { $set: { name: req.body.name } });
      res.json({
        message: 'Record updated',
      });
    } else {
      res.json({
        message: 'Record not found',
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating record' });
  }
});

// 5. Delete user by name
router.delete('/delete/:num', async (req, res) => {
  try {
    const user = await User.findOne({ name: req.params.num });
    if (user) {
      await User.deleteOne({ name: req.params.num });
      res.json({
        message: 'Record deleted',
      });
    } else {
      res.json({
        message: 'Record not found',
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting record' });
  }
});

module.exports = router;