// server/models/Assignment.js
const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true
  },
  candidate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed'],
    default: 'Pending'
  },
  score: {
    type: Number,
    min: 0,
    max: 100,
    default: 0
  },
  progress: {
    type: Number,
    min: 0,
    max: 100,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Assignment', assignmentSchema);
