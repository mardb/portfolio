const express = require('express');

const app = express();

const port = 3000;
const path = require('path');

//import routes
var routes = require('./routes')

app.use('/', routes)

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

//static middleware
app.use(express.static('public'))

// //Import 404 and global error handlers
// const errorHandlers = require('./errorHandler')


// //error handling 
// app.use(errorHandlers.handle404)
// app.use(errorHandlers.handleGlobalError)

// handles ALL *

// 404 error handler
app.use((req, res, next) => {
  err = new Error('Page not found');
  err.status = 404;
  err.message = `Looks like you navigated to the ${err.status} dimension.`;
  next(err);
});

//global error handler
app.use((err, req, res, next) => {
  if (err) {
    console.log('Global error handler called', err);
  }
  if (err.status === 404) {
    res.status = 404;
    res.render('error', { err });
  } else {
    err.message = err.message || `Looks like you have reached ${err.status}, the place of no existence!`;
    err.status = (err.status || 500);
    res.render('error', { err });
  }
});

app.listen(port, function(){
  console.log(`THIS APPLICATION IS LISTENING ON PORT ${port}`)
});