const { CustumErrors } = require('../errors/custumerrors');
const CustomError = (err, req, res, next) => {
  // console.log(err, 'Error handle');
  if (err instanceof CustumErrors) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  return res.status(500).json({ message: err });
};

module.exports = CustomError;
