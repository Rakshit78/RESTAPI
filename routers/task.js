const express = require('express');
const router = express.Router();
const {
  getAllTask,
  postTask,
  updateTask,
  deleteTask,
  getSingleTask,
} = require('../controllers/tasks');

router.route('/').get(getAllTask).post(postTask);
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask);

module.exports = router;

//Password UHOikHecHbqZQ5h9
// name rakshit
