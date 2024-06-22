const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide a name'],
    trim: true,
    maxlength: [10, 'more than 10'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('task', TaskSchema);
