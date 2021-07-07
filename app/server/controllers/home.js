const express = require('express');

const router = express.Router();
const { getAll } = require('../services/project')


router.get('/', (req, res) => {
  const lastIndex = getAll[getAll.length - 1]
  const project = getAll().slice(0, lastIndex);
  const user = req.session.user;
  res.render('Home', { project: project, user: user });

});

router.get('/logout', (req, res) => {
  req.session.destroy()
  res.redirect('/')
});
module.exports = router;