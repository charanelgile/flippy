const errorHandler = (err, req, res) => {
  let customError = {
    statusCode: err.status || 500,
    errMessage:
      err.message || 'Something went wrong. Please try again later.',
  };

  if (err.name === 'ValidationError') {
    customError.statusCode = 400;

    customError.errMessage = Object.values(err.errors)
      .map((item) => item.message)
      .join(',');
  }

  if (err.code && err.code === 11000) {
    customError.statusCode = 400;

    customError.errMessage = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field/s. Please choose a different one.`;
  }

  if (err.name === 'CastError') {
    const { value } = err;

    customError.statusCode = 404;

    customError.errMessage = `No record matches the ID: ${
      typeof value === 'object' ? value._id : value
    }`;
  }

  return res.status(customError.statusCode).json({
    error: {
      message: customError.errMessage,
    },
  });
};

module.exports = errorHandler;
