class CustumErrors extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustumError = (message, statusCode) => {
  return new CustumErrors(message, statusCode);
};

module.exports = {
  CustumErrors,
  createCustumError,
};
