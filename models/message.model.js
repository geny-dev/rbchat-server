const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  from: { type: Number, required: true },
  content: {type: String, required: true},
  type: { type: Number, required: true},
  time: { type: Date, required: true}
});

module.exports = MessageSchema;
