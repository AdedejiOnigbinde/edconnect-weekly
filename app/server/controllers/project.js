const express = require('express');

const router2 = express.Router();
const { create } = require('../services/project')
const { user } = require('./home')


router2.get('/projects/submit', (req, res) => {
    const users = user;
    if (users == !undefined) {
        const error3 = req.flash('error')
        res.render('CreateProject', { error3: error3 });
    } else {
        res.redirect('/login')
    }

});

router2.use(express.urlencoded({ extended: true }));
router2.post('/projects/submit', (req, res) => {
    const result3 = create(req.body)
    if (result3[0]) {
        res.redirect('/')
    } else {
        req.flash('error', result3[1])
        res.redirect('/projects/submit')
    }

});
module.exports = router2;