const express = require('express');

const router1 = express.Router();
const { getPrograms, getGradYears } = require('../services/school')
const { create } = require('../services/user')
const { authenticate } = require('../services/user')

router1.get('/signup', (req, res) => {
    const graduationList = getGradYears();
    const programList = getPrograms();
    const error = req.flash("error");
    res.render('Signup', { programList: programList, graduationList: graduationList, error: error });

});

router1.use(express.urlencoded({ extended: true }));

router1.post('/signup', (req, res) => {
    const data = {}
    data['firstname'] = req.body.firstName;
    data['lastname'] = req.body.lastName;
    data['email'] = req.body.email;
    data['password'] = req.body.password;
    data['matricNumber'] = req.body.matricNumber;
    data['graduationYear'] = req.body.graduationYear;
    data['program'] = req.body.program;
    const result = create(data);
    if (result[0] == true) {
        req.session.user = result[1];
        res.redirect('/')
    } else {
        req.flash('error', result[1])
        res.redirect('/signup')
    }


});

router1.get('/login', (req, res) => {
    const error2 = req.flash("error");
    res.render('Login', { error2: error2 });

});

router1.post('/login', (req, res) => {
    const result2 = authenticate(req.body.email, req.body.password);
    if (result2[0] == true) {
        req.session.user = result2[1];
        res.redirect('/')
    } else {
        req.flash("error", result2[1])
        res.redirect('/login')
    }


});

module.exports = router1;