const task = require('../models/task');
const getAllTask = async (req, res) => {
  try {
    let tasks = await task.find({});
    res.status(200).json(tasks);
  } catch (e) {
    res.status(500).json({ message: e });
  }
};

const postTask = async (req, res) => {
  try {
    const tasks = await task.create(req.body);
    res.status(201).json({ tasks });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e });
  }
};
const updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const tasks = await task.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!tasks) {
      return res.status(404).json({ message: 'no task found' });
    }
    res.status(200).json({ tasks });
  } catch (e) {
    res.status(500).json({ message: e });
  }
};
const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const tasks = await task.findOneAndDelete({ _id: id });
    if (!tasks) {
      return res.status(404).json({ message: 'no task found' });
    }
    res.status(200).json({ tasks });
  } catch (e) {
    res.status(500).json({ message: e });
  }
  res.send('delete task');
};
const getSingleTask = async (req, res) => {
  const { id } = req.params;
  try {
    const tasks = await task.findOne({ _id: id });
    if (!tasks) {
      return res.status(404).json({ message: 'Id not found' });
    }
    res.status(200).json({ tasks });
  } catch (e) {
    res.status(500).json({ message: e });
  }
};

module.exports = {
  getAllTask,
  postTask,
  updateTask,
  deleteTask,
  getSingleTask,
};
