const express = require('express');

const router = express.Router();
const {getAll} = require('../services/project')


router.get('/', (req, res) => {
 const project = getAll().slice(0,4);
  res.render('Home', {project:project});

});


module.exports = router;