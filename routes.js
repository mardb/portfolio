// const helpers  = require('./helpers')
//home route
const express = require('express');
const router = express.Router();
const {projects} = require('./data/data.json');

/**
 * GET home page
 */
router.get( '/', ( req, res, next) => {
  // console.log('This is home page')
  res.render('index', {projects})
  // res.send('This is home page');

//send  to page
// res.send('this is a test for the home page');
});


//about page
router.get('/about',(req, res) => {
res.render('about')
})

//Get individual project page
router.get('/projects/:id', (req, res, next)=>{
  const projectId = req.params.id
  const project = projects.find(({id}) => id === +projectId);

  if(project){
    res.render('project', {project})
  } else {
    res.sendStatus(404)
  }
  });

//   //handles ALL *



//exports router
module.exports = router;