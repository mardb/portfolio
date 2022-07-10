/**
 * 404 and Global error handlers
 */

const handle404 = (req, res, next) => {

  const err = new Error('err');
  err.status = 404;
  err.message = `Looks like you got lost in the ${err.status} galaxy! Let us help you get back to the 5th dimension.`
   res.render('error')
  
  //pass err to global err
  next(err);
}

//global error handler
const handleGlobalError = (err, req, res) => {
  //set locals only, providing err development
  res.locals.message = err.message;
  res.send(err.message);
}

module.exports = {
  handle404,
  handleGlobalError
}