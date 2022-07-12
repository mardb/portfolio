// const helpers  = require('./helpers')
//home route
const express = require('express');
const router = express.Router();
const {projects} = require('./data/data.json');

/**
 * GET home page
 */
router.get( '/', ( req, res, next) => {
  res.render('index', {projects})
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
    throw new Error('Looks like you navigated to the wrong dimension.')
  }
  });

//exports router
module.exports = router;