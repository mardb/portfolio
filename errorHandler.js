/**
 * 404 and Global error handlers
 */

const handle404 = (req, res, next) => {
  console.log('handling 404 error');

  const err = new Error('err');
  err.status = 404;
  err.message = "Hi Stranger! Looks like you got lost in the 404 galaxy! Let us help you get back to the 5th dimension."

  //pass err to global err
  next(err);
}

//global error handler
const handleGlobalError = (err, req, res) => {
  console.log('handling global err');
  console.log(err)

  //set locals only, providing err development
  res.locals.message = err.message;
  res.send(err.message);
}

module.exports = {
  handle404,
  handleGlobalError
}