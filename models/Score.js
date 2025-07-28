const mongoose = require('mongoose');
const ScoreSchema = new mongoose.Schema({
  username: { type: String, required: true },
  bestScore: { type: Number, default: 0 }
});
module.exports = mongoose.model('Score', ScoreSchema);
