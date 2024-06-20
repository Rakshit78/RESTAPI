const mongoose = require('mongoose');

// const connectionString = ``;

// mongoose
//   .connect(connectionString)
//   .then((res) => console.log('connected to mongodb'))
//   .catch((e) => {
//     console.log(e, 'error');
//   });

const connectDb = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDb;
