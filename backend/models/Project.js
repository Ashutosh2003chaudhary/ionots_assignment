// server/models/Project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: true
  },
  deadline: {
    type: Date
  },
  status: {
    type: String,
    enum: ['Available', 'Assigned', 'Completed'],
    default: 'Available'
  }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
