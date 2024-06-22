const task = require('../models/task');
const asyncWrapper = require('../middleware/asyncWrapper');
const { createCustumError } = require('../errors/custumerrors');
const getAllTask = asyncWrapper(async (req, res) => {
  let tasks = await task.find({});
  res.status(200).json(tasks);
});

const postTask = asyncWrapper(async (req, res) => {
  console.log(req.body);
  const tasks = await task.create(req.body);
  res.status(201).json({ tasks });
});
const updateTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const tasks = await task.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!tasks) {
    return next(createCustumError('Id not found custum', 404));
    // return res.status(404).json({ message: 'no task found' });
  }
  res.status(200).json({ tasks });
});
const deleteTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;

  const tasks = await task.findOneAndDelete({ _id: id });
  if (!tasks) {
    return next(createCustumError('Id not found custum', 404));
    // return res.status(404).json({ message: 'no task found' });
  }
  res.status(200).json({ tasks });
});
const getSingleTask = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;

  const tasks = await task.findOne({ _id: id });
  if (!tasks) {
    return next(createCustumError('Id not found custum GET', 404));
    // return res.status(404).json({ message: 'Id not found' });
  }
  res.status(200).json({ tasks });
});

module.exports = {
  getAllTask,
  postTask,
  updateTask,
  deleteTask,
  getSingleTask,
};
