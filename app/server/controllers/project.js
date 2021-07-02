const express = require('express');

const router2 = express.Router();
const { create } = require('../services/project')
const { getById } = require('../services/project')
const user = require('../services/user')

router2.get('/projects/submit', (req, res) => {
    const error3 = req.flash('error')
    const user = req.session.user
    user ? (res.render('CreateProject', { error3: error3, user: user })) :
        (res.redirect('/login'))

});

router2.use(express.urlencoded({ extended: true }));
router2.post('/projects/submit', (req, res) => {
    const data = {}
    data['name'] = req.body.name;
    data['authors'] = req.body.authors.split(",");
    data['tags'] = req.body.tags.split("#");
    data['abstract'] = req.body.abstract;
    const result3 = create(data)
    if (result3[0]) {
        res.redirect('/')
    } else {
        req.flash('error', result3[1])
        res.redirect('/projects/submit')
    }

});

router2.get('/projects/:id', (req, res) => {
    const user = req.session.user
    const projectData = getById(req.params.id)
    if (projectData !== undefined) {
        const userData = user.getById(projectData.createdBy)
    }

    res.render('Project', { projectData: projectData, userData: userData, user: user });

});

module.exports = router2;