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

//Import 404 and global error handlers
const errorHandlers = require('./errorHandler')


//error handling 
app.use(errorHandlers.handle404)
app.use(errorHandlers.handleGlobalError)
//handles ALL *
app.get('*', (req, res) => {
  res.send(`the path you entered does not exist.`)
})

app.listen(port, function(){
  console.log(`THIS APPLICATION IS LISTENING ON PORT ${port}`)
});