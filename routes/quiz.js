const express = require('express');
const router = express.Router();
const Score = require('../models/Score');

router.post('/save-score', async (req, res) => {
  const { username, score } = req.body;
  try {
    const s = await Score.findOne({ username });
    if (!s || score > s.bestScore) {
      await Score.updateOne(
        { username },
        { username, bestScore: score },
        { upsert: true }
      );
    }
    res.json({ success: true });
  } catch {
    res.status(500).json({ error: 'Failed to save score' });
  }
});

module.exports = router;
