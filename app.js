const express = require('express');
const app = express();
const tasks = require('./routers/task');
const connectDb = require('./db/connect');
require('dotenv').config();
app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('hello');
});
app.use('/api/vi/tasks', tasks);
const port = 3000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log('server is running');
    });
  } catch (e) {}
};

start();
