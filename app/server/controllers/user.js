const express = require('express');

const router = express.Router();
const {getPrograms, getGradYears } = require('../services/school')
const {create} = require('../services/user')


router.get('/signup', (req, res) => {
 const graduationList = getGradYears();
 const programList = getPrograms();
res.render('Signup', {programList,graduationList});

});

router.use(express.urlencoded({extended:true}));

router.post('/signup', (req,res)=>{
    req.body
});


module.exports = router1;