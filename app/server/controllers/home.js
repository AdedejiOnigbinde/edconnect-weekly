const express = require('express');

const router = express.Router();
const { getAll } = require('../services/project')


router.get('/', (req, res) => {
  const project = getAll().slice(0, 4);
  const user = req.session.user;
  res.render('Home', { project: project, user: user });

});


module.exports = router;