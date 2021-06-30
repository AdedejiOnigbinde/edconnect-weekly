const express = require('express');

const router1 = express.Router();
const { getPrograms, getGradYears } = require('../services/school')
const { create } = require('../services/user')
const { user } = require('./home.js')

router1.get('/signup', (req, res) => {
    const graduationList = getGradYears();
    const programList = getPrograms();
    const error = req.flash("error");
    console.log(user);
    res.render('Signup', { programList: programList, graduationList: graduationList, error: error });

});

router1.use(express.urlencoded({ extended: true }));

router1.post('/signup', (req, res) => {
    const result = create(req.body);
    if (result[0] == true) {
        req.session.user = result[1];
        res.redirect('/')
    } else {
        req.flash('error', result[1])
        res.redirect('/signup')
    }


});


module.exports = router1;