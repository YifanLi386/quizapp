const express = require('express');
const router = express.Router();
const Score = require('../models/Score');

router.get('/', async (req, res) => {
  try {
    const data = await Score.find().sort({ bestScore: -1 }).limit(10);
    res.json(data);
  } catch {
    res.status(500).json({ error: 'Failed to fetch' });
  }
});

module.exports = router;
